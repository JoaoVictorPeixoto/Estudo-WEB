function olaMundo(){
    console.log('Olá, Mundo!');
}

function trocaPosicao(){
    let botao = document.getElementById('trocaPosicao')
        , cordenadas_botao = botao.getBoundingClientRect()
        , eixo_x
        , eixo_y
        , windows =this.screen
    ;

    eixo_x = Math.floor(Math.random() * (windows.width));
    eixo_y = Math.floor(Math.random() * (windows.height));

    eixo_x = eixo_x > 600 ? 600 : eixo_x
    eixo_y = eixo_y > 800 ? 800 : eixo_y

    botao.style.position = 'Absolute'
    botao.style.top = `${eixo_y}px`;
    botao.style.left = `${eixo_x}px`;
    
}

function boraCasar(){

    let titulo = document.createElement("h1")
        , texto = document.createTextNode('Então bora casar amor, já estamos noivos!');
    ;
    
    titulo.appendChild(texto);

    let div_principal = document.getElementById('div_principal');
    div_principal.innerText = ''
    div_principal.className = 'fraseFinal'
    div_principal.appendChild(titulo);

    
    this.setTimeout(() => {
        div_principal.innerText = ''
    }, 15000);
    

    
}