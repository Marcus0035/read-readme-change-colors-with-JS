const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const qrImage = document.getElementById("qr-image");
const qrInput = document.getElementById("qr-input");

const generateBtn = document.getElementById("generate-btn");
const copyNewDisplay = document.getElementById("copy-new-display");

function generateQR() {
  try {
    if (qrInput.value.trim().length > 0) {
      qrImage.src = url + qrInput.value;

      qrImage.style.display = "block";
      copyNewDisplay.style.display = "grid";
      generateBtn.style.display = "none";
    } else {
      alert("You have to fill input");
    }
  } catch (e) {
    qrImage.style.display = "none";
    generateBtn.style.display = "block";
    console.log(e.message);
  }
}

function newQR() {
  try {
    generateBtn.style.display = "block";
    copyNewDisplay.style.display = "none";
    qrImage.style.display = "none";
  } catch (e) {
    console.log(e.message);
  }
}

function copyQR() {
  fetch(qrImage.src)
    .then((response) => response.blob())
    .then((blob) => {
      const item = new ClipboardItem({ "image/png": blob });
      navigator.clipboard.write([item]);
    })
    .then(() => {
      alert("QR code copied to clipboard!");
    })
    .catch((err) => {
      console.error("Could not copy image: ", err);
    });
}
