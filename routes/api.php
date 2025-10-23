<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\WebsiteController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransactionController;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

Route::apiResource('/websites', WebsiteController::class)->only(['index','show']);
Route::apiResource('/genres', GenreController::class)->only(['index','show']);
Route::apiResource('/authors', AuthorController::class)->only(['index','show']);


Route::middleware(['auth:api'])->group(function() {
    Route::apiResource('/transactions', TransactionController::class)->only(['index','show','store']);

    Route::middleware(['role:admin'])->group(function() {
        Route::apiResource('/websites', WebsiteController::class)->only(['store','update','destroy']);      
        Route::apiResource('/genres', GenreController::class)->only(['store','update','destroy']);      
        Route::apiResource('/authors', AuthorController::class)->only(['store','update','destroy']);   
        Route::apiResource('/transactions', TransactionController::class)->only(['update','destroy']);   
    });

});
