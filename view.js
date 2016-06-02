var flag = false;
$(document).ready(function () {
    $(".viehandler").each(function (index) {
        $(this).on("click", function (event) {
            event.stopPropagation();
            var element = $(this);
            var type = element.attr('viewstyle');
            if (flag == false) {
                flag = true;
                checkType(type);
            }

        });
    });


    function checkType(type) {
        console.log(type);
        switch (type) {
            case 'radius':
                console.log("style1");
                flag = false;
                break;
            case 'shadow':
                console.log("nothing");
                flag = false;
                break;
            case 'text-shadow':
                console.log("nothing");
                flag = false;
                break;
            case 'rgba':
                console.log("nothing");
                flag = false;
                break;
            case 'font-face':
                console.log("nothing");
                flag = false;
                break;
            case 'multiple-columns':
                console.log("nothing");
                flag = false;
                break;
            case 'box-resize':
                console.log("nothing");
                flag = false;
                break;
            case 'box-resizing':
                console.log("nothing");
                flag = false;
                break;
            case 'outline':
                console.log("nothing");
                flag = false;
                break;
            case 'transition':
                console.log("nothing");
                flag = false;
                break;
            case 'transform':
                console.log("nothing");
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
    
    

});
