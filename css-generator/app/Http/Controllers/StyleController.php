<?php

namespace App\Http\Controllers;

use App\Style;
use App\StyleType;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use Redirect;
use Response;

class StyleController extends Controller
{

    public function getStyles() {
        if(\Auth::check()) {
                return view('styles', ['styles' => Style::where('user_id', \Auth::user()->id)->get()]);
        } else {
            return Redirect::to('login')->withErrors('You must be logged in to perform this action');
        }
    }

    public function getStylesOfType($type)
    {
        if(\Auth::check()) {
            return view('styles', ['styles' => Style::where(['user_id' => \Auth::user()->id, 'type' => $type])->get()]);
        } else {
            return Redirect::to('login')->withErrors('You must be logged in to perform this action');
        }
    }

    public function showAddStyle()
    {
        return view('addStyle');
    }

    public function postStyle()
    {
        if(\Auth::check()) {
            $rules = ['name'=>'required',
                'type'=>'required',
                'code'=>'required'];

            $validator = Validator::make(Input::all(), $rules);
            if($validator->fails()) {
                return Response::json(array(
                    'success' => false,
                    'errors' => $validator->messages()->toArray()

                ), 400);
            }

            $checkName = false;

            foreach(StyleType::getKeys() as $style) {
                if($style == Input::get('type')) {
                    $checkName = true;
                }
            }

            if($checkName) {
                $style = new Style();

                $style->name = Input::get('name');
                $style->type = Input::get('type');
                $style->code = Input::get('code');
                $style->user_id = \Auth::user()->id;

                $user = \App\User::find($style->user_id);

                $count = Style::where([
                    ['type', $style->type],
                    ['user_id', $user->id]
                ])->count();

                if ($count < 5) {
                    $style->save();
                    return Response::json(array(
                        'success' => true
                    ), 200);
                } else {
                    return Response::json(array(
                        'success' => false,
                        'errors' => "Too many " . $style->type . " styles. Try deleting some"

                    ), 409);
                }
            } else {
                return Response::json(array(
                    'success' => false,
                    'errors' => "Style type not supported."

                ), 400);
            }
        } else {
            return Response::json(array(
                'success' => false,
                'errors' => 'Redirect to login'

            ), 401);
        }
    }

    public function deleteStyle($id) {
        $style = Style::find($id);

        if($style != null) {
            if($style->user_id == \Auth::user()->id) {
                $style->delete();
                return Redirect::to('styles');
            } else {
                return Redirect::to('styles')->withErrors('Invalid authentication, please log in with other user');
            }
        } else {
            return Redirect::to('styles')->withErrors("Style not found!");
        }
    }
}
