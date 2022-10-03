const main=document.querySelector('.row');


function getEmPloyess(){
    fetch('https://632b32b6713d41bc8e83354a.mockapi.io/api/employees')
    .then(function(response){
         return response.json();
    })
    .then(function(data){
           main.innerHTML=(data.map((employee)=>{
            if(employee.unactive==false){
                return `<div class="card">
                  <img class="card-img-top" src="${employee.avatar}" alt="">
                  <div class="card-body">
                      <h4 class="card-title">- ${employee.name}</h4>
                      <p class="card-text">- ${employee.position}</p>
                      <button type="button" class="btn btn-primary" onclick="showDetail(${employee.id})">Xem chi tiết <i class="fa-solid fa-angle-right"></i></button>
                  </div>
                 </div> `
            }
           })).join('');
           document.querySelector('.container-fluid').style.height='auto';
    })
}



function showDetail(id){
    
    fetch('https://632b32b6713d41bc8e83354a.mockapi.io/api/employees')
    .then(function(response){
         return response.json();
    })
    .then(function(data){
     
           main.innerHTML=` <div class="col-0 col-sm-0 col-md-0 col-lg-2"></div>
           <div class="col-12 col-sm-12 col-md-11 col-lg-8 detail-profile">`+(data.map((employee)=>{
            if(employee.id==id){
                return `<div class="layout1">
                <header>
                  <div class="avatar">
                     <img src="${employee.avatar}" alt="">
                  </div>
                  <!---->
                </header>
                <div class="detail-profile-body">
                  <p>${employee.name}</p>
                  <p>${employee.sex}</p>
                  <p>${employee.age}</p>
                </div>
                <div class="detail-profile-footer">
                   <button type="button" class="btn btn-danger" onclick="softDeleteEmployee(${employee.id},${employee.unactive})"><i class="fa-solid fa-trash"></i> Xóa</button>
                  <button type="button" class="btn btn-warning" onclick=""><i class="fa-solid fa-pen-to-square"></i> Sửa</button>
                </div>
      
              </div>
              <div class="layout2">
                <h3>Thông tin chi tiết</h3>
                <div class="layout2-body">
                  <div><i class="fa-solid fa-layer-group"></i>   ${employee.position}</div>
                  <div><i class="fa-solid fa-landmark"></i>   ${employee.department}</div>
                  <div><i class="fa-solid fa-map-location-dot"></i>   ${employee.address}</div>
                  <div><i class="fa-solid fa-phone"></i>   ${employee.phoneNumber}</div>
                  <div><i class="fa-solid fa-sack-dollar"></i>   ${employee.salary}</div></div>
              </div>
            </div> `
            }
           })).join('')+`<div class="col-0 col-sm-0 col-md-0 col-lg-2"></div>
           </div>`;

           document.querySelector('.container-fluid').style.height='1100px';
           
           
    })
}


function softDeleteEmployee(id,isActive){
    isActive=true;
    var data={
        unactive:isActive
    }
      fetch(`https://632b32b6713d41bc8e83354a.mockapi.io/api/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          alert('Xóa thành công!');
          location.href="/view/showEmployees.html";
        })
        .catch((error) => {
          console.error('Error:', error);
        })
}





getEmPloyess();