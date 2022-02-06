let dateP = document.querySelector(".lastdate");
let dateobj = new Date();
let current = dateobj.getDate();
dateobj.setDate(current-1);

let month = dateobj.getMonth()+1;
console.log(month);
let date = dateobj.getDate();
let year = dateobj.getFullYear();

dateP.innerText = dateP.innerText +"  "+ date+'/'+month+'/'+year;