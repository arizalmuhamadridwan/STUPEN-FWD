<?php

namespace App\Http\Controllers;

use App\Models\Website;
use Illuminate\Http\Request;

class WebsiteController extends Controller
{
    public function index()
    {

        $websites = Website::all();
        return response()->json([
            "success"=>true,
            "massage"=>"get all resource",
            "data"=>$websites
        ],  200);
    }
}
