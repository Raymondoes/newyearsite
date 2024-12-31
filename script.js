let naw;

document.getElementById("dabutton").onclick = function(){
  naw = document.getElementById("input").value;
  document.getElementById("h1a").textContent = `${naw}!`;
}
