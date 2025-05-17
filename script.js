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

// const drawBtn = document.getElementById("drawBtn")
// const graph = document.getElementById("graph")
// const markBtn = document.getElementById("markBtn")
// const clearBtn = document.getElementById("clearBtn")
// const resetBtn = document.getElementById("resetBtn")

// markBtn.disabled = true
// markBtn.style.backgroundColor = "#cad5d7"
// clearBtn.disabled = true
// clearBtn.style.backgroundColor = "#cad5d7"
// resetBtn.disabled = true
// resetBtn.style.backgroundColor = "#cad5d7"

// drawBtn.addEventListener("click", () => {
//   const maxX = parseInt(document.getElementById("maxX").value)
//   const maxY = parseInt(document.getElementById("maxY").value)

//   graph.style.display = "grid"
//   graph.style.gridTemplateColumns = `repeat(${maxX}, 1fr)`
//   graph.style.gridTemplateRows = `repeat(${maxY}, 1fr)`

//   for (let y = maxY - 1; y >= 0; y--) {
//     for (let x = 0; x < maxX; x++) {
//       const box = document.createElement("div")
//       box.classList.add("grid-box")
//       box.setAttribute("data-x", x)
//       box.setAttribute("data-y", y)
//       graph.appendChild(box)
//     }
//   }

//   markBtn.disabled = false
//   markBtn.style.backgroundColor = "rgb(50, 205, 216)"
// })

// markBtn.addEventListener("click", () => {
//   const x = parseInt(document.getElementById("x").value)
//   const y = parseInt(document.getElementById("y").value)
//   const maxX = parseInt(document.getElementById("maxX").value)
//   const maxY = parseInt(document.getElementById("maxY").value)

//   const xInput = document.getElementById("x")
//   const yInput = document.getElementById("y")

//   xInput.classList.remove("outline")
//   yInput.classList.remove("outline")

//   if (x >= 0 && x < maxX && y >= 0 && y < maxY) {
//     const target = document.querySelector(`.grid-box[data-x="${x}"][data-y="${y}"]`)
//     if (target) {
//       target.classList.add("marked")
//       clearBtn.addEventListener("click", () => {
//           target.classList.remove("marked")

//       })
//     }

//     clearBtn.disabled = false
//     clearBtn.style.backgroundColor = "rgb(50, 205, 216)"
//     resetBtn.disabled = false
//     resetBtn.style.backgroundColor = "rgb(50, 205, 216)"
//   } else {
//     if (x >= maxX || x < 0) xInput.classList.add("outline")
//     if (y >= maxY || y < 0) yInput.classList.add("outline")
//   }
// })

// resetBtn.addEventListener("click", () => {
//   location.reload()
// })

////////////////////////////////////////

const selectCollor = {
  gridBox: {
    backgroundColor: "#616d70",
    borderColor: "#616d70",
    borderSize: "1px",
    borderRight:'20px',
    borderBottom:'0'
  },
  marked: {
    backgroundColor: "#10d0f2",
    borderColor: "#3985f6",
    borderSize: "1px",
  },
};

const addGraphBtn = document.querySelector(".add-btn")
const mainContainer = document.querySelector(".main-container")

let graphCount = 0

addGraphBtn.addEventListener("click", () => {
  const placeholder = mainContainer.querySelector(".placeholder")
  if (placeholder) {
    placeholder.remove()
  }
  graphCount++

  const graphContainer = document.createElement("div");
  graphContainer.innerHTML = `
    <div class="sub-container">
      <div class="heading-container">
        <h1 class="headingTwo">Graph ${graphCount}</h1>
        <button class="delete-grph-btn">Remove</button>
      </div>
      <div class="input-section">
        <div class="input-group">
          <label>Max X</label>
          <input type="number" id="maxX"/>
        </div>
        <div class="input-group">
          <label>Max Y</label>
          <input type="number" id="maxY"/>
        </div>
        <div class="input-group">
          <label>X</label>
          <input type="number" id="x" class="x"/>
        </div>
        <div class="input-group">
          <label>Y</label>
          <input type="number" id="y" />
        </div>
      </div>
      <div class="button-section">
        <button class="btn draw-btn" id="drawBtn">Draw</button>
        <button class="btn mark-btn" id="markBtn">Mark</button>
        <button class="btn clear-btn" id="clearBtn">Clear</button>
        <button class="btn reset-btn" id="resetBtn">Reset</button>
      </div>
      <div class="graph-container-main">
        <div id="graph" class="graph-container"></div>
      </div>
    </div>
  `
  mainContainer.appendChild(graphContainer)
  setupGraphHandlers(graphContainer)
})

