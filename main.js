var newTask = `<div class="upper__options--tasks left ui-state-default">
<input type="equal checkbox" name="task" />
<label for="task"></label><br />
<div class="crossButton">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
</div>
</div>`;
$(document).ready(function () {
  countclass();
  //Add items to todo list
  $("#text").on("keyup", function (e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      if ($("#text").val() == "") {
        alert("Please enter something");
      } else {
        $(newTask)
          .insertBefore(".upper__options--opt")
          .find("label")
          .append($("#text").val());
        $("#text").val("");
      }
    }
    countclass();
  });
  //Toggle class between work left to be done or not
  $(document).on("click", ".upper__options--tasks", function () {
    $(this).toggleClass("active").toggleClass("left");
    countclass();
  });
  //Remove div on clicking cross button
  $(document).on("click", ".crossButton", function () {
    $(this).parent().remove();
    countclass();
  });
  //Clear completed
  $(document).on("click", ".upper__options--opt--right", function () {
    $(".active").remove();
    countclass();
  });
  //Sortable
  $(function () {
    $("#sortable").sortable({
      cancel: ".upper__options--opt",
    });
  });
  //All Active Completed
  $(document).on("click", ".optionAll", function () {
    $(".optionActive").removeClass("active2");
    $(".optionCompleted").removeClass("active2");
    $(this).addClass("active2");
    $(".active").css("display", "flex");
    $(".left").css("display", "flex");
  });
  $(document).on("click", ".optionActive", function () {
    $(".optionAll").removeClass("active2");
    $(".optionCompleted").removeClass("active2");
    $(this).addClass("active2");
    $(".active").css("display", "none");
    $(".left").css("display", "flex");
  });
  $(document).on("click", ".optionCompleted", function () {
    $(".optionActive").removeClass("active2");
    $(".optionAll").removeClass("active2");
    $(this).addClass("active2");
    $(".active").css("display", "flex");
    $(".left").css("display", "none");
  });
  //End of All Active Completed
  //dark 
  $(document).on("click", ".darkmode",function(){
    $("body").addClass("dark");
    $(".lightmode").css("display", "block");
    $(".darkmode").css("display", "none");
  });
  $(document).on("click", ".lightmode",function(){
    $("body").removeClass("dark");
    $(".lightmode").css("display", "none");
    $(".darkmode").css("display", "block");
  });
});
//Count left class
function countclass() {
  let numItems = $(".left").length;
  $(".numberItems").html(numItems);
}
