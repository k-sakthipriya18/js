

function upDate(previewPic) {
  // 1) Change the background image of the div with the id = "image"
  // to the source file of the preview image
  document.getElementById("image").style.backgroundImage = `url(${previewPic.src})`;
  
  // 2) Change the text of the div with the id = "image"
  // to the alt text of the preview image
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  // 1) Reset the background image of the div with the id = "image"
  // to the original image URL (assuming this is set in the CSS)
  document.getElementById("image").style.backgroundImage = "url('images/original-image.jpg')";
  
  // 2) Reset the text of the div with the id = "image"
  // back to the original text (this can be set to a placeholder or default text)
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
