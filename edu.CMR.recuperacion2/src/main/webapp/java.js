let palabra;
let adivinar = []
let letrasUtilizadas = []
let letraAcertada = false
let contador = 0
let datos = []
let diferenciaEntreLetras
let fechaInicioLetra
let fechaFinLetra
let fechaInicioJuego
let fechaFinJuego = new Date()
let intentos = 5
let partidaEmpezada = false
let min




function pedirPalabra() {

	letrasUtilizadas = []
	

	contador = 0
	intentos = 5
	if (partidaEmpezada == false) {
		do {
			palabra = prompt("Introduzca la palabra secreta").trim().toLowerCase();
			palabra = palabra.split("")
 
		} while (palabra.length > 10 || Number(palabra) || palabra.some((i) =>  i == Number(i)  ));

		for (let i = 0; i < palabra.length; i++) {

			adivinar.push("*")
		}

		console.log(palabra)
		datos.push([adivinar.join(""), contador, 0])

		mostrarTabla()
	}
	partidaEmpezada = true;
}

function pedirLetra() {
	
	
	


	if (letrasUtilizadas == 0) {

		fechaInicioJuego = new Date()
	}


	let letra;
	letraAcertada = false
	fechaInicioLetra = new Date()


	if (contador < 5 || min >5 ) {
		do {

			letra = prompt("Introduzca una letra").trim().toLowerCase()
			console.log(letra)
			console.log(letrasUtilizadas)


		} while (letra.length > 1 || Number(letra) || letrasUtilizadas.some((i) => letra == i))

		letrasUtilizadas.push(letra)
		console.log(letrasUtilizadas)
		comprobar(letra)




	}
	else {
		fechaFinJuego = new Date()
		partidaEmpezada = false
		
		document.getElementById("mostrarPalabra").innerHTML = ("¡HAS PERDIDO! la palabra secreta era: " + palabra.join(""))
		alert("Has perdido")
	}
	document.getElementById("intentos").innerHTML = ("Intentos: " + intentos)
	mostrarTabla()
}


function comprobar(letra) {

	for (let i = 0; i < palabra.length; i++) {

		if (palabra[i] == letra) {

			adivinar[i] = letra
			fechaFinLetra = new Date()

			letraAcertada = true;

		}

	}
	if (letraAcertada == false) {

		contador++
		intentos--
		alert("Has fallado")
		fechaFinLetra = new Date()


	}

	if (datos.length > 4) {

		datos.splice(0, 1)
	}

	datos.push([adivinar.slice().join(""), contador, diferenciaEntreLetras])


	if (!adivinar.some((i) => i == ("*"))) {

		fechaFinJuego = new Date()
		partidaEmpezada = false
		

		document.getElementById("mostrarPalabra").innerHTML = ("HAS GANADO! la palabra secreta era: " + palabra.join(""))

		if (contador <= 1) {

			alert("Magnifico")
		}
		else if (contador <= 3 && contador > 1) {

			alert("Bien")
		}
		else if (contador <= 5 && contador > 3) {

			alert("Por poco")
		}


	}
	operacionesFechaLetra()


}

function operacionesFechaLetra() {

	let diferencia = fechaFinLetra.getTime() - fechaInicioLetra.getTime()
	console.log(diferencia)
	let segundos = diferencia / 1000
	let miliSegundos = diferencia % 1000


	console.log(segundos)
	console.log(miliSegundos)
	diferenciaEntreLetras = Math.floor(segundos) + "," + miliSegundos



}

function mostrarTabla() {

	let escribir = document.getElementById("mostrarTabla");

	escribir.innerHTML = ""

	for (let i in datos) {

		escribir.innerHTML += ("<tr><td>" + datos[i][0] + "</td><td>" + datos[i][1] + "</td><td>" + datos[i][2] + "</tr></td>")

	}

}


function mostrarTiempo() {


	let diferenciaJuego = fechaFinJuego.getTime() - fechaInicioJuego.getTime()
	console.log("resta" + diferenciaJuego)
	min = Math.floor(diferenciaJuego / 60000)
	let seg = Math.floor((diferenciaJuego % 60000) / 1000)
	console.log("min" + min)
	console.log("seg" + seg)

	let resultado = "minutos: " + min + " segundos: " + seg

	console.log("resultado" + resultado)



	document.getElementById("tiempo").innerHTML = (resultado)

}





