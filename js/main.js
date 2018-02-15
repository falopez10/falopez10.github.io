"use strict";

$(document).ready(main);


function main(){
	
	sobreMiDinamico();
	lenguajeEscogido();
	resaltarIntereses();
	pyramidClick();

	

}

//funcion que juega con el texto en "sobre mi"
function sobreMiDinamico(){
	$(".fa-codepen").hover(function(){
		$(this).animate({right: '250px'});
	});
}
//funcion que muestra el lenguaje en "habilidades"
function lenguajeEscogido(){
	$("#lenguaje-escogido").hide();
	$("#habilidades > div > ul.list-inline.list-icons > .list-inline-item > i")
	.hover(function(){
		//guardamos el nombre del lenguaje
		var lenguaje = $(this).attr('class').split("-")[1];
		//se asigna lenguaje a texto de lenguaje escogido
		$("#lenguaje-escogido").text(lenguaje);
		$("#lenguaje-escogido").slideToggle();
	}, function(){
		$("#lenguaje-escogido").slideToggle();
		
	});
}

//Resalta intereses
function resaltarIntereses(){
	$("#intereses > div > p").hover(function(){
		$(this).css("font-weight","Bold");
	}, function(){
		$(this).css("font-weight","Normal");
	});
}

//funcion que muestra proyecto de piramide con click en "proyectos"
function pyramidClick(){
	var pyramidRotation = 0.0;
	var posY = 0.0;
	var posX = 0.0;
	var posCam = -6.0; //posición de camara
	pyrMain();
//
// Start here
//
function pyrMain() {
	var canvas = document.querySelector('#glcanvas');
	var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  // If we don't have a GL context, give up now

  if (!gl) {
  	alert('Unable to initialize WebGL. Your browser or machine may not support it.');
  	return;
  }

  // Vertex shader program

  var vsSource = 'attribute vec4 aVertexPosition;  attribute vec4 aVertexColor;  uniform mat4 uModelViewMatrix;  uniform mat4 uProjectionMatrix;  varying lowp vec4 vColor;  void main(void) {  	gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;  	vColor = aVertexColor;  }';

  // Fragment shader program

  var fsSource = '  varying lowp vec4 vColor;  void main(void) {  	gl_FragColor = vColor;  }  ';

  // Initialize a shader program; this is where all the lighting
  // for the vertices and so forth is established.
  var shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  // Collect all the info needed to use the shader program.
  // Look up which attributes our shader program is using
  // for aVertexPosition, aVevrtexColor and also
  // look up uniform locations.
  var programInfo = {
  	program: shaderProgram,
  	attribLocations: {
  		vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
  		vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
  	},
  	uniformLocations: {
  		projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
  		modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
  	},
  };

  // Here's where we call the routine that builds all the
  // objects we'll be drawing.
  var buffers = initBuffers(gl);

  var then = 0;
  //Listener: javascript obtiene el click del mouse
  //y le asigna la posición al objeto
  canvas.addEventListener("mousedown", function(event){
  	posX=2*event.clientX/canvas.width-1;
  	posY=2*(canvas.height-event.clientY)/canvas.height-1;
  });
  
  // Draw the scene repeatedly
  function render(now) {
    now *= 0.001;  // convert to seconds
    var deltaTime = now - then;
    then = now;

    drawScene(gl, programInfo, buffers, deltaTime);

    requestAnimationFrame(render);
}
requestAnimationFrame(render);
}

//
// initBuffers
//
// Initialize the buffers we'll need. For this demo, we just
// have one object -- a simple three-dimensional pyramid.
//
function initBuffers(gl) {

  // Create a buffer for the pyramid's vertex positions.

  var positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the pyramid.

  var positions1 = [
    //PIRAMIDE
    // Front face
    0.0,  1.0,  0.0,   //0
    -1.0, -1.0,  1.0,   //1
    1.0, -1.0,  1.0,   //2
    // Right face
    1.0, -1.0, -1.0,   //3
    // Back face
    -1.0, -1.0, -1.0,   //4
    // Left face
    -1.0, -1.0,  1.0   //5
    ];
  //La piramide es 1/2 de la pensada originalmente.
  var positions = positions1.map(function(x){
  	return x*0.5;
  });

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // Now set up the colors for the faces. We'll use solid colors
  // for each face.

  var faceColors = [
    [1.0,  1.0,  1.0,  1.0],    // Front face: white
    [1.0,  0.0,  0.0,  1.0],    // Right face: red
    [1.0,  1.0,  0.0,  1.0],    // Back face: yellow
    ];

  // Convert the array of colors into a table for all the vertices.

  var colors = [];

  for (var j = 0; j < faceColors.length; ++j) {
  	var c = faceColors[j];

    // Repeat each color THREE times for the THREE vertices of the face
    colors = colors.concat(c,c);
}

var colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  // Build the element array buffer; this specifies the indices
  // into the vertex arrays for each face's vertices.

  var indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  var indices = [
    0,        //top
    1,  2,    //front
    3,        //right
    4,        //back
    5,        //left
    ];

  // Now send the element array to GL

  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
  	new Uint16Array(indices), gl.STATIC_DRAW);

  return {
  	position: positionBuffer,
  	color: colorBuffer,
  	indices: indexBuffer,
  };
}

