// youtube
const images = document.querySelectorAll("img");
const parentArr = []
images.forEach(function(img) {
  parentElement = img.parentElement
  parentArr.push(parentElement)
});
images.forEach(function(img) {
  img.remove()
});

parentArr.forEach(parent => {
  const img = document.createElement("img");
  img.src = "https://i.pinimg.com/564x/f0/3c/6d/f03c6d0bd32c465caf05e90361a5e3e4.jpg"
  parent.appendChild(img);
});

// const contents = document.getElementById('contents');
// parentElement = contents.parentElement
// contents.parentNode.removeChild(contents);
// const img = document.createElement("img");
// img.src = "https://www.trinityp3.com/wp-content/uploads/2019/04/strong-brand.jpeg"
// parentElement.appendChild(img); 


// jQuery
// var contents = $('contents');
// $( document ).ready(function() {
//   // Handler for .ready() called.
//   contents.remove(contents);
// });
// var contents = $('#contents');
// contents.remove();