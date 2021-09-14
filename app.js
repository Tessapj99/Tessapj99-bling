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

let imgToDisp = ""

const onClickButtons = (e) => {
    rigthHead.innerHTML = "Describe Me";
    imgToDisp = `assets/images/${e.target.value}.png`;
    rightBg.src = imgToDisp;
    
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
width: 50%;
margin-top:4rem;
background-color:transparent;
margin-left:8rem;
`;


let leftSide = document.createElement("div");
section1.appendChild(leftSide);
leftSide.style.cssText += `
width: 70%;
padding-left:1rem;
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

const onTyping = (e) => {
    rigthHead.textContent = e.target.value;
};

let typeBox = document.createElement("input");
typeBox.type = "text";
typeBox.placeholder = "Type here";
typeBox.style.cssText += `
background-color:rgb(49, 49, 49);
font-family:Montserrat;
border-radius: 0.5rem;
height: 2rem;
text-align: center;
`;
typeBox.addEventListener("input", onTyping);
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

// adding the blob 

let imgBehind = "";

const onBolbClick = () => {
  imgBehind = "assets/images/blob.png";
  blobImage.src = imgBehind;
};
clickBlob.addEventListener("change", onBolbClick);

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
const onNopeClick = () => {
  imgBehind = "";
  blobImage.src = imgBehind;
};

clickNope.addEventListener("change", onNopeClick);

clickBlob.addEventListener("change", onBolbClick);

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
height:1.4rem;
width:1.5rem;
`;

camera.appendChild(camImg);
leftSide.appendChild(camera);

//// right side;

let rightSide = document.createElement("div");

rightSide.style.cssText += `
display:flex;
width:50%;
flex-direction:column;
margin-right:2rem;
margin-left: 25rem;
position:relative;
top:0;
left:0;
`;

let rigthHead = document.createElement("div");
rigthHead.style.cssText += `
font-weight:bold;
font-family:Montserrat;
margin-bottom:2cm;
font-size:2rem;
`;


rightSide.appendChild(rigthHead);

let rightBg = document.createElement("img");
rightBg.style.cssText += `
top:25px;
left:2rem;
max-height:10rem;
max-width:10.2rem;
margin-left:1.5cm;
positon:absolute;
z-index:5;
`;
rightSide.appendChild(rightBg);

let blobImage = document.createElement("img");
blobImage.style.cssText += `
height:100%;
margin-top:1.5cm;
position:absolute;
z-index:1
`;
rightSide.appendChild(blobImage);
section1.appendChild(rightSide);
root.appendChild(section1);

let section4 = document.createElement("div");
section4.innerHTML = "hello There";
section4.style.cssText += `
display: flex;
justify-content: flex-end;
background-color:gray;`;

root.appendChild(section4);