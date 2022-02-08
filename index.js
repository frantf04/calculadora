const $num1 = document.querySelector(".num1");
const $num2 = document.querySelector(".num2");
const $operacion = document.querySelector("#operacion");
const $btn_calcular = document.querySelector(".btn_calcular");
const $result = document.querySelector(".resultado");

const $sumar = (num1, num2) => num1 + num2;
const $restar = (num1, num2) => num1 - num2;
const $multiplicar = (num1, num2) => num1 * num2;
const $dividir = (num1, num2) => num1 / num2;

function calcular() {
  switch ($operacion.value) {
    case "sumar":
      $result.innerHTML = `Resultado: ${$sumar(
        parseFloat($num1.value),
        parseFloat($num2.value)
      )}`;
      break;
    case "restar":
      $result.innerHTML = `Resultado: ${$restar($num1.value, $num2.value)}`;
      break;
    case "multiplicar":
      $result.innerHTML = `Resultado: ${$multiplicar(
        $num1.value,
        $num2.value
      )}`;
      break;
    case "dividir":
      $result.innerHTML = `Resultado: ${$dividir($num1.value, $num2.value)}`;
      break;

    default:
      break;
  }
}
$btn_calcular.addEventListener("click", () => {
  calcular();
});

