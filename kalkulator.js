
function dis(val)
{
document.getElementById("edu").value+=val
 }


function solve()
{
let x = document.getElementById("edu").value
let y = eval(x)
document.getElementById("edu").value = y
}

function clr()
{
document.getElementById("edu").value = ""
}

function convertBinary()
{
  var input = document.getElementById("edu").value;
  let output.value = "";
  for (i = 0; i < input.length; i++) {
    var e = input[i].charCodeAt(0);
    var s = "";
    do {
      var a = e % 2;
      e = (e - a) / 2;
      s = a + s;
    } while (e != 0);
    while (s.length < 8) {
      s = "0" + s;
    }
    output.value += s;
    //var output = document.getElementById("outputBinary");
    document.getElementById("edu").value = output
  }}
