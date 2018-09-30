$(function () {
    hljs.initHighlightingOnLoad();
});


function whiteoutCodeBackgroundOnHover() {
    $.when($.ready).then('pre code').each(function () {
        var parentPre = $(this).parent('pre');

        parentPre.hover(
            function () {
                $(this).css('background-color', '#ffffff');
            },
            function () {
                $(this).css('background-color', 'transparent');
            })

    });
}