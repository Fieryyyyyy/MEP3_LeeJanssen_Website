$(document).ready(function () {
    $(".art").click(function (event) {
        event.preventDefault();
        let artId = $(this).data("art-url");
        if (!artId) return;
        let artLocation = "../images/art/" + artId;

        let win = window.open(artLocation, '_blank');
        if (win) win.focus();
    })
});