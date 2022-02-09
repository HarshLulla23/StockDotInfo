<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;700&family=Open+Sans:wght@300;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="../css/searchStyles.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <!-- <script async src='/cdn-cgi/bm/cv/669835187/api.js'></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>Home</title>
    <!-- <script>
        function getdate() {
                const xhr1 = new XMLHttpRequest();
                // Open an obejct (GET/POST, PATH,
                // ASYN-TRUE/FALSE)
                xhr1.open("GET","https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=RGLFHEB1DW0JDEF1",true);
                xhr1.onload = function (){
                    if(this.status===200){
                        var data = JSON.parse(this.responseText);
                        var date = data["Global Quote"]["07. latest trading day"];
                        let dateP = document.querySelector(".lastdate");
                        dateP.innerText = dateP.innerText + date;
                    }
                    else{
                        console.log("nodata");
                    }
                }
                xhr1.send();
            }
            
// var myarray =[
        //     {'symbol':'reliance.bse','close':'2331.80','change':'-20.90','changepercent':'-0.88'},
        //     {'symbol':'reliance.bse','close':'2331.80','change':'-20.90','changepercent':'-0.88'},
        //     {'symbol':'reliance.bse','close':'2331.80','change':'-20.90','changepercent':'-0.88'},
        //     {'symbol':'reliance.bse','close':'2331.80','change':'-20.90','changepercent':'-0.88'},
        //     {'symbol':'reliance.bse','close':'2331.80','change':'-20.90 ,'changepercent':'-0.88'}
            / ];
        // buildTable(myarray);
        // function buildTable(data){
        //     var table = document.querySelector(".companydata");
        //     for(var i = 0; i < data.length;i++){
        //         console.log(data[i].symbol);
        //         var row =`<tr>
        //                 <td>${data[i].symbol}</td>
        //                 <td>${data[i].close}</td>
        //                 <td>${data[i].change}</td>
        //                 <td>${data[i].changepercent}</td>
        //                 </tr>`
        //                 table.innerHTML += row;
        //     }
            
        // }
 
     </script> -->
     <script>
         var tradedate;
         let dateobj = new Date();
         let month = dateobj.getMonth()+1;
         let date = dateobj.getDate();
         let year = dateobj.getFullYear();
         tradedate = ""+ year+'-'+month+'-'+date;
        //  function getdate() {
        //         const xhr1 = new XMLHttpRequest();
        //         // Open an obejct (GET/POST, PATH,
        //         // ASYN-TRUE/FALSE)
        //         xhr1.open("GET","https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=RGLFHEB1DW0JDEF1",true);
        //         xhr1.onload = function (){
        //             if(this.status===200){
        //                 var data = JSON.parse(this.responseText);
        //                 tradedate = data["Global Quote"]["07. latest trading day"];
        //                 console.log(tradedate);
        //             }
        //             else{
        //                 console.log("nodata");
        //             }
        //         }
        //         xhr1.send();
        //     }
        function updatedatabase(key){
            const xhr2 = new XMLHttpRequest();
                // Open an obejct (GET/POST, PATH,
                // ASYN-TRUE/FALSE)
                xhr2.open("GET","https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+key+"&apikey=RGLFHEB1DW0JDEF1",true);
                xhr2.onload = function (){
                    if(this.status===200){
                        var data = JSON.parse(this.responseText);  
                        console.log(data); 
                        '<?php
                        $connn = mysqli_connect('localhost','root','','searchpage');
                        if (!$connn) {
                          die("Connection failed: " . mysqli_connect_error());
                        }
                        else{ ?>'
                            console.log("connection successfull for" + key);
                       '<?php }
                        mysqli_close($connn);
                        
                        // $sql = "SELECT * FROM searchpagedata";
                        // $result = mysqli_query($connn,$sql);
                        ?>'
                    }
                    else{
                        console.log("nodata");
                    }
                }
                xhr2.send();
        }
        
     </script>

</head>
<body>

    <div class="flexdata">
        <div class="container">
            <div class="heading">
                <h2>Dashboard</h2>
            </div>
            <nav class="navbar">
                <ul class="unorder">
                    <div class="position">
                        <li class="list">
                            <!-- <img src="../images/selected.png" alt="img" class="activeicon"> -->
                            <a href="Home.html" class="anchor">

                                <img src="../images/Home.png" alt="img" class="icons"></img>
                                Home</a>
                        </li>
                        <li class="list">
                            <a href="Search.php" class="anchor active">
                                <img src="../images/Search.png" alt="img" class="icons"></img>
                                Search
                            </a>
                        </li>
                        <li class="list">
                            <a href="#" class="anchor">
                                <img src="../images/Bookmark.png" alt="img" class="icons"></img>
                                Favourites
                            </a>
                        </li>
                        <li class="list">
                            <a href="#" class="anchor">
                                <img src="../images/analysis.png" alt="img" class="icons"></img>
                                Analysis
                            </a>
                        </li>
                        <li class="list">
                            <a href="AboutUs.html" class="anchor">
                                <img src="../images/About us.png" alt="img" class="icons"></img>
                                About us
                            </a>
                        </li>
                        <li class="list">
                            <a href="#" class="anchor">
                                <img src="../images/setting.png" alt="img" class="icons"></img>
                                Settings
                            </a>
                        </li>
                        <li class="list">
                            <a href="Contactus.html" class="anchor">
                                <img src="../images/Contact us.png" alt="img" class="icons"></img>
                                Contact us
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
        <div class="searchhead">
            <div class="di1">
                <div class="wrapper">
                    <div class="search-input">
                        <input type="text" placeholder="Type to serach..." style="border:none">
                        <div class="autocom-box">
                            <li>Login to preochd hsfh</li>
                            <li>Login to preochd hsfh</li>
                            <li>Login to preochd hsfh</li>
                            <li>Login to preochd hsfh</li>
                            <li>Login to preochd hsfh</li>
                            <li>Login to preochd hsfh</li>
                        </div>
                        <div class="icon">
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                </div>
                <p class="interesthead">You may be Intrested in:</p>
                <p class="lastdate">Last Updated:</p>
                <div class="interest">
                    <table class="interesttable">
                        <tr>

                        </tr>
                        <tbody class="companydata">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
<?php
$conn = mysqli_connect('localhost','root','','searchpage');
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
else{
}

$sql = "SELECT * FROM searchpagedata";
$result = mysqli_query($conn,$sql);
if (mysqli_num_rows($result) > 0) {?>
<script>
var table = document.querySelector(".companydata");
var thead = `<tr>
                         <td>Comapny Name</td>
                         <td>Close</td>
                         <td>Change</td>
                         <td>Change Percent</td>
            </tr>`
            table.innerHTML += thead;            
</script>
<?php
while($row = mysqli_fetch_assoc($result)) {?>
<script>
var lastdate = `<?php echo $row['lastupdatedate']?>`;
if(lastdate == tradedate){
    var row =`<tr>
                         <td><?php echo $row['company_name'] ?></td>
                         <td><?php echo $row['close'] ?></td>
                         <td><?php echo $row['difference'] ?></td>
                         <td><?php echo $row['percent'] ?></td>
         </tr>`
    table.innerHTML += row;
    }
else{
      //updatedatabase(`<?php echo $row['symbol']?>`);
    }   
</script> 
<?php
}
}
else{
echo "Data not fetched";
}
mysqli_close($conn);
?>
    <script src="../js/suggestions.js"></script>
    <script src="../js/searchscript.js"></script>
    <!-- <script src="../js/getdate.js"></script> -->

 </body>
</html>