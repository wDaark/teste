function goTo(str, boolean) {
    if(boolean) {
        return window.open(str, "_blank");
    }
    window.location.href = str;
}



   
$(function() {
    
    var clipboard = new Clipboard('.ip-copiar');
    clipboard.on('success', function(e) {
        $(e.trigger).html("IP COPIADO, BORA LÁ!");
        setTimeout(function() {
            $(e.trigger).html("JOGAR.WICHERNETWORK.COM.BR");

        }, 1000);
    });

});