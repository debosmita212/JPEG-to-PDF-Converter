//Code for show images and delete button
// Get the input element and the selected-images div
const inputElement = document.getElementById('myFile');

const selectedImagesElement = document.querySelector('.selected-images');

// Add an event listener to the input element that will run when the user selects an image
inputElement.addEventListener('change', function() {
  // Get the selected images
  const selectedImages = this.files;

  // Loop through the selected images
  for (const image of selectedImages) {
    // Create a div element to hold the image and the delete button
    const div = document.createElement('div');
    div.classList.add('selected-image');

    // Create an img element for the selected image
    const img = document.createElement('img');
    img.src = URL.createObjectURL(image);
    img.alt = 'Selected image';

    // Append the img element to the div element
    div.appendChild(img);

    

    // Create a button element for the delete button
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn', 'btn-danger', 'delete-button');
    button.innerText = 'Delete';
    button.onclick = function() {
      // When the button is clicked, remove the div element containing the image and the button
      this.parentElement.remove();
    }

    // Append the button element to the div element
    div.appendChild(button);
    
    // Append the div element to the selected-images div
    selectedImagesElement.appendChild(div);
    
  }
});




//Download the PDF
var button = document.querySelector(".btn");

button.addEventListener("click",function(){
    var images=document.querySelectorAll(".selected-images img");

    if(images.length===0){
        alert("Please select atleast one image to convert to PDF!");
        return;
    }

    var pdf= new jsPDF();
    for(var i=0;i<images.length;i++){
        var image=images[i];
        
       

// Add an image to the PDF, with a scaling factor of 0.5
pdf.addImage(image,'JPEG', 20, 50,175, 200, '', 'FAST', 0, 0, 0, 0, 0.5, 0);
        if(i<images.length-1){
            pdf.addPage();
        }
    }
    pdf.save("converted-pdf");

    //back to home page after downloading file
    setTimeout(backToHomepage,1000);
});

//Reload back to homepage
function backToHomepage(){
    location.reload();
}
  
  