const second = document.querySelector("second");

const download = (path, filename) => {
  // Create a new link
  const anchor = document.createElement("a");
  anchor.href = path;
  anchor.download = filename;

  // Append to the DOM
  document.body.second.appendChild(anchor);

  // Trigger `click` event
  anchor.click();

  // Remove element from DOM
  document.body.removeChild(anchor);
};

// Example download
download(
  "https://res.cloudinary.com/michael-2509/image/upload/v1650644652/Web_Developer_CV_wkvea8.pdf",
  "resume.pdf"
);

// const downloadButton = document.querySelector(btn_download);

// downloadButton.addEventListener(click, function () {
//   console.log("working");
// });
