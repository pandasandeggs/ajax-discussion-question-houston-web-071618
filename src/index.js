const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?
const email = document.getElementById('email');
console.log("CONTENT NOT YET LOADED!", email);
const locStreet = document.getElementById('street');
console.log("CONTENT NOT YET LOADED!", locStreet);
const locCity = document.getElementById('city');
console.log("CONTENT NOT YET LOADED!", locCity);
const locState = document.getElementById('state');
console.log("CONTENT NOT YET LOADED!", locState);
const locPostCode = document.getElementById('postcode');
console.log("CONTENT NOT YET LOADED!", locPostCode);


function fetchData() {
  let data = fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => {
      let newData = json.results[0]
      let title = newData.name.title
      let firstName = newData.name.first
      let lastName = newData.name.last
      fullname.innerText = `${title}. ${firstName} ${lastName}`
      let emailValue = newData.email
      email.innerText = `${emailValue}`
      let locationStreet = newData.location.street
      let locationCity= newData.location.city
      let locationState = newData.location.state
      let locationPostCode = newData.location.postcode
      locStreet.innerText = `${locationStreet}`
      locCity.innerText = `${locationCity}`
      locState.innerText = `${locationState}`
      locPostCode.innerText = `${locationPostCode}`
    })
}
fetchData()


document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});
