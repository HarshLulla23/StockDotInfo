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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- <script async src='/cdn-cgi/bm/cv/669835187/api.js'></script> -->
    <title>Home</title>

</head>

<body>

    <form action="search.php" name="getdata">
    <input type="hidden" id="btnClickedValue" name="btnClickedValue" value="" />
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
                            <a href="Search.html" class="anchor active">
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
    <script>
        
        // var myarray =[
        //     {'symbol':'reliance.bse','close':'2331.80','change':'-20.90','changepercent':'-0.88'},
        //     {'symbol':'reliance.bse','close':'2331.80','change':'-20.90','changepercent':'-0.88'},
        //     {'symbol':'reliance.bse','close':'2331.80','change':'-20.90','changepercent':'-0.88'},
        //     {'symbol':'reliance.bse','close':'2331.80','change':'-20.90','changepercent':'-0.88'},
        //     {'symbol':'reliance.bse','close':'2331.80','change':'-20.90','changepercent':'-0.88'}
        // ];
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
    </script>
    <script src="../js/searchscript.js"></script>
</form>
<script type="text/javascript">

let dateP = document.querySelector(".lastdate");
let dateobj = new Date();
let current = dateobj.getDate();

let month = dateobj.getMonth() + 1;
console.log(month);
let date = dateobj.getDate();
let year = dateobj.getFullYear();
let ltd=1;

let stringtime= year+"-"+month+"-"+date;

let value=`<?php
include("searchdatabase.php");
$sql="SELECT dates FROM `searchpagedata` where symbol='APLE'";
$result=$conn-> query($sql);
while($row =$result->fetch_assoc()){
    echo $row["dates"];
}
$conn-> close();
?>`;

if(value==stringtime){
    var abcd= 2;  
}
else if(value!=stringtime){
    var abcd= 0; 
}
</script>
    
   <?php
       
		include("searchdatabase.php");
		$sql="SELECT * FROM `searchpagedata`";
		$result=$conn-> query($sql);
		if($result-> num_rows > 0){
			while($row =$result->fetch_assoc()){?>
                <script type="text/javascript">
                if(abcd==2){
                var table = document.querySelector(".companydata");
                var row =`<tr><td>
                <?php echo $row["company_name"];?>
                </td><td>
                <?php echo $row["closed"];?>
                </td><td>
                <?php echo $row["differences"];?>
                </td><td>
                <?php echo $row["percent"];?>
                </td></tr>`;
                table.innerHTML += row;
                // echo 'console.log("hello");';
                if(ltd==1){
                dateP.innerText = dateP.innerText + " "+`<?php echo $row["lastTradingDay"];?>`;
                ltd=0;
                }
                }
                else if(abcd==0){
                    console.log(abcd);
                    var valo= `<?php echo $row["symbol"];?>`;
                console.log("hello");
                
                $.ajax({
                        url: 'updateDatabase.php',
                        type: 'post',
                        data: { "callFunc1": valo},
                        success: function(response) { console.log(response);
                            var table = document.querySelector(".companydata");
                            var row =`<tr><td>
                            <?php echo $row["company_name"];?>
                            </td><td>
                            <?php echo $row["closed"];?>
                            </td><td>
                            <?php echo $row["differences"];?>
                            </td><td>
                            <?php echo $row["percent"];?>
                            </td></tr>`;
                            table.innerHTML += row;
                            if(ltd==1){
                            dateP.innerText = dateP.innerText + " "+`<?php echo $row["lastTradingDay"];?>`;
                            ltd=0;
                            }
                         }
                    });
                    console.log("hello");
                }
                </script>
                <?php
				}
			}
		else{
		echo "0 result";
		}
        $conn-> close();
?>
</script>
</body>
</html>