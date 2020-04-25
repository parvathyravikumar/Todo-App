<?php
  include('db_connection.php');

  console.log("in db query")
  if($(_POST["listItem"])){
    $data = array(
      ':user_id' => $_SESSION['user_id'],
      ':list_details' => trim($(_POST["listItem"]),
      ':list_status' => 'N'
    );
    $query = "INSERT INTO todoDetails (list_details,user_id,list_status)
               VALUES (:user_id,:list_details,:list_status)";
    $statement = $connect->prepare($query);
    if($statement->execute()){
      echo 'success';
    }
  }


?>
