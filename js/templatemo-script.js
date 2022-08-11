$(function() {
    $(".navbar-toggler").on("click", function(e) {
        $(".tm-header").toggleClass("show");
        e.stopPropagation();
      });
    
      $("html").click(function(e) {
        var header = document.getElementById("tm-header");
    
        if (!header.contains(e.target)) {
          $(".tm-header").removeClass("show");
        }
      });
    
      $("#tm-nav .nav-link").click(function(e) {
        $(".tm-header").removeClass("show");
      });
});

const app = new XMLHttpRequest();
app.onload = function() {
    const data = JSON.parse(this.responseText);
    var randomNumber = Math.floor(Math.random() * 100);

    const post1Data = data[randomNumber];

    const post1Title = document.querySelector("#post1-id");
    const post1Body = document.querySelector("#post1-body");
    post1Title.textContent = post1Data.title;
    post1Body.textContent = post1Data.body;


    randomNumber = Math.floor(Math.random() * 100);

    const post2Data = data[randomNumber];

    const post2Title = document.querySelector("#post2-id");
    const post2Body = document.querySelector("#post2-body");
    post2Title.textContent = post2Data.title;
    post2Body.textContent = post2Data.body;


    randomNumber = Math.floor(Math.random() * 100);

    const post3Data = data[randomNumber];

    const post3Title = document.querySelector("#post3-id");
    const post3Body = document.querySelector("#post3-body");
    post3Title.textContent = post3Data.title;
    post3Body.textContent = post3Data.body;


    randomNumber = Math.floor(Math.random() * 100);

    const post4Data = data[randomNumber];

    const post4Title = document.querySelector("#post4-id");
    const post4Body = document.querySelector("#post4-body");
    post4Title.textContent = post4Data.title;
    post4Body.textContent = post4Data.body;

    randomNumber = Math.floor(Math.random() * 100);

    const post5Data = data[randomNumber];

    const post5Title = document.querySelector("#post5-id");
    const post5Body = document.querySelector("#post5-body");
    post5Title.textContent = post5Data.title;
    post5Body.textContent = post5Data.body;

    randomNumber = Math.floor(Math.random() * 100);

    const post6Data = data[randomNumber];

    const post6Title = document.querySelector("#post6-id");
    const post6Body = document.querySelector("#post6-body");
    post6Title.textContent = post6Data.title;
    post6Body.textContent = post6Data.body;

}
app.onerror = function() {
    console.log("ERROR!!!!");
    length.log(this);
}

app.open("GET","https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11");
app.send();