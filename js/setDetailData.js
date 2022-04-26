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
var news1=document.getElementById("news1");
var news2=document.getElementById("news2");
var news3=document.getElementById("news3");
var newsData=[];
var ctx = /** @type {HTMLCanvasElement} */ (document.getElementById("myChart")).getContext("2d");
var col = ["red"];
var chartData;
var labelsNew = [];
var dataNew1 = [];
var dataNew2 = [];
var dataNew3 = [];
var dataNew4 = [];
console.log(symbol);
function candleStickFunction() {
    document.getElementById("d").style.display = "none";
    document.getElementById("container1").style.display = "block";
}
function lineGraphFunction() {
    document.getElementById("d").style.display = "block";
    document.getElementById("container1").style.display = "none";
}
function chartdatacall() {
    chartData = new Chart(ctx, {
        type: "line",
        data: {
            labels: [],
            datasets: [
                {
                    data: [],
                    label: ["open"],
                    backgroundColor: ["#f78594"],
                    borderColor: ["#FF4560"],
                },
                {
                    data: [],
                    label: ["High"],
                    backgroundColor: ["#7ac1f4"],
                    borderColor: ["#008FFB"],

                },
                {
                    data: [],
                    label: ["Low"],
                    backgroundColor: ["#74e0ba"],
                    borderColor: ["#00E396"],
                },
                {
                    data: [],
                    label: ["Close"],
                    backgroundColor: ["#f3c569"],
                    borderColor: ["#FEB019"],
                },
            ],

        },
        options: {
            responsive: false,
            borderColor: ["red"],
            BackgroundColor: ["red"],
        }
    })
}

