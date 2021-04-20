const url='http://localhost:3000/garage/'

fetch(url)
.then(res=>res.json())
.then(car=>renderPage(car));



addCarForm=document.querySelector('.add-car-form');

function renderPage(car){

console.log()


car.forEach(function(car,i){

let newDiv=document.createElement('div')
newDiv.className="car-card"
newDiv.style="width:300px"
document.querySelector('.car-collection').appendChild(newDiv);

let carImage= document.createElement('img')
carImage.src=car.image
carImage.className="carImage"
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

let carLikes=document.createElement('h3')
carLikes.innerText=`${car.likes} likes`;
newDiv.appendChild(carLikes)


let commentsContainer=document.createElement('div')
commentsContainer.className="comments-container"
newDiv.appendChild(commentsContainer)

newDiv.appendChild(commentsContainer)

    let comments=document.createElement('ul')
    comments.className="comments"
    commentsContainer.appendChild(comments)


    let commentForm= document.createElement('form')
    commentForm.className="comment-form"
    commentsContainer.appendChild(commentForm);

    let commentInput=document.createElement('input')
    commentInput.className="comment-input"
    commentInput.type="text"
    commentInput.name="comment"
    commentInput.placeholder="Add a comment..."
    commentForm.appendChild(commentInput)

    let commentButton=document.createElement('button')
    commentButton.className="comment-button"
    commentButton.type="submit"
    commentButton.innerText="post"
    commentForm.appendChild(commentButton)










let carLikeButton=document.createElement('button')
carLikeButton.className="car-like-button"
carLikeButton.innerText="Like"
newDiv.appendChild(carLikeButton)

carLikeButton.addEventListener('click',(event)=>{
let addedLikes=++car.likes
carLikes.innerText=`${addedLikes} likes`

console.log(addedLikes)
let newLikes={

    "likes":addedLikes

}

patchCar(newLikes,car.id)

})



let deleteButton= document.createElement('button')
deleteButton.className="removeButton"
deleteButton.innerText="Remove Car"
newDiv.appendChild(deleteButton)



deleteButton.addEventListener('click',(event)=>{
    let removeCar=document.querySelectorAll('.car-card')[i]
    let carId=car.id;
    deleteCar(carId)

    removeCar.remove();


})




    







    
});





}


function deleteCar(id){
    options={
        method: "DELETE",
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body:null
      }
    
      fetch (url+id,options)

}


function postCar(car){
    options={
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(car)
    }
  
    fetch (url,options)
  
  }

  function patchCar(newLikes,id){

    options={
        method: "PATCH",
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify(newLikes)
      }
    
      fetch (url+id,options)

  }





  addCarForm.addEventListener('submit',(event)=>{
    event. preventDefault();
    
    let newCar={
        "make": event.target.make.value,
        "model": event.target.model.value,
        "image": event.target.image.value,
        "year": event.target.year.value,
        "likes":0
    
    }
    
    postCar(newCar)
    
    
    })


