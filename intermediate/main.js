
let mydata = JSON.parse(employees); // convert string into an object
var text = "";

    text +=  `
    <table class="table">
        <thead>
            <tr>
            <th scope="col">Unique ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">email</th>
            <th scope="col">Job Title</th>
            <th scope="col">Salary</th>
            </tr>
        </thead>
        <tbody> `;

  
    for (let val of mydata) {
    text += `
        <tr>
            <td>${val.UniqueID}</td>
            <td>${val.firstName}</td>
            <td>${val.lastName}</td>
            <td>${val.emailAddress}</td>
            <td>${val.jobTitleName}</td>
            <td>${val.salary}</td>
        </tr> `
    }
  
    text += `
        </tbody>
    </table>`;

    document.getElementById("results").innerHTML = text;