function fun() {
    $("#container1").html("");
    document.getElementById("container1").style.display = "none";
    inputBox.value = name1;
    $.ajax({
        url: '../html/createFile.php',
        type: 'post',
        data: { "objectData": symbol },
        success: function (response) {
            anychart.onDocumentReady(function () {
                table = anychart.data.table();
                var allData = [];
                console.log(response);
                readTextFile("../jsonFiles/" + symbol + ".json", function (text) {
                    var data = JSON.parse(text);
                    console.log(data["Meta Data"]["3. Last Refreshed"]);
                    subdate.innerText = data["Meta Data"]["3. Last Refreshed"];


                    let i = 0;
                    var obj2 = data["Time Series (Daily)"];
                    for (var key3 in obj2) {
                        if (i < 50) {
                            labelsNew.push(key3);
                            var open = Number(data["Time Series (Daily)"][key3]["1. open"]);
                            var high = Number(data["Time Series (Daily)"][key3]["2. high"]);
                            var low = Number(data["Time Series (Daily)"][key3]["3. low"]);
                            var close = Number(data["Time Series (Daily)"][key3]["4. close"]);
                            dataNew1.push(open);
                            dataNew2.push(high);
                            dataNew3.push(low);
                            dataNew4.push(close);
                            allData.push([key3, open, high, low, close]);
                        }
                        else {
                            break;
                        }
                        i++;
                    }
                    table.addData(allData);
                    mapping = table.mapAs();
                    mapping.addField('open', 1, 'first');
                    mapping.addField('high', 2, 'max');
                    mapping.addField('low', 3, 'min');
                    mapping.addField('close', 4, 'last');
                    mapping.addField('value', 4, 'last');
                    var chart = anychart.stock();
                    var series = chart.plot(0).candlestick(mapping);
                    series.name(symbol + " Trade Data");
                    series.pointWidth('65%');

                    series.normal().fallingFill("#F34A2E", 0.9);
                    chart.scroller().enabled(false);


                    series.normal().risingFill("#40D55C", 0.9);

                    chart.title(name1 + " Historical Trade Data");
                    chart.container('container1');

                    chart.background().fill({
                        keys: ["#202124", "#383838", "#202124"],
                        angle: 160,
                    });

                    // draw the chart
                    chart.draw();


                    labelsNew.reverse();
                    dataNew1.reverse();
                    dataNew2.reverse();
                    dataNew3.reverse();
                    dataNew4.reverse();
                    console.log(dataNew2);
                    chartdatacall();
                    if (document.getElementById('op-1').checked) {
                        console.log("hqoq");
                        addData(chartData, labelsNew, dataNew1, dataNew2, dataNew3, dataNew4);
                    }


                });
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


function myFunction() {
    // document.getElementById("container1").innerHTML = "";
    // var old_html = $("#container1").html();
    $("#container1").html("");
    labelsNew.length = 0;
    dataNew1.length = 0
    dataNew2.length = 0;
    dataNew3.length = 0;
    dataNew4.length = 0;
    chartData.destroy();
    chartdatacall();
    anychart.onDocumentReady(function () {
        table = anychart.data.table();
        var allData = [];
        readTextFile("../jsonFiles/" + symbol + ".json", function (text) {
            var data = JSON.parse(text);
            console.log(data["Meta Data"]["3. Last Refreshed"]);
            subdate.innerText = data["Meta Data"]["3. Last Refreshed"];
            let i = 0;
            var obj2 = data["Time Series (Daily)"];
            for (var key3 in obj2) {
                if (i < 50) {
                    labelsNew.push(key3);
                    var open = Number(data["Time Series (Daily)"][key3]["1. open"]);
                    var high = Number(data["Time Series (Daily)"][key3]["2. high"]);
                    var low = Number(data["Time Series (Daily)"][key3]["3. low"]);
                    var close = Number(data["Time Series (Daily)"][key3]["4. close"]);
                    dataNew1.push(open);
                    dataNew2.push(high);
                    dataNew3.push(low);
                    dataNew4.push(close);
                    allData.push([key3, open, high, low, close]);
                }
                else {
                    break;
                }
                i++;
            }
            table.addData(allData);
            mapping = table.mapAs();
            mapping.addField('open', 1, 'first');
            mapping.addField('high', 2, 'max');
            mapping.addField('low', 3, 'min');
            mapping.addField('close', 4, 'last');
            mapping.addField('value', 4, 'last');
            var chart = anychart.stock();
            var series = chart.plot(0).candlestick(mapping);
            series.name(symbol + " Trade Data");
            series.pointWidth('65%');

            series.normal().fallingFill("#F34A2E", 0.9);
            chart.scroller().enabled(false);


            series.normal().risingFill("#40D55C", 0.9);

            chart.title(name1 + " Historical Trade Data");
            chart.container('container1');

            chart.background().fill({
                keys: ["#202124", "#383838", "#202124"],
                angle: 160,
            });

            // draw the chart
            chart.draw();


            labelsNew.reverse();
            dataNew1.reverse();
            dataNew2.reverse();
            dataNew3.reverse();
            dataNew4.reverse();
            console.log(dataNew2);
            if (document.getElementById('op-1').checked) {
                console.log("hqoq");
                addData(chartData, labelsNew, dataNew1, dataNew2, dataNew3, dataNew4);
            }

        });
    });
}



function myFunction1() {
    $("#container1").html("");
    labelsNew.length = 0;
    dataNew1.length = 0
    dataNew2.length = 0;
    dataNew3.length = 0;
    dataNew4.length = 0;
    console.log("check1")
    chartData.destroy();
    chartdatacall();
    anychart.onDocumentReady(function () {
        table = anychart.data.table();
        var allData = [];
        readTextFile("../jsonFiles/" + symbol + "Monthly.json", function (text) {
            var data = JSON.parse(text);
            let i = 0;
            var obj2 = data["Monthly Time Series"];
            for (var key3 in obj2) {
                if (i < 50) {
                    labelsNew.push(key3);
                    var open = data["Monthly Time Series"][key3]["1. open"];
                    var high = data["Monthly Time Series"][key3]["2. high"];
                    var low = data["Monthly Time Series"][key3]["3. low"];
                    var close = data["Monthly Time Series"][key3]["4. close"];
                    dataNew1.push(open);
                    dataNew2.push(high);
                    dataNew3.push(low);
                    dataNew4.push(close);
                    allData.push([key3, open, high, low, close]);
                }
                else {
                    break;
                }
                i++;
            }
            table.addData(allData);
            mapping = table.mapAs();
            mapping.addField('open', 1, 'first');
            mapping.addField('high', 2, 'max');
            mapping.addField('low', 3, 'min');
            mapping.addField('close', 4, 'last');
            mapping.addField('value', 4, 'last');
            var chart = anychart.stock();
            var series = chart.plot(0).candlestick(mapping);
            series.name(symbol + " Trade Data");
            series.pointWidth('65%');

            series.normal().fallingFill("#F34A2E", 0.9);
            chart.scroller().enabled(false);


            series.normal().risingFill("#40D55C", 0.9);

            chart.title(name1 + " Historical Trade Data");
            chart.container('container1');

            chart.background().fill({
                keys: ["#202124", "#383838", "#202124"],
                angle: 160,
            });

            // draw the chart
            chart.draw();

            labelsNew.reverse();
            dataNew1.reverse();
            dataNew2.reverse();
            dataNew3.reverse();
            dataNew4.reverse();
            console.log(data);
            addData(chartData, labelsNew, dataNew1, dataNew2, dataNew3, dataNew4);
        });
    });
}
function myFunction2() {
    labelsNew.length = 0;
    dataNew1.length = 0
    dataNew2.length = 0;
    dataNew3.length = 0;
    dataNew4.length = 0;
    $("#container1").html("");
    console.log("check2")
    chartData.destroy();
    chartdatacall();
    anychart.onDocumentReady(function () {
        table = anychart.data.table();
        var allData = [];
        readTextFile("../jsonFiles/" + symbol + "Weekly.json", function (text) {
            var data = JSON.parse(text);
            let i = 0;
            var obj2 = data["Weekly Time Series"];


            for (var key3 in obj2) {
                if (i < 50) {
                    labelsNew.push(key3);
                    var open = data["Weekly Time Series"][key3]["1. open"];
                    var high = data["Weekly Time Series"][key3]["2. high"];
                    var low = data["Weekly Time Series"][key3]["3. low"];
                    var close = data["Weekly Time Series"][key3]["4. close"];
                    dataNew1.push(open);
                    dataNew2.push(high);
                    dataNew3.push(low);
                    dataNew4.push(close);
                    allData.push([key3, open, high, low, close]);
                }
                else {
                    break;
                }
                i++;
            }
            table.addData(allData);
            mapping = table.mapAs();
            mapping.addField('open', 1, 'first');
            mapping.addField('high', 2, 'max');
            mapping.addField('low', 3, 'min');
            mapping.addField('close', 4, 'last');
            mapping.addField('value', 4, 'last');
            var chart = anychart.stock();
            var series = chart.plot(0).candlestick(mapping);
            series.name(symbol + " Trade Data");
            series.pointWidth('65%');

            series.normal().fallingFill("#F34A2E", 0.9);
            chart.scroller().enabled(false);


            series.normal().risingFill("#40D55C", 0.9);

            chart.title(name1 + " Historical Trade Data");
            chart.container('container1');

            chart.background().fill({
                keys: ["#202124", "#383838", "#202124"],
                angle: 160,
            });

            // draw the chart
            chart.draw();

            labelsNew.reverse();
            dataNew1.reverse();
            dataNew2.reverse();
            dataNew3.reverse();
            dataNew4.reverse();
            console.log(labelsNew);
            addData(chartData, labelsNew, dataNew1, dataNew2, dataNew3, dataNew4);
        });
    });

}



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
function addData(chart, label, data1, data2, data3, data4) {
    chart.data.labels = label
    let cou = 1;
    chart.data.datasets.forEach((dataset) => {
        if (cou == 1) { dataset.data = data1; }
        else if (cou == 2) { dataset.data = data2; }
        else if (cou == 3) { dataset.data = data3; }
        else if (cou == 4) { dataset.data = data4; }
        cou++;
    });
    chart.update();
}

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.marketaux.com/v1/news/all?symbols=" + symbol + "&filter_entities=true&language=en&api_token=DTAoMSsWq2ln2SujmiaCsiHIaWAC9hzXLs6KsyZY", true);

xhr.onload = function () {
    if (this.status === 200) {

        // Changing string data into JSON Object
        var obj = JSON.parse(this.responseText);
        
        
        for(var i=0;i<3;i++){
            newsData.push(obj["data"][i]["entities"][0]["highlights"][0]["highlight"]);
        }
        news1.innerHTML=newsData[0]+"\n\n";
        news2.innerHTML=newsData[1]+"\n\n";
        news3.innerHTML=newsData[2]+"\n\n";
        console.log(newsData[2]);
        // for (key in obj["data"]) {
        //     suggestions1.push(obj["bestMatches"][key]["2. name"] + " " + obj["bestMatches"][key]["1. symbol"]);
        //     sym[obj["bestMatches"][key]["2. name"] + " " + obj["bestMatches"][key]["1. symbol"]] = obj["bestMatches"][key]["1. symbol"];
        // }

        // if (userData) {
        //     emptyArray = suggestions1.filter((data) => {
        //         //filtering array value and user char to lowercase and return only those words which starts with userdata
        //         return data.toLocaleLowerCase();
        //     });
        //     emptyArray = emptyArray.map((data) => {
        //         return data = '<li>' + data + '</li>';
        //     });
        //     // console.log(emptyArray); //remove comment to see suggestion array on console
        //     searchinput.classList.add("active"); // show autocomplete box
        //     showSuggestions(emptyArray);
        //     let allList = suggBox.querySelectorAll("li");
        //     for (let i = 0; i < allList.length; i++) {
        //         // adding onclick attribiute to all li tag
        //         allList[i].setAttribute("onclick", "select(this)");
        //     }
        // }
        // else {
        //     searchinput.classList.remove("active"); //hide auto complete box
        // }
    }
    else {
        console.log("File not found");
    }
   
}
xhr.send();