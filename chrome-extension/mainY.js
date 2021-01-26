// youtube
const contents = document.getElementById('contents');
parentElement = contents.parentElement
contents.parentNode.removeChild(contents);

const h1 = document.createElement("h1")
h1.textContent += 'Get back to achieving your coding dreams';
h1.classList.add("beautText");
parentElement.appendChild(h1)

const img = document.createElement("img");
img.src = "https://www.trinityp3.com/wp-content/uploads/2019/04/strong-brand.jpeg"
parentElement.appendChild(img); 

$('h1').click(function() {
  alert('Future you will thank you!');
});

$('img').click(function() {
  img.remove();
});

// const images = document.querySelectorAll("img");
// const parentArr = []
// images.forEach(function(img) {
//   parentElement = img.parentElement
//   parentArr.push(parentElement)
// });

// images.forEach(function(img) {
//   img.remove()
// });

// parentArr.forEach(parent => {
//   const img = document.createElement("img");
//   img.src = "https://i.pinimg.com/564x/f0/3c/6d/f03c6d0bd32c465caf05e90361a5e3e4.jpg"
//   parent.appendChild(img);
// });

// const titles = document.querySelectorAll("details");
// const titlesArr = []
// titles.forEach(function(title) {
//   parentElement = title.parentElement
//   titlesArr.push(parentElement)
// });

// titles.forEach(function(title) {
//   title.remove()
// });

// titlesArr.forEach(parent => {
//   const h3 = document.createElement("h3");
//   h3.textContent += 'Get back to achieving your coding dreams';
//   parent.appendChild(h3)
// });
