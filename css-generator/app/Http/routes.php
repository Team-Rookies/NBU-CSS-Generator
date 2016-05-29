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

Route::get('/styles/add', 'StyleController@showAddStyle');
Route::post('/styles/add', 'StyleController@postStyle');
Route::get('/styles', 'StyleController@getStyles');
Route::get('/styles/delete/{id}', 'StyleController@deleteStyle');

Route::get('/', function () {
    return view('welcome');
});
