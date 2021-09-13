// main parent
let root = document.querySelector("#root");
root.style.cssText += `
height:100vh;
display:block;
`;

let header = document.createElement("div");
header.innerHTML = "BLING!";
header.style.cssText += `
display:flex;
font-weight: 800;
color:rgb(49, 49, 49);
text-shadow:2px 3px #c79619;
font-family:Montserrat;
font-size: 1.5rem; 
padding-top: 1cm;
justify-content: center;
`;
root.appendChild(header);

let imgToDisp = "";

const onClickButtons = (e) => {
    rigthHead.innerHTML = "stuff";
    imgToDis = `assets/images/${e.target.value}.png`;
    rightBg.src = imgToDis;
    
};

const CreateElementAndAppend = (
  value,
  style = null,
  onClick = null,
  tag,
  parent
) => {
  let tagName = document.createElement(tag);
  tagName.innerHTML = value;
  tagName.value = [...value].join("").replace(/ /g, "").toLowerCase();
  style !== null && (tagName.style.cssText += style);
  onClick !== null && tagName.addEventListener("click", onClick);
  parent.appendChild(tagName);
};

let section1 = document.createElement("div");
section1.style.cssText += `
display:flex;
align-items:center;
width: 100%;
margin-top:4rem;
background-color:transparent;
margin-left:8rem;

`;

let mainleft = document.createElement("div");
mainleft.style.cssText += `
display:flex;
justify-content:center;
`;

let leftSide = document.createElement("div");
section1.appendChild(leftSide);
leftSide.style.cssText += `
width: 50%;
padding-left:2rem;
display:flex;
flex-direction:column;
`;

CreateElementAndAppend(
  "Sizzle your Life",
  `font-size: 1.5rem;font-family:Montserrat;font-weight:500;padding:0.2cm;color:rgb(49, 49, 49);`,
  null,
  "h1",
  leftSide
);
CreateElementAndAppend(
  "Make a Card",
  `font-size: 3.5rem;font-family:Montserrat;font-weight:700;padding:0.2cm;color:rgb(49, 49, 49);`,
  null,
  "p",
  leftSide
);

let box = document.createElement("div");
box.style.cssText += `
display:flex;
column-gap:20px;
padding-top:1.5rem;
`;

CreateElementAndAppend(
  "Polaroid",
  `border-radius:0.3cm;padding:0.5rem;cursor: pointer;margin-bottom: 1.2rem;border-color:rgb(49, 49, 49);background-color:transparent;font-size:1rem`,
  onClickButtons,
  `button`,
  box
);
CreateElementAndAppend(
  "TV",
  `border-radius:0.3cm;padding:0.5rem;cursor: pointer;margin-bottom: 1.2rem;border-color:rgb(49, 49, 49);background-color:transparent;font-size:1rem;`,
  onClickButtons,
  `button`,
  box
);
CreateElementAndAppend(
  "Traitor",
  `border-radius:0.3cm;padding:0.5rem;cursor: pointer;margin-bottom: 1.2rem;border-color:rgb(49, 49, 49);background-color:transparent;font-size:1rem;`,
  onClickButtons,
  `button`,
  box
);

CreateElementAndAppend(
  "Fall Guy",
  `border-radius:0.3cm;padding:0.5rem;cursor: pointer;margin-bottom: 1.2rem;border-color:rgb(49, 49, 49);background-color:transparent;font-size:1rem;`,
  onClickButtons,
  `button`,
  box
);

CreateElementAndAppend(
  "Radio",
  `border-radius:0.3cm;padding:0.5rem;cursor: pointer;margin-bottom: 1.2rem;border-color:rgb(49, 49, 49);background-color:transparent;font-size:1rem;`,
  onClickButtons,
  `button`,
  box
);

// 2nd select panel

let box2 = document.createElement("div");
box2.style.cssText += `
display:flex;
column-gap:20px;
padding-top:1.5rem;
`;

let typeBox = document.createElement("input");
typeBox.type = "text";
typeBox.placeholder = "Type here";
typeBox.style.cssText += `
background-color:rgb(49, 49, 49);
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;
box2.appendChild(typeBox);

const addOptionsToSelect = (option, parent) => {
  let newOption = document.createElement("option");
  newOption.text = option;
  newOption.value = option;
  parent.add(newOption);
};
const changeEventOnClick = (e) => {
  document.body.style.backgroundColor = e.target.value;
};

let selectBox = document.createElement("select");
addOptionsToSelect("Gold", selectBox);
addOptionsToSelect("Green", selectBox);
addOptionsToSelect("blue", selectBox);
addOptionsToSelect("pink", selectBox);
addOptionsToSelect("cyan", selectBox);
addOptionsToSelect("yellow", selectBox);
addOptionsToSelect("orange", selectBox);
addOptionsToSelect("red", selectBox);
selectBox.style.cssText += `
  color: #ffffff;
  padding: 8px 16px;
  border: 2px solid black;
  border-color: black;
  border-radius: 1rem;
  cursor: pointer;
  background-color:transparent;
`;
selectBox.addEventListener("input", changeEventOnClick);
box2.appendChild(selectBox);

let radioCombine = document.createElement("div");
radioCombine.style.cssText += `
display:flex;
column-gap:78x;
align-items:center;
background-color:rgb(49, 49, 49);
color:white;
padding:3px;
border-radius:7px;
`;

let clickBlob = document.createElement("input");
clickBlob.type = "radio";
clickBlob.name = "same";
clickBlob.style.cssText += `
border-radius: 0.5rem;
align-items:center;
height: 2rem;
text-align: center;
`;
radioCombine.appendChild(clickBlob);

let label1 = document.createElement("label");
label1.innerText = "Blob";
label1.style.cssText += `
padding-bottom:10px;
padding-right:5px;
`;
radioCombine.appendChild(label1);

let clickNope = document.createElement("input");
clickNope.type = "radio";
clickNope.name = "same";
clickNope.style.cssText += `
border-radius: 0.5rem;
align-items:center;
height: 2rem;
text-align: center;
`;

radioCombine.appendChild(clickNope);

let label2 = document.createElement("label");
label2.innerText = "Nope";
label2.style.cssText += `
padding-bottom:10px;
padding-right:5px;
`;

radioCombine.appendChild(label2);

section1.appendChild(leftSide);
leftSide.appendChild(box);
leftSide.appendChild(box2);
box2.appendChild(radioCombine);
root.appendChild(section1);

let camera = document.createElement("button");
camera.style.cssText += `
border-color:rgb(49, 49, 49);
border-radius:2px;
margin-top:1cm;
max-width: 6ch;
`;
let camImg = document.createElement("img");
camImg.src = "assets/images/camera.png";
camImg.style.cssText += `
height:1.5rem;
width:1.5rem;
`;

camera.appendChild(camImg);
leftSide.appendChild(camera);

//// right side;

let rightSide = document.createElement("div");
section1.appendChild(rightSide);
rightSide.style.cssText += `
display:flex;
flex-direction:column;
`;

let rigthHead = document.createElement("div");
rightSide.appendChild(rigthHead);

let rightImg = document.createElement("img");
rightImg.style.cssText += `
`;

rightSide.appendChild(rightImg);

let rightBg = document.createElement("img");
rightSide.appendChild(rightBg);


