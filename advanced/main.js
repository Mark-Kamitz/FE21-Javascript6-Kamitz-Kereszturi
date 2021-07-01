
let myData = JSON.parse(books);
var text = "";

for (let val of myData) {

    if(val.read === 'true'){
        text += `
            <p style="color:blue"> Title : ${val.title}  </p>
            <p> Author: ${val.author}  </p> 
            <p style="width:150px;"><img src="${val.cover}" style="with:100%; height:auto"> </p>
        `
    }   
    else{
        text += `
            <p style="color:red"> Title : ${val.title}  </p>
            <p> Author: ${val.author}  </p> 
            <p style="width:150px;"><img src="${val.cover}" style="with:100%; height:auto"> </p>
        `
    }    
}

document.getElementById("results").innerHTML = text;