<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                /*font-weight: 500;*/
                font-family: 'Lato', Sans-Serif;
                font-weight: bold;
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            #login {
                float: right;
            }

            #register {
                float:left;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
            @foreach($errors->all() as $error)
                    <p>{{$error}}</p>
                    @endforeach
                {!! Form::open(['url'=>'/login', 'id'=>'login_form']) !!}
                    <div class="row">
                        <p>
                            <label for="name">Username</label>
                            <input type="text" name="name" id="name" required="required" value="{{old('name')}}"/>
                        </p>
                    </div>
                    <div class="row">
                        <p>
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" required="required"/>
                        </p>
                    </div>
                    <a href="/register" id="register" >
                        <input type="button" class="button white" value="Register" />
                    </a>
                    <input id="login" type="submit" class="button white" value="Login" />
                {!! Form::close() !!}
            </div>
        </div>
    </body>
</html>
