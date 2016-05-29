<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


use App\Style;
use Illuminate\Support\Facades\Route;

Route::get('/login', 'LoginController@getLogin');
Route::post('/login', 'LoginController@postLogin');
Route::get('/register', 'LoginController@getRegister');
Route::post('/register', 'LoginController@postRegister');
Route::get('/logout', 'LoginController@getLogout');

Route::get('/users', function() {
    return \Illuminate\Foundation\Auth\User::all();
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('/styles/add', function() {
    $style = new Style();

    $style->name='BoxShadow';
    $style->code = '-webkit-border-radius:12px 111px 12px 3px;
border-radius:12px 111px 12px 3px;';
    $style->user_id = 2;

    $user = \App\User::find($style->user_id);
    return $user->addStyle($style);
});

Route::get('/styles', function() {
    return Style::all();
});
