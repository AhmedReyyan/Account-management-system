let userNameInput = document.querySelector('#username');
let userNamePassword = document.querySelector('#password');
let usernameheading = document.getElementById('usernameheading');
let passwordheading  =document.getElementById('passwordheading');
let selectRoleBtn = document.getElementById('selectrolebtn');
let companyselects = document.querySelector('.companyroleselect')
let loginbtn = document.getElementById('loginbtn');
let loginHeading = document.getElementById('loginheading');
let loginmain = document.querySelector('.loginmain');

let adminUserName = 'ahmedreyyan'
let adminUserPassword = 'ahmedreyyan11'

loginbtn.addEventListener('click',()=>{
    
    if (userNameInput.value == adminUserName && userNamePassword.value== adminUserPassword) {
        window.location.href = './main/main.html'
    }else{
        alert('wrong Admin id or password')
    }
    
})


selectRoleBtn.addEventListener('click',()=>{
     selectRole()
})


window.onload(selectRole())

function selectRole(){
    let divpage = document.createElement('div');
    divpage.className = 'pagediv';
    let selectiondiv = document.createElement('div');
    selectiondiv.className = 'selectiondiv';
    let adminbtn = document.createElement('button');
    adminbtn.className= 'selectionbtn';
    adminbtn.innerHTML = 'Admin'
    let companiesBtn = document.createElement('button');
    companiesBtn.className = 'selectionbtn';
    companiesBtn.innerHTML = 'Company';

    document.body.append(divpage);
    divpage.appendChild(selectiondiv)
    selectiondiv.appendChild(adminbtn)
    selectiondiv.appendChild(companiesBtn)


    let selected  = document.querySelectorAll('.selectionbtn');
    selected.forEach(item=>{
        item.addEventListener('click',()=>{
        loginHeading.innerHTML = item.innerHTML
       document.body.removeChild(divpage);
        if (item.innerHTML == 'Company') {
            Companylogin()
        }
    })
    })

}






function Companylogin(){
 

    let companyBtnDiv = document.createElement('div');
companyBtnDiv.className = 'companyroleselect';
let companyadmin =  document.createElement('button');
companyadmin.className = 'companyrolebtn';
companyadmin.innerHTML = 'Company Admin';
let companyuser =  document.createElement('button');
companyuser.className = 'companyrolebtn';
companyuser.innerHTML = 'Company User'
loginmain.appendChild(companyBtnDiv)
companyBtnDiv.appendChild(companyadmin)
companyBtnDiv.appendChild(companyuser)
         


    

}