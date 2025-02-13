// List of images on your disk (update this with actual image paths)

document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById("imageDisplay");
    const fullScreenBtn = document.getElementById("fullScreenBtn");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    let isFullScreen = false;

    const checkButton = document.getElementById("checkButton");
    const userInput = document.getElementById("userInput");
    const result = document.getElementById("result");

    const specificYear = 2019; 
    const currentYear = new Date().getFullYear(); 

//accordion script start
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;

        // If the clicked panel is already open, close it
        if (panel.classList.contains("open")) {
            panel.classList.remove("open");
        } else {
            // Close all panels first
            var allPanels = document.querySelectorAll('.panel');
            allPanels.forEach(function(p) {
                p.classList.remove('open');
            });

            // Now open the clicked panel
            panel.classList.add("open");
        }
    });
}
//accordion script end
    


    // Function to check the user input start
    function checkYearDifference() {
        const userYearDifference = parseInt(userInput.value, 10);
        const correctDifference = currentYear - specificYear;

        if (userYearDifference === correctDifference) {
            result.textContent = "Correct!";
            result.style.color = "green";
        } else {
            result.textContent = "Wrong!";
            result.style.color = "red";
        }
    }
    //function to check user input end




const images = ["../images/sonia.png", "../images/sonia1.png", "../images/sonia2.png"];
let currentIndex = 0;

function updateImage() {
    document.getElementById("imageDisplay").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    updateImage();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
    updateImage();
}

function toggleFullScreen() {
    if (!isFullScreen) {
        img.classList.add("full-size");
        isFullScreen = true;
    }
}

function exitFullScreen() {
    if (isFullScreen) {
        img.classList.add("shrink"); // Apply shrink effect
        setTimeout(() => {
            img.classList.remove("full-size", "shrink");
            isFullScreen = false;
        }, 300);
    }
}

// Event listener for button click to enter full screen
fullScreenBtn.addEventListener("click", toggleFullScreen);
nextBtn.addEventListener("click",nextImage);
prevBtn.addEventListener("click",previousImage);
checkButton.addEventListener("click", checkYearDifference);

// Event listener for ESC key to exit full screen
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        exitFullScreen();
    }
});
});
