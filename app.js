function keyPressed()
{
    var count = document.getElementById("input-field").value.length;
    var outPut = `Character Counts: ${count} / 500`;
    document.getElementById("counter").innerHTML = outPut;
    const input = document.querySelector("#input-field");
    if(count >= 501)
    {
        input.style.background = "rgb(214, 27, 27)";
        input.style.boxShadow = "0 0 11px rgb(214, 27, 27)";
        input.readOnly = true;
    } else {
        input.style.background = "#f2f2f2";
        input.style.boxShadow = "0 0 11px rgba(33,33,33,.2)";
        input.readOnly = false;
    }
}

function enableEdit()
{
    const input = document.querySelector("#input-field");
    input.readOnly = false;
}