

let mydata = JSON.parse(cars);
console.log(mydata);
var text = "" ;

text +=  ` <div class="row " id="showMore"> `; 
 
    for (let val of mydata) {
    text += `
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-4">
            <div class="card" container-fluid">
                <img src="${val.image}" style="object-fit:cover; width:100%; height:150px;" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${val.name}</h5>
                    <a href="#" class="btn btn-warning showMoreInfo">More Info</a>
                </div>
            </div> 
        </div>
        `
    }
  
text += ` </div>` ; 

document.getElementById("results").innerHTML = text;

var btns = document.getElementsByClassName("showMoreInfo");

for(let i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function(){printMore(i)});
}

function printMore(index) {
    document.getElementById("showMore").innerHTML += `
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-4 p-5">
        <div class="card" container-fluid">
            <img src="${mydata[index].image}" style="object-fit:cover; width:100%; height:150px;" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${mydata[index].name}</h5>
                <p class="card-text">Price: ${mydata[index].price}</p>
                <p class="card-text">Production Year: ${mydata[index].productionYear}</p>
            </div>
        </div> 
    </div>
    `
}







