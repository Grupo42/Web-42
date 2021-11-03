function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
    document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    // não vai enviar o formulário
    event.preventDefault()
})
  const email = document.forms[0].email.value;
  const nome = document.forms[0].nome.value;
  let result;
  let color;

  if (validateEmail(email)) {
    result = nome + " o seu contato foi enviado com sucesso!";
    document.getElementById('email').style.color = 'green';
  } else {
    result = email + " não é válido!";
    document.getElementById('email').style.color = 'red';
  }
  alert(result)
}

