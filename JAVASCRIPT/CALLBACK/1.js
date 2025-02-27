// const sum = (a,b)=>{
//     const ans = a+b;
//     return ans;
// };
// const printpretty =(txt)=>{
//     console.log(txt);
//    console.log("------------");

// };
// printpretty(20,30);
//
//
// const sum = (a,b,c)=>{
//     const ans = a+b;
//     //return ans;
//     c[ans]
// };
// const printpretty =(txt)=>{
//     console.log(txt);
//    console.log("------------");

// };
// sum(20,30,printpretty);
//
//
// const view =  (a) =>{
//     console.log(a);
// }
// 

// const mod = function mod(a,b){
//     return (a+b)%10;
// }

// const mod = (a,b) => {
//     const ans = (a+b)%10;
//      const view =  (ans) =>{
//             console.log(ans);
//         }
//    view(ans);
// };
// mod(5,2);

// const obj ={
//     name: "vikas",
//     age:  10,
// }

// const username = prompt("Enter Username");
// const sub = prompt("Enter no of subjects");
// let arr = [];
// let ans = -1;
// let subans = "";
// for(let i = 0;i<sub;i++){
//     let subname = prompt("Enter subname");
//     let marks = parseInt(prompt("Enter marks"));
//     if(marks > ans){
//         ans = marks;
//         subans = subname;
//     }
//     arr.push({subname: marks});
// }
// console.log(subans+" "+arr[subans]);

// const sum = (a,b,c) =>{
//     const ans = a+b;
//     c(ans);
// };

// const printPretty = (txt) =>{
//     console.log(txt);
// }

// sum(20,30,printPretty);

const getMetaData = () =>{
    const name = prompt("Enter your name");
    console.log("Hello",name);
    const numOfSub = parseInt(prompt("Enter no of subjects"));
    return numOfSub;
}

const getSubjects = (num)=>{
    const record = {};
    for(let i=0;i<num;i++){
        const subName = prompt(`Please Enter Subject Name ${i+1}`);
        const marks = Number(prompt(`Please Enter your marks ${subName})`);
        record[subName] = marks;
    }
    console.log(record);
    return record;
}
const getPercentage = (obj) =>{
   // const subjects = Object.values(obj);
    const marks = Object.values(obj);
   // const pairs = Object.entries(obj);
    let totalMarks = 0;
    let totalSubjects = 0;
    marks.forEach((elem) =>{
        totalMarks += elem;
        totalSubjects++;
    });
    console.log("TotalMarks = ",totalMarks);
    console.log("TotalSubjects = ",totalSubjects);
    console.log("Percentage = ",(totalMarks*1.0/totalSubjects)*100);

}
const num = getMetaData();
const record = getSubjects(num);

getPercentage(record);