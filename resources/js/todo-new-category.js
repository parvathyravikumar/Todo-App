function createNewCategory(){
  var dte = new Date();
  var itemId = Date.parse(dte);
  var categoryName = prompt("Please enter the category name", "");
  if(categoryName != "" && categoryName != undefined && categoryName != null){
      createFolder(itemId,categoryName);
  }
}
function createFolder(id,cat){
  if(cat != undefined && !($('#main-container-'+cat).length)){
    $("#listContainer").prepend("<div id='main-container-"+cat+"'  data-id='"+id+"' class='main-container'><div class='input-group input-container' id='sub-container-"+id+"'>"
              + "<div class='form-control' id='form-new-"+id+"' data-catname ='"+cat+"'><input type='text' data-id='"+id+"' id='list-textbox-new-"+id+"' class='list-textbox' value='"+ cat +"' disabled='true'/></div>"
              + "</div></div>");
  }
    $("#form-new-"+id).on('click',function(event){
        event.preventDefault();
        $("#homeList").css("display","none")
        $("#favList").css("display","none")
        $("#newFolders").css("display","block")
        var catname = $("#form-new-"+id).data("catname");
        $("#newFolders").data("catname",catname);
        loadItemList("#newListContainer",catname)
    })

}
