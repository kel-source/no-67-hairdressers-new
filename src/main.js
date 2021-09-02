TweenMax.from("#greatHairBanner", 3, { opacity: 0, delay: 1 });

$(".faq").click(function () {
  $(this).find(".answer").slideToggle();
});
