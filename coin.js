const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
const priceTag = document.querySelector("h1")
const spanTag = document.querySelector("span")
let currency = "USD"


const checkPrice = function() {
  fetch(url)
    .then(response => response.json())
  	.then(data => {
    	priceTag.innerHTML = data.bpi[currency].rate_float.toFixed(1)
  	})
}

checkPrice()

const navLinks = document.querySelectorAll("nav a")
navLinks.forEach(link => {
  link.addEventListener("click", function() {
    currency = this.getAttribute("data-currency")
    checkPrice()
    
    navLinks.forEach(link => link.classList.remove("selected"))

    this.classList.add("selected")
    
    spanTag.innerHTML = currency
  })
})

//check price every minute

setInterval(function() {
  checkPrice()
}, 60000)








