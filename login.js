function cadastrar() {
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var senha = document.getElementById('senha').value

  if (nome == '' || email == '' || senha == '') {
    alert('prencha todos os campos')
    return
  }
  var usuario = {
    nome: nome,
    email: email,
    senha: senha
  }
  alert('Usuário cadastrado com sucesso!')
  alert(nome)
}

function logar() {
  var login = document.getElementById('login').value
  var senha = document.getElementById('senha').value
  if (login == '' || senha == '') {
    alert('por favor prenchar todos os campos para logar')
  } else {
    if (login == nome && senha == senha) {
      alert('senha correta')
      location.href = 'home.html'
    } else {
      alert('senha incorreta tenta novamente')
    }
  }
}

function direcionar() {
  location.href = 'cadastrar.html'
}
