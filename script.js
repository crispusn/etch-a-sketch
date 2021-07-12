const resButton =  document.querySelector("#res-button");
const grid = document.querySelector("#grid-container");

resButton.addEventListener("click",changeSize);
window.addEventListener("load",defaultSize)



function defaultSize(){

gridSize(20);
gridCreator(20);

}


function gridSize(size){


grid.style.gridTemplateColumns= `repeat(${size},1fr)`;


}

function gridCreator(size)
{
    for (let i=0; i<size*size; i++){

            const createDiv = document.createElement("div");
            createDiv.classList= "grids";
            createDiv.addEventListener("mouseover", color);
            grid.appendChild(createDiv);

    }


}

function color(e) {

 let colors = ['red', 'green', 'blue', 'orange', 'yellow'];

  e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];




}




function changeSize() {
    let newSize = prompt("New Size?");
  
    if (newSize !== null) {
      newSize = parseInt(newSize);
      if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
        alert("Enter a number between 1-64!");
        changeSize();
      } else {
        gridCleaner();
        gridSize(newSize);
        gridCreator(newSize);
      }
    }
  }


  function gridCleaner(){

    const gridArray = Array.from(grid.childNodes);
    gridArray.forEach((element) => {
        grid.removeChild(element);
      
    });

  }