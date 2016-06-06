var flag = false;
var hasSave = false;
$(document).ready(function () {
    $(".handler").each(function (index) {
        $(this).on("click", function (event) {
            event.stopPropagation();
            var element = $(this);
            var type = element.attr('type-modal');
            if (!flag) {
                flag = true;
                checkType(type);
            }

        });
    });

    $('.close').on('click', function () {
        $("#modal-container").css('display', 'none');
        $("#preview").removeAttr('style');
        $("#preview").css('display', 'none');
        $("body").removeClass("dialogIsOpen");
        flag = false;
        hasSave = false;
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            var container = $("#modal-container");
            var preview = $('#preview');
            var previewText = $('#preview-text');
            if ((!preview.is(e.target) && !previewText.is(e.target) && !container.is(e.target)) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.hide();
                $("#preview").css('display', 'none');
                $("body").removeClass("dialogIsOpen");
            }
            hasSave = false;
        }
    });

    function checkType(type) {
        flag = false;
        switch (type) {
            case 'radius':
                createRadius();
                break;
            case 'shadow':
                createBoxShadow();
                break;
            case 'text-shadow':
                textShadow();
                break;
            case 'rgba':
                rgba();
                break;
            case 'font-face':
                fontFace();
                break;
            case 'multiple-columns':
                multipleColumns()
                break;
            case 'box-resize':
                boxResize();
                break;
            case 'box-resizing':
                boxSizing();
                break;
            case 'outline':
                outline();
                break;
            case 'transition':
                transition();
                break;
            case 'transform':
                transform();
                break;
            case 'nothing':
                console.log("nothing");
                break;
            default:
                console.log("error");

        }

    }

    function createRadius() {
        $(".modelContentBody").empty();
        $("#modal-container").show();
        $('.modal-head-h3').text("Generate Border Radius CSS");
        $('.modelContentBody').load('templates/borderRadius.html', function() {
                $(".generate").click(function (ev) {
                    ev.preventDefault();
                    if($('#borderRadiusForm').valid()) {
                        var code = "-webkit-border-radius:" + $(".topLeft").val() + "px " + $(".topRight").val() + "px " + $(".bottomLeft").val() + "px " + $(".bottomRight").val() + "px;" + String.fromCharCode(13, 10) + "border-radius:" + $('.topLeft').val() + 'px ' + $('.topRight').val() + 'px ' + $('.bottomLeft').val() + 'px ' + $('.bottomRight').val() + 'px;';
                        $('#txtarea').text(code);
                        $("#preview").show();
                        $("#preview").css('border-radius', $(".topLeft").val() + "px " + $(".topRight").val() + "px " + $(".bottomLeft").val() + "px " + $(".bottomRight").val() + "px");

                        if (!hasSave) {
                            hasSave = true;
                            addSaveButton('BorderRadius');
                        }
                    } else {
                        hasSave = false;
                        $('#saveField').remove();
                    }
                });
            });

        $("body").toggleClass("dialogIsOpen");


    }

    function createBoxShadow() {
        $(".modelContentBody").empty();
        $("#modal-container").show();
        $('.modal-head-h3').text("Generate Box Shadow CSS");
        $(".modelContentBody").load('templates/boxShadow.html', function() {
            $('.hex-color').hexColorPicker();
            $('#txtarea').css('bottom', '-28px');
            $("body").toggleClass("dialogIsOpen");
            $(".generate").click(function (ev) {
                ev.preventDefault();
                if($('#boxShadowForm').valid()) {
                    $('#txtarea').empty();
                    var inset = $('.inset').val();
                    var appInset = "";
                    if ($('.inset').prop('checked')) {
                        appInset = "inset "
                    }
                    $('#txtarea').append("-webkit-box-shadow:" + appInset + $(".horizontal-length").val() + "px " + $(".vertical-length").val() + "px " + $(".blur-radius").val() + "px " + $(".spread").val() + "px " + $(".hex-color").val() + ";");
                    $('#txtarea').append(String.fromCharCode(13, 10));
                    $('#txtarea').append("box-shadow:" + appInset + $(".horizontal-length").val() + "px " + $(".vertical-length").val() + "px " + $(".blur-radius").val() + "px " + $(".spread").val() + "px " + $(".hex-color").val() + ";");
                    $("#preview").css('display', 'block');
                    $("#preview").css('box-shadow', appInset + $(".horizontal-length").val() + "px " + $(".vertical-length").val() + "px " + $(".blur-radius").val() + "px " + $(".spread").val() + "px " + $(".hex-color").val());

                    if (!hasSave) {
                        hasSave = true;
                        addSaveButton('BoxShadow');
                    }
                } else {
                    hasSave = false;
                    $('#saveField').remove();
                }
            });
        });
    }

    function textShadow() {
        $("#modal-container").show();
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append("Generate Text Shadow CSS");
        $(".modelContentBody").append("Horizontal Length &nbsp;<input class='horizontal-length' type='number'><label>&nbsp; px</label></br>");
        $(".modelContentBody").append("Vertical Length &nbsp;<input class='vertical-length' type='number'><label>&nbsp; px</label></br>");
        $(".modelContentBody").append("Blur Radius &nbsp;<input class='blur-radius' type='number'><label>&nbsp; px</label></br>");
        $(".modelContentBody").append("Hex Color &nbsp;<input class='hex-color' type='text'>");
        $(".modelContentBody").append("<textarea id='txtarea' rows='10' cols='50' disabled></textarea>");
        $(".modelContentBody").append("<button type='button' class='btn btn-default generate'>GO</button>");
        $('.hex-color').hexColorPicker();
        $('#txtarea').css('bottom', '-28px');
        $("body").toggleClass("dialogIsOpen");

        $(".generate").click(function () {
            $('#txtarea').empty();
            $('#txtarea').append("text-shadow: " + $(".horizontal-length").val() + "px " + $(".vertical-length").val() + "px " + $(".blur-radius").val() + "px " + $(".hex-color").val() + ";");
            $("#preview").show();
            $("#preview").css('text-shadow', $(".horizontal-length").val() + "px " + $(".vertical-length").val() + "px " + $(".blur-radius").val() + "px " + $(".hex-color").val());

            if (!hasSave) {
                hasSave = true;
                addNameField();
                addSaveButton('TextShadow');
            }
        });
    }

    function rgba() {
        $("#modal-container").show();
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append("Generate RGBA CSS");
        $(".modelContentBody").append("<b>R</b> &nbsp;<input class='r' type='number'></br>");
        $(".modelContentBody").append("<b>G</b> &nbsp;<input class='g' type='number'></br>");
        $(".modelContentBody").append("<b>B</b> &nbsp;<input class='b' type='number'></br>");
        $(".modelContentBody").append("Opacity &nbsp;<input class='opacity' type='number'></br>");
        $(".modelContentBody").append("<textarea id='txtarea' rows='10' cols='50' disabled></textarea>");
        $(".modelContentBody").append("<button type='button' class='btn btn-default generate'>GO</button>");
        $("body").toggleClass("dialogIsOpen");

        $(".generate").click(function () {
            $('#txtarea').empty();
            $('#txtarea').append("background-color: rgba(" + $(".r").val() + ", " + $(".g").val() + ", " + $(".b").val() + ", " + $(".opacity").val() + ");");
            $('#txtarea').append(String.fromCharCode(13, 10));
            $('#txtarea').append("color: rgba(" + $(".r").val() + ", " + $(".g").val() + ", " + $(".b").val() + ", " + $('.opacity').val() + ");");
            $("#preview").show();
            $("#preview").css('text-decoration', 'bold');
            $("#preview").css('background-color', 'rgba(' + $('.r').val() + ', ' + $('.g').val() + ', ' + $('.b').val() + ', ' + $('.opacity').val() + ')');

            if (!hasSave) {
                hasSave = true;
                addNameField();
                addSaveButton('RGBA');
            }
        });
    }

    function fontFace() {
        $("#modal-container").show();
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append("Generate Font-Face CSS");
        $('.modelContentBody').append("<label>Font Family</label>&nbsp;<input class='fontFamily' type='text'></br>");
        $('.modelContentBody').append("<label>Font Face</label>&nbsp;<input class='fontName' type='text'></br>");
        $(".modelContentBody").append("<textarea id='txtarea' rows='10' cols='50' disabled></textarea>");
        $(".modelContentBody").append("<button type='button' class='btn btn-default generate'>GO</button>");
        $("body").toggleClass("dialogIsOpen");

        $('.generate').click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);
            $('#txtarea').append("@font-face {" + newline);
            $('#txtarea').append("&#9;font-family: &quot;" + $('.fontFamily').val() + "&quot; ;" + newline);
            $('#txtarea').append('&#9;src: url("' + $('.fontName').val() + '.eot") format("eot"),' + newline);
            $('#txtarea').append('&#9;url("' + $('.fontName').val() + '.woff") format("woff"),' + newline);
            $('#txtarea').append('&#9;url("' + $('.fontName').val() + '.ttf") format("truetype"),' + newline + "}");

            if (!hasSave) {
                hasSave = true;
                addNameField();
                addSaveButton('FontFace');
            }
        })
    }

    function multipleColumns() {
        $("#modal-container").show();
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append("Generate Multiple Columns CSS");
        $('.modelContentBody').append("<label># of columns</label>&nbsp;<input class='numbColumns' type='number'></br>");
        $('.modelContentBody').append("<label>Column Gap</label>&nbsp;<input class='gap' type='text'></br>");
        $(".modelContentBody").append("<textarea id='txtarea' rows='10' cols='50' disabled></textarea>");
        $(".modelContentBody").append("<button type='button' class='btn btn-default generate'>GO</button>");
        $(".modelContentBody").append("<hr><p class='textPreview'>All of you who are under the impression that cats are absolutely the best thing for the Internet—producing GIFs and memes galore—are bloody delusional. My 8lb house cat Franny almost destroyed a small section of your Internet last week, temporarily crippling one of the hands I use to type all your nightly posts.</br></br>Sunday, 4:00 AM: I'm at home. I've ordered nachos, delivery, and as I'm getting ready to eat them, my small cat Frances delivers a playful yet puncturing bite to the top of my left hand. I wash it off; I think nothing of it. I eat my nachos and go to sleep.</p><hr>");
        $('#txtarea').css('bottom', '-40px');
        $("body").toggleClass("dialogIsOpen");

        $('.generate').click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);
            $('#txtarea').append("-moz-column-count: " + $('.numbColumns').val() + ";" + newline);
            $('#txtarea').append("-moz-column-gap: " + $('.numbColumns').val() + ";" + newline);
            $('#txtarea').append("-webkit-column-count: " + $('.numbColumns').val() + ";" + newline);
            $('#txtarea').append("-webkit-column-gap: " + $('.gap').val() + 'px;' + newline);
            $('#txtarea').append("column-count: " + $('.numbColumns').val() + ';' + newline);
            $('#txtarea').append("column-gap: " + $('.gap').val() + "px;");
            $('.textPreview').css('column-count', $('.numbColumns').val());
            $('.textPreview').css('column-gap', $('.gap').val() + "px");

            if (!hasSave) {
                hasSave = true;
                addNameField();
                addSaveButton('MultipleColumns');
            }
        })
    }

    function boxResize() {
        $("#modal-container").show();
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append("Generate Box Resize CSS");
        $('.modelContentBody').append("<b>Box Resize Type: </b><select class='resizeType' name='type'><option value='none'>NONE</option><option value='horizontal'>Horizontal</option><option value='vertical'>Vertical</option> <option value='both'>Both</option> </select></br>");
        $('.modelContentBody').append("<b>Min-Width: </b> <input class='minWidth' type='number'></br>");
        $(".modelContentBody").append("<b>Min-Height: </b> <input class='minHeight' type='number'></br>");
        $(".modelContentBody").append("<button type='button' class='btn btn-default generate'>GO</button>");
        $(".modelContentBody").append("<textarea id='txtarea' rows='10' cols='50' disabled></textarea>");
        $("body").toggleClass("dialogIsOpen");

        $('.generate').click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);
            $('#txtarea').append("resize: " + $('.resizeType').val() + ";" + newline);
            $('#txtarea').append("overflow: auto;" + newline);
            $('#txtarea').append('min-width: ' + $('.minWidth').val() + 'px;' + newline);
            $('#txtarea').append('min-height: ' + $('.minHeight').val() + 'px;' + newline);
            $("#preview").show();
            $("#preview").css('resize', $(".resizeType").val());
            $("#preview").css('width', $('.minWidth').val() + 'px');
            $("#preview").css('height', $('.minHeight').val() + 'px');

            if (!hasSave) {
                hasSave = true;
                addNameField();
                addSaveButton('BoxResize');
            }
        })

    }

    function boxSizing() {
        $("#modal-container").show();
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append("Generate Box Sizing CSS");
        $('.modelContentBody').append("<b>Box Sizing: </b><select class='sizingType' name='type'><option value='none'>NONE</option><option value='content-box'>Content Box</option><option value='border-box'>Border Box</option></select></br>");
        $(".modelContentBody").append("<button type='button' class='btn btn-default generate'>GO</button>");
        $(".modelContentBody").append("<textarea id='txtarea' rows='10' cols='50' disabled></textarea>");
        $("body").toggleClass("dialogIsOpen");

        $('.generate').click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);
            $('#txtarea').append("-moz-box-sizing: "+$('.sizingType').val()+";" + newline + "-webkit-box-sizing: "+$('.sizingType').val()+";" + newline + "box-sizing: "+ $('.sizingType').val() + ";");

            if (!hasSave) {
                hasSave = true;
                addNameField();
                addSaveButton('BoxSizing');
            }
        })
    }

    function outline() {
        $("#modal-container").show();
        var modalHead = "Generate Outline Offset CSS";
        var outlineThickness = "<label>Outline Thickness: </label>&nbsp;<input class='outlineThickness' type='number'>&nbsp;px</br>";
        var sizingType = "<b>Outline Type: </b><select class='outlineType' name='type'><option value='dotted'>Dotted</option><option value='dashed'>Dashed</option><option value='solid'>Solid</option><option value='Groove'>Groove</option><option value='ridge'>Ridge</option><option value='inset'>Inset</option><option value='outset'>Outset</option><option value='double'>Double</option><option value='auto'>Auto</option></select></br>";
        var outlineColor = "<b>Outline Color</b> &nbsp;<input class='hex-color' type='text'></br>";
        var outlineOffset = "<label>Outline Offset: </label>&nbsp;<input class='outlineOffset' type='number'>&nbsp;px</br>";
        var generateButton = "<button type='button' class='btn btn-default generate'>GO</button>";
        var txtArea = "<textarea id='txtarea' rows='10' cols='50' disabled></textarea>";
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append(modalHead);
        $('.modelContentBody').append(outlineThickness);
        $('.modelContentBody').append(sizingType);
        $('.modelContentBody').append(outlineColor);
        $('.modelContentBody').append(outlineOffset);
        $(".modelContentBody").append(generateButton);
        $(".modelContentBody").append(txtArea);
        $('.hex-color').hexColorPicker();
        $("body").toggleClass("dialogIsOpen");

        $('.generate').click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);

            var firstLine = "outline: " + $('.outlineThickness').val() + "px " + $('.outlineType').val() + " " + $('.hex-color').val() + ";" + newline + "outline-offset: " + $('.outlineOffset').val() + "px;";
            $('#txtarea').append(firstLine);

            $("#preview").attr('style', 'display: block; outline-offset:' + $('.outlineOffset').val() + 'px ;' + 'outline: ' + $('.hex-color').val() + ' ' + $('.outlineType').val() + ' ' + $('.outlineThickness').val() + 'px');
            if (!hasSave) {
                hasSave = true;
                addNameField()
                addSaveButton('Outline');
            }

        })
    }

    function transition() {
        $("#modal-container").show();
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append("Generate Transiotion CSS");
        $('.modelContentBody').append("<b>Property: </b><select class='property' name='type'><option value='all'>All</option><option value='background'>Background</option><option value='color'>Color</option><option value='height'>Height</option><option value='width'>Width</option><option value='outline'>Outline</option></select></br>");
        $('.modelContentBody').append("<label>Duration: </label>&nbsp;<input class='duration' type='number'>&nbsp;Milliseconds</br>");
        $('.modelContentBody').append("<b>Function: </b><select class='cssfunction' name='type'><option value='ease'>Ease</option><option value='linear'>Linear</option><option value='ease-in'>Ease-In</option><option value='ease-out'>Ease-Out</option><option value='ease-in-out'>Ease-In-Out</option><option value='outline'>Outline</option></select></br>");
        $(".modelContentBody").append("<button type='button' class='btn btn-default generate'>GO</button>");
        $(".modelContentBody").append("<textarea id='txtarea' rows='10' cols='50' disabled></textarea>");
        $("body").toggleClass("dialogIsOpen");

        $('.generate').click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);
            $('#txtarea').append("-webkit-transition: " + $('.property').val() + " " + $('.duration').val() + "ms " + $('.cssfunction').val() + ";" + newline + "-moz-transition: " + $('.property').val() + " " + $('.duration').val() + "ms " + $('.cssfunction').val() + ";" + newline + "-ms-transition: " + $('.property').val() + " " + $('.duration').val() + "ms " + $('.cssfunction').val() + ";" + newline + "-o-transition: " + $('.property').val() + " " + $('.duration').val() + "ms " + $('.cssfunction').val() + ";" + newline + "transition: " + $('.property').val() + " " + $('.duration').val() + "ms " + $('.cssfunction').val() + ";");
            $("#preview").show();

            $("#preview").hover(function () {
                $(this).css("background-color", "black");
                $(this).css("color", "white");
                $(this).css("height", "250px");
                $(this).css("width", "250px");
                $(this).css("outline", "#ff1b1b dotted 5px");
                $(this).css('transition', $('.property').val() + " " + $('.duration').val() + "ms " + $('.cssfunction').val());
            }, function () {
                $(this).attr('style', '');
                $(this).css('display', 'block');
                $(this).css('transition', 'all 500ms ease');
            });

            if (!hasSave) {
                hasSave = true;
                addNameField();
                addSaveButton('Transition');
            }
        })
    }

    function transform() {
        $("#modal-container").show();
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append("Generate Transform CSS");
        $('.modelContentBody').append("<label>Scale: </label>&nbsp;<input class='scale' type='number'></br>");
        $('.modelContentBody').append("<label>Rotate: </label>&nbsp;<input class='rotate' type='number'> degree</br>");
        $('.modelContentBody').append("<label>Translate: </label>&nbsp;<input class='translate1' type='number'>px <input class='translate2' type='number'>px</br>");
        $('.modelContentBody').append("<label>Skew: </label>&nbsp;<input class='skew1' type='number'>degree <input class='skew2' type='number'>degree</br>");
        $(".modelContentBody").append("<button type='button' class='btn btn-default generate'>GO</button>");
        $(".modelContentBody").append("<textarea id='txtarea' rows='10' cols='50' disabled></textarea>");
        $("body").toggleClass("dialogIsOpen");

        $('.generate').click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);
            $('#txtarea').append("-moz-transform: scale(" + $('.scale').val() + ") rotate(" + $('.rotate').val() + "deg) translateX(" + $('.translate1').val() + "px) skewX(" + $('.skew1').val() + "deg) skewy(" + $('.skew2').val() + "deg);" + newline + "-webkit-transform: scale(" + $('.scale').val() + ") rotate(" + $('.rotate').val() + "deg) translateX(" + $('.translate1').val() + "px) skewX(" + $('.skew1').val() + "deg) skewy(" + $('.skew2').val() + "deg);" + "-o-transform: scale(" + $('.scale').val() + ") rotate(" + $('.rotate').val() + "deg) translateX(" + $('.translate1').val() + "px) skewX(" + $('.skew1').val() + "deg) skewy(" + $('.skew2').val() + "deg);" + newline + "-ms-transform: scale(" + $('.scale').val() + ") rotate(" + $('.rotate').val() + "deg) translateX(" + $('.translate1').val() + "px) skewX(" + $('.skew1').val() + "deg) skewy(" + $('.skew2').val() + "deg);" + newline + "transform: scale(" + $('.scale').val() + ") rotate(" + $('.rotate').val() + "deg) translateX(" + $('.translate1').val() + "px) skewX(" + $('.skew1').val() + "deg) skewy(" + $('.skew2').val() + "deg);");
            $("#preview").show();
            $('#preview').css('top', '76%')
            $('#preview').attr('style', 'display:block;top:76%;' + "transform: scale(" + $('.scale').val() + ") rotate(" + $('.rotate').val() + "deg) translateX(" + $('.translate1').val() + "px) skewX(" + $('.skew1').val() + "deg) skewy(" + $('.skew2').val() + "deg);");

            if (!hasSave) {
                hasSave = true;
                addNameField();
                addSaveButton('Transform');
            }
        })
    }

    function addNameField() {

        //$(".modelContentBody").append(nameField);
    }

    function addSaveButton(type) {
        var div = $("<div>").attr('id', 'saveField');
        var nameField = "<label style='display: block'>Style Name: </label>&nbsp;<input class='text-info style-name' type='text'></br>";
        var saveButton = "<button type='button' class='btn btn-default save'>Save</button>";
        div.append(nameField);
        div.append(saveButton);
        $(".modelContentBody").append(div);
        $('.save').on('click', function () {
            saveStyle({
                name: $('.style-name').val(),
                type: type
            });
        })
    }

    function saveStyle(options) {
        $.ajax({
            method: 'POST',
            url: '/styles/add',
            data: {
                _token: $('meta[name=csrf-token]').attr('content'),
                name: options.name,
                type: options.type,
                code: $('textarea').text()
            },
            success: function (data) {
                noty({
                    theme: 'defaultTheme',
                    layout: 'top',
                    text: 'Saved new style',
                    type: 'success',
                    timeout: 2000
                });
                window.location.replace('/styles');
            },
            error: function (error) {
                var err = JSON.parse(error.responseText);
                if (error.status === 401) {
                    window.location.replace('/login');
                } else {
                    noty({
                        theme: 'defaultTheme',
                        layout: 'top',
                        text: err.errors,
                        type: 'error',
                        timeout: 2000
                    });
                }
            }
        })
    }

});
