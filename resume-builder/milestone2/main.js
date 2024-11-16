var imageInput = document.getElementById("image");
var userNameInput = document.getElementById("UserName");
var jobTitleInput = document.getElementById("jobTitle");
var aboutMeInput = document.getElementById("aboutme");
var educationInput = document.getElementById("education");
var skillInput = document.getElementById("skill1");
var experienceInput = document.getElementById("experience");
var contactPhoneInput = document.getElementById("contactPhone");
var emailInput = document.getElementById("email");
var linkedinInput = document.getElementById("linkedin");
if (linkedinInput.value == "") {
    linkedinInput.value = "Not provided";
}
function generateResume() {
    if (imageInput.files) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var imgElement = document.createElement("img");
            //creates a new img element
            imgElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            imgElement.style.width = "200px"; //set width and
            imgElement.style.borderRadius = "10px"; //set border radius as was done in the original milestone1
            imageInput.replaceWith(imgElement);
            //replaces the file input field with the new image element
        };
        reader.readAsDataURL(imageInput.files[0]);
    }
    userNameInput.outerHTML = "<h1>".concat(userNameInput.value, "</h1>");
    jobTitleInput.outerHTML = "<p>".concat(jobTitleInput.value, "</p>");
    aboutMeInput.outerHTML = "<p>".concat(aboutMeInput.value, "</p>");
    educationInput.outerHTML = "<li>".concat(educationInput.value, "</li>");
    skillInput.outerHTML = "<li>".concat(skillInput.value, "</li>");
    experienceInput.outerHTML = "<li>".concat(experienceInput.value, "</li>");
    contactPhoneInput.outerHTML = "<p>".concat(contactPhoneInput.value, "</p>");
    emailInput.outerHTML = "<p>".concat(emailInput.value, "</p>");
    linkedinInput.outerHTML = "<p>".concat(linkedinInput.value, "</p>");
    var button = document.getElementById("generateButton");
    button.style.display = "none";
}
