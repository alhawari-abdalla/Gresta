<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoutesController;
use Illuminate\Support\Facades\Storage;
use App\Models\Game;

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::get('/games', [RoutesController::class, 'games'])->name('games');

Route::get('/download/{id}', function ($id) {
    $game = Game::where('id', $id);
    $filePath = 'games/' . $game['download-link'];

    if (!Storage::exists($filePath)) {
        return redirect()->route('games')->with('error', 'File not found.');
    }

    $game->downloads = $game->downloads + 1;
    $game->save();
    return Storage::download($filePath);
})->name('game.download');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
