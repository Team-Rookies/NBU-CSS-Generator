<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
    </head>
    <body>
        <div class="container">
            <div class="content">
            <div>
            @foreach($errors->all() as $error)
            <p>{{$error}}</p>
            @endforeach
            </div>
            @foreach($styles as $style)
            <section style="padding-bottom: 10px">
                <div>Name: {{$style->name}}</div>
                <div>Type: {{$style->type}}</div>
                <div style="border: 1px solid black">Code: <pre>{{$style->code}}</pre></div>
                <a href="styles/delete/{{$style->id}}">[X]</a>
            </section>
            @endforeach
            </div>
        </div>
    </body>
</html>
