<?php
function test($data){
    $filename = "../jsonFiles/".$data.'.json';
    date_default_timezone_set('Asia/Calcutta');
    $newDate=date('Y-n-j');
    echo file_exists($filename);
        if (file_exists($filename) && $newDate == (date ("Y-n-j", filemtime($filename)))) {
                echo "$filename was last modified: " . date ("Y-n-j", filemtime($filename));
        }
        else{
            require __DIR__ . "/vendor/autoload.php";
            $client = new GuzzleHttp\Client();
            $response1 = $client->request("GET","https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".$data."&apikey=QPW8V5WIR40AKG1U");
            $data1 = json_decode($response1->getBody(), true);
            $myfile1 = fopen("../jsonFiles/".$data.".json", "w") or die("Unable to open file!");
            fwrite($myfile1, json_encode($data1));
            fclose($myfile1);

            $response2 = $client->request("GET","https://www.alphavantage.co/query?function=OVERVIEW&symbol=".$data."&apikey=QPW8V5WIR40AKG1U");
            $data2 = json_decode($response2->getBody(), true);
            $myfile2 = fopen("../jsonFiles/".$data."OverView.json", "w") or die("Unable to open file!");
            fwrite($myfile2, json_encode($data2));
            fclose($myfile2);

            $response3 = $client->request("GET","https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=".$data."&apikey=QPW8V5WIR40AKG1U");
            $data3 = json_decode($response3->getBody(), true);
            $myfile3 = fopen("../jsonFiles/".$data."Quote.json", "w") or die("Unable to open file!");
            fwrite($myfile3, json_encode($data3));
            fclose($myfile3);


            $response4 = $client->request("GET","https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=".$data."&outputsize=full&apikey=QPW8V5WIR40AKG1U");
            $data4 = json_decode($response4->getBody(), true);
            $myfile4 = fopen("../jsonFiles/".$data."Weekly.json", "w") or die("Unable to open file!");
            fwrite($myfile4, json_encode($data4));
            fclose($myfile4);


            $response5 = $client->request("GET","https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=".$data."&apikey=QPW8V5WIR40AKG1U");
            $data5 = json_decode($response5->getBody(), true);
            $myfile5 = fopen("../jsonFiles/".$data."Monthly.json", "w") or die("Unable to open file!");
            fwrite($myfile5, json_encode($data5));
            fclose($myfile5);
        } 
        
}
if (isset($_POST['objectData'])) {
    echo test($_POST['objectData']);
}
?>