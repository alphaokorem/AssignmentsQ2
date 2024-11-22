const image = document.getElementById("image") as HTMLInputElement;
const userName = document.getElementById("UserName") as HTMLInputElement;
const jobTitle = document.getElementById("jobTitle") as HTMLInputElement;
const aboutMe = document.getElementById("aboutme") as HTMLTextAreaElement;
const education = document.getElementById("education") as HTMLTextAreaElement;
const skill = document.getElementById("skill1") as HTMLTextAreaElement;
const experience = document.getElementById("experience") as HTMLTextAreaElement;
const contactPhone = document.getElementById(
  "contactPhone"
) as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
let linkedin = document.getElementById("field") as HTMLInputElement;

if (linkedin.value == "") {
  const link = document.getElementById("linkedin") as HTMLDivElement;
  const field = document.getElementById("field") as HTMLDivElement;
  field.style.display = "none"; //hide the input field
  link.style.display = "none"; //hide the link field
}

function generateResume() {
  if (image.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgElement = document.createElement("img");
      //creates a new img element
      imgElement.src = e.target?.result as string;
      imgElement.style.width = "200px"; //set width and
      imgElement.style.borderRadius = "10px"; //set border radius as was done in the original milestone1
      image.replaceWith(imgElement);
      //replaces the file   field with the new image element
    };
    reader.readAsDataURL(image.files[0]);
  }

  userName.outerHTML = `<h1 contenteditable="true">${userName.value}</h1>`;
  jobTitle.outerHTML = `<p contenteditable="true">${jobTitle.value}</p>`;
  aboutMe.outerHTML = `<p contenteditable="true">${aboutMe.value}</p>`;
  education.outerHTML = `<li contenteditable="true">${education.value}</li>`;
  skill.outerHTML = `<li contenteditable="true">${skill.value}</li>`;
  experience.outerHTML = `<li contenteditable="true">${experience.value}</li>`;
  contactPhone.outerHTML = `<p contenteditable="true">${contactPhone.value}</p>`;
  email.outerHTML = `<p contenteditable="true">${email.value}</p>`;
  linkedin.outerHTML = `<p contenteditable="true">${linkedin.value}</p>`;

  const button = document.getElementById("generateButton") as HTMLButtonElement;
  button.style.display = "none";
}
