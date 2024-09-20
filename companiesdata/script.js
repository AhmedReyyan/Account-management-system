let newCompany = document.querySelector('.createcompany');
let registeration = document.getElementById('companyregistration')
let submitform = document.querySelector('.submit-btn')
let cancelform = document.querySelector('.Cancel')
let newCompanyName = document.getElementById('Companyname')
let newCompanyid = document.getElementById('Companyid')
let newAdminName = document.getElementById('adminname')
let newAdminId = document.getElementById('adminid')

let website = {
    Administrator : 'ahmedreyyan',
    password  : 'ahmedreyyan11',
    companies : []
}

// let getdata = JSON.parse(localStorage.getItem('website'))
// console.log(getdata);


// let setData = localStorage.setItem("website",JSON.stringify(website))

cancelform.addEventListener('click',()=>{
    registeration.style.display = 'none';
})


newCompany.addEventListener('click',()=>{
    registeration.style.display = 'flex'
})

registeration.addEventListener('submit',(e)=>{
    e.preventDefault()
   console.log('click');
   
    putcompanydata(newCompanyName.value,newCompanyid.value,newAdminName.value,newAdminId.value)
        registeration.reset()
        registeration.style.display = 'none'
})


function putcompanydata(companyname,companyid,adminname,adminid){
    console.log('click2');
    
    let companyobj = new Object({'companyname':companyname,'companyid':companyid,'adminname':adminname,'adminid':adminid,users:[]})
      console.log(companyobj);
      let addingdata = website.companies.push(companyobj)
      let setdta =  localStorage.setItem('companies',JSON.stringify(website))

}

let  setdta =  localStorage.setItem('companies',JSON.stringify(website))
      













































// newCompany.addEventListener('click',()=>{
//     console.log('click');
   
//       newcompanyDetails()

   
// })


// function newcompanyDetails(){
//     let div = document.createElement('div');
//     div.className = 'div'
//     let companyName = document.createElement('input')
//     companyName.placeholder = 'enter company name'
//     let companyId = document.createElement('input');
//     companyId.placeholder = 'entercompany Id';
//     let submitbtn  =document.createElement('button');
//     submitbtn.className = 'submitcompany';
//     submitbtn.innerHTML = 'Submit'
//     document.body.appendChild(div)
//     div.appendChild(companyName)
//     div.appendChild(companyId)
//     div.appendChild(submitbtn)

//     document.querySelector('.submitcompany').addEventListener('click',()=>{
//               document.body.removeChild(div)
//               newfunction(companyName.value,companyId.value)
//     })
    

// }


// /





// function newCompanyDetail(){
//      let datadiv = document.createElement('div')



// }

// function storedata() {
    
// let gettingdata = JSON.parse(localStorage.getItem('website'))
// console.log(gettingdata);

// }
