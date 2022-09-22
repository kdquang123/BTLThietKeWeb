const tableBody=document.querySelector('table tbody');

function getDepartment(){
       fetch('https://632b32b6713d41bc8e83354a.mockapi.io/api/department')
       .then(function(response){
            return response.json();
       })
       .then(function(data){
              tableBody.innerHTML=(data.map((department)=>{
                     return ` <tr>
                     <td>${department.id}</td>
                     <td>${department.name}</td>
                     </tr>`
              })).join('');
       })
}

getDepartment();



