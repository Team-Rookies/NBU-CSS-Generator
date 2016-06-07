<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Team ROOKIE">
    <meta name="csrf-token" content="{{ Session::token() }}">

    <title>CSS3 Generator - Team ROOKIE Product</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="{{asset('css/main.css')}}">
    <link rel="stylesheet" href="{{asset('css/jquery-hex-colorpicker.css')}}" type="text/css"/>
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="{{asset('js/jquery.noty.packaged.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/top.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/bootstrap.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/init.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/view.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/jquery.validate.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/hex-colorpicker/src/jquery-hex-colorpicker.js')}}" type="text/javascript"></script>
     <script src="{{asset('js/bootstrap-checkbox.js')}}" type="text/javascript"></script>
   

</head>

<body>
<div class="jumbotron" id="head-container">
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">

                    <li><a href="/">Home</a></li>
                    <li><a href="http://e-edu.nbu.bg">Moodle</a></li>
                    <li><a href="http://www.nbu.bg">NBU</a></li>
                </ul>

                <ul class="nav navbar-nav navbar-right" id="adminHeader">
                @if (Auth::check())
                    <li><a href="/logout">Logout</a></li>
                    <li><a href="/styles">View Saved Styles</a></li>
                @else
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                @endif
                </ul>
            </div>
        </div>
    </nav>
    </br>
    <div class="container">
        <h1>NBU CSS3 Generator</h1>
        <p>Team ROOKIE project 2.0</p>
        </br>
        </br>
        </br>
    </div>
</div>
@section('main')
@show

<footer id="footer">
      <div class="container">
          <p>Copyright &copy; Team Rookies</p>
      </div>
</footer>
</body>
</html>