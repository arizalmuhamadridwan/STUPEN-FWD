<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
        protected $table = 'transactions';

        protected $fillable = [
            'order_number','customer_id','website_id','total_amount'
        ];

        public function user(){
            return $this->belongsTo(User::class,'customer_id');
        }

        public function website(){
            return $this->belongsTo(Website::class);
        }
}
