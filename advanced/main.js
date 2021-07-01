
let myData = JSON.parse(books);
var text = "";
console.log(myData);

for (let val of myData) {

    let flag = val.title;
    if(flag == true){
        text += `
            <p> 'Title' : ${val.title}  < /p>
            <p> 'Author': ${val.author}  </p> 
            <p><img src="${val.author}" > </p>
        `
    }   
    else{
        text += `
            <p> 'Title' : ${val.title}  < /p>
            <p> 'Author': ${val.author}  </p> 
            <p><img src="${val.author}" > </p>
        `
    }    
    }