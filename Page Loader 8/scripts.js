/* <body onload="myFunction()" style="margin:0;">
    <h1 id="h1">

    </h1>


<div style="display:none;" id="myDiv">
        <h2>Tada!</h2>
        <p>Some text in my newly loaded page..</p>
    </div>
</body> */




var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 5000);
}

function showPage() {
    document.getElementById("socket").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}