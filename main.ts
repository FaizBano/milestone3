// get refernces to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement=document.getElementById("resumeDisplay") as HTMLDivElement;
// Handling form submission
form.addEventListener("submit",(event: Event)=>{
    event.preventDefault();
    // collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone =(document.getElementById("phone no") as HTMLInputElement).value;
    const email =(document.getElementById("email") as HTMLInputElement).value;
    const education =(document.getElementById("education") as HTMLInputElement).value;
    const skills =(document.getElementById("skills") as HTMLInputElement).value;
    const experience =(document.getElementById("experience") as HTMLInputElement).value;

    // generate the resume contant dynamically

const resumeHTML=`
<h2><b><u>Resume</u></b></h2>
<h2><b><u>Personal Inforamtion</u></b></h2>
<p><b>Name:</b>${name}</p>
<p><b>Phone No.:</b>${phone}</p>
<p><b>Email:</b>${email}</p>

<h2><b><u>Education</u></b></h2>
<p>${education}</p>

<h2><b><u>Skills</u></b></h2>
<p>${skills}</p>

<h2><b><u>Experience</u></b></h2>
<p>${experience}</p>

`;

// display generated Resume

if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}
else{ 
     console.error("the Reume Display Element is missing");
    }

});