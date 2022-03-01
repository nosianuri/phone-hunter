const allPhone = () => {
    const searchValue = document.getElementById("search-box").value;

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

    const div = document.createElement("div");
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
        <img class:"w-25" src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h2 class="card-title">Name: ${phone.phone_name}</h2>
        <h5>Brand: ${phone.brand}</h5>
            <div class="allbutton">
                <button class="btn btn-success">Delete</button>
            </div>	
        </div>
  </div>`
parent.appendChild(div);
console.log(phone);
   } 
    
}