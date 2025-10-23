<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::with('user','website')->get();

        if ($transactions->isEmpty()) {
            return response()->json([
                "success" => true,
                "message" => "data kosong"
            ], 200);
        }

        return response()->json([
            "success" => true,
            "message" => "get all resource",
            "data" => $transactions
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'website_id' => 'required|exists:websites,id',
            'quantity' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()
            ], 422);
        }

        $uniqueCode = "OR-" . strtoupper(uniqid());
        $user = auth('api')->user();

        if (!$user) {
            return response()->json([
                "success" => false,
                "message" => 'User tidak terautentikasi'
            ], 401); 
        }

        $website = Website::find($request->website_id);

        if (!$website) {
            return response()->json([
                "success" => false,
                "message" => 'Website tidak ditemukan'
            ], 404); 
        }

        if ($website->stock < $request->quantity) {
            return response()->json([
                "success" => false,
                "message" => 'Stok tidak mencukupi'
            ], 400); 
        }

        $total_amount = $website->prize * $request->quantity;

        $website->stock = $website->stock - $request->quantity;
        $website->save();

        $transaction = Transaction::create([
            'order_number' => $uniqueCode,
            'customer_id' => $user->id,
            'website_id' => $request->website_id,
            'quantity' => $request->quantity,
            'total_amount' => $total_amount,
        ]);

        return response()->json([
            "success" => true,
            "message" => "Transaksi berhasil dibuat",
            "data" => $transaction
        ], 201);
    }

    public function show($id)
    {
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response()->json([
                "success" => false,
                "message" => "resource not found"
            ], 404);
        }

        return response()->json([
            "success" => true,
            "message" => "get detail resource",
            "data" => $transaction
        ], 200);
    }

public function update(Request $request, $id)
{
    $transaction = Transaction::find($id);

    if (!$transaction) {
        return response()->json([
            "success" => false,
            "message" => "Resource not found!"
        ], 404);
    }
    $input = $request->all() + $request->json()->all();

    $validator = Validator::make($input, [
        'order_number' => 'sometimes|required|string|max:20',
        'customer_id' => 'sometimes|required|exists:users,id',
        'website_id' => 'sometimes|required|exists:websites,id',
        'total_amount' => 'sometimes|required|numeric|min:0',
    ]);

    if ($validator->fails()) {
        return response()->json([
            "success" => false,
            "message" => $validator->errors()
        ], 422);
    }

    $transaction->update([
        'order_number' => $input['order_number'] ?? $transaction->order_number,
        'customer_id' => $input['customer_id'] ?? $transaction->customer_id,
        'website_id' => $input['website_id'] ?? $transaction->website_id,
        'total_amount' => $input['total_amount'] ?? $transaction->total_amount,
    ]);

    return response()->json([
        "success" => true,
        "message" => "Resource updated successfully!",
        "data" => $transaction
    ], 200);
}


    public function destroy($id)
    {
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response()->json([
                "success" => false,
                "message" => "resource not found"
            ], 404);
        }

        $transaction->delete();

        return response()->json([
            "success" => true,
            "message" => "resource deleted successfully!"
        ], 200);
    }
}
