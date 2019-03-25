$(document).ready(function() {
    // Add burger
    $(".add-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val()
        }
        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });
    });

    // Update burger
    $(".update").on("click", function() {
        var id = $(this).data("id");
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function() {
            location.reload();
        });
    });
});