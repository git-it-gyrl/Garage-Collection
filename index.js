const url='http://localhost:3000/cars'

fetch(url)
.then(res=>res.json())
.then(car=>renderPage(car));

function renderPage(car){
car.forEach(car => {
let newDiv=document.createElement('div')
newDiv.className="car-card"
document.querySelector('.car-collection').appendChild(newDiv);

let carImage= document.createElement('img')
carImage.src=car.image
newDiv.appendChild(carImage)

let carMake=document.createElement('h2')
carMake.innerText=car.make
newDiv.appendChild(carMake)

let carModel= document.createElement('h3')
carModel.innerText=car.model
newDiv.appendChild(carModel)

let carYear=document.createElement('h3')
carYear.innerText=car.year;
newDiv.appendChild(carYear)


    
});

}