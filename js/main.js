$(function () {
    // init sideNav
    $(".button-collapse").sideNav();
    //    init modals
    $(".modal").modal();
    //    scrollfire
    var options = [
        {
            selector: ".row-1",
            offset: 50,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: ".row-2",
            offset: 300,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: ".row-3",
            offset: 400,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        }
    ];
    Materialize.scrollFire(options);

//  ajax rules for the pages
    $(".logosPage").on("click", function (e) {
        e.preventDefault();
        $.ajax({
            url: "logos.html",
            cache:false,
            success: function (data) {
                $("body").html(data)

            }, error: function (error) {
                console.log(error)
            }
        })
    });
    $(".mainPage").on("click", function (e) {
        e.preventDefault();
        $.ajax({
            url: "index.html",
            cache:false,
            success: function (data) {
                $("body").html(data)

            }, error: function (error) {
                console.log(error)
            }
        });
    });


});
