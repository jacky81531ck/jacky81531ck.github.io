$('#clear').on('click', () => {
    $('data').empty
})

$('#input').on('click', () => {
    var n = $('#input-text').val()
    var $item = $('div').attr('class', 'item').text(n)
    var $col = $('<div>').attr('class', 'col-1').append($item)
    $('#data').append($col)
})