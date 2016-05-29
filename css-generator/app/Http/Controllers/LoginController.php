<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function getLogin()
    {
        return view('login');
    }

    public function postLogin()
    {
        $creds = [
            'name'=>Input::get('name'),
            'password'=>Input::get('password')
        ];

        if(Auth::attempt($creds)) {
            return Redirect::intended('styles');
        } else {
            return Redirect::to('login')
                ->withInput();
        }
    }

    public function getRegister()
    {
        return view('register');
    }

    public function postRegister()
    {
        $rules = ['name'=>'required|unique:users',
            'password'=>'required|min:6',
            'password-repeat'=>'required|same:password'];
        $validator = Validator::make(Input::all(), $rules);

        if($validator->fails()) {
            return Redirect::to('register')
                ->withInput()
                ->withErrors($validator->messages());
        }

        User::create([
            'name'=>Input::get('name'),
            'password'=>Hash::make(Input::get('password'))
        ]);

        return Redirect::to('users');
    }

    public function getLogout()
    {
        Auth::logout();
        return Redirect::to('/');
    }
}
