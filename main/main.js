

let identity = document.querySelector('.identity')
let companyname = document.getElementById('companyname')
let addemployee = document.querySelector('#addemployee');
let userdata = document.querySelector('.userdetails');

// fetching data from local storage
let getstoredcompanyid = JSON.parse(localStorage.getItem('companyid'))
let getuserprofile = JSON.parse(localStorage.getItem('userprofile'));
let getalldata = JSON.parse(localStorage.getItem('website'));//getting data in case to add new data



console.log(getuserprofile);

identity.innerHTML += getuserprofile

addemployee.addEventListener('click',()=>{
  if(getuserprofile !== 'User'){
        addingnewuser();
  }else{alert('you are not authorized')}
    
   

})


function addingnewuser(){
    
    let coverdiv = document.createElement('div');
    coverdiv.className = 'coverdiv';
  let gettinginputsfornewusers = document.createElement('div');
  gettinginputsfornewusers.className = 'gettingnewuser';
  let nameheading = document.createElement('h4');
  nameheading.innerHTML = 'Enter Name'
let nameinput = document.createElement('input');
nameinput.type = 'text';
nameinput.className = 'newinput';
nameinput.id= 'newname';
  let idheading = document.createElement('h4');
  idheading.innerHTML = 'Enter Id'
  let idinput = document.createElement('input');
  idinput.className = 'newinput';
   idinput.id = "newid"
  let statusheading = document.createElement('h4');
  statusheading.innerHTML = 'Enter Status'
  let statusinput = document.createElement('input');
  statusinput.className = 'newinput';
statusinput.id = 'newstatus';
  let salaryheading = document.createElement('h4');
  salaryheading.innerHTML  ='Enter Salary'
  let salaryinput = document.createElement('input');
  salaryinput.className = 'newinput';
salaryinput.id = 'newsalary';
let savebtn = document.createElement('button');
savebtn.className = 'newsave';
savebtn.innerHTML = 'Save'
let cancelbtn = document.createElement('button')
  cancelbtn.className = 'newcancel';
  cancelbtn.innerHTML = 'X'

  document.body.appendChild(coverdiv);
  coverdiv.appendChild(gettinginputsfornewusers);
  gettinginputsfornewusers.appendChild(nameheading)
  gettinginputsfornewusers.appendChild(nameinput)
  gettinginputsfornewusers.appendChild(idheading)
  gettinginputsfornewusers.appendChild(idinput)
  gettinginputsfornewusers.appendChild(statusheading)
  gettinginputsfornewusers.appendChild(statusinput)
  gettinginputsfornewusers.appendChild(salaryheading)
  gettinginputsfornewusers.appendChild(salaryinput)
  gettinginputsfornewusers.appendChild(savebtn)
  gettinginputsfornewusers.appendChild(cancelbtn)



cancelbtn.addEventListener('click',()=>{
    document.body.removeChild(coverdiv)
})


savebtn.addEventListener('click',()=>{
    settingnewuser(nameinput.value,idinput.value,statusinput.value,salaryinput.value)
    updateLocalStorage(nameinput.value,idinput.value,statusinput.value,salaryinput.value)
    document.body.removeChild(coverdiv)
})
   
}

function  settingnewuser(name , id, status , salary){

    let permission = true
    
    let userdatarow = document.createElement('div');
    userdatarow.className = 'userdatarow';
    let userdataboxname = document.createElement('textarea');
    userdataboxname.className = 'userdatabox';
    userdataboxname.innerHTML = name
    userdataboxname.readOnly= permission
  let userdataboxid = document.createElement('textarea');
    userdataboxid.className = 'userdatabox userdataboxid';
    userdataboxid.innerHTML = id
    userdataboxid.readOnly = permission
    let userdataboxstatus = document.createElement('textarea');
    userdataboxstatus.className = 'userdatabox';
    userdataboxstatus.innerHTML = status
    userdataboxstatus.readOnly = permission
    let userdataboxsalary = document.createElement('textarea');
    userdataboxsalary.className = 'userdatabox';
    userdataboxsalary.innerHTML = salary 
    userdataboxsalary.readOnly = permission;
let changesbtns = document.createElement('div');
changesbtns.className = 'userdatabox';
let savebtn = document.createElement('button')
savebtn.className = 'changebtn'
savebtn.innerHTML = 'Save';
let editbtn = document.createElement('button')
editbtn.className = 'changebtn'
editbtn.innerHTML = 'Edit'
let delbtn = document.createElement('button')
delbtn.className = 'del'
delbtn.innerHTML = 'X'


userdata.appendChild(userdatarow);
userdatarow.appendChild(userdataboxname)
userdatarow.appendChild(userdataboxid)
userdatarow.appendChild(userdataboxstatus)
userdatarow.appendChild(userdataboxsalary)
userdatarow.appendChild(changesbtns);
changesbtns.appendChild(editbtn)
changesbtns.appendChild(savebtn)
userdatarow.appendChild(delbtn)



editbtn.addEventListener('click',()=>{
  if(getuserprofile !=='User'){
     userdataboxname.readOnly = false;
    userdataboxid.readOnly = false;
    userdataboxstatus.readOnly = false;
    userdataboxsalary.readOnly = false;
  }else{alert('you are not authorized')}
   
})

savebtn.addEventListener('click',()=>{
  if (getuserprofile !== 'User') {
    userdataboxname.readOnly = permission;
    userdataboxid.readOnly = permission;
    userdataboxstatus.readOnly = permission;
    userdataboxsalary.readOnly = permission;
  }else{alert('you are not authorized')}
    
})




}


document.addEventListener("click",()=>{
  let findinguser  = userdata.querySelectorAll('.userdatarow')
if(getuserprofile !== 'User'){


findinguser.forEach(item => {
   let remove =  item.querySelector('.del');
   let itemid = item.querySelector('.userdataboxid')
   remove.addEventListener('click',()=>{

    getalldata.companies.forEach((company)=>{
      if(company.companyid == getstoredcompanyid){
         company.users.forEach((user,index)=>{
                 if(user.id == itemid.innerHTML){
                  company.users.splice(index,1)
                  let storeremoveduserdata = localStorage.setItem('website',JSON.stringify(getalldata))
                  
                 }
                 
         })
       
      }
    
    })
    userdata.removeChild(item)
   })
    
});}else{alert('you are not authorized')}
})



document.onload =(settinguserforcompany(getstoredcompanyid))
function settinguserforcompany(id){
  let getusers = JSON.parse(localStorage.getItem('website'))
  console.log(getusers.companies);

 let sett =  getusers.companies.forEach((company)=>{
            if(company.companyid==id){
              companyname.innerHTML = company.companyname
              company.users.forEach(user=>{
                settingnewuser(user.name , user.id, user.status , user.salary)
              })
              
            }
 })
}


function updateLocalStorage(name,id,status,salary){
  let newuser = new Object({name:name,id:id,status,salary,salary});
  getalldata.companies.forEach((item,index)=>{
      if(getstoredcompanyid == item.companyid){
        item.users.push(newuser)
        console.log(newuser);
        let savedata = localStorage.setItem('website',JSON.stringify(getalldata))
      }

  
  })
}


