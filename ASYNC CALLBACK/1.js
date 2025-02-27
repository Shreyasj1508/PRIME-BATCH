// console.log("start");

// const handleInneerCall = () => {
//   console.log("step y");
// };

// const handleCall = () => {
//   console.log("step N");
//   handleInneerCall();
//   console.log("step N");
// };

// setTimeout(handleCall, 5000);
// // setTimeout is a function -> time in milliseconds
// console.log("end");
//
//
// console.log("a");
// const handlleCall = () => {
//   console.log("h");
// };

// setTimeout(() => {
//   console.log("n");

//   setTimeout(() => {
//     console.log("p");
//   }, 0);

//   handlleCall();
//   console.log("b");
// }, 5000);
// console.log("c");

// ----------------------------------------------------- //

/* 

   hyderabaad: take user credential and authenticate
   ---> handleUser()

   noida: make the payment from the wallet by doing the required checks
   ---> handlePayment()

   bengalore: handle two team and implement wallet functionality
   //case 1

   ---> const userID  = handleUser();
   ---> if(userid) {
   --->       const resp = handlePayment(userid); 
   --->       console.log(resp);       
   --->            }
   ---> else  { 
   --->          console.log("INVALID")
   --->       }
  //
  // 
  
  //
  // 
  ---> using callbacks
  ---> const resp = handleuser(handlepayment)
                          // what if team call handlePayment 2 times ?
                          // or even with wrong credentials ?
                          // or never call it ?
  ---> console.log(resp)
  --->
  --->
  --->
  --->
//
//
// //   using promises
 ---> const resp = handleuser() return promise
  ---> THEN {
          
      const resp = handlePayment(userid); 
   --->       console.log(resp);       
  
  }
   CATCH {
      console.log("invalid details")
   }

*/
 
const pr = fetch("https://api.github.com/users/shreyasj1508");
pr.then((a)=>{
   console.log("a",a);
   const pr2 = a.json();
   pr2.then((data)=>{
      console.log(data);
      
   });
   
}).catch((b)=>{
   console.log("b",b);
   
});