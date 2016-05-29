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
                font-weight: 100;
                font-family: 'Lato';
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

            .title {
                font-size: 96px;
            }
        </style>
    </head>
    <body>
        <div class="container">
        @foreach($errors->all() as $error)
        <p>{{$error}}</p>
        @endforeach
            <div class="content">
                {!! Form::open(['url'=>'/register', 'id'=>'contact_form']) !!}
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
                    <div class="row">
                        <p>
                            <label for="password">Repeat Password</label>
                            <input type="password" name="password-repeat" id="password-repeat" required="required"/>
                        </p>
                    </div>
                    <input type="submit" class="button white" value="Register" />
                {!! Form::close() !!}
            </div>
        </div>
    </body>
</html>
