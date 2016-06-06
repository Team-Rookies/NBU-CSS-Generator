$(document).ready(function () {
    $('.tableclick').click(function (e) {
        var style = $(e.target).prev().text();
        var type = $(e.target).prev().prev().text();
        var prev = '<div id="preview-saved">' +
            '<h3 id="preview-text">PREVIEW</h3>' +
        '</div>';
        var contentBody = $(".modelContentBody");


        $("#modal-container").show();
        $('.modal-container').attr('style', style);

        if(type === 'MultipleColumns') {
            contentBody.html("<hr><p class='textPreview'>All of you who are under the impression that cats are absolutely the best thing for the Internet—producing GIFs and memes galore—are bloody delusional. My 8lb house cat Franny almost destroyed a small section of your Internet last week, temporarily crippling one of the hands I use to type all your nightly posts.</br></br>Sunday, 4:00 AM: I'm at home. I've ordered nachos, delivery, and as I'm getting ready to eat them, my small cat Frances delivers a playful yet puncturing bite to the top of my left hand. I wash it off; I think nothing of it. I eat my nachos and go to sleep.</p><hr>");
            contentBody.attr('style', style);
        } else if(type === 'Transition') {
            contentBody.html(prev);
            var p = /;\s*transition: (\w+)/g
            var s = (p.exec(style))[1];
            $('#preview-saved').hover(function() {
                $(this).css(s, 'black');
            }, function() {
                $(this).css(s, 'white')
            });
            $('#preview-saved').attr('style', style);
        } else {
            contentBody.html(prev);
            $('#preview-saved').attr('style', style);
        }
    });
});

