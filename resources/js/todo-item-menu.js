
function listStatusCheck(listId,listVal,listCat,url,listStatus){
  $.ajax({
    type: 'PUT',
    dataType: 'json',
    url: url,
    data: {"desc":listVal,"cat":listCat,"status":listStatus},
    success:function(data,status){
      if(status == "success"){
        checkStatus(data.status,listId,"#form-","#list-textbox-");
      }
    }
  });
}

function addToFav(id){
  var itemVal = $("#list-textbox-"+id).val();
  var url = "http://localhost:3000/todos/"+id;
  $.ajax({
    type: 'PUT',
    dataType: 'json',
    url: url,
    data: {"desc":itemVal,"cat":"favourite","status":0},
    success:function(data,status){
      if(status == "success"){
        createItemInFav(data.id,data.desc);
        $("#add-fav-"+data.id).css("color","#24A80C")
        $("#dropdown-item-"+data.id).css("display","none");
      }
    }
  });
  return false;
}

function editItem(id){
  $("#list-textbox-"+id).attr("disabled", false);
  $("#list-textbox-"+id).focus();
  $("#dropdown-item-"+id).css("display","none");
  return false;
}
function deleteItem(id){
  var url = "http://localhost:3000/todos/"+id;
  $.ajax({
    type: 'DELETE',
    dataType: 'json',
    url: url,
    success:function(data,status){
      if(status == "success"){
        $("#dropdown-item-"+id).css("display","none");
        $("#item-container-"+id).remove();
      }
    }
  });
  return false;
}

function moveTo(id){
  var catValue = prompt("Enter the category name");
  if(catValue != "" && catValue != undefined && catValue != null){
    var itemVal = $("#list-textbox-"+id).val();
    var url = "http://localhost:3000/todos/"+id;
    $.ajax({
      type: 'PUT',
      dataType: 'json',
      url: url,
      data: {"desc":itemVal,"cat":catValue,"status":0},
      success:function(data,status){
        if(status == "success"){
          addListToContainer(data.id,data.desc,"#newListContainer",data.cat);
          $("#dropdown-item-"+data.id).css("display","none");
        }
      }
    });
    return false;
  }
  // ToDo move to folder
}
