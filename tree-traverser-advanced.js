
window.addEventListener("DOMContentLoaded",traverse);

function traverse(){
console.log ("traverse");

const docElem = document.documentElement;

// console.log(docElem);

const str = displayInfo(docElem);

console.log(str);

}


let indent = 0;

function displayInfo (element){

    let str = " ".repeat(indent*2);
    str += `${element.tagName.toLowerCase()}`;

    const attributes = Array.from(element.attributes);
    attributes.forEach(function(attr){
        str += `${attr.name}="${attr.value}"`;
    });

    str += ">";



    const children = Array.from(element.children);

    if(children.length > 0){
        str += "\n";
        // indent two spaces
        indent++;
        //there are children
        children.forEach(function(child){
            str += displayInfo(child);
        });

        //stop indenting two spaces
        indent--;
    }

    // add end tag - if there should be one!
    if("hr br meta".includes(element.tagName.toLowerCase()) == false){
        // if this is the first on its line, add indentation
        if (str.substr(-1) === "\n"){
            str += " ".repeat(indent*2);
        }

        str += `</${element.tagName.toLowerCase()}>`;
    }

    str += "\n";

    return str;


}