<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\WebsiteController;
use App\Http\Controllers\AuthController;
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
    Route::middleware(['role:admin'])->group(function() {
        Route::apiResource('/websites', WebsiteController::class)->only(['store','update','destroy']);      
        Route::apiResource('/genres', GenreController::class)->only(['store','update','destroy']);      
        Route::apiResource('/authors', AuthorController::class)->only(['store','update','destroy']);      
    });

});



// Route::get('/', [GenreController::class, 'index']);
// Route::post('/', [GenreController::class, 'store']);
// Route::get('/{id}', [GenreController::class, 'show']); 
// Route::put('/{id}', [GenreController::class, 'update']); 
// Route::delete('/{id}', [GenreController::class, 'destroy']);

// Route::get('/', [AuthorController::class, 'index']);
// Route::post('/', [AuthorController::class, 'store']);
// Route::get('/{id}', [AuthorController::class, 'show']);
// Route::put('/{id}', [AuthorController::class, 'update']);
// Route::delete('/{id}', [AuthorController::class, 'destroy']);

// Route::get('/', [WebsiteController::class, 'index']);
// Route::post('/', [WebsiteController::class, 'store']);
// Route::get('/{id}', [WebsiteController::class, 'show']);
// Route::put('/{id}', [WebsiteController::class, 'update']);
// Route::delete('/{id}', [WebsiteController::class, 'destroy']);

