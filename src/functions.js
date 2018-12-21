function calculoPlano(minutos, tarifa, plano) {
	return plano && minutos <= plano
		? 0
		: plano
			? (minutos - plano) * 1.1 * tarifa 
			: minutos * tarifa 
}

function saberTarifas(origem, destino) {
	let definirTarifas = { 		
		'011:016': 1.90, 
		'011:017': 1.70,
		'011:018': 0.90,
		'016:011': 2.90,
		'017:011': 2.70,
		'018:011': 1.90
	}
	return definirTarifas[`${origem}:${destino}`]
}

function calcularCusto(origem, destino, minutos) {
	let plano, tarifa
	if( definirTarifas[`${origem}:${destino}`] ) {
		definirTarifas[`${origem}:${destino}`]()
		let custoPlanos = {
			'FaleMais30': {
				comPlano: calculoPlano(minutos, tarifa, 30),
				semPlano: calculoPlano(minutos, tarifa)
			}, 
			'FaleMais60': {
				comPlano: calculoPlano(minutos, tarifa, 60),
				semPlano: calculoPlano(minutos, tarifa)
			},
			'FaleMais120': {
				comPlano: calculoPlano(minutos, tarifa, 120),
				semPlano: calculoPlano(minutos, tarifa)
			}
		}
		return custoPlanos
	} else {
		return 'Não possivel calcular o valor para estas combinações de DDD de origem e destino'
	}
}