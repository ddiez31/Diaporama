$(document).ready(function() {
    $.getJSON("index.json", function(data) {
        var liens = data.images;
        var Diaporama = function(name, url) {
            this.name = name;
            this.url = url;
            this.slide = (function slide() {
                $("img").attr('src', liens[i].url).fadeIn(1000).delay(1000).fadeOut(900).delay(100);
            });
        };

        var i = 0;
        setInterval(function() {
            var diaporama1 = new Diaporama(liens[i].name, liens[i].url);
            diaporama1.slide();
            i++;
            if (i == liens.length) {
                i = 0;
            }
        }, 3000);
    });
});