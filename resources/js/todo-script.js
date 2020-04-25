$(document).ready(function(){
  $('#addItem').click(function(event){
    event.preventDefault();
    var itemVal  = $("#listItem").val();
    if(itemVal != ""){
      var dte = new Date();
      var item_id = Date.parse(dte);
      $("#listContainer").prepend("<div id='list-"+item_id+"'><div class='input-group input-container' id='item-container-"+item_id+"'>"
        + "<div class='input-group-prepend'>"
        + "<div class='input-group-text'><input type='checkbox' id='check-"+item_id+"' data-id='"+item_id+"'/></div></div>"
        + "<div class='form-control' id='form-"+item_id+"'><input type='text' data-id='"+item_id+"' id='list-textbox-"+item_id+"' class='list-textbox' value='"+ itemVal +"' readonly/></div>"
        + "<div class='list-icons' id='menu-item-"+item_id+"'>"
        + "<a href='#'><i id='add-fav-"+item_id+"' tooltip='Add to favourites' data-id='"+item_id+"' class='fa'>&#xf006;</i></a>"
        + "<a href='#'><i id='edit-"+item_id+"' tooltip='Edit' data-id='"+item_id+"' class='fa'>&#xf044;</i></a>"
        + "<a href='#'><i tooltip='Delete' id='delete-"+item_id+"' data-id='"+item_id+"' class='fa'>&#xf014;</i></a>"
        + "</div><div class='list-dropdown'>"
        + "<a href=''><i tooltip='menu-drop-down-icon' id='menu-drop-down-icon-"+item_id+"' data-id='"+item_id+"' class='fa drop-down-icon'>⠇</i></a>"
        + "<div class='dropdown-menu' id='dropdown-item-"+item_id+"'>"
        + "<a id='add-fav-menu-"+item_id+"' href='' data-id='"+item_id+"'><i tooltip='Add to favourites'  class='fa'>&#xf006;</i></a>"
        + "<a id='edit-menu-"+item_id+"' href='' data-id='"+item_id+"'><i tooltip='Edit' class='fa'>&#xf044;</i></a>"
        + "<a id='delete-menu-"+item_id+"' href='' data-id='"+item_id+"'><i tooltip='Delete' class='fa'>&#xf014;</i></a></div></div>"
        + "</div></div>");
        $("#listItem").val("");

      $("#menu-drop-down-icon-"+item_id).on('click',function(event){
        event.preventDefault();
        var id = $(this).data("id");
        $("#dropdown-item-"+id).css("display","block");
      });


      $("#check-"+item_id).change(function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        if(this.checked) {
          $("#form-"+id).css("background-color", "#24A80C");
          $("#list-textbox-"+id).css({"background-color": "#24A80C","text-decoration":"line-through","color":"#ffffff"});
        }else{
          $("#form-"+id).css("background-color", "#ffffff");
          $("#list-textbox-"+id).css({"background-color": "#ffffff","text-decoration":"none","color":"#111"});
        }
      });

      $("#add-fav-menu-"+item_id).on('click',function(event){
           event.preventDefault();
           var id = $(this).data("id");
           $("#add-fav-"+id).click();
           $("#dropdown-item-"+id).css("display","none");
           //todo add to fav
       });
       $("#edit-menu-"+item_id).on('click',function(event){
           event.preventDefault();
           var id = $(this).data("id");
           $("#edit-"+id).click();
           $("#dropdown-item-"+id).css("display","none");
           //todo add to fav
       });
       $("#delete-menu-"+item_id).on('click',function(event){
           event.preventDefault();
           var id = $(this).data("id");
           $("#delete-"+id).click();
           $("#dropdown-item-"+id).css("display","none");
           //todo add to fav
       });

     $("#add-fav-"+item_id).on('click',function(event){
          event.preventDefault();
          var id = $(this).data("id");
          var itemVal = $("#list-textbox-"+id).val();
          var data = createItemInFav(id,itemVal);
          $("#favListContainer").prepend(data)
          $("#dropdown-item-"+id).css("display","none");
          //todo add to fav
      });
      $("#edit-"+item_id).on('click',function(event){
          event.preventDefault();
          var id =$(this).data("id");
          $("#list-textbox-"+id).attr("readonly", false);
          $("#list-textbox-"+id).focus();
          $("#dropdown-item-"+id).css("display","none");
          //todo add to fav
      });
      $('#list-textbox-'+item_id).on("keyup",function(event){
        event.preventDefault();
        var id = $(this).data("id");
        if(event.keyCode === 13){
          $("#list-textbox-"+id).attr("readonly", true);
          $("#list-textbox-"+id).blur();
        }
      })
      $("#delete-"+item_id).on('click',function(event){
          event.preventDefault();
          $("#dropdown-item-"+item_id).css("display","none");
          var id =$(this).data("id");
          $("#item-container-"+id).remove()
          //todo add to fav
      });

    /*  $.ajax({
        url:"db_query.php",
        method:"POST",
        data:$(this).serialize(),
        success:function(data){
        }
      })*/
    }else{
      return false;
    }
  })
  $("#favLink").click(function(event){
    event.preventDefault();
    $(".fav-list-container").css("display","block");
    $("#listContainer").css("display","none");
  });

  $("#homeLink").click(function(event){
    event.preventDefault();
    $(".fav-list-container").css("display","none");
    $("#listContainer").css("display","block");
  });

  $('#listItem').addEventListner("keyup",function(event){
    event.preventDefault();
    var itemVal  = $("#listItem").val();
    if(itemVal != "" && event.keyCode === 13){
      $('#addItem').click();
    }
  })
  function createItemInFav(id,val){
    var data ="<div id='fav-list-"+id+"'><div class='input-group input-container' id='item-container-fav"+id+"'>"
      + "<div class='input-group-prepend'>"
      + "<div class='input-group-text'><input type='checkbox' id='check-fav"+id+"' data-id='"+id+"'/></div></div>"
      + "<div class='form-control' id='form-"+id+"'><input type='text' data-id='"+id+"' id='list-textbox-fav"+id+"' class='list-textbox' value='"+ val +"' readonly/></div>"
      + "<div class='list-icons' id='menu-item-"+id+"'>"
      + "<a href='#'><i id='edit-fav-"+id+"' tooltip='Edit' data-id='"+id+"' class='fa'>&#xf044;</i></a>"
      + "<a href='#'><i tooltip='Delete' id='delete-fav-"+id+"' data-id='"+id+"' class='fa'>&#xf014;</i></a>"
      + "</div><div class='list-dropdown'>"
      + "<a href=''><i tooltip='menu-drop-down-icon' id='menu-drop-down-icon-fav"+id+"' data-id='"+id+"' class='fa drop-down-icon'>⠇</i></a>"
      + "<div class='dropdown-menu' id='dropdown-item-fav-"+id+"'>"
      + "<a id='edit-menu-fav-"+id+"' href='' data-id='"+id+"'><i tooltip='Edit' class='fa'>&#xf044;</i></a>"
      + "<a id='delete-menu-fav-"+id+"' href='' data-id='"+id+"'><i tooltip='Delete' class='fa'>&#xf014;</i></a></div></div>"
      + "</div></div>"
      return data;
  }

})
