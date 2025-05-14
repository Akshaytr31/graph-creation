// drawBtn.addEventListener("click", () => {
//     const maxX = document.getElementById("maxX").value;
//     const maxY = document.getElementById("maxY").value;

//     graph.style.gridTemplateColumns = `repeat(${maxX}, 1fr)`;
//     graph.style.gridTemplateRows = `repeat(${maxY}, 1fr)`;

//     let n = maxX * maxY;
//     for (let i = 0; i < n; i++) {
//         const box = document.createElement("div");
//         box.classList.add("grid-box");
//         graph.appendChild(box);
//     }
// })

// markBtn.addEventListener('click',()=>{
//     console.log('click')
//     const x= document.getElementById('x').value
//     const y= document.getElementById('y').value

//     const boxes= document.querySelectorAll('.grid-box')

//     let currentRow=0
//     let currentCol=0

//     for(let i=0;i<boxes.length;i++){
//         if(currentRow===x&&currentCol===y){
//             boxes[i].classList.add('marked')
//         }
//     }

// })

// const drawBtn = document.getElementById("drawBtn");
// const graph = document.getElementById("graph");
// const markBtn = document.getElementById("markBtn");
// const clearBtn = document.getElementById("clearBtn");
// const resetBtn = document.getElementById("resetBtn");

// markBtn.disabled = true;
// markBtn.style.backgroundColor = "#cad5d7";
// clearBtn.disabled = true;
// clearBtn.style.backgroundColor = "#cad5d7";
// resetBtn.disabled = true;
// resetBtn.style.backgroundColor = "#cad5d7";

// drawBtn.addEventListener("click", () => {
//   const maxX = document.getElementById("maxX").value;
//   const maxY = document.getElementById("maxY").value;

//   graph.style.display = "grid";
//   graph.style.gridTemplateColumns = `repeat(${maxX}, 1fr)`;
//   graph.style.gridTemplateRows = `repeat(${maxY}, 1fr)`;
//   for (let y = maxY - 1; y >= 0; y--) {
//     for (let x = 0; x < maxX; x++) {
//       const box = document.createElement("div");
//       box.classList.add("grid-box");
//       box.setAttribute("data-x", x);
//       box.setAttribute("data-y", y);
//       graph.appendChild(box);
//       markBtn.style.backgroundColor = "rgb(50, 205, 216)";
//       markBtn.disabled = false;
//       //   clearBtn.addEventListener('click',()=>{
//       //     box.removeChild(box)
//       //   })
//     }
//   }
// });



// markBtn.addEventListener("click", () => {
//     const x = document.getElementById("x").value;
//     const y = document.getElementById("y").value;

//     const maxX = document.getElementById("maxX").value;
//     const maxY = document.getElementById("maxY").value;

//     const xInput = document.getElementById("x");
//     const yInput = document.getElementById("y");

//   xInput.classList.remove("outline");
//   yInput.classList.remove("outline");

//   if (x < maxX && y < maxY) {
//     clearBtn.style.backgroundColor = "rgb(50, 205, 216)";
//     clearBtn.disabled = false;
//     resetBtn.disabled = false;
//     resetBtn.style.backgroundColor = "rgb(50, 205, 216)";

//     const target = document.querySelector(
//       `.grid-box[data-x="${x}"][data-y="${y}"]`
//     );

//     if (target) {
//       target.classList.add("marked");
//       clearBtn.addEventListener("click", () => {
//         target.classList.remove("marked");
//       });
//     }
//   } else if (x >= maxX) {
//     // alert("x and y should be lessthan maxX and maxY");
//     // const outline=document.getElementsByClassName('outline')
//     // x.classList.add('outline')

//     // if(x>=maxX){
//     xInput.classList.add("outline");
//     // }
//     // if(y>=maxY){
//     // }
//   } else if (y >= maxY) {
//     yInput.classList.add("outline");
//   }
// });

// resetBtn.addEventListener("click", () => {
//   location.reload();
// });


////////////////////////////////////////





const drawBtn = document.getElementById("drawBtn")
const graph = document.getElementById("graph")
const markBtn = document.getElementById("markBtn")
const clearBtn = document.getElementById("clearBtn")
const resetBtn = document.getElementById("resetBtn")

markBtn.disabled = true
markBtn.style.backgroundColor = "#cad5d7"
clearBtn.disabled = true
clearBtn.style.backgroundColor = "#cad5d7"
resetBtn.disabled = true
resetBtn.style.backgroundColor = "#cad5d7"

drawBtn.addEventListener("click", () => {
  const maxX = parseInt(document.getElementById("maxX").value)
  const maxY = parseInt(document.getElementById("maxY").value)

  graph.style.display = "grid"
  graph.style.gridTemplateColumns = `repeat(${maxX}, 1fr)`
  graph.style.gridTemplateRows = `repeat(${maxY}, 1fr)`

  for (let y = maxY - 1; y >= 0; y--) {
    for (let x = 0; x < maxX; x++) {
      const box = document.createElement("div")
      box.classList.add("grid-box")
      box.setAttribute("data-x", x)
      box.setAttribute("data-y", y)
      graph.appendChild(box)
    }
  }


  markBtn.disabled = false
  markBtn.style.backgroundColor = "rgb(50, 205, 216)"
})


markBtn.addEventListener("click", () => {
  const x = parseInt(document.getElementById("x").value)
  const y = parseInt(document.getElementById("y").value)
  const maxX = parseInt(document.getElementById("maxX").value)
  const maxY = parseInt(document.getElementById("maxY").value)

  const xInput = document.getElementById("x")
  const yInput = document.getElementById("y")
  
  xInput.classList.remove("outline")
  yInput.classList.remove("outline")

  if (x >= 0 && x < maxX && y >= 0 && y < maxY) {
    const target = document.querySelector(`.grid-box[data-x="${x}"][data-y="${y}"]`)
    if (target) {
      target.classList.add("marked")
      clearBtn.addEventListener("click", () => {
          target.classList.remove("marked")
  
      })
    }

    clearBtn.disabled = false
    clearBtn.style.backgroundColor = "rgb(50, 205, 216)"
    resetBtn.disabled = false
    resetBtn.style.backgroundColor = "rgb(50, 205, 216)"
  } else {
    if (x >= maxX || x < 0) xInput.classList.add("outline")
    if (y >= maxY || y < 0) yInput.classList.add("outline")
  }
})

resetBtn.addEventListener("click", () => {
  location.reload()
})

