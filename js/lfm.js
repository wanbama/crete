$(document).ready(function() {

    $(".cms-lfm").each(function(index) {
        $("#" + $(this).attr("id")).filemanager("image");
    });

    $(".cms-youtube").on("click", function() {
        const getQueryParams = (params, url) => {
            let href = url;
            let reg = new RegExp("[?&]" + params + "=([^&#]*)", "i");
            let queryString = reg.exec(href);
            return queryString ? queryString[1] : null;
        };

        let path = $("#" + $(this).attr("data-input")).val();
        let preview_id = $(this).attr("data-preview");
        let id = getQueryParams("v", path);
        $("#" + preview_id).html(
            '<iframe width="100%" height="315" src="https://www.youtube.com/embed/' +
            id +
            '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        );
    });

    $(".cms-active-selector, .cms-highlight-selector").on("change", function() {
        let old = parseInt($(this).attr("data-old"));
        let now = parseInt($(this).val());
        if (old != now) {
            $(this)
                .parent("form")
                .submit();
        }
    });

    $(".cms-position-input").on("change", function() {
        let old = parseInt($(this).attr("data-old"));
        let now = parseInt($(this).val());
        if (old != now && now > 0) {
            $(this)
                .parent("form")
                .submit();
        }
    });

    $(".cms-delete-form .cms-delete-btn").on("click", function(e) {
        e.preventDefault();
        var r = confirm("Confirm?");
        if (r == true) {
            $(this).parent("form").submit();
        }
    });

});