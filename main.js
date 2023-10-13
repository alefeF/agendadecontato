const form = document.getElementById('form-contato')

let linhas = ' '

const nome = []


form.addEventListener('submit',function (e) { 
    e.preventDefault();

 adicionarlinha();
 atualizartabela(); 


        
});


function adicionarlinha(){
    const inputnome = document.getElementById( 'input-Nome')
    const inputnota = document.getElementById ('input-contato')

    if (nome.includes (inputnome.value)){
        alert(`vc ja colocou esse nome :${inputnome.value}`)
    } else {
        nome.push(inputnome.value)

        let linha = "<tr>"
        linha+= `<td> ${inputnome.value}</td>`
        linha+= ` <td> ${inputnota.value} </td>`
        linha+= "</tr>"
    
        linhas+= linha

        inputnome.value = ''
        inputnota.value = ' '

    }

   
}

function  atualizartabela() {
    const corpotabela = document.querySelector('tbody')

    corpotabela.innerHTML = linhas

}

console.log(form)
alert ('insira os nome e os contatos na agenda ')