const origem = document.getElementById('origem')
const destino = document.getElementById('destino')
const minutos = document.getElementById('minutos')
const btnSomar = document.querySelector('.somar')
const btnSubtrair = document.querySelector('.subtrair')
const btnCalcular = document.getElementById('calcular')
const btnPlanoFaleMais = document.querySelectorAll('.plano')
const btnTestarPlano30 = document.querySelector('.testar30')
const btnTestarPlano60 = document.querySelector('.testar60')
const btnTestarPlano120 = document.querySelector('.testar120')
let valorOrigem = origem.value
let valorDestino = destino.value
let valorMinutos = minutos.value

origem.addEventListener('change', function() {
	valorOrigem = origem.value
})

destino.addEventListener('change', function() {
	valorDestino = destino.value
})

minutos.addEventListener('change', function() {
	valorMinutos = minutos.value
	document.querySelector('span.min').style.visibility = 'visible'
})

btnSomar.addEventListener('click', somar)
btnSubtrair.addEventListener('click', subtrair)
function somar() {
	let soma = Number(valorMinutos)
	soma += 30
	valorMinutos = soma
	document.getElementById('minutos').value = valorMinutos
	document.querySelector('span.min').style.visibility = 'visible'
}
function subtrair() {
	let subtracao = Number(valorMinutos)
	subtracao - 30 < 0 ? subtracao : subtracao -= 30
	valorMinutos = subtracao
	document.getElementById('minutos').value = valorMinutos
	document.querySelector('span.min').style.visibility = 'visible'
}

btnPlanoFaleMais[0].addEventListener('click', ativado30)
btnTestarPlano30.addEventListener('click', ativado30)
btnPlanoFaleMais[1].addEventListener('click', ativado60)
btnTestarPlano60.addEventListener('click', ativado60)
btnPlanoFaleMais[2].addEventListener('click', ativado120)
btnTestarPlano120.addEventListener('click', ativado120)

function ativado30() {
	document.querySelector('.ativado').classList.remove('ativado')
	btnPlanoFaleMais[0].classList.add('ativado')
}

function ativado60() {
	document.querySelector('.ativado').classList.remove('ativado')
	btnPlanoFaleMais[1].classList.add('ativado')
}

function ativado120() {
	document.querySelector('.ativado').classList.remove('ativado')
	btnPlanoFaleMais[2].classList.add('ativado')
}

btnCalcular.addEventListener('click', function(event) {
	event.preventDefault();
	let plano, resultado, valorComPlano, valorSemPlano
	const classAtivado = document.querySelector('.ativado')
	let textAtivado = classAtivado.innerText.replace(/[ ]/g, '')
	let resultadoComPlano = document.querySelector('.resultadoComPlano')
	let resultadoSemPlano = document.querySelector('.resultadoSemPlano')
	let cifrao = document.querySelectorAll('.cifrao')

	switch (valorOrigem) {
		case '011':
			switch(valorDestino) {
				case '011':
					resultado = 0
					break;
				case '016':
					resultado = 1.90
					break;
				case '017':
					resultado = 1.70
					break;
				case '018':
					resultado = 0.90
					break;
			}
			break;
		case '016':
			switch (valorDestino) {
				case '011':
					resultado = 2.90
					break;
				case '016':
					resultado = 0
					break;
				case '017':
					resultado = 0
					break;
				case '018':
					resultado = 0
					break;
			}
			break;
		case '017':
			switch (valorDestino) {
				case '011':
					resultado = 2.70
					break;
				case '016':
					resultado = 0
					break;
				case '017':
					resultado = 0
					break;
				case '018':
					resultado = 0
					break;
			}
			break;
		case '018':
			switch (valorDestino) {
				case '011':
					resultado = 1.90
					break;
				case '016':
					resultado = 0
					break;
				case '017':
					resultado = 0
					break;
				case '018':
					resultado = 0
					break;
			}
			break;
	}

	if (resultado != 0) {
		if (textAtivado === 'FaleMais30') {
			plano = 30
			if (valorMinutos <= plano) {
				valorComPlano = 0
			} else {
				valorComPlano = (valorMinutos - plano) * 1.1 * resultado
			}
		} else if (textAtivado === 'FaleMais60') {
			plano = 60
			if (valorMinutos <= plano) {
				valorComPlano = 0
			} else {
				valorComPlano = (valorMinutos - plano) * 1.1 * resultado
			}

		} else if (textAtivado === 'FaleMais120') {
			plano = 120
			if (valorMinutos <= plano) {
				valorComPlano = 0
			} else {
				valorComPlano = (valorMinutos - plano) * 1.1 * resultado
			}
		}

		valorSemPlano = valorMinutos * resultado
		cifrao[0].style.display = 'inline-block'
		cifrao[1].style.display = 'inline-block'
		resultadoComPlano.innerHTML = valorComPlano.toFixed(1) + 0
		resultadoSemPlano.innerHTML = valorSemPlano.toFixed(1) + 0
	} else {
		valorSemPlano = 'Não possivel calcular o valor para estas combinações de DDD de origem e destino'
		valorComPlano = 'Não possivel calcular o valor para estas combinações de DDD de origem e destino'
		cifrao[0].style.display = 'none'
		cifrao[1].style.display = 'none'
		resultadoComPlano.innerHTML = valorComPlano
		resultadoSemPlano.innerHTML = valorSemPlano
	}
})
