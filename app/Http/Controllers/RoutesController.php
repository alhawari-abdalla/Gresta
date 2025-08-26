<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;

class RoutesController extends Controller
{
    public function games()
    {
        $games = Game::all();
        return view('games' , ['games' => $games]);
    }
}
