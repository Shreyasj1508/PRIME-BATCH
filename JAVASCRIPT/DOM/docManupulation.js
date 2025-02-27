//console.log(document); //document object represents DOM
//console.dir(window); //window object represents browser object model (BOM)
//console.dir(document); //dir gives output in key value pair

//finding/searching an element -
//1. document.getElementById("id-name") 2. document.getElementsByClassName("class-name")
//3. document.getElementsByTagName() 4. document.querrySelector()
//5. documnet.querrySelectorAll()

// const ele= document.getElementById("text-1");
// console.log(ele);
// ele.style.color = "blue";
// const head4 = document.getElementsByClassName("hel");
// console.log(head4);

// console.dir(document.children);
// console.dir(document.children[0].children[1].children[0]);
// console.dir(document.children);
// console.dir(document.children[0].children[1].children[0]);

//document.children[0].children[1].children[0].style.color = "red";

//document.children[0].children[1].children[1].style.color = "blue";

// const outerdiv = document.getElementsByTagName("div");
// outerdiv[0].style.backgroundColor = "blue";

const outerdiv = document.querySelector("div");
outerdiv.style.backgroundColor = "blue";

const divchild = Array.from(outerdiv.children);
divchild.forEach((ele) => {
  ele.style.backgroundColor = "yellow";
});

const mapping = {
  invitation: "you are invited for invitation",
  reminder: "you have a reminder",
  notice: "you have a notice",
  message: "you have a message",
};
// const arr = Object.entries(mapping);

// divchild.forEach((ele,idx)=>{
//     ele.children[1].innerHTML= arr[idx][1];

//  })
//
//
//
const newEle = document.createElement("div");
const rootele = document.querySelector("body");
//newEle.innerHTML = "hello there";
rootele.appendChild(newEle);

Object.entries(mapping).forEach((ele) => {
  const child = document.createElement("div");
  // child.innerText = ele[1];
  child.innerHTML = `
        <h4 style= "color:red; font-size:15px;">hello</h4>
        <p> ${ele[1]}</p>`;
  newEle.appendChild(child);
});
