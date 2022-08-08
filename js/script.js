let calcular = document.querySelector("#calcular");
function imc() {
  let altura = document.querySelector("#altura").value;
  let peso = document.querySelector("#peso").value;
  let resultado = document.querySelector("#resultado");

  if (altura !== "" && peso !== "") {
    let IMC = (peso / (altura * altura)).toFixed(2)
    let classificacao = "";
    if (IMC < 17) {
      classificacao = "Muito abaixo do peso";
    } else if (IMC <18.5) {
      classificacao = "Abaixo do peso";
    } else if (IMC < 25) {
      classificacao = "Peso normal";
    } else if (IMC < 30) {
      classificacao = "Acima do peso";
    } else if (IMC <  35) {
      classificacao = "Obesidade grau I";
    } else if (IMC < 40) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III";
    }

    resultado.textContent = `Seu IMC é ${IMC} e você está com ${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os campos!!!";
  }
}

calcular.addEventListener("click", imc);
