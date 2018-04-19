// Определяем мобильный браузер
function MobileDetect() {
    var UA = navigator.userAgent.toLowerCase();
    return (/android|webos|iris|bolt|mobile|iphone|ipad|ipod|iemobile|blackberry|windows phone|opera mobi|opera mini/i.test(UA)) ? true : false;
}
jQuery(document).ready(function($) {
    // Если браузер не мобильный, работаем
    if (!MobileDetect()) {
        var

            $window = $(window), // Основное окно

            $target = $("#nav"), // Блок, который нужно фиксировать при прокрутке
            $target2 = $(".nav_menu-main"), // Блок, который нужно фиксировать при прокрутке
            $target3 = $(".menu-main"), // Блок, который нужно фиксировать при прокрутке

            $h = $target.offset().top; // Определяем координаты верха нужного блока (например, с навигацией или виджетом, который надо фиксировать)

        $window.on('scroll', function() {

            // Как далеко вниз прокрутили страницу
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
            if (scrollTop > $h) {

                $target.addClass("sheensay_fixed");
                $target2.addClass("resize_height");
                $target3.addClass("resize_padding");

                // Иначе возвращаем всё назад
            } else {

                $target.removeClass("sheensay_fixed");
                $target2.removeClass("resize_height");
                $target3.removeClass("resize_padding");
            }
        });
    }
});