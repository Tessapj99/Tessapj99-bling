// main parent
let root = document.querySelector("#root");
root.style.cssText += `
background-color: #f3d62e;
`;

let header = document.createElement("div");
header.innerHTML = "BLING!";
header.style.cssText +=`
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
display: flex;
width: 100%;
margin-top:2rem;
align-items:center;
margin-left:2rem;
`;


let leftSide = document.createElement("div");

leftSide.style.cssText += `
width: 50%;
padding-left:2rem;
`;

//let rightSide = document.createElement("div");

CreateElementAndAppend(
  "Sizzle your Life",
  `font-size: 1rem;font-family:Montserrat`,
  null,
  "h1",
  leftSide
);
CreateElementAndAppend(
  "Focus on what is important to you and rely on us <br> for organizing your tasks",
  `font-size: 1.3rem;opacity:0.5;`,
  null,
  "p",
  leftSide
);
CreateElementAndAppend(
  "Get Started",
  `border-radius:4.5rem;padding:1.2rem;cursor: pointer;margin-bottom: 1.2rem;border-color:transparent;background-color:#8EE5D1;font-size:1.5rem`,
  null,
  `button`,
  leftSide
);

section1.appendChild(leftSide);
root.appendChild(section1);


