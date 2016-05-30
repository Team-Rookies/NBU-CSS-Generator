var flag = false;
$(document).ready(function () {
    $(".handler").each(function (index) {
        $(this).on("click", function (event) {
            event.stopPropagation();
            var element = $(this);
            var type = element.attr('type-modal');
            if (flag == false) {
                flag = true;
                checkType(type);
            }

        });
    });

    $('.close').on('click', function () {
        $(".modal-backdrop").css('display', 'none');
        $("#modal-container").css('display', 'none');
        $("#preview").removeAttr('style');
        $("#preview").css('display', 'none');
        $("body").removeClass("dialogIsOpen");
        flag = false;
    });
    $(document).mouseup(function (e) {
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
    });


    function checkType(type) {
        console.log(type);
        switch (type) {
            case 'radius':
                createRadius();
                flag = false;
                break;
            case 'shadow':
                createBoxShadow();
                flag = false;
                break;
            case 'text-shadow':
                textShadow();
                flag = false;
                break;
            case 'rgba':
                rgba();
                flag = false;
                break;
            case 'font-face':
                fontFace();
                flag = false;
                break;
            case 'multiple-columns':
                multipleColumns()
                flag = false;
                break;
            case 'box-resize':
                boxResize();
                flag = false;
                break;
            case 'box-resizing':
                boxSizing();
                flag = false;
                break;
            case 'outline':
                outline();
                flag = false;
                break;
            case 'transition':
                console.log("transition");
                flag = false;
                break;
            case 'transform':
                console.log("transform");
                flag = false;
                break;
            case 'nothing':
                console.log("nothing");
                flag = false;
                break;
            default:
                console.log("error");
                flag = false;

        }

    }
    function createRadius() {
        $(".modal-backdrop").css('display', 'block');
        $("#modal-container").css('display', 'block');
        var modalHead = "Generate Border Radius CSS";
        var topLeft = "Top Left &nbsp;<input class='topLeft' type='number'></input><label>&nbsp; px</label></br>";
        var topRight = "Top Right &nbsp;<input class='topRight' type='number'></input><label>&nbsp; px</label></br>";
        var bottomLeft = "Bottom Left &nbsp;<input class='bottomLeft' type='number'></input><label>&nbsp; px</label></br>";
        var bottomRight = "Bottom Right &nbsp;<input class='bottomRight' type='number'></input><label>&nbsp; px</label></br>";
        var txtArea = "<textarea id='txtarea' rows='10' cols='50' disabled></textarea>";
        var generateButton = "<button type='button' class='btn btn-default generate'>GO</button>";
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append(modalHead);
        $(".modelContentBody").append(topLeft);
        $(".modelContentBody").append(topRight);
        $(".modelContentBody").append(bottomLeft);
        $(".modelContentBody").append(bottomRight);
        $(".modelContentBody").append(txtArea);
        $(".modelContentBody").append(generateButton);
        $("body").toggleClass("dialogIsOpen");

        $(".generate").click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);
            var partOne = "-webkit-border-radius:" + $(".topLeft").val() + "px " + $(".topRight").val() + "px " + $(".bottomLeft").val() + "px " + $(".bottomRight").val() + "px;";
            var partTwo = "border-radius:" + $('.topLeft').val() + 'px ' + $('.topRight').val() + 'px ' + $('.bottomLeft').val() + 'px ' + $('.bottomRight').val() + 'px;';
            $('#txtarea').append(partOne);
            $('#txtarea').append(newline);
            $('#txtarea').append(partTwo);
            $("#preview").css('display', 'block');
            $("#preview").css('border-radius', $(".topLeft").val() + "px " + $(".topRight").val() + "px " + $(".bottomLeft").val() + "px " + $(".bottomRight").val() + "px");
        })
    }
    function createBoxShadow() {
        $(".modal-backdrop").css('display', 'block');
        $("#modal-container").css('display', 'block');
        var modalHead = "Generate Box Shadow CSS";
        var inset = "Inset: &nbsp;<input class='inset' type='checkbox'></input></br>"
        var horizontalLength = "Horizontal Length &nbsp;<input class='horizontal-length' type='number'></input><label>&nbsp; px</label></br>";
        var verticalLength = "Vertical Length &nbsp;<input class='vertical-length' type='number'></input><label>&nbsp; px</label></br>";
        var blurRadius = "Blur Radius &nbsp;<input class='blur-radius' type='number'></input><label>&nbsp; px</label></br>";
        var spread = "Spread &nbsp;<input class='spread' type='number'></input><label>&nbsp; px</label></br>";
        var hexColor = "Hex Color &nbsp;<input class='hex-color' type='text'></input>";
        var txtArea = "<textarea id='txtarea' rows='10' cols='50' disabled></textarea>";
        var generateButton = "<button type='button' class='btn btn-default generate'>GO</button>";
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append(modalHead);
        $(".modelContentBody").append(inset);
        $(".modelContentBody").append(horizontalLength);
        $(".modelContentBody").append(verticalLength);
        $(".modelContentBody").append(blurRadius);
        $(".modelContentBody").append(spread);
        $(".modelContentBody").append(hexColor);
        $(".modelContentBody").append(txtArea);
        $(".modelContentBody").append(generateButton);
        $('.hex-color').hexColorPicker();
        $('#txtarea').css('bottom', '-28px');
        $("body").toggleClass("dialogIsOpen");

        $(".generate").click(function () {
            $('#txtarea').empty();
            var inset = $('.inset').val();
            var appInset = "";
            if ($('.inset').prop('checked')) {
                appInset = "inset "
            }
            ;


            var newline = String.fromCharCode(13, 10);
            var partOne = "-webkit-box-shadow:" + appInset + $(".horizontal-length").val() + "px " + $(".vertical-length").val() + "px " + $(".blur-radius").val() + "px " + $(".spread").val() + "px " + $(".hex-color").val() + ";";
            var partTwo = "box-shadow:" + appInset + $(".horizontal-length").val() + "px " + $(".vertical-length").val() + "px " + $(".blur-radius").val() + "px " + $(".spread").val() + "px " + $(".hex-color").val() + ";";
            $('#txtarea').append(partOne);
            $('#txtarea').append(newline);
            $('#txtarea').append(partTwo);
            $("#preview").css('display', 'block');
            $("#preview").css('box-shadow', appInset + $(".horizontal-length").val() + "px " + $(".vertical-length").val() + "px " + $(".blur-radius").val() + "px " + $(".spread").val() + "px " + $(".hex-color").val());
        })
    }
    function textShadow() {
        $(".modal-backdrop").css('display', 'block');
        $("#modal-container").css('display', 'block');
        var modalHead = "Generate Text Shadow CSS";
        var horizontalLength = "Horizontal Length &nbsp;<input class='horizontal-length' type='number'></input><label>&nbsp; px</label></br>";
        var verticalLength = "Vertical Length &nbsp;<input class='vertical-length' type='number'></input><label>&nbsp; px</label></br>";
        var blurRadius = "Blur Radius &nbsp;<input class='blur-radius' type='number'></input><label>&nbsp; px</label></br>";
        var hexColor = "Hex Color &nbsp;<input class='hex-color' type='text'></input>";
        var txtArea = "<textarea id='txtarea' rows='10' cols='50' disabled></textarea>";
        var generateButton = "<button type='button' class='btn btn-default generate'>GO</button>";
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append(modalHead);
        $(".modelContentBody").append(horizontalLength);
        $(".modelContentBody").append(verticalLength);
        $(".modelContentBody").append(blurRadius);
        $(".modelContentBody").append(hexColor);
        $(".modelContentBody").append(txtArea);
        $(".modelContentBody").append(generateButton);
        $('.hex-color').hexColorPicker();
        $('#txtarea').css('bottom', '-28px');
        $("body").toggleClass("dialogIsOpen");

        $(".generate").click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);
            var partOne = "text-shadow: " + $(".horizontal-length").val() + "px " + $(".vertical-length").val() + "px " + $(".blur-radius").val() + "px " + $(".hex-color").val() + ";";
            $('#txtarea').append(partOne);
            $("#preview").css('display', 'block');
            $("#preview").css('text-shadow', $(".horizontal-length").val() + "px " + $(".vertical-length").val() + "px " + $(".blur-radius").val() + "px " + $(".hex-color").val());
        })



    }

    function rgba() {
        $(".modal-backdrop").css('display', 'block');
        $("#modal-container").css('display', 'block');
        var modalHead = "Generate RGBA CSS";
        var r = "<b>R</b> &nbsp;<input class='r' type='number'></input></br>";
        var g = "<b>G</b> &nbsp;<input class='g' type='number'></input></br>";
        var b = "<b>B</b> &nbsp;<input class='b' type='number'></input></br>";
        var opacity = "Opacity &nbsp;<input class='opacity' type='number'></input></br>";
        var txtArea = "<textarea id='txtarea' rows='10' cols='50' disabled></textarea>";
        var generateButton = "<button type='button' class='btn btn-default generate'>GO</button>";
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append(modalHead);
        $(".modelContentBody").append(r);
        $(".modelContentBody").append(g);
        $(".modelContentBody").append(b);
        $(".modelContentBody").append(opacity);
        $(".modelContentBody").append(txtArea);
        $(".modelContentBody").append(generateButton);
        $("body").toggleClass("dialogIsOpen");

        $(".generate").click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);
            var partOne = "background-color: rgba(" + $(".r").val() + ", " + $(".g").val() + ", " + $(".b").val() + ", " + $(".opacity").val() + ");";
            var partTwo = "color: rgba(" + $(".r").val() + ", " + $(".g").val() + ", " + $(".b").val() + ", " + $('.opacity').val() + ");";
            $('#txtarea').append(partOne);
            $('#txtarea').append(newline);
            $('#txtarea').append(partTwo);
            $("#preview").css('display', 'block');
            $("#preview").css('text-decoration', 'bold');
            $("#preview").css('background-color', 'rgba(' + $('.r').val() + ', ' + $('.g').val() + ', ' + $('.b').val() + ', ' + $('.opacity').val() + ')');
        })
    }
    function fontFace() {
        $('.modal-backdrop').css('display', 'block');
        $('#modal-container').css('display', 'block');
        var modalHead = "Generate Font-Face CSS";
        var fontFace = "<label>Font Face</label>&nbsp;<input class='fontFamily' type='text'></input></br>";
        var fontName = "<label>Font Face</label>&nbsp;<input class='fontName' type='text'></input></br>";
        var txtArea = "<textarea id='txtarea' rows='10' cols='50' disabled></textarea>";
        var generateButton = "<button type='button' class='btn btn-default generate'>GO</button>";
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append(modalHead);
        $('.modelContentBody').append(fontFace);
        $('.modelContentBody').append(fontName);
        $(".modelContentBody").append(txtArea);
        $(".modelContentBody").append(generateButton);
        $("body").toggleClass("dialogIsOpen");

        $('.generate').click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);
            var firstLine = "@font-face {" + newline;
            var secondLine = "&#9;font-family: &quot;" + $('.fontFamily').val() + "&quot; ;" + newline;
            var thridLine = '&#9;src: url("' + $('.fontName').val() + '.eot") format("eot"),' + newline;
            var fourth = '&#9;url("' + $('.fontName').val() + '.woff") format("woff"),' + newline;
            var fifth = '&#9;url("' + $('.fontName').val() + '.ttf") format("truetype"),' + newline + "}";
            $('#txtarea').append(firstLine);
            $('#txtarea').append(secondLine);
            $('#txtarea').append(thridLine);
            $('#txtarea').append(fourth);
            $('#txtarea').append(fifth);
        })
    }

    function multipleColumns() {
        $('.modal-backdrop').css('display', 'block');
        $('#modal-container').css('display', 'block');
        var modalHead = "Generate Multiple Columns CSS";
        var numbColumns = "<label># of columns</label>&nbsp;<input class='numbColumns' type='number'></input></br>";
        var gap = "<label>Column Gap</label>&nbsp;<input class='gap' type='text'></input></br>";
        var txtArea = "<textarea id='txtarea' rows='10' cols='50' disabled></textarea>";
        var textPreview = "<hr><p class='textPreview'>All of you who are under the impression that cats are absolutely the best thing for the Internet—producing GIFs and memes galore—are bloody delusional. My 8lb house cat Franny almost destroyed a small section of your Internet last week, temporarily crippling one of the hands I use to type all your nightly posts.</br></br>Sunday, 4:00 AM: I'm at home. I've ordered nachos, delivery, and as I'm getting ready to eat them, my small cat Frances delivers a playful yet puncturing bite to the top of my left hand. I wash it off; I think nothing of it. I eat my nachos and go to sleep.</p><hr>";
        var generateButton = "<button type='button' class='btn btn-default generate'>GO</button>";
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append(modalHead);
        $('.modelContentBody').append(numbColumns);
        $('.modelContentBody').append(gap);
        $(".modelContentBody").append(txtArea);
        $(".modelContentBody").append(generateButton);
        $(".modelContentBody").append(textPreview);
        $("body").toggleClass("dialogIsOpen");

        $('.generate').click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);
            var firstLine = "-moz-column-count: " + $('.numbColumns').val() + ";" + newline;
            var secondLine = "-moz-column-gap: " + $('.numbColumns').val() + ";" + newline;
            var thridLine = "-webkit-column-count: " + $('.numbColumns').val() + ";" + newline;
            var fourth = "-webkit-column-gap: " + $('.gap').val() + 'px;' + newline;
            var fifth = "column-count: " + $('.numbColumns').val() + ';' + newline;
            var sixth = "column-gap: " + $('.gap').val() + "px;";
            $('#txtarea').append(firstLine);
            $('#txtarea').append(secondLine);
            $('#txtarea').append(thridLine);
            $('#txtarea').append(fourth);
            $('#txtarea').append(fifth);
            $('#txtarea').append(sixth);
            $('.textPreview').css('column-count', $('.numbColumns').val());
            $('.textPreview').css('column-gap', $('.gap').val() + "px");

        })

    }

    function boxResize() {
        $('.modal-backdrop').css('display', 'block');
        $('#modal-container').css('display', 'block');
        var modalHead = "Generate Box Resize CSS";
        var resizeType = "<b>Box Resize Type: </b><select class='resizeType' name='type'><option value='none'>NONE</option><option value='horizontal'>Horizontal</option><option value='vertical'>Vertical</option> <option value='both'>Both</option> </select></br>";
        var minWidth = "<b>Min-Width: </b> <input class='minWidth' type='number'></input></br>";
        var minHeight = "<b>Min-Height: </b> <input class='minHeight' type='number'></input></br>";
        var generateButton = "<button type='button' class='btn btn-default generate'>GO</button>";
        var txtArea = "<textarea id='txtarea' rows='10' cols='50' disabled></textarea>";
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append(modalHead);
        $('.modelContentBody').append(resizeType);
        $('.modelContentBody').append(minWidth);
        $(".modelContentBody").append(minHeight);
        $(".modelContentBody").append(generateButton);
        $(".modelContentBody").append(txtArea);
        $("body").toggleClass("dialogIsOpen");

        $('.generate').click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);
            var firstLine = "resize: " + $('.resizeType').val() + ";" + newline;
            var secondLine = "overflow: auto;" + newline;
            var thridLine = 'min-width: ' + $('.minWidth').val() + 'px;' + newline;
            var fourth = 'min-height: ' + $('.minHeight').val() + 'px;' + newline;
            $('#txtarea').append(firstLine);
            $('#txtarea').append(secondLine);
            $('#txtarea').append(thridLine);
            $('#txtarea').append(fourth);
            $("#preview").css('display', 'block');
            $("#preview").css('resize', $(".resizeType").val());
            $("#preview").css('width', $('.minWidth').val() + 'px');
            $("#preview").css('height', $('.minHeight').val() + 'px');
        })

    }

    function boxSizing() {
        $('.modal-backdrop').css('display', 'block');
        $('#modal-container').css('display', 'block');
        var modalHead = "Generate Box Sizing CSS";
        var sizingType = "<b>Box Sizing: </b><select class='sizingType' name='type'><option value='none'>NONE</option><option value='content-box'>Content Box</option><option value='border-box'>Border Box</option></select></br>";
        var generateButton = "<button type='button' class='btn btn-default generate'>GO</button>";
        var txtArea = "<textarea id='txtarea' rows='10' cols='50' disabled></textarea>";
        $(".modelContentBody").empty();
        $('.modal-head-h3').empty();
        $('.modal-head-h3').append(modalHead);
        $('.modelContentBody').append(sizingType);
        $(".modelContentBody").append(generateButton);
        $(".modelContentBody").append(txtArea);
        $("body").toggleClass("dialogIsOpen");

        $('.generate').click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);

            if ($('.sizingType').val() == "content-box") {
                var firstLine = "-moz-box-sizing: content-box;" + newline + "-webkit-box-sizing: content-box;" + newline + "box-sizing: content-box;";
            } else if ($('.sizingType').val() == "border-box") {
                var firstLine = "-moz-box-sizing: border-box;" + newline + "-webkit-box-sizing: border-box;" + newline + "box-sizing: border-box;";
            } else {
                $('#txtarea').empty();
            }
            $('#txtarea').append(firstLine);
        })
    }

    function outline() {
        $('.modal-backdrop').css('display', 'block');
        $('#modal-container').css('display', 'block');
        var modalHead = "Generate Outline Offset CSS";
        var outlineThickness = "<label>Outline Thickness: </label>&nbsp;<input class='outlineThickness' type='number'></input>&nbsp;px</br>";
        var sizingType = "<b>Outline Type: </b><select class='outlineType' name='type'><option value='dotted'>Dotted</option><option value='dashed'>Dashed</option><option value='solid'>Solid</option><option value='Groove'>Groove</option><option value='ridge'>Ridge</option><option value='inset'>Inset</option><option value='outset'>Outset</option><option value='double'>Double</option><option value='auto'>Auto</option></select></br>";
        var outlineColor = "<b>Outline Color</b> &nbsp;<input class='hex-color' type='text'></input></br>";
        var outlineOffset = "<label>Outline Offset: </label>&nbsp;<input class='outlineOffset' type='number'></input>&nbsp;px</br>";
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

        })
    }

});



