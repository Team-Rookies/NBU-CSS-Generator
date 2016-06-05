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
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset('css/main.css')}}">
    <link rel="stylesheet" href="{{asset('css/jquery-hex-colorpicker.css')}}" type="text/css"/>
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="{{asset('js/hex-colorpicker/src/jquery-hex-colorpicker.js')}}" type="text/javascript"></script>
</head>

<body>


    <div class="jumbotron" id="main-container">
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="collapse navbar-collapse">
                     <ul class="nav navbar-nav">
                
                    <li><a href="/">Home</a></li>
                    <li><a href="http://e-edu.nbu.bg">Moodle</a></li>
                    <li><a href="http://www.nbu.bg">NBU</a></li>
                </ul>

                <ul class="nav navbar-nav navbar-right" id="adminHeader">
                    <li><a href="/logout">Logout</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/styles">View Saved Styles</a></li>
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

    <!-- Page Content -->

    <div class="container" id="main-container">

        <div class="row">

            <div class="col-lg-12" id="content">
                <h1 class="page-header">View Saved Styles</h1>
            </div>
            <ul class="nav nav-tabs">:
                <li><a class="viehandler" viewstyle="radius" href="/styles/BorderRadius">Radius</a></li>
                <li><a class="viehandler" viewstyle="shadow" href="/styles/BoxShadow">Shadow</a></li>
                <li><a class="viehandler" viewstyle="text-shadow" href="/styles/TextShadow">Text Shadow</a></li>
                <li><a class="viehandler" viewstyle="rgba" href="/styles/RGBA">RGBA</a></li>
                <li><a class="viehandler" viewstyle="font-face" href="/styles/FontFace">Font-Face</a></li>
                <li><a class="viehandler" viewstyle="multiple-columns" href="/styles/MultipleColumns">Multiple Columns</a></li>
                <li><a class="viehandler" viewstyle="box-resize" href="/styles/BoxResize">Box Resize</a></li>
                <li><a class="viehandler" viewstyle="box-resizing" href="/styles/BoxSizing">Box-Sizing</a></li>
                <li><a class="viehandler" viewstyle="outline" href="/styles/Outline">Outline</a></li>
                <li><a class="viehandler" viewstyle="transition" href="/styles/Transition">Transition</a></li>
                <li><a class="viehandler" viewstyle="transform" href="/styles/Transform">Transform</a></li>
                <li><a class="viehandler" viewstyle="nothing" href="#">Nothing</a></li>
            </ul>
            </br>
            <table class="table table-bordered" id="view-table">
                <thead>
                    <tr>
                        <th>Saved Name</th>
                        <th>Del</th>
                        <th>Type</th>
                        <th>Code</th>
                    </tr>
                     @foreach($styles as $style)
                     <tr>
                     <td>{{$style->name}}</td>
                     <td><a href="styles/delete/{{$style->id}}">[X]</a></td>
                     <td>{{$style->type}}</td>
                     <td>{{$style->code}}</td>
                     </tr>
                     @endforeach
                </thead>
              
            </table>

        </div>
    </div>    

    <hr>

    </div>
    <div>

        <div id="footer">
            <div class="container">
                <p>Copyright &copy; Бате Светльо is BACK!</p>
            </div>
        </div>
        <!-- Footer -->

</div>
</body>

</html>