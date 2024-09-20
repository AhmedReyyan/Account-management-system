let userNameInput = document.querySelector('#username');
let userNamePassword = document.querySelector('#password');
let usernameheading = document.getElementById('usernameheading');
let passwordheading  =document.getElementById('passwordheading');
let selectRoleBtn = document.getElementById('selectrolebtn');
let companyselects = document.querySelector('.companyroleselect')
let loginbtn = document.getElementById('loginbtn');
let loginHeading = document.getElementById('loginheading');
let loginmain = document.querySelector('.loginmain');
let logininputsdiv = document.querySelector('.logininputs')


let adminUserName = 'ahmedreyyan'
let adminUserPassword = 'ahmedreyyan11'

let login_role_state = null;

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
            if (login_role_state==null) {
                
                login_role_state = item.innerHTML
                if (login_role_state== 'Company') {
                    usernameheading.innerHTML = "User Name"
                    
                    Companylogin();
                    document.body.removeChild(divpage)

                }else if (login_role_state== 'Admin') {
                    document.body.removeChild(divpage)
                    usernameheading.innerHTML = 'Administrator Id';
                }
                

            }else
            if (login_role_state== "Admin" && item.innerHTML=="Company") {

                login_role_state= 'Company'
                usernameheading.innerHTML = "User Name"
                Companylogin()
                document.body.removeChild(divpage)

            }else
            if (login_role_state== "Company" && item.innerHTML=='Admin') {
                login_role_state = 'Admin'
                usernameheading.innerHTML = "Administrator Id"
                logininputsdiv.removeChild(logininputsdiv.querySelector('.companyfield'))
                loginmain.removeChild(loginmain.querySelector('.companyroleselect'))
                document.body.removeChild(divpage)

            }else if(login_role_state=='Company' && item.innerHTML == 'Company'){
                      document.body.removeChild(divpage)
            }else if(login_role_state=='Admin' && item.innerHTML == 'Admin'){
                document.body.removeChild(divpage)
      }

        //     if (login_role_state==null) {
              
        //           loginHeading.innerHTML = item.innerHTML
        //           document.body.removeChild(divpage);
        // if (loginHeading.innerHTML == 'Company'  || login_role_state == 'Admin') {
        //     login_role_state = loginHeading.innerHTML
        //     Companylogin()
            
        // }
        //      }
      
       
    })
    })

}





function Companylogin(){
 
companyId();
    let companyBtnDiv = document.createElement('div');
companyBtnDiv.className = 'companyroleselect';
let companyadmin =  document.createElement('button');
companyadmin.className = 'companyrolebtn Adminbtnc';
companyadmin.innerHTML = 'Company Adminbtn';
let companyuser =  document.createElement('button');
companyuser.className = 'companyrolebtn Userbtnc';
companyuser.innerHTML = 'Company User'
loginmain.appendChild(companyBtnDiv)
companyBtnDiv.appendChild(companyadmin)
companyBtnDiv.appendChild(companyuser)
         


    

}

function companyId(){

    let companyfield = document.createElement('div');
    companyfield.className = 'field companyfield';
    let companyfieldheading = document.createElement('h4');
    companyfieldheading.id = 'passwordheading';
    companyfieldheading.innerHTML = "Company :"
    let companyfieldinput = document.createElement('input');
    companyfieldinput.className = "companyinput";
    companyfieldinput.type = "text";
    companyfieldinput.required = true
    companyfieldinput.placeholder = "Entercompany id";
    companyfieldinput.className = "input";
    companyfieldinput.id = "companyId";


    logininputsdiv.appendChild(companyfield);
    companyfield.appendChild(companyfieldheading)
    companyfield.appendChild(companyfieldinput)
}


let companyRoleBtns = document.querySelector('.companyroleselect');
companyRoleBtns.addEventListener('click',()=>{
    console.log("hello");
    
})