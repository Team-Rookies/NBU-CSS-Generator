@extends('master');

@section('main')


<!-- Page Content -->

<div class="container" id="main-container">

    <div class="row">

        <div class="col-lg-12">
            <h1 class="page-header">Chose what you want to generate</h1>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
            <button type="button" class="btn btn-default handler" type-modal="radius">
                Border radius
            </button>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
            <button type="button" class="btn btn-default handler" type-modal="shadow">
                Box Shadow
            </button>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
            <button type="button" class="btn btn-default handler" type-modal="text-shadow">
                Text Shadow
            </button>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
            <button type="button" class="btn btn-default handler" type-modal="rgba">
                RGBA
            </button>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
            <button type="button" class="btn btn-default handler" type-modal="font-face">
                Font Face
            </button>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
            <button type="button" class="btn btn-default handler" type-modal="multiple-columns">
                Multiple Columns
            </button>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
            <button type="button" class="btn btn-default handler" type-modal="box-resize">
                Box Resize
            </button>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
            <button type="button" class="btn btn-default handler" type-modal="box-resizing">
                Box-Sizing
            </button>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
            <button type="button" class="btn btn-default handler" type-modal="outline">
                Outline
            </button>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
            <button type="button" class="btn btn-default handler" type-modal="transition">
                Transition
            </button>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
            <button type="button" class="btn btn-default handler" type-modal="transform">
                Transform
            </button>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
            <button type="button" class="btn btn-default handler" type-modal="nothing">
                Nothing
            </button>
        </div>
    </div>

    <hr>

</div>
<div>
    <div id="modal-container">
        <div class="model-dialog">
            <div class="modal-header">
                <button type="button" class="close" aria-hidden="true">&times;</button>
                <h3 class="modal-head-h3"></h3>
            </div>
            <div class="modal-body modelContentBody " style="height: 550px"></div>
        </div>
    </div>

    <div id="preview">
        <h3 id="preview-text">PREVIEW</h3>
    </div>
</div>
@endsection