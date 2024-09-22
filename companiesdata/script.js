let companiestable = document.getElementById('companytablebody');


let newCompany = document.querySelector('.createcompany');
let registeration = document.getElementById('companyregistration')

let submitform = document.querySelector('.submit-btn')
let cancelform = document.querySelector('.Cancel')

let newCompanyName = document.getElementById('Companyname')
let newCompanyid = document.getElementById('Companyid')
let newAdminName = document.getElementById('adminname')
let newAdminId = document.getElementById('adminid');

let website = {
    Administrator : 'ahmedreyyan',
    password  : 'ahmedreyyan11',
    companies : [
        {companyname:'amazon',companyid:1234,adminname:'ali',adminid:2233,users:[
            {name:'face.fahad',id:100,status:'employee',salary:50000},
            {name:'f.jones',id:101,status:'HR',salary:60000},
            {name:'f.nick',id:102,status:'project manager',salary:40000},
            {name:'f.saad',id:103,status:'employee',salary:30000},
            {name:'f.john',id:104,status:'intern',salary:20000}
        ]},
        {companyname:'facebook',companyid:5566,adminname:'amjad',adminid:1137,users:[
            {name:'dildar',id:100,status:'employee',salary:50000},
            {name:'michael',id:101,status:'HR',salary:60000},
            {name:'ahmed',id:102,status:'project manager',salary:40000},
            {name:'reyyan',id:103,status:'employee',salary:30000},
            {name:'rehman',id:104,status:'intern',salary:20000}
        ]}
    ]
}
let setData  = localStorage.setItem("website",JSON.stringify(website))


document.onload=(onloadsetup())
function onloadsetup(){
    let finddata  =JSON.parse(localStorage.getItem('website'));
    console.log(finddata);
    if(finddata !== null){
        finddata.companies.forEach(item => {
            createrowforcompanydata(item.companyname,item.companyid,item.adminname,item.adminid,item.users.length)
        });
    }
   
}



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
    
         setData = localStorage.setItem("website",JSON.stringify(website))
    

    let companyobj = new Object({'companyname':companyname,'companyid':companyid,'adminname':adminname,'adminid':adminid,users:[]})
      let getdata  = JSON.parse(localStorage.getItem('website'));

      console.log(getdata.companies);
      console.log(website.companies.length)

      let addingdata = getdata.companies.push(companyobj)
      
        console.log(addingdata);
        console.log(getdata);
        
      setData = localStorage.setItem("website",JSON.stringify(getdata))
      createrowforcompanydata(companyname,companyid,adminname,adminid,companyobj.users.length)
}

     
      



function  createrowforcompanydata(companyname,companyid,adminname,adminid,users){
    let mainrow = document.createElement('tr');
    mainrow.className = 'trcompanyrow';
    let comNametd = document.createElement('td');
    comNametd.className = 'tbcompanyname companydtbox'
    comNametd.innerHTML = companyname;
    let comidtd = document.createElement('td');
    comidtd.className = 'tbcompanyid companydtbox';
    comidtd.innerHTML = companyid
    let adminnametd = document.createElement('td');
    adminnametd.className = 'tbadminname companydtbox';
    adminnametd.innerHTML = adminname;
    let adminidtd = document.createElement('td');
    adminidtd.className = 'tbadminid companydtbox'
    adminidtd.innerHTML = adminid;
    let comuserstd = document.createElement('td');
    comuserstd.className = 'tbcompanyusers companydtbox';
    comuserstd.innerHTML  = users

    
    mainrow.appendChild(comNametd)
    mainrow.appendChild(comidtd)
    mainrow.appendChild(adminnametd)
    mainrow.appendChild(adminidtd)
    mainrow.appendChild(comuserstd)
companiestable.appendChild(mainrow)


}

let getcomid =  document.querySelectorAll('.trcompanyrow');
getcomid.forEach(item=>{
    item.addEventListener('click',()=>{
        console.log(item);
        let storecompanyid = item.querySelector('.tbcompanyid')
        let setitemid = localStorage.setItem('companyid',JSON.stringify(storecompanyid.innerHTML))
        window.location.href = '../main/main.html'
    })
    
    
})





/**
 * 
 // <tr class="trcompanyrow">
// <td class="tbcompanyname companydtbox"></td>
// <td class="tbcompanyid companydtbox"></td>
// <td class="tbadminname companydtbox"></td>
// <td class="tbadminid companydtbox"></td>
// <td class="tbcompanyusers companydtbox"></td>
// </tr>




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

 */
