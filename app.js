// main parent
let root = document.querySelector("#root");
root.style.cssText += `
background-color: #f3d62e;
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

const CreateElementAndAppend = (
  value,
  style = null,
  onClick = null,
  tag,
  parent
) => {
  let tagName = document.createElement(tag);
  tagName.innerHTML = value;
  style !== null && (tagName.style.cssText += style);
  onClick !== null && tagName.addEventListener("click", onClick);
  parent.appendChild(tagName);
};

let section1 = document.createElement("div");
section1.style.cssText += `
display: block;
width: 100%;
margin-top:4rem;
align-items:center;
margin-left:8rem;
`;

let leftSide = document.createElement("div");

leftSide.style.cssText += `
width: 50%;
padding-left:2rem;
display:block;
`;

//let rightSide = document.createElement("div");

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
padding-left:2.5rem;
display:flex;
column-gap:20px;
`;


CreateElementAndAppend(
  "Polaroid",
  `border-radius:0.3cm;padding:0.5rem;cursor: pointer;margin-bottom: 1.2rem;border-color:rgb(49, 49, 49);font-size:1rem`,
  null,
  `button`,
  box
);
CreateElementAndAppend(
  "TV",
  `border-radius:0.3cm;padding:0.5rem;cursor: pointer;margin-bottom: 1.2rem;border-color:rgb(49, 49, 49);font-size:1rem;`,
  null,
  `button`,
  box
);
CreateElementAndAppend(
  "Traitor",
  `border-radius:0.3cm;padding:0.5rem;cursor: pointer;margin-bottom: 1.2rem;border-color:rgb(49, 49, 49);font-size:1rem;`,
  null,
  `button`,
  box
);

CreateElementAndAppend(
  "Fall Guy",
  `border-radius:0.3cm;padding:0.5rem;cursor: pointer;margin-bottom: 1.2rem;border-color:rgb(49, 49, 49);font-size:1rem;`,
  null,
  `button`,
  box
);

CreateElementAndAppend(
  "Radio",
  `border-radius:0.3cm;padding:0.5rem;cursor: pointer;margin-bottom: 1.2rem;border-color:rgb(49, 49, 49);font-size:1rem;`,
  null,
  `button`,
  box
);
section1.appendChild(leftSide);
section1.appendChild(box);
root.appendChild(section1);
