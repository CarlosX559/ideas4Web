function menu() {
    $(".menu_open").click(
        function () {

            $('#container_menu').css('display', 'flex').css('left', '0px').css('animation', 'move ease-in 400ms');

        }
    );

    $(".close").click(
        function () {
            $('#container_menu').css('left', '-100%').css('animation', 'move ease-out 400ms;');
        }
    );

    $(".area_menu nav ul a li").click(
        function () {
            $('#container_menu').css('left', '-100%').css('animation', 'move ease-out 400ms;');
        }
    );

}
menu();