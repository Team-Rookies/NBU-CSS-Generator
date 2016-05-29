<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    public function styles()
    {
        return $this->hasMany('App\Style');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function addStyle($style)
    {
        $count = Style::where([
            ['name', $style->name],
            ['user_id', $this->id]
        ])->count();

        if ($count < 5) {
            $style->save();
            return \Redirect::to('styles');
        } else {
            return "Too many " . $style->name . " styles. Try deleting some";
        }
    }
}
