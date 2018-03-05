let draggingElement;
function onMouseDown (event) {
  if (event.target.matches('.draggable-item')){
    draggingElement = event.target;
    console.log('mousedown', event);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  }
}

function onMouseMove (event) {
  draggingElement.style.top = `${event.clientY}px`;
  draggingElement.style.left = `${event.clientX}px`;
}

function onMouseUp (event) {
  console.log('mouseup', event);
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}



document.addEventListener('mousedown', onMouseDown);



/* document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);


document.addEventListener(mouse)
 */


/* let draggingElement;
function onMouseDown (event){
  if (event.target.matches('.draggable-item')){
    draggingElement = event.target;
    console.log('mousedown', event);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

}

function onMouseMove (event){
  draggingElement.style.top = `${event.clientY}px`;
  draggingElement.style.left = `${event.clientX}px`;
  console.log('mousemove', event);
}

function onMouseUp (event){
  console.log('mouseup', event);
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

document.addEventListener('mousedown', onMouseDown);
 */
