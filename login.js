function cadastrar() {
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var senha = document.getElementById('senha').value

  if (nome == '' || email == '' || senha == '') {
    alert('prencha todos os campos')
    return
  }

  alert('Usuário cadastrado com sucesso!')
  alert(nome)
}

function logar() {
  const erro = document.querySelector('#erro')
  var login = document.getElementById('login').value
  var senha = document.getElementById('senha').value
  if (login == '' || senha == '') {
    erro.textContent = 'erro prencha todos os campos'
  } else {
    if (login == 'admin' && senha == 123) {
      alert('senha correta')
      location.href = 'home.html'
    } else {
      erro.textContent = 'erro senha e usuario invalido'
    }
  }
}

function direcionar() {
  location.href = 'cadastrar.html'
}
