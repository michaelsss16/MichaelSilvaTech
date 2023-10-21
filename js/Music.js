const ACORDES = {
	C: ['C3', 'E3', 'G3'],
	Db: ['C#3', 'F3', 'G#3'],
	D: ['D3', 'F#3', 'A3'],
	Eb: ['D#3', 'G3', 'A#3'],
	E: ['E3', 'G#3', 'B3'],
	F: ['F3', 'A3', 'C4'],
	Gb: ['F#3', 'A#3', 'C#4'],
	G: ['G3', 'B3', 'D4'],
	Ab: ['G#3', 'C4', 'D#4'],
	A: ['A3', 'C#4', 'E4'],
	Bb: ['A#3', 'D4', 'F4'],
	B: ['B3', 'D#4', 'F#4'],
	Cm: ['C3', 'D#3', 'G3'],
	Dbm: ['C#3', 'E3', 'G#3'],
	Dm: ['D3', 'F3', 'A3'],
	Ebm: ['D#3', 'F#3', 'A#3'],
	Em: ['E3', 'G3', 'B3'],
	Fm: ['F3', 'G#3', 'C4'],
	Gbm: ['F#3', 'A3', 'C#4'],
	Gm: ['G3', 'A#3', 'D4'],
	Abm: ['G#3', 'B3', 'D#4'],
	Am: ['A3', 'C4', 'E4'],
	Bbm: ['A#3', 'C#4', 'F4'],
	Bm: ['B3', 'D4', 'F#4']
};

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function ObterAcorde(Acorde) {
	return ACORDES[Acorde];
}

async function IniciarReproducao(acorde) {
	var Repeticoes = SliderRepeticoes.value;
	var Delay = SliderDelay.value * 1000;
	for (let i = 0; i < Repeticoes; i++) {
		ReproduzirAcorde(acorde);
		await sleep(Delay);
	}
}

function ReproduzirAcorde(Acorde) {
	var notas = ObterAcorde(Acorde);
	synth.triggerAttackRelease(notas, [0.95]);
}

function GerarAcordeAleatorio() {
	var chaves = Object.keys(ACORDES);
	var indiceAleatorio = Math.floor(Math.random() * chaves.length);
	var acordeAleatorio = chaves[indiceAleatorio];
	IniciarReproducao(acordeAleatorio);
	return acordeAleatorio;
}