
window.addEventListener("DOMContentLoaded",traverse);

function traverse(){
console.log ("traverse");

const docElem = document.documentElement;

// console.log(docElem);
displayInfo(docElem);

}

function displayInfo (element){
  const str = `Element: ${element.tagName}`;
  console.log(str);

  const attributes = Array.from(element.attributes);
  attributes.forEach(function(attr){
    console.log(`${attr.name}="${attr.value}"`);
  });

  const children = Array.from(element.children);

  if (children.length > 0){
    // there are children
    children.forEach(displayInfo);
  }


}