<?php

use App\Http\Controllers\cryptoController;
use Illuminate\Support\Facades\Route;

Route::get('/', [cryptoController::class, 'index'])->name("home");