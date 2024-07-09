$(".btn-main").on("click", function () {
  $(".main").addClass("hidden");
  $(".main ").next(".quiz").addClass("active");
});

$(".btn-next").on("click", function () {
  $(this).parents(".quiz.active").removeClass("active");
  $(this).parents(".quiz").next(".quiz").addClass("active");
});

$(".btn-prev").on("click", function () {
  $(this).parents(".quiz.active").removeClass("active");
  $(this).parents(".quiz").prev(".quiz").addClass("active");
});

$(".quiz-list div").on("click", function () {
  $(this).parents(".quiz-list").children("div").removeClass("active");
  $(this).addClass("active");
  $(this).parents(".quiz.active").removeClass("active");
  $(this).parents(".quiz").next(".quiz").addClass("active");
});
