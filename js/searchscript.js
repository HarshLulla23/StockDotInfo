// getting all requiered elements
const searchinput = document.querySelector(".search-input");
const inputBox = searchinput.querySelector("input");
const suggBox = searchinput.querySelector(".autocom-box");

//if user press key and release

inputBox.onkeyup = (e) => {
    let userData = e.target.value.toLocaleLowerCase(); //user entered data
    let emptyArray =[];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user char to lowercase and return only those words which starts with userdata
            return data.toLocaleLowerCase().startsWith(userData);
        });
        // console.log(emptyArray);
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data+'</li>';
        });
        // console.log(emptyArray); //remove comment to see suggestion array on console
        searchinput.classList.add("active"); // show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for(let i =0; i < allList.length; i++){
            // adding onclick attribiute to all li tag
            allList[i].setAttribute("onclick","select(this)");
        }
    }
    else{
        searchinput.classList.remove("active"); //hide auto complete box
    }
}
function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; //passing the user selected list item in textfield
    searchinput.classList.remove("active"); //hide auto complete box

}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+userValue+'</li>';
    }
    else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}