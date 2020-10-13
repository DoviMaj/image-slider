const nextImage = () => {
  const current = document.getElementById("images-container");
  let url = Number(current.className);
  console.log(url);
  if (url == 4) {
    url = -1;
  }
  current.style.backgroundImage = `url(./img${url + 1}.jpg)`;
  current.className = url += 1;
};

const timer = setInterval(function () {
  nextImage();
}, 5000);

const clearTimer = () => {
  clearInterval(timer);
};

const previousImage = () => {
  const current = document.getElementById("images-container");
  let url = Number(current.className);
  console.log(url);
  if (url == 0) {
    url = 5;
  }
  current.style.backgroundImage = `url(./img${url - 1}.jpg)`;
  current.className = url -= 1;
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

// remove to start timer
//clearTimer();
previousImgEvent();
nextImgEvent();
