var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 8000);
}

function showPage() {
    document.getElementById("h1").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}