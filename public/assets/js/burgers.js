$(function () {
  $(".change_eat_status").on("click", function (event) {
    let id = $(this).data("id");
    console.log(id);
    let newBurgerState = {
      devoured: true
    };

    // Send the Put request
    $.ajax("/api/plate/" + id, {
      type: "PUT",
      data: newBurgerState,
    }).then(function () {
      console.log("changed burger to ", newBurgerState);
      // Reload the page to update list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault to a submit event
    event.preventDefault();

    let newBurger = {
      name: $("#burg").val().trim(),
    };
    if (newBurger.name != "") {
      $.ajax("/api/plate", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("Created a new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    } else {
      alert("Can't enter a blank burger");
    }
  });

  $(".delete-burger").on("click", function (event) {
    let id = $(this).data("id");

    $.ajax("/api/plate/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("Deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});