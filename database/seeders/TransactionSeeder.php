<?php

namespace Database\Seeders;

use App\Models\Transaction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Transaction::create([
            'order_number' => 'OR-001',
            'customer_id' => '1',
            'website_id' => '1',
            'total_amount' => 2000000.00,
        ]);

        Transaction::create([
            'order_number' => 'OR-002',
            'customer_id' => '2',
            'website_id' => '2',
            'total_amount' => 3000000.00,
        ]);
    }
}
