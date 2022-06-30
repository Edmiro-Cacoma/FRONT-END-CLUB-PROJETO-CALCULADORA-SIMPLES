
let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case 'C':
                display.innerHTML = '';
                break;

            case 'Del':
                if (display.innerHTML) {
                    display.innerHTML = display.innerHTML.slice(0, -1);
                } break;

                case '=':
                    try{
                        display.innerHTML = eval(display.innerHTML);
                    } catch{
                        display.innerHTML = 'Erro';
                    }break;

                    default:
                        display.innerHTML += e.target.innerHTML;
        }
    })
})