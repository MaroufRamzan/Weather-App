const apiKey="f634287f84a79f43c525ae43174f76d6";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inp=document.querySelector('.search input');
const btn=document.querySelector('.search button');

var whetherIcon=document.querySelector('.whether-icon');

async function checkWeather(cityName)
{
    
    const response=await fetch(apiUrl + cityName + `&appid=${apiKey}`);

    if(response.status == 404)
    {
        document.querySelector('.errorMsg').style.display="block";
        document.querySelector('.mainBlock').style.display="none";

    }
    else{
        var data=await response.json();
    console.log(data);

        // they all are for update the data according to city
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+" °C";
    document.querySelector('.WinUpd').innerHTML=data.wind.speed +" Km/hr";
    document.querySelector('.humupdate').innerHTML=data.main.humidity +" %";

    if(data.weather[0].main=='Clear')
    {
        whetherIcon.src="images/clear.png"
        document.querySelector('.myAudio').play();

    }
    else if(data.weather[0].main=='Clouds')
    {
        whetherIcon.src="images/clouds.png"
        document.querySelector('.cloudy').play();
    }
    else if(data.weather[0].main=='Rain')
    {
        whetherIcon.src="images/rain.png"
        document.querySelector('.Rainy').play();
    }
    else if(data.weather[0].main=='Drizzle')
    {
        whetherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=='Snow')
    {
        whetherIcon.src="images/snow.png"
    }

    document.querySelector('.mainBlock').style.display="block";
    document.querySelector('.errorMsg').style.display="none";
    }
    
}



btn.addEventListener("click",()=>{
    if(inp.value=="")
    {
        window.alert("Enter the city name");
    }
    checkWeather(inp.value);
})

