let colorArray = [
    {name : "black" , hex : "#000000"},
    {name : "dark grey 4" , hex : "#434343"},
    {name : "dark grey 3" , hex : "#666666"},
    {name : "dark grey 2" , hex : "#999999"},
    {name : "dark grey 1" , hex : "#b7b7b7"},
    {name : "grey" , hex : "#cccccc"},
    {name : "light grey 1" , hex : "#d9d9d9"},
    {name : "light grey 2" , hex : "#efefef"},
    {name : "light grey 3" , hex : "#f3f3f3"},
    {name : "red berry" , hex : "#980000"},
    {name : "red" , hex : "#ff0000"},
    {name : "orange" , hex : "#ff9900"},
    {name : "yellow" , hex : "#ffff00"},
    {name : "green" , hex : "#00ff00"},
    {name : "cyan" , hex : "#00ffff"},
    {name : "cornflower blue" , hex : "#4a86e8"},
    {name : "blue" , hex : "#0000ff"},
    {name : "purple" , hex : "#9900ff"},
    {name : "magenta" , hex : "#ff00ff"},
    {name : "	light red berry 3" , hex : "#e6b8af"},
    {name : "light red 3" , hex : "#f4cccc"},
    {name : "light orange 3" , hex : "#fce5cd"},
    {name : "light yellow 3" , hex : "#fff2cc"},
    {name : "light green 3" , hex : "#d9ead3"},
    {name : "light cyan 3" , hex : "#d0e0e3"},
    {name : "light cornflower blue 3" , hex : "#c9daf8"},
    {name : "light blue 3" , hex : "#cfe2f3"},
    {name : "light purple 3" , hex : "#d9d2e9"},
    {name : "light magenta 3" , hex : "#ead1dc"},
    {name : "light red berry 2" , hex : "#dd7e6b"},
    {name : "light red 2" , hex : "#ea9999"},
    {name : "light orange 2" , hex : "#f9cb9c"},
    {name : "light yellow 2" , hex : "#ffe599"},
    {name : "light green 2" , hex : "#b6d7a8"},
    {name : "light cyan 2" , hex : "#a2c4c9"},
    {name : "light cornflower blue 2" , hex : "#a4c2f4"},
    {name : "light blue 2" , hex : "#9fc5e8"},
    {name : "light purple 2" , hex : "#b4a7d6"},
    {name : "light magenta 2" , hex : "#d5a6bd"},
    {name : "light red berry 1" , hex : "#cc4125"},
    {name : "light red 1" , hex : "#e06666"},
    {name : "light orange 1" , hex : "#f6b26b"},
    {name : "light yellow 1" , hex : "#ffd966"},
    {name : "light green 1" , hex : "#93c47d"},
    {name : "light cyan 1" , hex : "#76a5af"},
    {name : "light cornflower blue 1" , hex : "#6d9eeb"},
    {name : "light blue 1" , hex : "#6fa8dc"},
    {name : "light purple 1" , hex : "#8e7cc3"},
    {name : "light magenta 1" , hex : "#c27ba0"},
];

function myFunction(){
    var x = Math.floor(Math.random() * colorArray.length);
    var y = document.getElementById("color");
    y.innerHTML = colorArray[x].name;
    document.body.style.backgroundColor = colorArray[x].hex;

}
let domElement = document.querySelector(".butt");
domElement.addEventListener("click", myFunction);