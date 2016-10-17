$(document).ready(function() {
    var i = 0;
    $(".example-tabs li a").each(function() {
    	
        $(this).click(function() {
         	$(".example-tabs li a").removeClass("aline");
         	$(this).addClass("aline");
            switch ($(this).text()) {
                case "BOLG":
                    changDivtab(0);
                    break;
                case "MUSIC":
                    changDivtab(1);
                    break;
                case "LIFE":
                    changDivtab(2);
                    break;
            }
        })
        i++;
    });
});

function changDivtab(index) {
    var nodes = $(".example-tabs .tabs-images");

    //alert(nodes.length);
    //console.log(nodes.length);
    var i = 0;
    nodes.each(function() {

        $(this).addClass("tab-dis-active");
        $(this).removeClass("tab-active");
        if (i == index) {
            $(nodes[i]).removeClass("tab-dis-active");
            $(nodes[i]).addClass("tab-active");
        }
        i++;
    })

}
