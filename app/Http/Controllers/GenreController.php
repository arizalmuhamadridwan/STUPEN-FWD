<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GenreController extends Controller
{
    public function index()
    {
        $genres = Genre::all();

        
        if ($genres->isEmpty()) {
            return response([
                "success"=> true,
                "massage"=>"data kosong"
            ], 200);
        }
        
        return response()->json([
        "success"=>true,
        "massage"=>"get all resource",
        "data"=>$genres
        ],  200);
    }

        public function store(Request $request) {
        // 1. validator
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'description' => 'required|string|max:300',
        ]);

        // 2. cek validator eror
        if ($validator->fails()) {
            return response()->json([
                "success"=> true,
                "message"=>$validator->errors()
            ], 422);
        }

        // 3. insert data
        $genres = Genre::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        // 5. response
        return response()->json([
            "success"=>true,
            "message"=>"resource added succesfully!",
            "data"=>$genres
        ],  201);
        }
}
