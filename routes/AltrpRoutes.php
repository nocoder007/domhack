<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
/**
 * File for user routes
 */
// Routes for the user_doms resource
Route::get('/user_doms', ['uses' =>'AltrpControllers\user_domController@index']);
Route::get('/user_dom_options', ['uses' =>'AltrpControllers\user_domController@options']);
Route::post('/user_doms', ['uses' =>'AltrpControllers\user_domController@store']);
Route::get('/user_doms/{user_dom}', ['uses' =>'AltrpControllers\user_domController@show']);
Route::put('/user_doms/{user_dom}', ['uses' =>'AltrpControllers\user_domController@update']);
Route::delete('/user_doms/{user_dom}', ['uses' =>'AltrpControllers\user_domController@destroy']);
Route::put('/user_doms/{user_dom}/{column}', ['uses' =>'AltrpControllers\user_domController@updateColumn']);
Route::get('/filters/user_doms/{column}', ['uses' =>'AltrpControllers\user_domController@getIndexedColumnsValueWithCount']);
// Routes for the customers resource
Route::get('/customers', ['uses' =>'AltrpControllers\customerController@index']);
Route::get('/customer_options', ['uses' =>'AltrpControllers\customerController@options']);
Route::post('/customers', ['uses' =>'AltrpControllers\customerController@store']);
Route::get('/customers/{customer}', ['uses' =>'AltrpControllers\customerController@show']);
Route::put('/customers/{customer}', ['uses' =>'AltrpControllers\customerController@update']);
Route::delete('/customers/{customer}', ['uses' =>'AltrpControllers\customerController@destroy']);
Route::put('/customers/{customer}/{column}', ['uses' =>'AltrpControllers\customerController@updateColumn']);
Route::get('/filters/customers/{column}', ['uses' =>'AltrpControllers\customerController@getIndexedColumnsValueWithCount']);
// Routes for the banks resource
Route::get('/banks', ['uses' =>'AltrpControllers\bankController@index']);
Route::get('/bank_options', ['uses' =>'AltrpControllers\bankController@options']);
Route::post('/banks', ['uses' =>'AltrpControllers\bankController@store']);
Route::get('/banks/{bank}', ['uses' =>'AltrpControllers\bankController@show']);
Route::put('/banks/{bank}', ['uses' =>'AltrpControllers\bankController@update']);
Route::delete('/banks/{bank}', ['uses' =>'AltrpControllers\bankController@destroy']);
Route::put('/banks/{bank}/{column}', ['uses' =>'AltrpControllers\bankController@updateColumn']);
Route::get('/filters/banks/{column}', ['uses' =>'AltrpControllers\bankController@getIndexedColumnsValueWithCount']);