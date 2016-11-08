function formularioMostrar(){
	var contPrincipal = document.getElementById('contenedor-principal');

	//Primero creamos los elementos

	//Caja contenedora del formulario para añadir
	var formularioOcuto = document.createElement('div'); 
	formularioOcuto.setAttribute('id', 'formulario-oculto');
	formularioOcuto.setAttribute('class', 'contenedor-listas');

	// Div well
	var divWell = document.createElement('div');
	divWell.setAttribute('class', 'well well-uno');

	// Div contenedor del input
	var contInput = document.createElement('div');
	contInput.setAttribute('class', 'input-container');

	// Input que recibe la tarea
	var inputTarea = document.createElement('input');
	inputTarea.setAttribute('class', 'input-uno');
	inputTarea.setAttribute('type', 'text');
	inputTarea.setAttribute('placeholder', 'Añadir una lista...');
	inputTarea.setAttribute('id', 'tarea-input');

	// Crear botoon guardar
	var btnGuardar = document.createElement('button');
	btnGuardar.setAttribute('class', 'btn btn-success boton-guardar');

	//Crear texto para el botoón
	var textoBtnGuardar = document.createTextNode('Guardar');

	//Crear boton X
	var btnX = document.createElement('button');
	btnX.setAttribute('class', 'btn btn-success boton-borrar');

	//Crear texto para el boton X
	var textoBtnX = document.createTextNode('x');

	// Ahora daremos hijos :3 

	//Vamos a meter el texto X en el boton X
	btnX.appendChild(textoBtnX);

	//Metemos el texto guardar en el boton guardar
	btnGuardar.appendChild(textoBtnGuardar);

	// metemos el input dentro del input container
	contInput.appendChild(inputTarea);

	//Metemos el input, el boton guardar y el boton x (en orden)
	divWell.appendChild(contInput);
	divWell.appendChild(btnGuardar);
	divWell.appendChild(btnX);

	//Ahora metemos divwell en el formulario oculto
	formularioOcuto.appendChild(divWell);

	//Ahora, para unir lo que acabo de hacer con el html 'real' se hace esto:
	contPrincipal.appendChild(formularioOcuto);
}


/* 

<div id="formulario-oculto" class="contenedor-listas">
	<div class="well well-uno">
		<div class="input-container">
			<input class="input-uno" type="text" placeholder="Añadir una lista ..." id="tarea-input">
		</div>
		<button class="btn btn-success btn-guardar">
			Guardar
		</button>
		<button class="btn btn-success boton-borrar">
			x
		</button>
	</div>
</div>







<div id="formulario-oculto" class="contenedor-listas">
    <div class="well well-uno">
        <div class="input-container">
        	<input class="input-uno" type="text" placeholder="Añadir una lista ..." id="tarea-input">
        </div>
        <button type="button" class="btn btn-success boton-guardar">
        	Guardar
        </button>
        <button type="button" class="btn btn-success boton-borrar">
        	x
        </button>
    </div>
</div>


*/