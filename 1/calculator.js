let total = 0;
document.getElementById("submit").onclick = function() {
    let mo = parseFloat(document.getElementById("MO").value);
    let ml = parseFloat(document.getElementById("ML").value);
    let mp = parseFloat(document.getElementById("MP").value);
    let et = 0;
    if (isNaN(mo) || isNaN(ml) || isNaN(mp)) {
        et = parseFloat(document.getElementById("ET").value);
        if (!isNaN(et)) {
            total += et;
            //console.log("Total: " + total);
            document.getElementById('ET').value= "";
            document.getElementById('Total').value += total;
        }
    }
    else {
        et = ((mo + 4 * ml + mp) / 6).toFixed(3);
        document.getElementById('ET').value= et;
        document.getElementById('MO').value= "";
        document.getElementById('ML').value= "";
        document.getElementById('MP').value= "";
        floatET= parseFloat(et);
        total += floatET;
        document.getElementById('Total').value += total;
        //console.log("Total: " + total);
    }
}



//Add total
//Check if ET is integer
//Move to next input when enter key is pressed (keyCode === 13)
//Recover input value when not clicked anymore
//Anyway to display total once in console
