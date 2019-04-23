var checkage = function() {
    var age = $('#InputAge').val()
    if (age >= 18) $('#Output').val('Adult')
    else $('#Output').val('not Adult')
}

$('#Run').on('click', checkage)

/*
    $('#Run').on('click', function() {
        var age = $('#InputAge').val()
        if (age >= 18) $('#Output').val('Adult')
        else $('#Output').val('not Adult')
    })
*/