<?php 
  

  //--------------------------------------------------------------------------
  // fetching data from mysql database
  //--------------------------------------------------------------------------
  
  $host = "localhost";
  $databaseName = "peripeci_miapuesta";
  $user = "peripeci_marioor";
  $pass = "m4r51lt0r";
  


// Create connection
$conn = new mysqli($host, $user, $pass, $databaseName);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// Create new table in DDBB to store user data
$sql = "CREATE TABLE IF NOT EXISTS peripeci_miapuesta.miapuesta_form (
  ID int NOT NULL AUTO_INCREMENT,
  DateInserted timestamp DEFAULT CURRENT_TIMESTAMP,
  fullname varchar(250) NOT NULL,
  email varchar(50) NOT NULL,
  groupAfirst varchar(50) NOT NULL,
  groupAsecond varchar(50) NOT NULL,
  groupBfirst varchar(50) NOT NULL,
  groupBsecond varchar(50) NOT NULL,
  groupCfirst varchar(50) NOT NULL,
  groupCsecond varchar(50) NOT NULL,
  groupDfirst varchar(50) NOT NULL,
  groupDsecond varchar(50) NOT NULL,
  groupEfirst varchar(50) NOT NULL,
  groupEsecond varchar(50) NOT NULL,
  groupFfirst varchar(50) NOT NULL,
  groupFsecond varchar(50) NOT NULL,
  groupGfirst varchar(50) NOT NULL,
  groupGsecond varchar(50) NOT NULL,
  groupHfirst varchar(50) NOT NULL,
  groupHsecond varchar(50) NOT NULL,
  PRIMARY KEY (ID))";

if ($conn->query($sql) === TRUE) {
    echo "";
} else {
    echo "Error creating table: " . $conn->error;
}


  //--------------------------------------------------------------------------
  // 2) SUBMIT FORM AND POPULATE TABLE
  //--------------------------------------------------------------------------

  //Fetching Values from ajax
  $fullname=$_POST['fullname'];
  $email=$_POST['email'];
  $firstgroup1=$_POST['firstgroup1'];
  $secondgroup1=$_POST['secondgroup1'];
  $firstgroup2=$_POST['firstgroup2'];
  $secondgroup2=$_POST['secondgroup2'];
  $firstgroup3=$_POST['firstgroup3'];
  $secondgroup3=$_POST['secondgroup3'];
  $firstgroup4=$_POST['firstgroup4'];
  $secondgroup4=$_POST['secondgroup4'];
  $firstgroup5=$_POST['firstgroup5'];
  $secondgroup5=$_POST['secondgroup5'];
  $firstgroup6=$_POST['firstgroup6'];
  $secondgroup6=$_POST['secondgroup6'];
  $firstgroup7=$_POST['firstgroup7'];
  $secondgroup7=$_POST['secondgroup7'];
  $firstgroup8=$_POST['firstgroup8'];
  $secondgroup8=$_POST['secondgroup8'];


  //Insert data into sales DDBB
  mysqli_query($conn,"INSERT INTO miapuesta_form (`fullname`,`email`,`groupAfirst`,`groupAsecond`,`groupBfirst`,`groupBsecond`,`groupCfirst`,`groupCsecond`,`groupDfirst`,`groupDsecond`,
    `groupEfirst`,`groupEsecond`,`groupFfirst`,`groupFsecond`,`groupGfirst`,`groupGsecond`,`groupHfirst`,`groupHsecond`) 
    VALUES ('$fullname', '$email', '$firstgroup1', '$secondgroup1', '$firstgroup2', '$secondgroup2', '$firstgroup3', '$secondgroup3', '$firstgroup4', '$secondgroup4'
      , '$firstgroup5', '$secondgroup5', '$firstgroup6', '$secondgroup6', '$firstgroup7', '$secondgroup7', '$firstgroup8', '$secondgroup8')"
  ) or die
  (mysqli_error($conn));

  // DDBB Connection Closed
  $conn -> close(); 


  ?>


