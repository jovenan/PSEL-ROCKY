const icone = document.querySelector('.icone-menu')
const menu = document.querySelector('.menu')
const listItems = document.querySelectorAll('.menu li')
const arrowUp = document.querySelector('.fa-arrow-circle-o-up')
let bodyWidth = document.querySelector("body").clientWidth

//evento de clique no menu mobile.
icone.addEventListener('click', () => {
    menu.classList.toggle('active')
    icone.classList.toggle('fa-times')
    icone.classList.toggle('fa-bars')
})

//Salva largura da tela, se redimensionada.
window.addEventListener("resize", () => {
    bodyWidth = document.querySelector("body").clientWidth
})

//Captura evento de scroll.
window.addEventListener("scroll", (event) => {
    const navbar = document.querySelector('nav')
    let scroll = this.scrollY;

    //evento de mudar estilização do header ao scrollar.
    if (scroll > 50) {
        navbar.classList.add('active-menu-white')
    } else {
        navbar.classList.remove('active-menu-white')
    }

    //evento de aparecer o botao back-to-top.
    if (scroll > 100) {
        arrowUp.classList.add('active-visible')
    } else {
        arrowUp.classList.remove('active-visible')
    }
});

//evento para sumir com o menu ao clicar em uma opção no mobile.
listItems.forEach((item) => {
    item.addEventListener("click", () => {
        if (bodyWidth <= 650) {
            menu.classList.toggle('active')
            icone.classList.toggle('fa-times')
            icone.classList.toggle('fa-bars')
        }
    })
})

//Valida os dados do formulario.
const validaFormulario = () => {
    document.querySelector("#Enviar").addEventListener('click', (e) => {
        e.preventDefault();
        let mensagem = "";

        function validarEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        const inputs = document.querySelectorAll("input:not(#Enviar)")
        inputs.forEach((inputItem) => {
            console.log(inputItem.id)
            if(inputItem.value !== "") {
                inputItem.style.borderColor = 'green'
                mensagem = 'Mensagem enviada com sucesso!'
            } else {
                inputItem.style.borderColor = 'red'
                mensagem = 'Verifique os campos inseridos!'
            }
            if (inputItem.id === 'email') {
                if (validarEmail(email.value)) {
                    email.style.borderColor = 'green'
                    mensagem = 'Mensagem enviada com sucesso!'
                } else {
                    email.style.borderColor = 'red'
                    mensagem = 'Verifique os campos inseridos!'
                }
            }
        })
        alert(mensagem)
    })
}

validaFormulario()