
let number1 = Number(prompt("Digite o primeiro número: "))
let number2 = Number(prompt("Digite o segundo número: "))

let sum = number1 + number2
let subtraction = number1 - number2
let multiplication = number1 * number2
let division = number1 / number2
let rest = number1 % number2

alert(`A soma dos seus números é: ${sum}`)
alert(`A subtração dos números é: ${subtraction}`)
alert(`A multiplicação dos números é: ${multiplication}`)
alert(`A divisão dos números é: ${division}`)
alert(`O resto da divisão entre eles é: ${rest}`)

if (sum % 2 === 0) {
  alert(`A soma entre eles é um número PAR ! ${sum}`)
} else {
  alert(`A soma entre eles é IMPAR ${sum}`)
}

if (number1 === number2) {
  alert("Os números digitados são iguais")
} else {
  alert("Os números digitados são diferentes")
}