var symbol = sessionStorage.getItem("symbol");
var name1 = sessionStorage.getItem("name");
var companyname = document.querySelector(".companyname");
var company = companyname.querySelector(".company");
var subdate = companyname.querySelector(".subdate");
var subdate1 = companyname.querySelector(".subdate1");
var closeprice = companyname.querySelector(".closeprice");
var change = companyname.querySelector(".change");
var changepercent = companyname.querySelector(".changepercent");
var greyback = document.querySelector(".greyback");
var tb1r1 = greyback.querySelector(".td2");
var tb1r2 = greyback.querySelector(".td3");
var tb1r3 = greyback.querySelector(".td4");
var tb1r4 = greyback.querySelector(".td5");
var tb1r5 = greyback.querySelector(".td6");
var tb1r6 = greyback.querySelector(".td7");
var tb1r7 = greyback.querySelector(".td8");
var tb1r8 = greyback.querySelector(".td9");
var tb1r9 = greyback.querySelector(".td10");
var tb1r10 = greyback.querySelector(".td11");
var tb1r11 = greyback.querySelector(".td12");
var tb1r12 = greyback.querySelector(".td13");
var tb1r13 = greyback.querySelector(".td14");
var tb1r14 = greyback.querySelector(".td15");
var tb1r15 = greyback.querySelector(".td16");
// const xhr = new XMLHttpRequest();

// Open an obejct (GET/POST, PATH,
// ASYN-TRUE/FALSE)
// xhr.open("GET", "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=RGLFHEB1DW0JDEF1", true);
// var obj = "";
// xhr.onload = function () {
//     if (this.status === 200) {

//         // Changing string data into JSON Object
//         obj = JSON.parse(this.responseText);
//         console.log(obj);

//         if (obj != null) {

//         }
//     }
//     else {
//         console.log("File not found");
//     }

// }
// xhr.send();



// function download(content, fileName, contentType) {
//     var a = document.createElement("a");
//     var file = new Blob([content], { type: contentType });
//     a.href = URL.createObjectURL(file);
//     a.download = fileName;
//     a.click();
// }
// download(obj, 'json.json', 'text/plain');



// const saveData = (function () {
//     const a = document.createElement("a");
//     document.body.appendChild(a);
//     a.style = "display: none";
//     return function (url, fileName) {
//         a.href = url;
//         a.download = fileName;
//         a.click();
//     };
// }());

// const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=RGLFHEB1DW0JDEF1&datatype=csv', // Replace with your own URL: window.location + "/downloadUserAction?draw=3&search%5Bvalue%5D=NLP_SEARCH&order%5B0%5D%5Bcolumn%5D=6&order%5B0%5D%5Bdir%5D=desc"
//     fileName = "my-csv.csv";

// saveData(url, fileName);

// const saveData = (function () {
//     const a = document.createElement("a");
//     document.body.appendChild(a);
//     a.style = "display: none";
//     return function (data, fileName) {
//         const blob = new Blob([data], {type: "octet/stream"}),
//             url = window.URL.createObjectURL(blob);
//         a.href = url;
//         a.download = fileName;
//         a.click();
//         window.URL.revokeObjectURL(url);
//     };
// }());

// const data = 'a,b,c\n5,6,7',
//     fileName = "my-csv.csv";

// saveData(data, fileName);
function fun() {
    inputBox.value = name1;
    $.ajax({
        url: '../html/createFile.php',
        type: 'post',
        data: { "objectData": symbol },
        success: function (response) {
            console.log(response);
            readTextFile("../jsonFiles/" + symbol + ".json", function (text) {
                var data = JSON.parse(text);
                console.log(data["Meta Data"]["3. Last Refreshed"]);
                subdate.innerText = data["Meta Data"]["3. Last Refreshed"];
            });
            readTextFile("../jsonFiles/" + symbol + "OverView.json", function (text) {
                var data = JSON.parse(text);
                console.log(data["Name"]);
                company.innerText = name1;
                subdate1.innerText = "| All price are in " + data["Currency"];
                tb1r6.innerText = "52 week High : " + data["52WeekHigh"];
                tb1r7.innerText = "52 week Low : " + data["52WeekLow"];
                tb1r8.innerText = "Dividend Per Share : " + data["DividendPerShare"];
                tb1r9.innerText = "PE Ratio : " + data["PERatio"];
                tb1r10.innerText = "PEG Ratio : " + data["PEGRatio"];
                tb1r11.innerText = "50DayMovingAverage : " + data["50DayMovingAverage"];
                tb1r12.innerText = "200DayMovingAverage : " + data["200DayMovingAverage"];
                tb1r13.innerText = "Profit Margin : " + data["ProfitMargin"];
                tb1r14.innerText = "Dividend Yield : " + data["DividendYield"];
                tb1r15.innerText = "Book Value : " + data["BookValue"];

            });
            readTextFile("../jsonFiles/" + symbol + "Quote.json", function (text) {
                var data = JSON.parse(text);
                // company.innerText = data["Name"];
                // subdate1.innerText = "| All price are in " + data["Currency"];
                closeprice.innerText = "Close: " + data["Global Quote"]["05. price"];
                var change1 = data["Global Quote"]["09. change"];
                var changepercent1 = data["Global Quote"]["10. change percent"];
                if (Number(change1) >= 0) {
                    change.style.color = "#27BC86";
                }
                else {
                    change.style.color = "red";
                }
                if (changepercent1[0] != '-') {
                    changepercent.style.color = "#27BC86";
                }
                else {
                    changepercent.style.color = "red";
                }
                change.innerText = change1;
                changepercent.innerText = " (" + changepercent1 + ")";
                tb1r1.innerText = "Symbol : " + data["Global Quote"]["01. symbol"];
                tb1r2.innerText = "Open : " + data["Global Quote"]["02. open"];
                tb1r3.innerText = "High : " + data["Global Quote"]["03. high"];
                tb1r4.innerText = "Low : " + data["Global Quote"]["04. low"];
                tb1r5.innerText = "Previous close : " + data["Global Quote"]["08. previous close"];
            });

        }
    });
}
fun();




// $.getJSON("RELI.json", function (data) {
//     var items = [];
//     $.each(data, function (key, key1, val) {
//         items.push("<li Meta Data='" + key + "'>" + val + "</li>");
//     });
//     console.log(items);
//     $("<ul/>", {
//         "class": "my-new-list",
//         html: items.join("")
//     }).appendTo("body");
// });

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
