<?php

namespace App\Http\Controllers;

use App\Style;
use Illuminate\Http\Request;

use App\Http\Requests;

class StyleController extends Controller
{
    public function getStyles()
    {
        return Style::all();
    }


}
