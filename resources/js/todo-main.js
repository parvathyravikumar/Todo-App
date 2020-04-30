$(document).ready(function(){
  /*Handling default touch behaviours*/
  initLoad();

  /*Load saved data if available*/
  loadItemList("#listContainer","home")

  /* Headear menu clicks */
  $("#homeLink").click(function(event){
    event.preventDefault();
    $("#collapsibleNavbar").removeClass("show");
    loadItemList("#listContainer","home");
  });

  $("#newCategoryLink").click(function(event){
    event.preventDefault();
    $("#collapsibleNavbar").removeClass("show");
    createNewCategory();
  });

  $("#favLink").click(function(event){
    event.preventDefault();
    $("#collapsibleNavbar").removeClass("show");
    loadItemList("#favListContainer","favourite");
  });

  /* Add to list on button click for home */
  $('#addItem').on('click touch',function(event){
    addItemToList(event,"#listItem","home");
  })

  /* Add to List on enter click for home*/
  $('#listItem').keyup(function(event){
    addListOnEnterClick(event,"#listItem","home");
  })

  /* Add to list on button click for new category*/
  $('#addItemNew').on('click touch',function(event){
    var catName = $("#newFolders").data("catname");
    addItemToList(event,"#listItemNew",catName);
  })

  /* Add to List on enter click for new category */
  $('#listItemNew').keyup(function(event){
    var catName = $("#newFolders").data("catname");
    addListOnEnterClick(event,"#listItemNew",catName);
  })

  /* Add to list on button click for favourites */
  $('#addItemFav').on('click touch',function(event){
    addItemToList(event,"#listItemFav","favourite");
  })

  /* Add to List on enter click for favourites */
  $('#listItemFav').keyup(function(event){
    addListOnEnterClick(event,"#listItemFav","favourite");
  })

})
