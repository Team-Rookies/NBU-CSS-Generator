<?php

namespace App\Http\Controllers;

use App\Style;
use App\StyleType;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use Redirect;

class StyleController extends Controller
{

    public function getStyles()
    {
        if(\Auth::check()) {
            return Style::where('user_id', \Auth::user()->id)->get();
        } else {
            return "You must be logged in to perform this action.";
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
                'code'=>'required'];

            $validator = Validator::make(Input::all(), $rules);
            if($validator->fails()) {
                return Redirect::to('/styles/add')
                    ->withInput()
                    ->withErrors($validator->messages());
            }

            $checkName = false;

            foreach(StyleType::getKeys() as $style) {
                if($style == Input::get('name')) {
                    $checkName = true;
                }
            }

            if($checkName) {
                $style = new Style();

                $style->name = Input::get('name');
                $style->code = Input::get('code');
                $style->user_id = \Auth::user()->id;

                $user = \App\User::find($style->user_id);

                $count = Style::where([
                    ['name', $style->name],
                    ['user_id', $user->id]
                ])->count();

                if ($count < 5) {
                    $style->save();
                    return \Redirect::to('styles');
                } else {
                    return "Too many " . $style->name . " styles. Try deleting some";
                }
            } else {
                return \Redirect::to('/styles/add')
                    ->withInput()
                    ->withErrors("Style type not supported ");
            }
        } else {
            return \Redirect::to('/login');
        }
    }

}
