$("#show").click(function (e) {
    e.preventDefault();
    $(".popup_container").fadeIn(900);
    // window.history.pushState({ page: 1 }, "titel1", "index.html")

    window.history.pushState({ page: 2 }, "title", "new_form_url.html")
    console.log(window.history.length);
});

function hidePopup() {
    $(".popup_container").fadeOut(900);
    
}

$("#hide").click(function (e) {
    e.preventDefault();
    $(".popup_container").fadeOut(900);
   
});

$(function () {

    $(".ajaxForm").submit(function (e) {
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function (response) {

                if (response.status == "success") {
                    alert("Заявка принята!");
                } else {
                    alert("Произошла ошибка при отправлении: " + response.message);
                }
                hidePopup();
            }

        });

    });

});

$(window).on("popstate", function () {
    hidePopup();
});
