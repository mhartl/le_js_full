// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  let thumbnails  = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage   = document.querySelector("#gallery-photo img");
  // Image info to be updated
  let galleryInfo = document.querySelector("#gallery-info");
  let title       = galleryInfo.querySelector(".title");
  let description = galleryInfo.querySelector(".description");

  thumbnails.forEach(function(thumbnail) {
    // Preload large images.
    let newImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;

    thumbnail.addEventListener("click", function() {
      // Set clicked image as main image.
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail);

      // Change which image is current.
      const className = "current";
      document.querySelector(`.${className}`).classList.remove(className);
      thumbnail.parentNode.classList.add(className);

      // Update image info.
      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
