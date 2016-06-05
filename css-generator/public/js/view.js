$(document).ready(function () {
    $('.tableclick').mouseenter(function () {
        var id = $(this).attr("styleid");
        var type = $('.' + id).text();
        console.log(type);

        switch (type) {
            case 'BorderRadius':
                $('#preview').attr('style', "display: block; " + $("#" + id).text());
                break;
            case 'BoxShadow':
                $('#preview').attr('style', "display: block; " + $("#" + id).text());
                break;
            case 'TextShadow':
                $('#preview').attr('style', "display: block; " + $("#" + id).text());
                break;
            case 'RGBA':
                $('#preview').attr('style', "display: block; " + $("#" + id).text());
                break;
            case 'FontFace':
                $(this).html('N/A');
                break;
            case 'MultipleColumns':
                $("#modal-container").show();
                $(".modelContentBody").empty();
                $('.modal-container').attr('style', "display: block; " + $("#" + id).text());
                $(".modelContentBody").append("<hr><p class='textPreview'>All of you who are under the impression that cats are absolutely the best thing for the Internet—producing GIFs and memes galore—are bloody delusional. My 8lb house cat Franny almost destroyed a small section of your Internet last week, temporarily crippling one of the hands I use to type all your nightly posts.</br></br>Sunday, 4:00 AM: I'm at home. I've ordered nachos, delivery, and as I'm getting ready to eat them, my small cat Frances delivers a playful yet puncturing bite to the top of my left hand. I wash it off; I think nothing of it. I eat my nachos and go to sleep.</p><hr>");
                $('.modelContentBody').attr('style', "display: block; " + $("#" + id).text());
                break;
            case 'BoxResize':
                $('#preview').attr('style', "display: block; " + $("#" + id).text());
                break;
            case 'BoxSizing':
                $(this).html('N/A');
                break;
            case 'Outline':
                $('#preview').attr('style', "display: block; " + $("#" + id).text());
                break;
            case 'Transition':
                $(this).html('N/A');
                break;
            case 'transform':
                $(this).html('N/A');
                break;
            case 'nothing':
                console.log("nothing");
                break;
            default:
                console.log("error");

        }



    }), $('.tableclick').mouseleave(function () {
        $('#preview').hide();
        $("#modal-container").hide();
    }

    )
})

