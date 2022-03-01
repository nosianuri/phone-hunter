const allPhone = () => {
    // clear data
    document.getElementById("phone-container").innerHTML = "";

    const searchValue = document.getElementById("search-box").value;
    
    // load data
    const url =  `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

//  console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => showPhoneDetails(data.data));

    // console.log(searchValue);
};

const showPhoneDetails = (phones) => {
   for (const phone of phones) {
    const parent=document.getElementById("phone-container");
    if(phones.length == 0 || phones.data
        == null) {
            document.getElementById("null-phone").style.display = 'block';
        } else {
            ("null-phone").style.display = 'none';
        }

    const div = document.createElement("div");
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
        <img class:"w-25" src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h2 class="card-title">Name: ${phone.phone_name}</h2>
        <h5>Brand: ${phone.brand}</h5>
            <div class="allbutton">
                <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-success">Delete</button>
            </div>	
        </div>
  </div>`;
parent.appendChild(div);
console.log(phone);
   } 
}

const loadPhoneDetail = (phoneId) => {
    // console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data));
}

const displayPhoneDetail = (phone) => {
    // console.log(phone);
     const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="text-center p-3">
    <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5>name: ${phone.name}</h5>
              <h5>sensors: ${phone.mainFeatures.sensors}</h5>
              <h5>brand: ${phone.brand}</h5>
              <h5>storage: ${phone.mainFeatures.storage}</h5>
              <h5>displaySize: ${phone.mainFeatures.displaySize}</h5>
              <h5>chipSet: ${phone.mainFeatures.chipSet}</h5>
              <h5>memory: ${phone.mainFeatures.memory}</h5>
              <h5>sensors: ${phone.mainFeatures.sensors}</h5>
              <h5>slug: ${phone.slug}</h5>
              <h5>releaseDate: ${phone.releaseDate}</h5>
              <h5>Bluetooth: ${phone.others.Bluetooth}</h5>
              <h5>GPS: ${phone.others.GPS}</h5>
              <h5>NFC: ${phone.others.NFC}</h5>
              <h5>USB: ${phone.others.USB}</h5>
              <h5>wlan: ${phone.others.WLAN}</h5>
            </div>
            </div>
    `;
    phoneDetails.appendChild(div);
    console.log(phone);
}