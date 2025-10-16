<?php

namespace App\Http\Controllers;

use App\Models\Author;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::all();
        return response()->json([
        "success"=>true,
        "massage"=>"get all resource",
        "data"=>$authors
        ],  200);
    }
}
