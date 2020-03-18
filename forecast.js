const submit=document.querySelector('button')
const form=document.querySelector('form')
console.log(submit,'jj');
let resultWeather="";
submit.addEventListener('click',e =>{
    e.preventDefault();
    const  constCity=form.city.value.trim();
    console.log(constCity);
    //  getCity(constCity).then(data=>{ return getWeather(data.Key);}).then(data=>{ console.log(data);}).catch(err=>{console.log(err)})
     console.log("called")
   getCity(constCity).then( async data=>{
      console.log(data)
    let weather = await getWeather(data)
    console.log(weather)
   
    let doc1=document.getElementById('result')

doc1.innerHTML=weather.title;

let doc2 =document.getElementById('resultTemp')

doc2.innerHTML=weather.temp;

let doc3=document.getElementById('result-image')



} 
)
})
getWeather=async(id)=>{
    const response=await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=ciklq4gSjZj53AKCH4QyMpIQr1DaBfAF`)
    const data=await response.json()
    console.log(data)
    let temp=data[0].Temperature.Metric.Value
    let title=data[0].WeatherText
    let result={
        temp,
        title
    }
    return result
}

getCity = async (city)=>{
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=ciklq4gSjZj53AKCH4QyMpIQr1DaBfAF&q=${city}`)
    const data =await response.json()
   return data[0].Key
    
}
// let doc=document.getElementById('result')
// console.log(doc);
// doc.innerHTML=resultWeather;

// getCity('delhi')






