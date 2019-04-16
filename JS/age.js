$('#Run').on('click', function() {
    var age = $('#InputAge').val()
    if (age >= 18) $('#Output').val('Adult')
    else $('#Output').val('not Adult')
})