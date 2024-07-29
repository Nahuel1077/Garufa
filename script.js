document.getElementById("btnSubmit").addEventListener("click", send);

function send(){
    alert("¡Su mensaje ha sido enviado! Uno de nuestros agentes se pondrá en contacto con usted a la brevedad. Muchas gracias.");
};

document.getElementById("btnProduct").addEventListener("click", getEmail);

function getEmail(){
    input("Un agente se contactará con usted. Ingrese su e-mail");
    alert("¡Muchas gracias!");
};

const btnPedidos = document.getElementById("btnPedidos");

        function pedido() {
            const email = prompt("Ingrese su e-mail");
            if (email) {
                alert("¡Su pedido ha sido solicitado! En breve se contactarán con usted con más información. Muchas gracias.");
            } else {
                alert("Por favor, ingrese un e-mail válido.");
            }
        };
        btnPedidos.addEventListener("click", pedido);