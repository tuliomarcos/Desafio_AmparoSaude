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

function calculoComPlano(minutos, tarifa, plano) {
	return valorMinutos <= plano
		? valorComPlano = 0
		: valorComPlano = (valorMinutos - plano) * 1.1 * tarifa
}

function calculoSemPlano(minutos, tarifa) {
	return valorSemPlano = valorMinutos * tarifa
}

btnCalcular.addEventListener('click', function(event) {
	event.preventDefault();
	let plano, resultado, valorComPlano, valorSemPlano, tarifa
	const classAtivado = document.querySelector('.ativado')
	let textAtivado = classAtivado.innerText.replace(/[ ]/g, '')
	const resultadoComPlano = document.querySelector('.resultadoComPlano')
	const resultadoSemPlano = document.querySelector('.resultadoSemPlano')
	const cifrao = document.querySelectorAll('.cifrao')
	
	let origemDestino = { 		
		'011:016': () => {return tarifa = 1.90}, 
		'011:017': () => {return tarifa = 1.70},
		'011:018': () => {return tarifa = 0.90},
		'016:011': () => {return tarifa = 2.90},
		'017:011': () => {return tarifa = 2.70},
		'018:011': () => {return tarifa = 1.90}
	}

	if( origemDestino[`${valorOrigem}:${valorDestino}`] ) {
		origemDestino[`${valorOrigem}:${valorDestino}`]()
		let custoPlanos = {
			'FaleMais30': {
				comPlano: calculoComPlano(valorMinutos, tarifa, 30),
				semPlano: calculoSemPlano(valorMinutos, tarifa)
			},
			'FaleMais60': {
				comPlano: calculoComPlano(valorMinutos, tarifa, 30),
				semPlano: calculoSemPlano(valorMinutos, tarifa)
			},
			'FaleMais120': {
				comPlano: calculoComPlano(valorMinutos, tarifa, 30),
				semPlano: calculoSemPlano(valorMinutos, tarifa)
			}
		}
		valorComPlano = custoPlanos[textAtivado].comPlano
		valorSemPlano = custoPlanos[textAtivado].semPlano
		cifrao[0].style.display = 'inline-block'
		cifrao[1].style.display = 'inline-block'
		resultadoComPlano.innerHTML = valorComPlano.toFixed(1) + 0
		resultadoSemPlano.innerHTML = valorSemPlano.toFixed(1) + 0
	} else {
		valorSemPlano = valorComPlano = 'Não possivel calcular o valor para estas combinações de DDD de origem e destino'
		cifrao[0].style.display = cifrao[1].style.display = 'none'
		resultadoComPlano.innerHTML = valorComPlano
		resultadoSemPlano.innerHTML = valorSemPlano
	}
})
