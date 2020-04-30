function loadItemList(containerId,category){
  $(containerId).html("");
  $.get("http://localhost:3000/todos",function(data, status){
      if(data.length != 0){
        for(var entry = 0;entry < data.length;entry++){
          var getId = data[entry].id;
          var getVal = data[entry].desc;
          var getCategory = data[entry].cat;
          var getStatus = data[entry].status;
          if(status == "success" && getId!= undefined){
            if(category == "home"){
              if(getCategory != "home" && getCategory!= "favourite"){
                if(!($('#main-container-'+getCategory).length)){
                  createFolder(getId,getCategory)
                }
              }else{
                addListToContainer(getId,getVal,"#listContainer",getCategory);
                checkStatus(getStatus,getId,"#form-","#list-textbox-");
              }

              if(getStatus == 1){
                $("#check-"+getId).attr("checked","true")
              }
              $("#listItem").val("");
              $("#homeList").css("display","block")
              $("#favList").css("display","none")
              $("#newFolders").css("display","none")
            }else if(category == "favourite"){
              if(category == getCategory){
                createItemInFav(getId,getVal);
              }
              $("#listItemFav").val("");
              $("#homeList").css("display","none")
              $("#favList").css("display","block")
              $("#newFolders").css("display","none")
            }else{
              if(getCategory != "home" && getCategory != "favourite" && category == getCategory){
                addListToContainer(getId,getVal,"#newListContainer",getCategory);
                checkStatus(getStatus,getId,"#form-","#list-textbox-");
                $("#newFolders").data("catname",getCategory)
              }
              $("#listItemNew").val("");
              $("#homeList").css("display","none")
              $("#favList").css("display","none")
              $("#newFolders").css("display","block")
            }
          }
        }
      }
  });
}
