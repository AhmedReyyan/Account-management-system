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
let userinputs  = document.querySelectorAll('input');

let adminUserName = 'ahmedreyyan'
let adminUserPassword = 'ahmedreyyan11'
let person = 'User'
let login_role_state = null;


selectRoleBtn.addEventListener('click',()=>{
     selectRole()
})


window.onload = (selectRole())





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
companyadmin.innerHTML = 'Company Admin';
let companyuser =  document.createElement('button');
companyuser.className = 'companyrolebtn Userbtnc';
companyuser.innerHTML = 'Company User';
companyuser.autofocus =true
loginmain.appendChild(companyBtnDiv)
companyBtnDiv.appendChild(companyadmin)
companyBtnDiv.appendChild(companyuser)
         
let companyRoleBtns = document.querySelectorAll('.companyrolebtn');
companyRoleBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
    console.log("hello");
    if (btn.innerHTML == 'Company Admin') {
        usernameheading.innerHTML = "Admin Id";
        person = 'Admin'
    }else{
        usernameheading.innerHTML = "User Name";
        person = 'User'
    }
    
}) 
    
})

    

}




function companyId(){

    let companyfield = document.createElement('div');
    companyfield.className = 'field companyfield';
    let companyfieldheading = document.createElement('h4');
    companyfieldheading.id = 'passwordheading';
    companyfieldheading.innerHTML = "Company :"
    let companyfieldinput = document.createElement('input');
    companyfieldinput.className = "companyinput input";
    companyfieldinput.type = "number";
    companyfieldinput.placeholder = "Entercompany id";
    companyfieldinput.id = "companyId";


    logininputsdiv.appendChild(companyfield);
    companyfield.appendChild(companyfieldheading)
    companyfield.appendChild(companyfieldinput)
}







let getdata = JSON.parse(localStorage.getItem('website'));
console.log(getdata);

loginbtn.addEventListener('click',()=>{
    
    userinputs.forEach(input=>{
        if (input.value == '') {
            return alert('enter All inputs')
        }
    })

    if (login_role_state == 'Admin') {
        if(userNameInput.value == adminUserName && userNamePassword.value== adminUserPassword) {
            window.location.href = './adminpanel/AdminPanel.html'
        }else{
            alert('wrong Admin id or password')
        }
        
    }else if(login_role_state == 'Company'){
        let usercom = document.querySelector('.companyinput');
                
                                     
             if (person == 'User') {
                     
                    getdata.companies.forEach(item =>{

                        if(Number(usercom.value) == item.companyid){
                           console.log(item);
                           item.users.forEach((user)=>{
                            console.log(user);
                            if(userNameInput.value == user.name){
                                console.log('userfond');
                                if(userNamePassword.value == String(user.id)){
                                    let storecompanyid = localStorage.setItem('companyid',JSON.stringify(item.companyid))
                                    window.location.href = './main/main.html'
                                }
                                
                            }
                            
                           })
                            
                        }
             })


             }else if(person == 'Admin'){

             }
    }
   
})
