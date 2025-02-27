const getData = (text) =>{
    const pr = fetch(`https:google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`,{
        headers:{
                         "x-rapidapi-host": "google-map-places.p.rapidapi.com",
                         "x-rapidapi-key": "8ffccc1bbdmshefa249d56e21b62p192989jsn901eb68e0f3a",
                    },
    });
    pr.then((res)=>{
        const pr2 = res.json();
        pr2.then((data)=>{
            showCards(data);
        })
    })
}

const showCards = (data) =>{
    const root = document.getElementById("locations")
    root.innerHTML=``;
    const {predictions} = data;
    predictions.forEach((ele)=>{
        const p = document.createElement('p');
        p.innerText = ele.description;
        root.appendChild(p);
    })

}
let timeoutID=null;
const handleSearch = (e)=>{
    if(timeoutID){
        clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(()=>{
        getData(e.target.value);
    },1000);
};