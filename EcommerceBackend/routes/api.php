<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NewsletterController;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'getProfile']);        // Get logged in user data
    Route::post('/updateprofile', [AuthController::class, 'updateProfile']); // Update profile
});


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);



Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/top-categories', [CategoryController::class, 'topCategories']);

Route::post('/subscribe-newsletter', [NewsletterController::class, 'subscribe']);

 
