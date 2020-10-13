let current = 0;

const nextImage = () => {
  const images = document.querySelectorAll(".slider-img");
  const markers = document.querySelectorAll(".marker");
  if (current == 4) {
    current = -1;
    images[4].classList.add("hide");
    images[0].classList.remove("hide");

    markers[4].id = "";
    markers[0].id = "active-marker";
  } else {
    images[current].classList.add("hide");
    images[current + 1].classList.remove("hide");

    markers[current].id = "";
    markers[current + 1].id = "active-marker";
  }
  current += 1;
};

const previousImage = () => {
  const images = document.querySelectorAll(".slider-img");
  const markers = document.querySelectorAll(".marker");
  if (current == 0) {
    current = 4;
    images[0].classList.add("hide");
    images[4].classList.remove("hide");

    markers[0].id = "";
    markers[4].id = "active-marker";
  } else {
    images[current].classList.add("hide");
    images[current - 1].classList.remove("hide");

    markers[current].id = "";
    markers[current - 1].id = "active-marker";
  }
  current -= 1;
};

const previousImgEvent = () => {
  const button = document.querySelector("#previous-img");
  button.addEventListener("click", () => {
    previousImage();
  });
};

const nextImgEvent = () => {
  const button = document.querySelector("#next-img");
  button.addEventListener("click", () => {
    nextImage();
  });
};

const markerEvent = () => {
  const markers = document.querySelectorAll(".marker");
  markers.forEach((m) => {
    m.addEventListener("click", (evt) => {
      changeCurrentImage(evt.target.dataset.key);
    });
  });
};

const changeCurrentImage = (element) => {
  const images = document.querySelectorAll(".slider-img");
  const markers = document.querySelectorAll(".marker");
  current = Number(element);
  images[current].classList.remove("hide");
  markers[current].id = "active-marker";
  images.forEach((img, index) => {
    if (!img.classList.contains("hide") && index !== current) {
      img.classList.add("hide");
    }
  });
  markers.forEach((m) => {
    if (m.dataset.key !== element) {
      m.id = "";
    }
  });
};

const timer = setInterval(function () {
  nextImage();
}, 7000);

const clearTimer = () => {
  clearInterval(timer);
};

previousImgEvent();
nextImgEvent();
markerEvent();
