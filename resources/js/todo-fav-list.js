
function createItemInFav(id,val){
  var data ="<div id='fav-list-"+id+"'><div class='input-group input-container' id='item-container-fav-"+id+"'>"
    + "<div class='input-group-prepend'>"
    + "<div class='input-group-text'><input type='checkbox' id='check-fav-"+id+"' data-cat = 'favourite' data-val = '"+val+"' data-id='"+id+"'/></div></div>"
    + "<div class='form-control' id='form-fav-"+id+"'><input type='text' data-id='"+id+"' id='list-textbox-fav-"+id+"' class='list-textbox' value='"+ val +"' disabled='true'/></div>"
    + "<div class='list-icons' id='menu-item-fav-"+id+"'>"
    + "<a href='' id='edit-fav-"+id+"' title='Edit' data-id='"+id+"' onclick='return editItemFav("+id+")'><i class='fa fa-edit' aria-hidden='true'></i></a>"
    + "<a href='' id='delete-fav-"+id+"' data-id='"+id+"' title='Delete' onclick='return deleteItemFav("+id+")'><i class='fa fa-trash' aria-hidden='true'></i></a>"
    + "</div><div class='list-dropdown'>"
    + "<a href='' title='menu-drop-down-icon' id='menu-drop-down-icon-fav-"+id+"' data-id='"+id+"'><i class='fa drop-down-icon'>⠇</i></a>"
    + "<div class='dropdown-menu' id='dropdown-item-fav-"+id+"'>"
    + "<a id='edit-menu-fav-"+id+"' href='' data-id='"+id+"' title='Edit' onclick='return editItemFav("+id+")'><i class='fa fa-edit' aria-hidden='true'></i></a>"
    + "<a id='delete-menu-fav-"+id+"' href='' data-id='"+id+"' title='Delete' onclick='return deleteItemFav("+id+")'><i class='fa fa-trash' aria-hidden='true'></i></a></div></div>"
    + "</div></div>"
    $("#favListContainer").prepend(data)

    $('#list-textbox-fav-'+id).on("keyup",function(event){
      event.preventDefault();
      var id = $(this).data("id");
      if(event.keyCode === 13){
        var value = $('#list-textbox-fav-'+id).val()
        var url = "http://localhost:3000/todos/"+id;
        $.ajax({
          type: 'PUT',
          dataType: 'json',
          url: url,
          data: {"desc":value,"cat":"home","status":0},
          success:function(data,status){
            if(status == "success"){
              $("#list-textbox-fav-"+id).attr("disabled", true);
              $("#list-textbox-fav-"+id).blur();
            }
          }
        });
      }
    });

    $("#check-fav-"+id).change(function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      var val = $(this).data("val");
      var cat = $(this).data("cat");
      var url = "http://localhost:3000/todos/"+id;
      if(this.checked) {
        listStatusCheckFav(id,val,cat,url,1)
      }else{
        listStatusCheckFav(id,val,cat,url,0)
      }
    });

    $("#menu-drop-down-icon-fav-"+id).on('click touch',function (event) {
      event.preventDefault();
      var id = $(this).data("id");
      if($("#dropdown-item-fav-"+id).css("display") == "block"){
        $("#dropdown-item-fav-"+id).css("display","none");
      }else{
        $("#dropdown-item-fav-"+id).css("display","block");
      }
    });

}

function listStatusCheckFav(listId,listVal,listCat,url,listStatus){
  $.ajax({
    type: 'PUT',
    dataType: 'json',
    url: url,
    data: {"desc":listVal,"cat":listCat,"status":listStatus},
    success:function(data,status){
      if(status == "success"){
        checkStatus(data.status,listId,"#form-fav-","#list-textbox-fav-");
      }
    }
  });
}

function editItemFav(id){
  $("#list-textbox-fav-"+id).attr("disabled", false);
  $("#list-textbox-fav-"+id).focus();
  $("#dropdown-item-fav-"+id).css("display","none");
  return false;
}
function deleteItemFav(id){
  var url = "http://localhost:3000/todos/"+id;
  $.ajax({
    type: 'DELETE',
    dataType: 'json',
    url: url,
    success:function(data,status){
      if(status == "success"){
        $("#dropdown-item-fav-"+id).css("display","none");
        $("#item-container-fav-"+id).remove();
      }
    }
  });
  return false;
}
