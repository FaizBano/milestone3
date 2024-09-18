// get refernces to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resumeDisplay");
// Handling form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // collect input values
    var name = document.getElementById('name').value;
    var phone = document.getElementById("phone no").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    // generate the resume contant dynamically
    var resumeHTML = "\n<h2><b><u>Resume</u></b></h2>\n<h2><b><u>Personal Inforamtion</u></b></h2>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Phone No.:</b>").concat(phone, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n\n<h2><b><u>Education</u></b></h2>\n<p>").concat(education, "</p>\n\n<h2><b><u>Skills</u></b></h2>\n<p>").concat(skills, "</p>\n\n<h2><b><u>Experience</u></b></h2>\n<p>").concat(experience, "</p>\n\n");
    // display generated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("the Reume Display Element is missing");
    }
});
