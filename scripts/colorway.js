//Need this in CSS: 

// :root {
//   --light: #ffffff;
//   --less-light: #1bb89a;
//   --main-color: #27a28a;
//   --less-dark: #f49d1e;
//   --dark: #2c3e50;
// }

//root = :root {} - css setup
let root;
root = document.documentElement;

//Change colorway BASED ON five 6-digit number separated by '-'
//element input s id colorway

function changeColorway() {
  try {
    let colors, input;

    input = document.getElementById("colorway");
    colors = input.value;
    colors = colors.split("-");
    input.value = "";

    if (validColors(colors)) {
      setColors(colors, root);
    } else {
      alert("Error.\nPlease enter five six-digit number in HEX.");
    }
  } catch (e) {
    console.log(e.message);
  }
}

//Reverse colors from css and set them

function reverseColorway() {
  colors = pullColorsFromCSS();
  colors.reverse();
  setColors(colors, root);
}

//Change Color

function setColors(colors, root) {
  root.style.setProperty("--dark", "#" + colors[0]);
  root.style.setProperty("--less-dark", "#" + colors[1]);
  root.style.setProperty("--main-color", "#" + colors[2]);
  root.style.setProperty("--less-light", "#" + colors[3]);
  root.style.setProperty("--light", "#" + colors[4]);
}

//Pull variables from CSS

function pullColorsFromCSS() {
  let colors = [];
  let style = getComputedStyle(root);

  colors.push(style.getPropertyValue("--dark").trim());
  colors.push(style.getPropertyValue("--less-dark").trim());
  colors.push(style.getPropertyValue("--main-color").trim());
  colors.push(style.getPropertyValue("--less-light").trim());
  colors.push(style.getPropertyValue("--light").trim());
  colors = colors.map((color) => color.slice(1));

  return colors;
}

//Check if num is HEX

function isHex(num) {
  return /^[0-9a-fA-F]{6}$/.test(num);
}

//Check if color is valid

function validColors(colors) {
  if (
    colors.length === 5 &&
    colors.every((word) => word.length === 6) &&
    colors.every((word) => isHex(word))
  ) {
    return true;
  } else {
    return false;
  }
}