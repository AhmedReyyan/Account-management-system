let newCompany = document.querySelector('.createcompany');

let website = {
    Administrator : 'ahmedreyyan',
    password  : 'ahmedreyyan11',
    companies : [{},{},{}]
}



newCompany.addEventListener('click',()=>{
    console.log('click');
   
      newfunction();

   
})

function newfunction(){
let elem = new Object();
console.log(elem);

website.companies.push(elem)
storedata()
let storeData = localStorage.setItem('website',JSON.stringify(website));
}





function newCompanyDetail(){
     let datadiv = document.createElement('div')



}

function storedata() {
    
let gettingdata = JSON.parse(localStorage.getItem('website'))
console.log(gettingdata);

}
