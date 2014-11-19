$(function () {

    $('tbody > tr').on('click', function(event) {
        event.preventDefault();
        $('#myModal').modal('show');
    })

});
