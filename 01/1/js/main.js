$(document).ready(function () {
    $("input[type=text]").on("input",function() {
        $('span').html(this.value) 
    });
});