const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
listaSelecaoPokedevs.forEach((pokedev) => {
  pokedev.addEventListener("click", () => {
    esconderCartaoPokedev();

    const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);

    ativarPokedevNaistagem(idPokedevSelecionado);
  });
});
function ativarPokedevNaistagem(idPokedevSelecionado) {
  const pokedevAtivoNaListagem = document.querySelector(".ativo");
  esconderPokedevNaListagem(pokedevAtivoNaListagem, idPokedevSelecionado);
}

function esconderPokedevNaListagem(
  pokedevAtivoNaListagem,
  idPokedevSelecionado
) {
  pokedevAtivoNaListagem.classList.remove("ativo");

  const pokedevSelecionadoNaListagem =
    document.getElementById(idPokedevSelecionado);
  pokedevSelecionadoNaListagem.classList.add("ativo");
}

function mostrarCartaoPokedev(pokedev) {
  const idPokedevSelecionado = pokedev.attributes.id.value;
  const IdDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
  const cartaoPokedevParaAbrir = document.getElementById(
    IdDoCartaoPokedevParaAbrir
  );
  cartaoPokedevParaAbrir.classList.add("aberto");
  return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
  const cartaoPokedevAberto = document.querySelector(".aberto");
  cartaoPokedevAberto.classList.remove("aberto");
}
