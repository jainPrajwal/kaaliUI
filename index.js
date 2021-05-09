$(window).load(function () {
  $(function () {
    $("#componentslinkfromhome").click(function () {
      console.log("clickedddddd fro index");
      $("#main").load("./components/alert/alert.html");
    });
  });
});
