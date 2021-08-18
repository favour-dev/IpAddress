
let ipButton = document.getElementById('ip-button')
const baseUrl = 'https://geo.ipify.org/api/v1?apiKey=at_4Zeq5Xt0WDpkxw2VFmnI8OP0801HE&ipAddress=8.8.8.8';
// "at_4Zeq5Xt0WDpkxw2VFmnI8OP0801HE";
const result = document.querySelector('#result')

ipButton.addEventListener('click', () => {
    let ipAddress = document.getElementById('ip-address-input').value
   
    fetch(`${baseUrl}&ipAddress=${ipAddress}`)
    .then(response => response.json())
     .then(data => { console.log('The Data',data);
        result.innerHTML =  `<div class="result-container">
        <div class="one">
         <p class="result-name">IP ADDRESS</p>
         <h3 class="result-solution">${data.ip}</h3>
        </div>
       <div class="one two">
         <p class="result-name">LOCATION</p>
         <h3 class="result-solution">${data.location.city}</h3>
       </div>
       <div class="one two">
         <p class="result-name">TIMEZONE</p>
         <h3 class="result-solution">UTC-${data.location.timezone}</h3>
       </div>
       <div class="one two">
         <p class="result-name">ISP</p>
         <h3 class="result-solution">${data.isp}</h3>
       </div>`
    
    })
})