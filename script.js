    const icon = document.querySelector('.weather-icon');
    const temp = document.querySelector('.temperature-value');
const desc = document.querySelector('.temperature-desc p');
const tempSpan = document.querySelector('.temp-section span'); console.log(tempSpan);
const tempSection = document.querySelector('.temp-section');
    console.log(tempSection)
window.addEventListener('load', () => {

    const location = document.querySelector('.location p');
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // const proxy = 'https://cors-anywhere.herokuapp.com/';
            // set ${proxy} before the link, if the api doesn't work on localhost
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1969a7b1ae3dfdc950fecc130468c4dd`;
        
            fetch(api)
                .then(response => {
                    return response.json();
                }).
                then(data => {
                    // console.log(data);
                    const city = data.name;
                    const tem = data.main.temp;
                    const country = data.sys.country;
                    const des = data.weather[0].description;
                    const i = data.weather[0].icon;
                    
                    temp.innerHTML = `${Math.round(tem - 273)} &#176;`;
                    icon.innerHTML = `<img src="${i}.png"/>`;
                    desc.textContent = `${des}`;
                    location.textContent = `${city}, ${country}`;

            tempSection.addEventListener('click', () => {

                let celcius = (tem * 9/5) - 459.67 ;
                if (tempSpan.innerHTML === "F") {
                    tempSpan.innerHTML = "C";
                    temp.innerHTML = Math.floor(tem - 273)+ `&#176;`;
                } else {
                    tempSpan.textContent = "F";
                    temp.innerHTML = Math.floor(celcius) + `&#176;`;
                }
        
            });
                    
                });
            
            // const notification = document.querySelector('.notification');


        });
        
    }
        
    
});

