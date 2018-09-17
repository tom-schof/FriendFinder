$("#submit").on("click", function (event) {
    event.preventDefault();
    console.log("submit clicked")

    // Form validation
    function validateForm() {
        var isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });

        $(".custom-select").each(function () {

            if ($(this).val() === "") {
                isValid = false;
            }
        });

        console.log("valid: " + isValid);
        return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
        // Create an object for the user"s data
        var userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };

        // AJAX post the data to the friends API.
        $.post("/api/friends", userData, function (data) {

            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#match-name").text(data.name);
            $("#match-img").attr("src", data.photo);
            $("#match-img").height(200);
            $("#match-img").height(200);



            // Show the modal with the best match
            $("#results-modal").modal("toggle");

        });
    } else {
        alert("Please fill out all fields before submitting!");
    }
});