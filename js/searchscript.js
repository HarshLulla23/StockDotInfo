// getting all requiered elements
const searchinput = document.querySelector(".search-input");
const inputBox = searchinput.querySelector("input");
const suggBox = searchinput.querySelector(".autocom-box");
var sym = {};
//if user press key and release

inputBox.onkeyup = (e) => {
    let userData = e.target.value.toLocaleLowerCase(); //user entered data
    let emptyArray = [];
    let suggestions1 = [];
    const xhr = new XMLHttpRequest();

    // Open an obejct (GET/POST, PATH,
    // ASYN-TRUE/FALSE)
    xhr.open("GET", "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + userData + "&apikey=RGLFHEB1DW0JDEF1", true);

    // When response is ready
    xhr.onload = function () {
        if (this.status === 200) {

            // Changing string data into JSON Object
            var obj = JSON.parse(this.responseText);

            for (key in obj["bestMatches"]) {
                suggestions1.push(obj["bestMatches"][key]["2. name"]);
                sym[obj["bestMatches"][key]["2. name"]] = obj["bestMatches"][key]["1. symbol"];
            }

            if (userData) {
                emptyArray = suggestions1.filter((data) => {
                    //filtering array value and user char to lowercase and return only those words which starts with userdata
                    return data.toLocaleLowerCase();
                });
                emptyArray = emptyArray.map((data) => {
                    return data = '<li>' + data + '</li>';
                });
                // console.log(emptyArray); //remove comment to see suggestion array on console
                searchinput.classList.add("active"); // show autocomplete box
                showSuggestions(emptyArray);
                let allList = suggBox.querySelectorAll("li");
                for (let i = 0; i < allList.length; i++) {
                    // adding onclick attribiute to all li tag
                    allList[i].setAttribute("onclick", "select(this)");
                }
            }
            else {
                searchinput.classList.remove("active"); //hide auto complete box
            }
        }
        else {
            console.log("File not found");
        }
    }
    if (userData.length > 2) {
        xhr.send();
    }
    else {
        searchinput.classList.remove("active");
    }
}
function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; //passing the user selected list item in textfield
    searchinput.classList.remove("active"); //hide auto complete box
    console.log(sym[selectUserData]);

}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    }
    else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}