const imageInput = document.getElementById("image") as HTMLInputElement;
const userNameInput = document.getElementById("UserName") as HTMLInputElement;
const jobTitleInput = document.getElementById("jobTitle") as HTMLInputElement;
const aboutMeInput = document.getElementById("aboutme") as HTMLTextAreaElement;
const educationInput = document.getElementById("education") as HTMLTextAreaElement;
const skillInput = document.getElementById("skill1") as HTMLTextAreaElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
const contactPhoneInput = document.getElementById("contactPhone") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const linkedinInput = document.getElementById("linkedin") as HTMLInputElement;
  if(linkedinInput.value == "") {
    linkedinInput.value = "Not provided";
  }

function generateResume() {
  if (imageInput.files) { 
    const reader = new FileReader();   
    reader.onload = (e) => { 
      const imgElement = document.createElement("img"); 
                            //creates a new img element
      imgElement.src = e.target?.result as string; 
      imgElement.style.width = "200px"; //set width and
      imgElement.style.borderRadius = "10px"; //set border radius as was done in the original milestone1
      imageInput.replaceWith(imgElement); 
//replaces the file input field with the new image element
    };
    reader.readAsDataURL(imageInput.files[0]); 
}
  

  userNameInput.outerHTML = `<h1>${userNameInput.value}</h1>`;
  jobTitleInput.outerHTML = `<p>${jobTitleInput.value}</p>`;
  aboutMeInput.outerHTML = `<p>${aboutMeInput.value}</p>`;
  educationInput.outerHTML = `<li>${educationInput.value}</li>`;
  skillInput.outerHTML = `<li>${skillInput.value}</li>`;
  experienceInput.outerHTML = `<li>${experienceInput.value}</li>`;
  contactPhoneInput.outerHTML = `<p>${contactPhoneInput.value}</p>`;
  emailInput.outerHTML = `<p>${emailInput.value}</p>`;
  linkedinInput.outerHTML = `<p>${linkedinInput.value}</p>`;


  const button = document.getElementById("generateButton") as HTMLInputElement;
  button.style.display = "none";
}