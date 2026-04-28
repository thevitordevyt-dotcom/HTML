// Array para armazenar os usuários
let usuarios = [];

// Função para cadastrar um novo usuário
function cadastrar(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  if (nome && email) {
    const usuario = {
      id: Date.now(),
      nome: nome,
      email: email,
    };

    usuarios.push(usuario);
    limparCampos();
    listarUsuarios();
  }
}

// Função para listar os usuários na tela
function listarUsuarios() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  usuarios.forEach((usuario) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span><strong>${usuario.nome}</strong> - ${usuario.email}</span>
            <div class="botoes-usuario">
                <button onclick="editarUsuario(${usuario.id})"> Editar</button>
                <button onclick="deletarUsuario(${usuario.id})"> Excluir</button>
            </div>
        `;
    lista.appendChild(li);
  });
}

// Função para editar um usuário
function editarUsuario(id) {
  const usuario = usuarios.find((u) => u.id === id);
  if (usuario) {
    const novoNome = prompt("Editar nome:", usuario.nome);
    const novoEmail = prompt("Editar email:", usuario.email);

    if (novoNome && novoEmail) {
      usuario.nome = novoNome;
      usuario.email = novoEmail;
      listarUsuarios();
    }
  }
}

// Função para deletar um usuário
function deletarUsuario(id) {
  usuarios = usuarios.filter((u) => u.id !== id);
  listarUsuarios();
}

// Função para limpar os campos do formulário
function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}
