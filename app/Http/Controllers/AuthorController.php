<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::all();

        if ($authors->isEmpty()) {
            return response()->json([
                "success" => true,
                "message" => "data kosong"
            ], 200);
        }

        return response()->json([
            "success" => true,
            "message" => "get all resource",
            "data" => $authors
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'photo' => 'required|image|mimes:jpeg,jpg,png|max:2048',
            'bio' => 'required|string|max:300',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()
            ], 422);
        }

        $image = $request->file('photo');
        $image->store('authors', 'public');

        $author = Author::create([
            'name' => $request->name,
            'photo' => $image->hashName(),
            'bio' => $request->bio,
        ]);

        return response()->json([
            "success" => true,
            "message" => "resource added successfully!",
            "data" => $author
        ], 201);
    }

    public function show($id)
    {
        $author = Author::find($id);

        if (!$author) {
            return response()->json([
                "success" => false,
                "message" => "resource not found"
            ], 404);
        }

        return response()->json([
            "success" => true,
            "message" => "get detail resource",
            "data" => $author
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $author = Author::find($id);

        if (!$author) {
            return response()->json([
                "success" => false,
                "message" => "resource not found"
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:100',
            'photo' => 'sometimes|image|mimes:jpeg,jpg,png|max:2048',
            'bio' => 'sometimes|required|string|max:300',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()
            ], 422);
        }

        if ($request->hasFile('photo')) {
            if ($author->photo && Storage::disk('public')->exists('authors/' . $author->photo)) {
                Storage::disk('public')->delete('authors/' . $author->photo);
            }
            $image = $request->file('photo');
            $image->store('authors', 'public');
            $author->photo = $image->hashName();
        }

        $author->update([
            'name' => $request->name ?? $author->name,
            'bio' => $request->bio ?? $author->bio,
        ]);

        return response()->json([
            "success" => true,
            "message" => "resource updated successfully!",
            "data" => $author
        ], 200);
    }

    public function destroy($id)
    {
        $author = Author::find($id);

        if (!$author) {
            return response()->json([
                "success" => false,
                "message" => "resource not found"
            ], 404);
        }

        if ($author->photo && Storage::disk('public')->exists('authors/' . $author->photo)) {
            Storage::disk('public')->delete('authors/' . $author->photo);
        }

        $author->delete();

        return response()->json([
            "success" => true,
            "message" => "resource deleted successfully!"
        ], 200);
    }
}
