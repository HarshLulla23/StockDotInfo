<?php
    function test($data1){
        include("searchdatabase.php");
        require __DIR__ . "/vendor/autoload.php";
        $client = new GuzzleHttp\Client();
        $response = $client->request("GET","https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=".$data1."&apikey=RGLFHEB1DW0JDEF1");
        
        // $data= $response->getBody();
        $data = json_decode($response->getBody(), true);
        $symbol= $data["Global Quote"]["01. symbol"];
        $price=  $data["Global Quote"]["05. price"];
        $difference = $data["Global Quote"]["09. change"];
        $percent=$data["Global Quote"]["10. change percent"];
        $lastTradingDay=$data["Global Quote"]["07. latest trading day"];
        date_default_timezone_set('Asia/Calcutta');
        $newDate=date('Y-n-j');
        $sql1="UPDATE `searchpagedata` SET closed = '$price', differences = '$difference', percent = '$percent', dates='$newDate', lastTradingDay = '$lastTradingDay' WHERE symbol='$symbol'";
           $stmt = $conn->prepare($sql1);
        if ($conn->query($sql1) === TRUE) {
            echo "Record updated successfully";
          } else {
            echo "Error updating record: " . $conn->error;
          }
        return 1;
    }
    if (isset($_POST['callFunc1'])) {
        echo test($_POST['callFunc1']);
    }
    ?>