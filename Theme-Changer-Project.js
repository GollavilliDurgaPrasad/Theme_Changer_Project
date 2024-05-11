let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");
let themeUserInput = document.getElementById("themeUserInput");

function s(event) {
    if (event.key === "Enter") {
        let themeUserInputValue = themeUserInput.value;
        if (themeUserInputValue === "Dark") {
            bgContainer.classList.add("bg-containers");
            heading.classList.add("headings")
        } else if (themeUserInputValue === "Light") {
            bgContainer.classList.add("bg-container");
            heading.classList.add("heading");
        } else {
            alert("Enter valid Input");
        }
    }
}
themeUserInput.addEventListener("keydown", s)