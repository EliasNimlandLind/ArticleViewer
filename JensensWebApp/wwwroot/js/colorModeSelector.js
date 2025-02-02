function selectColor() {
  const colorModeSelector = document.getElementById("color-mode-selector");
  colorModeSelector.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-color-mode");

    const colorModeDescriptor = document.getElementById(
      "color-mode-descriptor"
    );

    let darkModeText = "Mörkt läge";
    let lightModeText = "Ljust läge";

    if (colorModeDescriptor.textContent == darkModeText) {
      colorModeDescriptor.textContent = lightModeText;
      colorModeDescriptor.style.paddingRight = "10px";
    } else {
      colorModeDescriptor.textContent = darkModeText;
      colorModeDescriptor.style.paddingRight = "0px";
    }
  });
}