function setupGraphHandlers(elm) {
  const drawBtn = elm.querySelector("#drawBtn")
  const graph = elm.querySelector("#graph")
  const markBtn = elm.querySelector("#markBtn")
  const clearBtn = elm.querySelector("#clearBtn")
  const resetBtn = elm.querySelector("#resetBtn")
  const deleteGraph = elm.querySelector(".delete-grph-btn")

  markBtn.disabled = true
  markBtn.style.backgroundColor = "#c1d1e9"
  clearBtn.disabled = true
  clearBtn.style.backgroundColor = "#c1d1e9"
  resetBtn.disabled = true
  resetBtn.style.backgroundColor = "#c1d1e9"

  let columnBoxes = []

  drawBtn.addEventListener("click", () => {
    const maxX = parseInt(elm.querySelector("#maxX").value)
    const maxY = parseInt(elm.querySelector("#maxY").value)

    graph.style.display = "grid"
    graph.style.gridTemplateColumns = `repeat(${maxX}, 1fr)`
    graph.style.gridTemplateRows = `repeat(${maxY}, 1fr)`

    graph.innerHTML = ""

    for (let y = maxY - 1; y >= 0; y--) {
      for (let x = 0; x < maxX; x++) {
        const box = document.createElement("div")
        box.classList.add("grid-box")
        box.setAttribute("data-x", x)
        box.setAttribute("data-y", y)
        box.style.paddingInline='5px'
        box.style.backgroundColor = selectCollor.gridBox.backgroundColor;
        // box.style.border = `${selectCollor.gridBox.borderSize} solid ${selectCollor.gridBox.borderColor}`
        box.style.borderRight=`${selectCollor.gridBox.borderRight} solid ${selectCollor.gridBox.borderColor}`
        // box.style.borderBottom=`${selectCollor.gridBox.borderBottom}`
        graph.appendChild(box)
      }
    }

    markBtn.disabled = false
    markBtn.style.backgroundColor = "#3985f6"
  })

  markBtn.addEventListener("click", () => {
    const x = parseInt(elm.querySelector("#x").value)
    const y = parseInt(elm.querySelector("#y").value)
    const maxX = parseInt(elm.querySelector("#maxX").value)
    const maxY = parseInt(elm.querySelector("#maxY").value)

    const xInput = elm.querySelector("#x")
    const yInput = elm.querySelector("#y")

    xInput.classList.remove("outline")
    yInput.classList.remove("outline")

    if (x >= 0 && x < maxX && y >= 0 && y < maxY) {
      columnBoxes = [];

      for (let i = 0; i <= y; i++) {
        const box = elm.querySelector(`.grid-box[data-x="${x}"][data-y="${i}"]`)
        if (box) {
          columnBoxes.push(box)
        }
      }

      columnBoxes.forEach((box) => {
        box.style.backgroundColor = selectCollor.marked.backgroundColor
      })

      clearBtn.disabled = false
      clearBtn.style.backgroundColor = "#3985f6"
      resetBtn.disabled = false
      resetBtn.style.backgroundColor = "#3985f6"
    } else {
      if (x >= maxX || x < 0) xInput.classList.add("outline")
      if (y >= maxY || y < 0) yInput.classList.add("outline")
    }
  })

  clearBtn.addEventListener("click", () => {
    columnBoxes.forEach((box) => {
      box.style.backgroundColor = selectCollor.gridBox.backgroundColor
      box.style.border = `${selectCollor.gridBox.borderSize} solid ${selectCollor.gridBox.borderColor}`
    })
  })

  resetBtn.addEventListener('click',()=>{
    const maxX=elm.querySelector('#maxX')
    const maxY=elm.querySelector('#maxY')
    const xInput=elm.querySelector('#x')
    const yInput=elm.querySelector('#y')
    const graph=elm.querySelector('#graph')

    graph.innerHTML=""
    maxX.value=""
    maxY.value=""
    yInput.value=""
    xInput.value=""


    clearBtn.disabled = true
    clearBtn.style.backgroundColor = "#c1d1e9"
    resetBtn.disabled = true
    resetBtn.style.backgroundColor = "#c1d1e9"

    markBtn.disabled = true
    markBtn.style.backgroundColor = "#c1d1e9"


  })

  deleteGraph.addEventListener("click", () => {
    elm.remove()
  })
}

/////