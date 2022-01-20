// html2canvas(document.querySelector("#capture")).then(canvas => {
//     document.body.appendChild(canvas)
// });

// const { default: jsPDF } = require("jspdf");

function downloadPdf(event){
    event.preventDefault()
    console.log("hi");
    html2canvas(document.querySelector("#page"),{
    allowTaint:true,
    useCORS:true,
    scale:1,
    }).then(canvas => {
    document.body.appendChild(canvas)
    let img = canvas.toDataURL("img/png")
    let doc = new jsPDF("p", "mm", "a4")
    doc.addImage(img,'PNG',  0,0)
    doc.save()
});
}