//
// Draw the scene.
//
function drawScene(gl, programInfo, buffers, deltaTime) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  var fieldOfView = 45 * Math.PI / 180;   // in radians
  var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  var zNear = 0.1;
  var zFar = 100.0;
  var projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix,
  	fieldOfView,
  	aspect,
  	zNear,
  	zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  var modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.

  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [5*posX, 2*posY, posCam]);  // amount to translate
  mat4.rotate(modelViewMatrix,  // destination matrix
              modelViewMatrix,  // matrix to rotate
              pyramidRotation,     // amount to rotate in radians
              [0, 0, 1]);       // axis to rotate around (Z)
  mat4.rotate(modelViewMatrix,  // destination matrix
              modelViewMatrix,  // matrix to rotate
              pyramidRotation * .7,// amount to rotate in radians
              [0, 1, 0]);       // axis to rotate around (X)

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute
  {
  	var numComponents = 3;
  	var type = gl.FLOAT;
  	var normalize = false;
  	var stride = 0;
  	var offset = 0;
  	gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
  	gl.vertexAttribPointer(
  		programInfo.attribLocations.vertexPosition,
  		numComponents,
  		type,
  		normalize,
  		stride,
  		offset);
  	gl.enableVertexAttribArray(
  		programInfo.attribLocations.vertexPosition);
  }

  // Tell WebGL how to pull out the colors from the color buffer
  // into the vertexColor attribute.
  {
  	var numComponents = 4;
  	var type = gl.FLOAT;
  	var normalize = false;
  	var stride = 0;
  	var offset = 0;
  	gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
  	gl.vertexAttribPointer(
  		programInfo.attribLocations.vertexColor,
  		numComponents,
  		type,
  		normalize,
  		stride,
  		offset);
  	gl.enableVertexAttribArray(
  		programInfo.attribLocations.vertexColor);
  }

  // Tell WebGL which indices to use to index the vertices
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

  // Tell WebGL to use our program when drawing

  gl.useProgram(programInfo.program);

  // Set the shader uniforms

  gl.uniformMatrix4fv(
  	programInfo.uniformLocations.projectionMatrix,
  	false,
  	projectionMatrix);
  gl.uniformMatrix4fv(
  	programInfo.uniformLocations.modelViewMatrix,
  	false,
  	modelViewMatrix);

  {
  	var vertexCount = 6;
  	var type = gl.UNSIGNED_SHORT;
  	var offset = 0;
  	gl.drawElements(gl.TRIANGLE_FAN, vertexCount, type, offset);
  }

  // Update the rotation for the next draw

  pyramidRotation += deltaTime;
  
}

//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl, vsSource, fsSource) {
	var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
	var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program

  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
  	alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
  	return null;
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
	var shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
  	alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
  	gl.deleteShader(shader);
  	return null;
  }

  return shader;
}
}
