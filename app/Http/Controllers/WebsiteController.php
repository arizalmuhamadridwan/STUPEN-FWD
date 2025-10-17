<?php

namespace App\Http\Controllers;

use App\Models\Website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class WebsiteController extends Controller
{
    public function index()
    {

        $websites = Website::all();

        if ($websites->empty()) {
            return response([
                "success"=> true,
                "message"=>"data kosong"
            ], 200);
        }

        return response()->json([
            "success"=>true,
            "message"=>"get all resource",
            "data"=>$websites
        ],  200);
    }

    public function store(Request $request) {
        // 1. validator
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:100',
            'description' => 'required|string|max:300',
            'prize' => 'required|numeric',
            'image' => 'required|image|mimes:jpeg,jpg,png|max:2048',
            'genre_id' => 'required|exists:genres,id',
            'author_id' => 'required|exists:authors,id',
        ]);

        // 2. cek validator eror
        if ($validator->fails()) {
            return response()->json([
                "success"=> true,
                "message"=>$validator->errors()
            ], 422);
        }

        // 3. upload image
        $image = $request->file('image');
        $image->store('websites','public');

        // 4. insert data
        $websites = Website::create([
            'title' => $request->title,
            'description' => $request->description,
            'prize' => $request->prize,
            'image' => $image->hashName(),
            'genre_id' => $request->genre_id,
            'author_id' => $request->author_id,
        ]);

        // 5. response
        return response()->json([
            "success"=>true,
            "message"=>"resource added succesfully!",
            "data"=>$websites
        ],  201);

    }
}
