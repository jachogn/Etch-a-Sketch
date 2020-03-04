const container = document.querySelector("#container");
function makeGrid(rows, columns){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for(let i = 0; i< columns*rows; i++){
            let newDiv = document.createElement("div");
            newDiv.setAttribute('id','cell');
            container.appendChild(newDiv);
    }
    let cells = document.querySelectorAll('#cell');
    cells.forEach((cell)=>{
    
    cell.addEventListener('mouseover', (e)=>{
        cell.style.background = 'black';
        cell.style.opacity = '+=.1';
    })
})
}
makeGrid(16,16);




const clearbutton = document.querySelector("#clear");

clearbutton.addEventListener("click", (e)=>{
    newColumns = prompt("Enter Columns");
    newRows = prompt("Enter Rows");
    let cells = document.querySelectorAll('#cell');
    cells.forEach((cell)=>{
        container.removeChild(cell);
        })
    makeGrid(newRows,newColumns);    
});

