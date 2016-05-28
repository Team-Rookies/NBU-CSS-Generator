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
        $("#preview").css('display','none');
        flag = false;
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
                console.log("text-shadow");
                flag = false;
                break;
            case 'rgba':
                console.log("RGBA");
                flag = false;
                break;
            case 'font-face':
                console.log("font-face");
                flag = false;
                break;
            case 'multiple-columns':
                console.log("multiple-columns");
                flag = false;
                break;
            case 'box-resize':
                console.log("box-resize");
                flag = false;
                break;
            case 'box-resizing':
                console.log("box-resizing");
                flag = false;
                break;
            case 'outline':
                console.log("outline");
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
        var topLeft = "Top Left &nbsp;<input class='topLeft' type='number'></input><label>&nbsp; px</label></br>";
        var topRight = "Top Right &nbsp;<input class='topRight' type='number'></input><label>&nbsp; px</label></br>";
        var bottomLeft = "Bottom Left &nbsp;<input class='bottomLeft' type='number'></input><label>&nbsp; px</label></br>";
        var bottomRight = "Bottom Right &nbsp;<input class='bottomRight' type='number'></input><label>&nbsp; px</label></br>";
        var txtArea = "<textarea id='txtarea' rows='10' cols='50' disabled></textarea>"
        var generateButton = "<button type='button' class='btn btn-default generate'>GO</button>"
        $(".modelContentBody").empty();
        $(".modelContentBody").append(topLeft);
        $(".modelContentBody").append(topRight);
        $(".modelContentBody").append(bottomLeft);
        $(".modelContentBody").append(bottomRight);
        $(".modelContentBody").append(txtArea);
        $(".modelContentBody").append(generateButton);

        $(".generate").click(function () {
            $('#txtarea').empty();
            var newline = String.fromCharCode(13, 10);
            var partOne = "-webkit-border-radius:" + $(".topLeft").val() + "px " + $(".topRight").val() + "px " + $(".bottomLeft").val() + "px " + $(".bottomRight").val() + "px;";
            var partTwo = "border-radius:" + $('.topLeft').val() + 'px ' + $('.topRight').val() + 'px ' + $('.bottomLeft').val() + 'px ' + $('.bottomRight').val() + 'px;';
            $('#txtarea').append(partOne);
            $('#txtarea').append(newline);
            $('#txtarea').append(partTwo);
            $("#preview").css('display', 'block');
            $("#preview").css('border-radius',$(".topLeft").val() + "px " + $(".topRight").val() + "px " + $(".bottomLeft").val() + "px " + $(".bottomRight").val() + "px");
        })
    }
    function createBoxShadow() {
        $(".modal-backdrop").css('display', 'block');
        $("#modal-container").css('display', 'block');
        var inset = "Inset: &nbsp;<input class='inset' type='checkbox'></input></br>"
        var horizontalLength = "Horizontal Length &nbsp;<input class='horizontal-length' type='number'></input><label>&nbsp; px</label></br>";
        var verticalLength = "Vertical Length &nbsp;<input class='vertical-length' type='number'></input><label>&nbsp; px</label></br>";
        var blurRadius = "Blur Radius &nbsp;<input class='blur-radius' type='number'></input><label>&nbsp; px</label></br>";
        var spread = "Spread &nbsp;<input class='spread' type='number'></input><label>&nbsp; px</label></br>";
        var hexColor = "Hex Color &nbsp;<input class='hex-color' type='text'></input>";
        var txtArea = "<textarea id='txtarea' rows='10' cols='50' disabled></textarea>";
        var generateButton = "<button type='button' class='btn btn-default generate'>GO</button>";
        $(".modelContentBody").empty();
        $(".modelContentBody").append(inset);
        $(".modelContentBody").append(horizontalLength);
        $(".modelContentBody").append(verticalLength);
        $(".modelContentBody").append(blurRadius);
        $(".modelContentBody").append(spread);
        $(".modelContentBody").append(hexColor);
        $(".modelContentBody").append(txtArea);
        $(".modelContentBody").append(generateButton);
        $('.hex-color').hexColorPicker();
        $(".generate").click(function () {
            $('#txtarea').empty();
            var inset = $('.inset').val();
            var appInset = "";
            if ($('.inset').prop('checked')) { appInset = "inset " };


            var newline = String.fromCharCode(13, 10);
            var partOne = "-webkit-box-shadow:" + appInset + $(".horizontal-length").val() + "px " + $(".vertical-length").val() + "px " + $(".blur-radius").val() + "px " + $(".spread").val() + "px " + $(".hex-color").val() + ";";
            var partTwo = "box-shadow:" + appInset + $(".horizontal-length").val() + "px " + $(".vertical-length").val() + "px " + $(".blur-radius").val() + "px " + $(".spread").val() + "px "+ $(".hex-color").val() + ";";
            $('#txtarea').append(partOne);
            $('#txtarea').append(newline);
            $('#txtarea').append(partTwo);
            
            $("#preview").css('display', 'block');
            $("#preview").css('box-shadow',appInset + $(".horizontal-length").val() + "px " + $(".vertical-length").val() + "px " + $(".blur-radius").val() + "px " + $(".spread").val() + "px " + $(".hex-color").val());
        })
        
            
    }
    function textShadow() {


    }

    function rgba() {


    }

    function fontFace() {


    }

    function multipleColumns() {


    }

    function boxResize() {


    }

    function boxResizing() {


    }

});



