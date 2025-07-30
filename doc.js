// Example click handlers for each document button

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".doc-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const label = button.innerText.trim();

      switch (label) {
        case "10":
          alert("You clicked on Class 10 Documents");
          // window.open("docs/class10.pdf");
          break;
        case "11":
          alert("You clicked on Class 11 Documents");
          break;
        case "12":
          alert("You clicked on Class 12 Documents");
          break;
        case "I":
        case "II":
        case "III":
        case "IV":
        case "V":
        case "VI":
          alert(`You clicked on College Semester ${label}`);
          break;
        case "JAVA":
          alert("Opening Java Certificate...");
          // window.open("certificates/java.pdf");
          break;
        case "AI":
          alert("Opening AI Certificate...");
          // window.open("certificates/ai.pdf");
          break;
        default:
          alert("Unknown document.");
      }
    });
  });
});
