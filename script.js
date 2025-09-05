function generate() {
  var str =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit Nunc eros nulla condimentum nec bibendum eget feugiat congue ante Cras dolor";
  var strArray = str.split(" ");
  var finalStr = "";
  var wordCount = document.getElementById("number").value;
  for (var i = 0; i < wordCount; i++) {
    var x = Math.floor(Math.random() * strArray.length);
    finalStr += strArray[x] + " ";
  }
  document.getElementById("textA").value = finalStr.trim();
}
