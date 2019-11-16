<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
    // return view('welcome');
// });

//Route::get('/users', function(){
	//return factory('App\User', 10)->create();
	// if (rand(1, 10) < 3) {
        // abort(500, 'We could not retrieve the users');
    // }

    // return factory('App\User', 10)->make();
//});

Route::get('/{any}', 'SpaController@index')->where('any', '.*');

