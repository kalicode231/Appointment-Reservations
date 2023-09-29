$(document).ready(() =>{
    $("#formOne").submit((event) =>{
        event.preventDefault();
        user = $("#username").val();
        date = $("#date").val();
        time = $("#time").val();
        description = $("#description").val();

        message = `Mr ${user} your ${description} appointment has been reserved for ${time}PM on ${date}`;
        $("#formOne").hide();

        $(".message").html(message);
        $(".display").show();
    })
})