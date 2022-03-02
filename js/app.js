const allPhone = () => {
    /***********************clear data************************ */ 
    document.getElementById("phone-container").innerHTML = "";

    document.getElementById("spinner").style.display = "block";
    const searchField = document.getElementById("search-box");
    const searchValue = searchField.value;

    // clear data
    searchField.value = '';
    
    /*******************************load data*********************************** */ 
    const url =  `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;



    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data.slice(0, 20) == 0)
            
            if (data.data.slice(0, 20) == 0) {
                document.getElementById("null-phone").style.display = "block";
            }  else{
                showPhoneDetails(data.data.slice(0, 20));
                
                document.getElementById("null-phone").style.display = "none";
            }
        });
       document.getElementById("spinner").style.display = "none"; 
    
};

/*******************all phone details******************** */ 

const showPhoneDetails = (phones) => {
   for (const phone of phones) {
    const parent=document.getElementById("phone-container");
    

    const div = document.createElement("div");
    
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100 col-md-12 m-auto">
        <img src="${phone.image}" class="card-img-top w-25" alt="...">
        <div class="card-body">
        <h2 class="card-title">Name: ${phone.phone_name}</h2>
        <h5>Brand: ${phone.brand}</h5>
            <div class="allbutton">
                <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-info">Delete</button>
            </div>	
        </div>
        </div>`;
parent.appendChild(div);
console.log(phone);
   } 
}
/***************************single phone details******************************* */  
const loadPhoneDetail = (phoneId) => {
    
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data));
}

const displayPhoneDetail = (phone) => {
    
     const phoneDetails = document.getElementById('phone-details');
     phoneDetails.textContent = '';
    const div = document.createElement('div');
    window.scrollTo(0,0);
    div.classList.add('card');
    div.innerHTML = `
    <div class="text-center p-3">
    <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5>name:<small>  ${phone.name}<small></h5>
              <h5>releaseDate:<small> ${phone.releaseDate?phone.releaseDate:"No release date found"}<small></h5>
              <h5>sensors:<small> ${phone.mainFeatures.sensors}<small></h5>
              <h5>brand:<small>  ${phone.brand}<small></h5>
              <h5>storage:<small>  ${phone.mainFeatures.storage}<small></h5>
              <h5>displaySize:<small>  ${phone.mainFeatures.displaySize}<small></h5>
              <h5>chipSet: <small> ${phone.mainFeatures.chipSet}<small></h5>
              <h5>memory: <small> ${phone.mainFeatures.memory}<small></h5>
              <h5>sensors: <small> ${phone.mainFeatures.sensors}<small></h5>
              <h5>slug: <small> ${phone.slug}<small></h5>
              <h5>Bluetooth: <small> ${phone.others.Bluetooth}<small></h5>
              <h5>GPS: <small> ${phone.others.GPS}<small></h5>
              <h5>NFC: <small> ${phone.others.NFC}<small></h5>
              <h5>USB: <small> ${phone.others.USB}<small></h5>
              <h5>wlan: <small> ${phone.others.WLAN}<small></h5>
            </div>
            </div>
    `;
    phoneDetails.appendChild(div);
    console.log(phone);
}