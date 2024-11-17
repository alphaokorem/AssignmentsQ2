const imageInput = document.getElementById("image") as HTMLInputElement;
const userNameInput = document.getElementById("UserName") as HTMLInputElement;
const jobTitleInput = document.getElementById("jobTitle") as HTMLInputElement;
const aboutMeInput = document.getElementById("aboutme") as HTMLTextAreaElement;
const educationInput = document.getElementById("education") as HTMLTextAreaElement;
const skillInput = document.getElementById("skill1") as HTMLTextAreaElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
const contactPhoneInput = document.getElementById("contactPhone") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const linkedinInput = document.getElementById("field") as HTMLInputElement;

  if(linkedinInput.value) {  // idk how to get this if statement to work
    const link = document.getElementById("linkedin") as HTMLDivElement;
    const field = document.getElementById("field") as HTMLDivElement;
    field.style.display = "none"; //hide the input field
    link.style.display = "none"; //hide the link input field
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
  

  userNameInput.outerHTML = `<h1 contenteditable="true">${userNameInput.value}</h1>`;
  jobTitleInput.outerHTML = `<p contenteditable="true">${jobTitleInput.value}</p>`;
  aboutMeInput.outerHTML = `<p contenteditable="true">${aboutMeInput.value}</p>`;
  educationInput.outerHTML = `<li contenteditable="true">${educationInput.value}</li>`;
  skillInput.outerHTML = `<li contenteditable="true">${skillInput.value}</li>`;
  experienceInput.outerHTML = `<li contenteditable="true">${experienceInput.value}</li>`;
  contactPhoneInput.outerHTML = `<p contenteditable="true">${contactPhoneInput.value}</p>`;
  emailInput.outerHTML = `<p contenteditable="true">${emailInput.value}</p>`;
  linkedinInput.outerHTML = `<p contenteditable="true">${linkedinInput.value}</p>`;


  const button = document.getElementById("generateButton") as HTMLInputElement;
  button.style.display = "none";
}