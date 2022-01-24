import Mark from "mark.js";




export const Change=()=>{
    let addresses = [];
    let a = document.getElementsByTagName("mark").length;
    for(let i=0;i<a;i++){
      let b = document.getElementsByTagName("mark")[i];
      document.getElementsByTagName("mark")[i].innerText =`${b.innerText} `;
      b.id = `ThreelyAddress${i}`
      addresses.push(b.innerText);
    }
    console.log(addresses);
  }

export const Highlight=()=>{
const threely = new Mark(document.querySelector("body"));
  threely.unmark({
    done: ()=>{
      threely.markRegExp(/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/g,{
        "element":"mark",
        "className":"threelyAddress",
      });
    }
  });
}

Highlight();
Change();
  