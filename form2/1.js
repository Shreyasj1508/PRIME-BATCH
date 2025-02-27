const arr = [
    {name:"Vaibhav",city:"Mumbai",email:"vaibhav@gmail.com",id:1},
    {name:"Arun",city:"Delhi",email:"arun@gmail.com",id:2},
    {name:"Harshit",city:"Pune",email:"harshit@gmail.com",id:3},
    {name:"Aman",city:"Pune",email:"aman@gmail.com",id:3},    
    {name:"Rohit",city:"Mumbai",email:"harshit@gmail.com",id:3},
    {name:"Golu",city:"Mumbai",email:"golu@gmail.com",id:3},
    {name:"Rose",city:"Delhi",email:"rose@gmail.com",id:3},
]

const root= document.querySelector(".content");

const showCards = (arr)=>{
    root.innerHTML=``;
    arr.forEach((ele,idx) => {

        const child = document.createElement('div');
        child.className="card";
        child.innerHTML = `
        <h3>Name - ${ele.name} </h3>
        <h3>City - ${ele.city} </h3>
        <p>Email - ${ele.email}</p>
        <button class="btn" id="bt1" onclick="deleteCard('${ele.email}')">Delete</button>
        `
        root.appendChild(child);
    });


}
showCards(arr);

const handleChange = (e) =>{
    let val = e.target.value;
    if(val=="any"){
        showCards(arr);
        return;
    }
    const newArr = arr.filter((ele)=>{
        return ele.city==val;
    })
    showCards(newArr);
}
const deleteCard = (ele)=>{
    let idx=-1;
    arr.forEach((temp,i)=>{
        if(temp.email==ele){
            idx=i;
            return;
        }
    })
    arr.splice(idx,1);
    const val = document.getElementById("sel").value;
    if(val=="any"){
        showCards(arr);
        return;
    }
    const newArr = arr.filter((ele)=>{
        return ele.city==val;
    })
    showCards(newArr);
    
}

const handleSubmit = (e) =>{
    e.preventDefault();
    const eml = e.target[2].value;
    let val=0;
    arr.forEach((ele)=>{
        if(eml==ele.email){
            alert("email already exist");
            val=-1;
            return;
        }
    })

    if(val==0){
        let flag=0;
        arr.forEach((ele)=>{
            if(ele.city==e.target[1].value){
                flag=1;
                return;
            }
        })
        arr.push({name:e.target[0].value,city:e.target[1].value,email:e.target[2].value});
        
        if(flag==0){
            const optn = document.querySelector("#sel");
            optn.innerHTML+=<option value="${e.target[1].value}">${e.target[1].value}</option>

        }

        showCards(arr);
        alert("your details are added successfully")
        }

}