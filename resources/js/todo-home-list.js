function addListToContainer(id,val,container_id,cat){
  $(container_id).prepend("<div id='list-"+id+"'><div class='input-group input-container' id='item-container-"+id+"'>"
            + "<div class='input-group-prepend'>"
            + "<div class='input-group-text'><input type='checkbox' id='check-"+id+"' data-cat = 'home' data-val = '"+val+"' data-id='"+id+"'/></div></div>"
            + "<div class='form-control' id='form-"+id+"'><input type='text' data-id='"+id+"' data-catname='"+cat+"' id='list-textbox-"+id+"' class='list-textbox' value='"+ val +"' disabled='true'/></div>"
            + "<div class='list-icons' id='menu-item-"+id+"'>"
            + "<a href='' id='add-fav-"+id+"' data-id='"+id+"' onclick='return addToFav("+id+")' title='Add to favourites'><i class='fa fa-star' aria-hidden='true'></i></a>"
            + "<a href='' id='move-"+id+"'  data-id='"+id+"' onclick='return moveTo("+id+")' title='Move to'><i  class='fa fa-paper-plane' aria-hidden='true'></i></a>"
            + "<a href='' id='edit-"+id+"' data-id='"+id+"' class='delete' onclick='return editItem("+id+")' title='Edit'><i class='fa fa-edit' aria-hidden='true'></i></a>"
            + "<a href='' id='delete-"+id+"' data-id='"+id+"' onclick='return deleteItem("+id+")' title='Delete'><i class='fa fa-trash' aria-hidden='true'></i></a>"
            + "</div><div class='list-dropdown'>"
            + "<a href='' id='menu-drop-down-icon-"+id+"' data-id='"+id+"' class='menu-drop-down-icon'><i class='fa drop-down-icon'>⠇</i></a>"
            + "<div class='dropdown-menu' id='dropdown-item-"+id+"'>"
            + "<a id='add-fav-menu-"+id+"' href='' data-id='"+id+"' title='Add to favourites' onclick='return addToFav("+id+")'><i class='fa fa-star' aria-hidden='true'></i></a>"
            + "<a href='' id='move-menu-"+id+"' data-id='"+id+"' title='Move to' onclick='return moveTo("+id+")'><i class='fa fa-paper-plane' aria-hidden='true'></i></a>"
            + "<a id='edit-menu-"+id+"' href='' title='Edit' data-id='"+id+"' onclick='return editItem("+id+")'><i  class='fa fa-edit' aria-hidden='true'></i></a>"
            + "<a id='delete-menu-"+id+"' title='Delete' href='' data-id='"+id+"' onclick='return deleteItem("+id+")'><i class='fa fa-trash' aria-hidden='true'></i></a></div></div>"
            + "</div></div>");

    $('#list-textbox-'+id).on("keyup",function(event){
      event.preventDefault();
      var id = $(this).data("id");
      if(event.keyCode === 13){
        var value = $('#list-textbox-'+id).val()
        var url = "http://localhost:3000/todos/"+id;
        var cat = $('#list-textbox-'+id).data("catname")
      
        $.ajax({
          type: 'PUT',
          dataType: 'json',
          url: url,
          data: {"desc":value,"cat":cat,"status":0},
          success:function(data,status){
            if(status == "success"){
              $("#list-textbox-"+id).attr("disabled", true);
              $("#list-textbox-"+id).blur();
            }
          }
        });
      }
    });

  $("#check-"+id).change(function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var val = $(this).data("val");
    var cat = $(this).data("cat");
    var url = "http://localhost:3000/todos/"+id;
    if(this.checked) {
      listStatusCheck(id,val,cat,url,1)
    }else{
      listStatusCheck(id,val,cat,url,0)
    }
  });

  $("#menu-drop-down-icon-"+id).on('click touch',function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    if($("#dropdown-item-"+id).css("display") == "block"){
      $("#dropdown-item-"+id).css("display","none");
    }else{
      $("#dropdown-item-"+id).css("display","block");
    }
  });
}
