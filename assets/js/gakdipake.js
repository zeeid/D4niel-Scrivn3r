var cookieName = 'newslettermodalClosed';

if (typeof Cookies.get(cookieName) !== 'undefined') {
    $('.modal-main-4').remove();
}

$('.email-close-1, .form-btn-3').click(() => {
    Cookies.set(cookieName, 'ok', {
        expires: 30
    });
})

// =========================
! function(o, c) {
    var n = c.documentElement,
        t = " w-mod-";
    n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n
        .className += t + "touch")
}(window, document);