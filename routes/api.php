<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\WebsiteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/genres', [GenreController::class, 'store']);




Route::post('/authors', [AuthorController::class, 'store']);




Route::post('/websites', [WebsiteController::class, 'store']);

