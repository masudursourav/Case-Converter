let input = document.querySelector("textarea");
document.getElementById("upper-case").addEventListener("click",function (){
    let string = input.value;
    input.value = string.toUpperCase();
 });
 document.getElementById("lower-case").addEventListener("click",function (){
     let string = input.value;
     input.value = string.toLowerCase();
 });
 function properCase (str) {
     if ((str===null) || (str===''))
         return false;
     else
         str = str.toString();

     return str.replace(/\w\S*/g,
         function(txt){return txt.charAt(0).toUpperCase() +
             txt.substr(1).toLowerCase();});
 }

 document.getElementById("proper-case").addEventListener("click",function (){
     let string = input.value;
     let newString = properCase(string);
     input.value = newString;
 });

 function sentenceCase(theString) {
     let newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
     return newString;
 }
 document.getElementById("sentence-case").addEventListener("click",function (){
     let string = input.value;
     let newString = sentenceCase(string);
     input.value = newString;
 });

 function download(filename, text) {
     let element = document.createElement('a');
     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
     element.setAttribute('download', filename);

     element.style.display = 'none';
     document.body.appendChild(element);

     element.click();

     document.body.removeChild(element);
 }
 document.getElementById("save-text-file").addEventListener("click",function () {
     download("text.txt" , string);
 });
