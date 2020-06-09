const $campoCep = document.querySelector('[name="zipcode"]');
const $campoCidade = document.querySelector('[name="city"]');
const $campoBairro = document.querySelector('[name="neighborhood"]');
const $campoRua = document.querySelector('[name="street"]');
const $campoEstado = document.querySelector('[name="state"]');

$campoCep.addEventListener("blur", infosDoEvento => {
	const cep = infosDoEvento.target.value;
fetch(`https://viacep.com.br/ws/${cep}/json/`)
	.then(respostaDoServer => {
		return respostaDoServer.json();
	})
	.then(dadosDoCep => {
		console.log(dadosDoCep);
		$campoCidade.value = dadosDoCep.localidade;
		$campoBairro.value = dadosDoCep.bairro;
		$campoRua.value = dadosDoCep.logradouro;
		$campoEstado.value = dadosDoCep.uf;
	});
});