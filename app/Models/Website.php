<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Website extends Model
{
        protected $table = 'websites';

        protected $fillable =['title','description','prize','image','genre_id','author_id'];
}
