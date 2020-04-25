
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
  <script src="./resources/js/todo-script.js"></script>
</head>

<body>
  <header class="nav-header">
    <div class = "container">
        <nav class="navbar navbar-expand-md navbar-light">
            <img src = "./resources/images/header-logo.png" class="header-logo">
            <h1><span class="header-name-start">To</span><span class="header-name-end">Do</span></h1>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse collapsibleNavbar" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="" id="homeLink">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">New category</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="" id="favLink">Favourites</a>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  </header>
  <section class="bottom-container">
    <div class = "container list-container">
      <form method="post" id="todo-form">
        <div class="input-group">
          <div class="input-group-prepend">
            <input type="submit" class="btn btn-primary" id="addItem" value="&#x002B;"></input>
          </div>
          <input type="text" id="listItem" class="form-control" placeholder="Add to todo..">
        </div>
      </form>
    </div>
    <div class="container list-container" id="listContainer"></div>
  </section>
  <section>
      <div class="container list-container fav-list-container" id="favListContainer"></div>
  </section>
</body>

</html>
