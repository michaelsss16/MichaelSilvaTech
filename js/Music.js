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
	B: ['B3', 'E4', 'G#4']
  };
  
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function ObterAcorde(Acorde)
{
	return ACORDES[Acorde]; 
}