const d = document,
w = window;

export default function speechReader(){
	const $speechSelect = d.getElementById("speech-select"),
	$speechTextarea = d.getElementById("speech-text"),
	$speechBtn = d.getElementById("speech-btn"),
	speechMessage = new SpeechSynthesisUtterance();//Esto nos permite interacturar con las voces de nuestro navegador/window
	//console.log(speechMessage);
	//para obtener las voces vamos a utilizar una api de windows, speechSynthesis
	//speechSynthesis.getVoice(); //Trae todas las voces que tiene habilitado el windows
	let voices = [];

	d.addEventListener("DOMContentLoaded",e=>{
		//para que este metodo te devuelva algo, hay que ejecutarlo en el evento "onvoicechanged"
		// console.log(speechSynthesis.getVoice());
		w.speechSynthesis.addEventListener("voiceschanged",e=>{
			// console.log(e);
			voices = w.speechSynthesis.getVoices();
			// console.log(voices);

			voices.forEach((voice)=>{
				const $option = d.createElement("option");
				$option.value = voice.name;
				$option.textContent = `${voice.name} *** ${voice.lang}`;
				$speechSelect.appendChild($option);
			});
		});
	});

	d.addEventListener("change",e=>{
		//va a asignarle a la funcion speechSynthesisUtterance(), el value del select en su atributo "voice"
		if (e.target === $speechSelect) {
			speechMessage.voice = voices.find(
				(voice)=>voice.name === e.target.value
				);
		}
		// console.log(speechMessage);		
	});

	d.addEventListener("click",e=>{
		if (e.target === $speechBtn) {
			speechMessage.text = $speechTextarea.value;
			w.speechSynthesis.speak(speechMessage);
		}
	});


}