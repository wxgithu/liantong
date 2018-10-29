$(".mall").hover(
    function(){
        var $li=$(this);
        $(".my_lt").toggleClass("hide")
    }
)
$("#one").hover(
    function(){
        var $li=$(this);
        $(".hide_serve").toggleClass("hide")
    }
)
$("#two").hover(
    function () {
        var $li=$(this)
        $hide=$(".client")
        $hide.toggleClass("hide")
        $li.toggleClass("add")
    }
)
$(".city").hover(
    function () {
        var $btn=$(this)
        $(".hidden_city").toggleClass("hide");
    }
)
$(".orderCart>a").hover(
    function () {
        var $a=$(this);
        $(".pay_hide").toggleClass("hide")
    }
)
$(".search").on("mouseover","div",
    function () {
        $div=$(this)
        if($div.hasClass("product")){
            $(".service").removeClass("hide")
                .css("background","#fff")
            $(".product").css("background","#F6F6F6")
        }
        else if($div.hasClass("service")){
            $(".product").css("background","#fff")
            $(".service").css("background","#F6F6F6")
        }
        else if($div.has("div"))
        $(".service").addClass("hide")
    }
)
$(".sortItem").on("mouseover",function () {
    $hover=$(this)
    $(".category").removeClass("hide")
})
// $(".item").on("mouseover","div",function () {
//     $div=$(this);
//     $div.next().removeClass("hide")
//     .css( {"top":"-2px"}, {"right":"0px"})
//     console.log($div)
//     $div.first().css ("background","#fff");
//
//
//
// })
// top: -2px;
// left: 200px;
$("#tabs").tab();