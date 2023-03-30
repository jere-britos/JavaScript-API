const d = document;
let x = 0,
y = 0;

export function moveBall(e, ball, stage){
	const $ball = d.querySelector(ball),
	$stage = d.querySelector(stage),
	limitsBall = $ball.getBoundingClientRect(),
	limitsStage = $stage.getBoundingClientRect();
	// console.log(e.keyCode);
	// console.log(e.key);

	// const move = (direction)=>{}

	switch(e.keyCode){
	  //izq
	  case 37:
	  e.preventDefault();
	  // move("left");
	  if(Math.round(limitsBall.left) > Math.round(limitsStage.left)) x--;
			break;
	  //arriba
	  case 38:
	  e.preventDefault();
	  // move("up");
	  if(Math.round(limitsBall.top) > Math.round(limitsStage.top)) y--;
			break;
	 //derecha
	  case 39:
	  e.preventDefault();
	  // move("right");
	  if(Math.round(limitsBall.right) < Math.round(limitsStage.right)) x++;
			break;
	  //abajo
	  case 40:
	  e.preventDefault();
	  // move("down");
	  if(Math.round(limitsBall.bottom) < Math.round(limitsStage.bottom)) y++;
			break;
	  //
	  default:
			break;
	}
	$ball.style.transform = `translate(${x*10}px,${y*10}px)`;
}

export function shortcuts(e){
  /*console.log(e.type);
	console.log(e.key);
	console.log(e.keyCode);
	console.log(`ctrl: ${e.ctrlKey}`);//devuelven "true" si presiona
	console.log(`shift: ${e.shiftKey}`);
	console.log(`alt: ${e.altKey}`);//devuelven "true" si presiona
	console.log(e);*/
	if (e.key === "a" && e.altKey) {
		alert("Haz lanzado una alerta con el teclado");
	}
	if (e.key === "c" && e.altKey) {
		confirm("Haz lanzado una confirmación con el teclado");
	}
	if (e.key === "p" && e.altKey) {
		prompt("Haz lanzado un aviso con el teclado");
	}
}
