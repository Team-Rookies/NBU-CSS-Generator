@extends('master')
@section('main')
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
                    <th>Preview</th>
                </tr>
                 @foreach($styles as $style)
                 <tr>
                 <td>{{$style->name}}</td>
                 <td><a href="styles/delete/{{$style->id}}">[X]</a></td>
                 <td class={{$style->id}}>{{$style->type}}</td>
                 <td class='tablecode' id={{$style->id}}>{{$style->code}}</td>
                 <td class='tableclick' styleid={{$style->id}}>Click</td>
                 </tr>
                 @endforeach
            </thead>

        </table>
        
    </div>
</div>

<div>
    <div id="modal-container" style="height: 400px">
        <div class="model-dialog">
            <div class="modal-header" style="height: 30px">
                <button type="button" class="close" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body modelContentBody" style="height: 400px"></div>
        </div>
    </div>
</div>

<hr>
@endsection