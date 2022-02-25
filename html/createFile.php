<?php
function test($data1){
    $filename = "../jsonFiles/".$data1.'.json';
    date_default_timezone_set('Asia/Calcutta');
    $newDate=date('Y-n-j');
    echo file_exists($filename);
        if (file_exists($filename) && $newDate == (date ("Y-n-j", filemtime($filename)))) {
                echo "$filename was last modified: " . date ("Y-n-j", filemtime($filename));
        }
        else{
            require __DIR__ . "/vendor/autoload.php";
            $client = new GuzzleHttp\Client();
            $response = $client->request("GET","https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".$data1."&apikey=RGLFHEB1DW0JDEF1");
            $data = json_decode($response->getBody(), true);
            $myfile = fopen("../jsonFiles/".$data1.".json", "w") or die("Unable to open file!");
            fwrite($myfile, json_encode($data));
            fclose($myfile);

            $response1 = $client->request("GET","https://www.alphavantage.co/query?function=OVERVIEW&symbol=".$data1."&apikey=QPW8V5WIR40AKG1U");
            $data2 = json_decode($response1->getBody(), true);
            $myfile1 = fopen("../jsonFiles/".$data1."OverView.json", "w") or die("Unable to open file!");
            fwrite($myfile1, json_encode($data2));
            fclose($myfile1);

            $response2 = $client->request("GET","https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=".$data1."&apikey=QPW8V5WIR40AKG1U");
            $data3 = json_decode($response2->getBody(), true);
            $myfile2 = fopen("../jsonFiles/".$data1."Quote.json", "w") or die("Unable to open file!");
            fwrite($myfile2, json_encode($data3));
            fclose($myfile2);
        }
}
if (isset($_POST['objectData'])) {
    echo test($_POST['objectData']);
}
?>