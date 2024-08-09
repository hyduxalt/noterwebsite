
function showui(){
  document.getElementById("homepage").style.display = "block";
}
function shownotespage(){
  document.getElementById("notepage").style.display = "block";
}
function hidenotespage(){
  document.getElementById("notepage").style.display = "none";
}
function hideui(){
  document.getElementById("homepage").style.display = "none";
}
function changeColour(){
  
  let c = document.getElementById("color-picker").value
  console.log(c)
  document.getElementById("note-space").style.color = c
  
}
function changeFont(){
 
    f = document.getElementById("fonts-selection")
    document.getElementById("note-space").style.fontFamily = f.options[f.selectedIndex].text
}
function changeSize(){
  s=document.getElementById("size-select").value
  document.getElementById("note-space").style.fontSize = s+"px"
  
}

function downloadFile(filename, content) {
  const element = document.createElement('a');
  const blob = new Blob([content], { type: 'plain/text' });
  const fileUrl = URL.createObjectURL(blob);
  element.setAttribute('href', fileUrl); //file location
  element.setAttribute('download', filename); // file name
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
hidenotespage();
window.onload = () => {
  document.getElementById('download').
  addEventListener('click',e => {
    if(document.getElementById("color-picker").value == "#454545"){
    const filename = document.getElementById('filename').value;
     const content = document.getElementById('note-space').value;
    if (filename && content) {
      downloadFile(filename, content);
    }}
    else{ const filename = document.getElementById('filename').value+".txt";
         const content = document.getElementById('note-space').value;
    if (filename && content) {
      downloadFile(filename, content);
    }}
   
  });
};
document.getElementById("back-button").onclick =()=>{
  hidenotespage();
  showui();
}
document.getElementById("createnewnote").onclick=()=>{
  shownotespage();
  hideui();
}