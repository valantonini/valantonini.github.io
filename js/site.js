$(function(){
    //whiteoutCodeBackgroundOnHover();
});


function whiteoutCodeBackgroundOnHover(){
    $('pre code').each(function(){
        var parentPre = $(this).parent('pre');

        parentPre.hover(
            function(){
                $(this).css('background-color', '#ffffff');
            },
            function(){
                $(this).css('background-color', 'transparent');
            })

    });
}