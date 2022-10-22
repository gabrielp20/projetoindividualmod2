const cod = document.querySelector("#cod");
const decod = document.querySelector("#decod");
const button = document.querySelector("#btn");
const seletor = document.querySelector("select")
const typelanguage = document.querySelector('#typelanguage');
const incremento = document.querySelector('#incremento');
const mensagem = document.querySelector('#message');
const result = document.querySelector('#result');

/* Mostrar e Ocultar campo de incremento  */
typelanguage.addEventListener("change", function () {
  typelanguage.value == "base" ? incremento.style.display = 'none' : incremento.style.display = 'inline'
});

/* Função para o botão que, com "codificar" selecionado exibe o texto "Codificar 
Mensagem!" e com "decodificar" selecionado exibe "Decodificar Mensagem!" */

function textoBtn() {

  if (decod.checked) {
    button.innerText = 'Decodificar Mensagem!'
  } else if (cod.checked) {
    button.innerText = 'Codificar Mensagem!'
  }
}

/////////////////////////////////

// incremento //

const valor = document.querySelector("#valor")

button.addEventListener("click", function (e) {
  e.preventDefault();

  if (cod.checked && seletor.value == "cifra") {
    result.value = cifra(parseInt(valor.value), message.value)
    //codificar cifra//
  } else if (cod.checked && seletor.value == "base") {
    result.value = encodingBase64(message.value)
    //codificar base 64/
  } else if (decod.checked && seletor.value == "cifra") {
    result.value = decifra(parseInt(valor.value), message.value)
    //decodificar cifra//
  } else if (decod.checked && seletor.value == "base") {
    result.value = decodingBase64(message.value)
    //decodificar base//
  }
});

function cifra(valor, mensagem) {

  let encoded = ""
  let code = 0

  for (let i = 0; i < mensagem.length; i++) {
    if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
      code = (((mensagem.charCodeAt(i) - 65) + valor) % 26) + 65;
    } else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
      code = (((mensagem.charCodeAt(i) - 97) + valor) % 26) + 97;
    } else if (mensagem.charCodeAt(i) == 32) {
      code = 32
    }
    encoded += String.fromCharCode(code)
  }

  return encoded;
}

function decifra(valor, mensagem) {
  let encoded = ""
  let code = 0

  for (let i = 0; i < mensagem.length; i++) {

    if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
      if ((mensagem.charCodeAt(i) - 65) - valor < 0) {
        code = (((mensagem.charCodeAt(i) - 65) - valor + 26) % 26) + 65;
      } else {
        code = (((mensagem.charCodeAt(i) - 65) - valor) % 26) + 65;
      }

    } else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
      if ((mensagem.charCodeAt(i) - 97) - valor < 0) {
        code = (((mensagem.charCodeAt(i) - 97) - valor + 26) % 26) + 97;
      } else {
        code = (((mensagem.charCodeAt(i) - 97) - valor) % 26) + 97;
      }

    } else if (mensagem.charCodeAt(i) == 32) {
      code = 32
    }
    encoded += String.fromCharCode(code)
  }
  return encoded;
}


function encodingBase64(mensagem) {
  return btoa(mensagem);
}

function decodingBase64(mensagem) {
  return atob(mensagem);
}
