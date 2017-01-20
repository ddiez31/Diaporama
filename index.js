/* sans POO 
$(document).ready(function() {
    $.getJSON("index.json", function(data) {

        $.each(data, function() {
            setInterval(slide, 3000);
            var i = -1;

            function slide() {
                i += 1;
                if (i === 6) {
                    i = 0;
                }
                $("img").attr('src', data.images[i].url).fadeIn(1000).delay(1000).fadeOut(900).delay(100);
            };
        });
    });
});
*/

// avec POO
$(document).ready(function() {
    $.getJSON("index.json", function(data) {
        var Diaporama = function(name, url) {
            this.name = name;
            this.url = url;
            this.slide = function slide() {
                $("img").attr('src', data.images[i].url) /*.fadeIn(1000).delay(1000).fadeOut(900).delay(100)*/ ;
                console.log(data.images[i].url);
            };
        };

        for (var i = 0; i <= 6; i++) {
            var diaporama1 = new Diaporama(data.images[i].name, data.images[i].url);
            setInterval(diaporama1.slide(), 3000);
            if (i === 6) {
                i = 0;
            }


        };
    });
});