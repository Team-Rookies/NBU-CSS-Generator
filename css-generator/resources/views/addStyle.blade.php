<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
    </head>
    <body>
        <div class="container">
            <div class="content">
            @foreach($errors->all() as $error)
                    <p>{{$error}}</p>
                    @endforeach
                {!! Form::open(['url'=>'/styles/add', 'id'=>'style_form']) !!}
                    <div class="row">
                        <p>
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" required="required" value="{{old('name')}}"/>
                        </p>
                    </div>
                    <div class="row">
                        <p>
                            <label for="type">Type</label>
                            <select name="type" id="type">
                                @foreach(\App\StyleType::getKeys() as $style)
                                <option value="{{$style}}">{{$style}}</option>
                                @endforeach
                            </select>
                        </p>
                    </div>
                    <div class="row">
                        <p>
                            <label for="code">Code</label>
                            <textarea name="code" id="code" cols="30" rows="10">{{old('code')}}</textarea>
                        </p>
                    </div>
                    <input type="submit" class="button white" value="Add" />
                {!! Form::close() !!}
            </div>
        </div>
    </body>
</html>
