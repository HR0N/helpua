<?php

use App\Http\Controllers\EXAMPLEController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//                                                       ....:::: CORS ::::....
Route::get('/aa', [EXAMPLEController::class, 'index']) -> middleware('cors');
//Route::group([
//    'middleware' => ['api', 'cors'],
//    'namespace' => $this->namespace,
//    'prefix' => 'api',
//], function ($router) {
//    //Add you routes here, for example:
//    Route::get('/aa', [EXAMPLEController::class, 'index']);
//});
