<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Style extends Model
{
    public function user() {
        return $this->belongsTo('App\User');
    }

    protected $fillable = ['name', 'code', 'user_id'];
}
