$(".menu").on("click",()=>{
    $(".menu").toggleClass("open");
    $("#mainHeader").toggleClass("d-none d-md-flex h-100 position-fixed top-0 end-0 z-3 w-75 fadeInLeft pt-5 mobile");
    $("#mainHeader>ul").toggleClass("d-flex d-block");
    $("#mainHeader").append($(".menu").clone(true));
   
});