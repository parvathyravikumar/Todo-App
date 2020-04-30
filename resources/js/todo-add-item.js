function addItemToList(event,inputId,category){
  event.preventDefault();
  var itemVal  = $(inputId).val();
  if(itemVal != ""){
    var dte = new Date();
    var itemId = Date.parse(dte);
    $.post("http://localhost:3000/todos",
      {
        "id": itemId,
        "desc":itemVal,
        "cat": category,
        "status":0
      },
      function(data, status){
        var getId = data.id;
        var getVal = data.desc;
        var getCat = data.cat;
        if(status == "success"){
          if(getCat == "home"){
            addListToContainer(getId,getVal,"#listContainer",getCat);
            $(inputId).val("");
          }else if(getCat == "favourite"){
            createItemInFav(getId,getVal);
            $(inputId).val("");
          }else{
            addListToContainer(getId,getVal,"#newListContainer",getCat);
            $(inputId).val("");
          }
        }
      }
    );
  }
}

function addListOnEnterClick(event,inputId,category){
  event.preventDefault();
  var itemVal  = $(inputId).val();
  if(itemVal != "" && event.keyCode === 13){
    addItemToList(event,inputId,category);
  }
}

function checkStatus(itemStatus,itemId,formId,textboxId){
  if(itemStatus == 0){
    $(formId+""+itemId).css("background-color", "#ffffff");
    $(textboxId+""+itemId).css({"background-color": "#ffffff","text-decoration":"none","color":"#545454"});
  }else{
    $(formId+""+itemId).css("background-color", "#24A80C");
    $(textboxId+""+itemId).css({"background-color": "#24A80C","text-decoration":"line-through","color":"#ffffff"});
  }
}
