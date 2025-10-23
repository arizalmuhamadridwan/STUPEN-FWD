<?php

namespace App\Http\Controllers;

use App\Models\Website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class WebsiteController extends Controller
{
    public function index()
    {
        $websites = Website::all();

        if ($websites->isEmpty()) {
            return response()->json([
                "success" => true,
                "message" => "Data kosong"
            ], 200);
        }

        return response()->json([
            "success" => true,
            "message" => "Get all resources",
            "data" => $websites
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:100',
            'description' => 'required|string|max:300',
            'prize' => 'required|numeric',
            'image' => 'required|image|mimes:jpeg,jpg,png|max:2048',
            'genre_id' => 'required|exists:genres,id',
            'author_id' => 'required|exists:authors,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()
            ], 422);
        }

        $image = $request->file('image');
        $image->store('websites', 'public');

        $website = Website::create([
            'title' => $request->title,
            'description' => $request->description,
            'prize' => $request->prize,
            'image' => $image->hashName(),
            'genre_id' => $request->genre_id,
            'author_id' => $request->author_id,
        ]);

        return response()->json([
            "success" => true,
            "message" => "Resource added successfully!",
            "data" => $website
        ], 201);
    }

    public function show($id)
    {
        $website = Website::find($id);

        if (!$website) {
            return response()->json([
                "success" => false,
                "message" => "Website not found"
            ], 404);
        }

        return response()->json([
            "success" => true,
            "message" => "Get website by ID",
            "data" => $website
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $website = Website::find($id);

        if (!$website) {
            return response()->json([
                "success" => false,
                "message" => "Website not found"
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|string|max:100',
            'description' => 'sometimes|string|max:300',
            'prize' => 'sometimes|numeric',
            'image' => 'sometimes|image|mimes:jpeg,jpg,png|max:2048',
            'genre_id' => 'sometimes|exists:genres,id',
            'author_id' => 'sometimes|exists:authors,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()
            ], 422);
        }

        if ($request->hasFile('image')) {
            Storage::disk('public')->delete('websites/' . $website->image);

            $image = $request->file('image');
            $image->store('websites', 'public');
            $website->image = $image->hashName();
        }

        $website->update($request->except('image') + ['image' => $website->image]);

        return response()->json([
            "success" => true,
            "message" => "Website updated successfully",
            "data" => $website
        ], 200);
    }

    public function destroy($id)
    {
        $website = Website::find($id);

        if (!$website) {
            return response()->json([
                "success" => false,
                "message" => "Website not found"
            ], 404);
        }

        Storage::disk('public')->delete('websites/' . $website->image);
        $website->delete();

        return response()->json([
            "success" => true,
            "message" => "Website deleted successfully"
        ], 200);
    }
}
