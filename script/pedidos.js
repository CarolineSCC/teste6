const cadastrarBtn = document.getElementById("cadastrar");

cadastrarBtn.addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const cor = document.getElementById("cor").value;

  if (!nome || !email) {
    alert("Preencha todos os campos!");
    return;
  }

  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  const dataAtual = new Date(); // pega a data e hora atual
  const dataFormatada = `${dataAtual.getDate().toString().padStart(2,'0')}/${(dataAtual.getMonth()+1).toString().padStart(2,'0')}/${dataAtual.getFullYear()} ${dataAtual.getHours().toString().padStart(2,'0')}:${dataAtual.getMinutes().toString().padStart(2,'0')}`;

  const novoPedido = {
    nome,
    email,
    cor,
    data: dataFormatada, // aqui salvamos a data formatada
    concluido: false
  };

  pedidos.push(novoPedido);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));
  alert("Pedido realizado com sucesso!");
  location.reload(); // opcional: recarrega a página para atualizar a tabela
});
