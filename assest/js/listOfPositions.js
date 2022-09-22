const tableBody=document.querySelector('table tbody');

function getPositions(){
       fetch('https://632b32b6713d41bc8e83354a.mockapi.io/api/positions')
       .then(function(response){
            return response.json();
       })
       .then(function(data){
              tableBody.innerHTML=(data.map((position)=>{
                     return ` <tr>
                     <td>${position.id}</td>
                     <td>${position.name}</td>
                     <td>${position.department}</td>
                     </tr>`
              })).join('');
       })
}

getPositions();



