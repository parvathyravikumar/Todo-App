<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ToDo App</title>
  <link rel="stylesheet" href="./resources/css/bootstrap.min.css">
  <link rel="stylesheet" href="./resources/css/app.css" media="screen" charset="utf-8">
  <link rel="stylesheet" href="./resources/css/media-query.css" media="screen" charset="utf-8">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="./resources/js/jquery-1.12.2.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="./resources/js/bootstrap.min.js"></script>

  <script src="./resources/js/todo-new-category.js"></script>
  <script src="./resources/js/todo-item-load.js"></script>
  <script src="./resources/js/todo-home-list.js"></script>
  <script src="./resources/js/todo-add-item.js"></script>
  <script src="./resources/js/todo-item-menu.js"></script>
  <script src="./resources/js/todo-fav-list.js"></script>
  <script src="./resources/js/todo-touch-events.js"></script>
  <script src="./resources/js/todo-main.js"></script>

</head>

<body>
  <header class="nav-header">
    <div class = "container">
        <nav class="navbar navbar-expand-md navbar-light">
            <img src = "./resources/images/header-logo.png" class="header-logo">
            <h1><span class="header-name-start">To</span><span class="header-name-end">Do</span></h1>
            <div class="space-banner" style="width:40%;"></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse collapsibleNavbar" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="" id="homeLink">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="" id="newCategoryLink">New category</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="" id="favLink">Favourites</a>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  </header>
  <section class="bottom-container" id="homeList">
    <div class = "container list-container">
      <div class="input-group">
        <div class="input-group-prepend">
          <input type="submit" class="btn btn-primary" id="addItem" value="&#x002B;"></input>
        </div>
        <input type="text" id="listItem" class="form-control" placeholder="Add to todo..">
      </div>
    </div>
    <!-- All list will be added to this container-->
    <div class="container list-container" id="listContainer"></div>
  </section>
  <section class="bottom-container favList" id="favList">
    <div class = "container list-container">
      <div class="input-group">
        <div class="input-group-prepend">
          <input type="submit" class="btn btn-primary" id="addItemFav" value="&#x002B;"></input>
        </div>
        <input type="text" id="listItemFav" class="form-control" placeholder="Add to todo..">
      </div>
    </div>
      <!-- Favourite list will be added to this container-->
    <div class="container list-container fav-list-container" id="favListContainer"></div>
  </section>
  <section class="bottom-container newFolders" id="newFolders">
    <div class = "container list-container">
      <div class="input-group">
        <div class="input-group-prepend">
          <input type="submit" class="btn btn-primary" id="addItemNew" value="&#x002B;"></input>
        </div>
        <input type="text" id="listItemNew" class="form-control" placeholder="Add to todo..">
      </div>
    </div>
    <!-- New Category items will be added to this container-->
  <div class="container list-container new-list-container" id="newListContainer"></div>
  </section>

</body>

</html>
