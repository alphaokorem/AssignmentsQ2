var image = document.getElementById("image");
var userName = document.getElementById("UserName");
var jobTitle = document.getElementById("jobTitle");
var aboutMe = document.getElementById("aboutme");
var education = document.getElementById("education");
var skill = document.getElementById("skill1");
var experience = document.getElementById("experience");
var contactPhone = document.getElementById("contactPhone");
var email = document.getElementById("email");
var linkedin = document.getElementById("field");
if (linkedin.value == "") {
    var link = document.getElementById("linkedin");
    var field = document.getElementById("field");
    field.style.display = "none"; //hide the input field
    link.style.display = "none"; //hide the link field
}
function generateResume() {
    if (image.files) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var imgElement = document.createElement("img");
            //creates a new img element
            imgElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            imgElement.style.width = "200px"; //set width and
            imgElement.style.borderRadius = "10px"; //set border radius as was done in the original milestone1
            image.replaceWith(imgElement);
            //replaces the file   field with the new image element
        };
        reader.readAsDataURL(image.files[0]);
    }
    userName.outerHTML = "<h1 contenteditable=\"true\">".concat(userName.value, "</h1>");
    jobTitle.outerHTML = "<p contenteditable=\"true\">".concat(jobTitle.value, "</p>");
    aboutMe.outerHTML = "<p contenteditable=\"true\">".concat(aboutMe.value, "</p>");
    education.outerHTML = "<li contenteditable=\"true\">".concat(education.value, "</li>");
    skill.outerHTML = "<li contenteditable=\"true\">".concat(skill.value, "</li>");
    experience.outerHTML = "<li contenteditable=\"true\">".concat(experience.value, "</li>");
    contactPhone.outerHTML = "<p contenteditable=\"true\">".concat(contactPhone.value, "</p>");
    email.outerHTML = "<p contenteditable=\"true\">".concat(email.value, "</p>");
    linkedin.outerHTML = "<p contenteditable=\"true\">".concat(linkedin.value, "</p>");
    var button = document.getElementById("generateButton");
    button.style.display = "none";
}
