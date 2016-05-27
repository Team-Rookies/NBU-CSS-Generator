var flag = false; 
$(document).ready(function () {
    $(".handler").each(function (index) {
        $(this).on("click", function (event) {
            event.stopPropagation();
            var element = $(this);
            var type = element.attr('type-modal');
            if(flag == false){
                flag = true;
                checkType(type);       
            }
            
        });
    });

    $('.close').on('click', function(){
        $(".modal-backdrop").css('display','none');
        $("#modal-container").css('display','none');
        flag = false;
    });


    function checkType(type) {
        console.log(type);
        switch (type) {
            case 'radius':
                createRadius();
                break;
            case 'shadow':
                console.log("shadow");
                break;
            case 'text-shadow':
                console.log("text-shadow");
                break;
            case 'rgba':
                console.log("RGBA");
                break;
            case 'font-face':
                console.log("font-face");
                break;
            case 'multiple-columns':
                console.log("multiple-columns");
                break;
            case 'box-resize':
                console.log("box-resize");
                break;
            case 'box-resizing':
                console.log("box-resizing");
                break;
            case 'outline':
                console.log("outline");
                break;
            case 'transition':
                console.log("transition");
                break;
            case 'transform':
                console.log("transform");
                break;
            case 'nothing':
                console.log("nothing");
                break;
            default:
                console.log("error");

        }

    }
    function createRadius(){ 
        $(".modal-backdrop").css('display','block');
        $("#modal-container").css('display','block');
        var topLeft = "Top Left &nbsp;<input class='topLeft' type='number'></input><label>&nbsp; px</label></br>";
        var topRight = "Top Right &nbsp;<input class='topRight' type='number'></input><label>&nbsp; px</label></br>";
        var bottomLeft ="Bottom Left &nbsp;<input class='bottomLeft' type='number'></input><label>&nbsp; px</label></br>";
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
        
        $(".generate").click(function(){
          $('#txtarea').empty();
          var newline = String.fromCharCode(13, 10);
          var partOne="-webkit-border-radius:" + $(".topLeft").val() + "px " + $(".topRight").val() + "px " + $(".bottomLeft").val() + "px " + $(".bottomRight").val() + "px;";
          var partTwo="border-radius:" + $(".topLeft").val() + "px " + $(".topRight").val() + "px " + $(".bottomLeft").val() + "px " + $(".bottomRight").val() + "px;";
          $('#txtarea').append(partOne);
          $('#txtarea').append(newline);
          $('#txtarea').append(partTwo);
        })
    }
});

function createBoxShadow(){
    
    
}

function textShadow(){
    
    
}

function rgba(){
    
    
}

function fontFace(){
    
    
}

function multipleColumns(){
    
    
}

function boxResize(){
    
    
}

function boxResizing(){
    
    
}