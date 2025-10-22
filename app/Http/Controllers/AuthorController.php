<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::all();

        
        if ($authors->isEmpty()) {
            return response([
                "success"=> true,
                "massage"=>"data kosong"
            ], 200);
        }

        return response()->json([
        "success"=>true,
        "massage"=>"get all resource",
        "data"=>$authors
        ],  200);
    }


        public function store(Request $request) {
        // 1. validator
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'photo' => 'required|image|mimes:jpeg,jpg,png|max:2048',
            'bio' => 'required|string|max:300',

        ]);

        // 2. cek validator eror
        if ($validator->fails()) {
            return response()->json([
                "success"=> true,
                "message"=>$validator->errors()
            ], 422);
        }

        // 3. upload image
        $image = $request->file('photo');
        $image->store('authors','public');

        // 4. insert data
        $authors = Author::create([
            'name' => $request->name,
            'photo' => $image->hashName(),
            'bio' => $request->bio,
        ]);

        // 5. response
        return response()->json([
            "success"=>true,
            "message"=>"resource added succesfully!",
            "data"=>$authors
        ],  201);
        }
}
