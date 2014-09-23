$(document).ready(function(){
    $('#busqueda').keyup(function(){
        var busqueda = $(this).val();
        var encontrados = $('.nombre:contains("'+busqueda+'")').size();
        $('#pendientes').text(encontrados);
        $('#plural').text(encontrados == 1 ? '' : 's');
        if(busqueda != ''){
            $('.nombre:not(:contains("'+busqueda+'"))').parent().addClass('ocultar');
            $('.nombre:contains("'+busqueda+'")').parent().removeClass('ocultar');
        } else {
            $('tr').removeClass('ocultar');
        }
    });
});
