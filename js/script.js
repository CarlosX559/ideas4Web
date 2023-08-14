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

function teste() {
    let mais = document.querySelectorAll('.mais');
    let title = document.querySelectorAll('.sub_title_servicos');
    let teste = document.querySelectorAll('.mais p');

    for (let i = 0; i < mais.length; i++) {

        mais[i].addEventListener("click", () => {

            if (mais[i].classList.contains("close")) {
                mais[i].classList.toggle("close");
                title[i].classList.toggle("open");
                teste[i].innerText = "+";
            } else {
                mais[i].classList.add("close");
                title[i].classList.add("open");
                teste[i].innerText = "-";

            }

        });

    }

}
teste();
/*if( mais[0].classList.contains("title1") ) {
    title[0].style.height = 'auto';
    
}else {

}*/
