// Theme (dark / light)
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if(savedTheme){ savedTheme === "dark" ? root.classList.add("dark") : root.classList.remove("dark"); }
document.getElementById("themeToggle").addEventListener("click", () => {
  const dark = root.classList.toggle("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
  document.getElementById("themeToggle").textContent = dark ? "☀️" : "🌙";
});
document.getElementById("themeToggle").textContent = root.classList.contains("dark") ? "☀️" : "🌙";

//add
 

const data = {
  skills: {
    data: ["PYTHON", "EXCEL","POWER BI", "TABLEAU", "SQL","MONGO DB","DAX"],
    cloud: ["AWS", "CLOUD COMPUTING","INFORMATION SECURITY", "S3"],
    dev: ["C","PYTHON","APP DEVELOPMENT","HTML", "CSS", "JavaScript", "PHP","MySql",]
  },//Additional skills are ai,ml,data mining,hadoop
  
  certificates: {
    data: [
     
      { name: "Introduction to Python ", file: "docs/sololearn python.pdf" },
      { name: "Python for Data Science ", file: "docs/python datascience.pdf" },
      { name: "Data Science 101", file: "docs/ibmdatascience.pdf" },
      { name: "Mongo DB Basics", file: "docs/mongodbbasics.pdf" },

      
    ],
    cloud: [
      { name: "AWS Cloud Practitioner Essentials", file: "docs/aws.pdf" },
      { name: "Cloud Computing", file: "docs/CC CERTIFICATE.pdf" },
      { name: "Fundamentals of Information Security", file: "docs/FINS.pdf" }
    ],
    dev: [
       { name: "C ", file: "assets/Images/C.jpg" },
       { name: "Basics of python programming", file: "docs/basics.pdf" },
      { name: "Introduction to Python ", file: "docs/sololearn python.pdf" },
      { name: "Basics of HTML/CSS ", file: "docs/HTML and CSS.pdf" },
      { name: "Android Fundamentals with Capstone Project ", file: "docs/Android.pdf" }
           
    ]
  },
  projects: {
    data: [
      { title: "Global Unemployment Insights", desc: "Analyzed global unemployment stats.", tech: ["Python", "Power BI"] },
      { title: "Telecom Churn Analysis", desc: "Built dashboard for literacy rates.", tech: ["Power BI"] }
    ],
    cloud: [
      { title: "IoT Cloud Monitoring", desc: "Built a cloud-based IoT dashboard.", tech: ["AWS", "Lambda"] },
      { title: "Serverless Web App", desc: "Deployed a React app on AWS Lambda.", tech: ["AWS", "React"] }
    ],
    dev: [
      { title: "Portfolio Website", desc: "Developed a responsive portfolio website.", tech: ["HTML", "CSS", "JS"] },
      { title: "E-commerce Store", desc: "Built a shopping cart system.", tech: ["React", "Node.js"] }
    ]
  },
  Workshop : {
    data: [
      { title: "POWER BI WORKSHOP ", desc: "ILEARNINGS" },
      { title: "DATA ANALYTICS  ", desc: "NOVITECH R& D Private Limited" }
    ]
}};


const roleButtons = document.querySelectorAll('.role-btn');
const roleContent = document.getElementById('roleContent');

roleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove "active" class from all buttons
    roleButtons.forEach(btn => btn.classList.remove('active'));
    // Add "active" class to the clicked button
    button.classList.add('active');
    
    const selectedRole = button.dataset.role;
    renderRole(selectedRole);
  });
});

function renderRole(role) {
  roleContent.innerHTML = "";

  
  // Skills Section
  const skillCard = document.createElement("div");
  skillCard.classList.add("card");
  skillCard.innerHTML = `<h3>Skills</h3>`;
  data.skills[role].forEach(skill => {
    skillCard.innerHTML += `<span class="skill-badge">${skill}</span>`;
  });
  roleContent.appendChild(skillCard);

  // Certificates Section
  const certCard = document.createElement("div");
  certCard.classList.add("card");
  certCard.innerHTML = `<h3>Certificates</h3>`;
  data.certificates[role].forEach(cert => {
    certCard.innerHTML += `
      <div class="proj">
        <strong>${cert.name}</strong>
        <a class="btn" href="${cert.file}" target="_blank">View</a>
      </div>`;
  });
  roleContent.appendChild(certCard);
  

  // Projects Section
  const projCard = document.createElement("div");
  projCard.classList.add("card");
  projCard.innerHTML = `<h3>Projects</h3> `;
  data.projects[role].forEach(proj => {
    projCard.innerHTML += `
      <div class="proj">
        <strong>${proj.title}</strong>
        <p>${proj.desc}</p>
        <span>Tech: ${proj.tech.join(", ")}</span>
      </div>`;
});
      //workshop
      const WorkshopCard = document.createElement("div");
  WorkshopCard.classList.add("card");
  WorkshopCard.innerHTML = `<h3>Workshop</h3>`;
  data.Workshop[role].forEach(Workshop => {
    WorkshopCard.innerHTML += `
      <div class="Workshop">
        <strong>${Workshop.title}</strong>
        <p>${Workshop.desc}</p>
       
      </div>`;
  });
  roleContent.appendChild(WorkshopCard);
}


// Load Data Analyst section by default
renderRole("data");
//add

// Mobile drawer
document.getElementById("mobileMenu").addEventListener("click", ()=>{
  document.getElementById("drawer").classList.toggle("hidden");
});

// Typewriter roles
const roles = ["Data Analyst", "SQL • Python • Power BI", "Turning data into decisions"];
let r=0, i=0, dir=1;
const rolesEl = document.getElementById("roles");
(function type(){
  const text = roles[r];
  i += dir;
  rolesEl.textContent = text.slice(0, i);
  if(i === text.length + 8) dir = -1;
  if(i === 0){ dir = 1; r = (r+1) % roles.length; }
  setTimeout(type, dir>0 ? 70 : 35);
})();

// Portfolio data (edit these arrays)
const projects = [
  {
    title: "Monthly Sales Report using Real-time data",
    summary: "A dynamic reporting system that fetches, processes, and visualizes monthly sales data in real-time.",
    tags: ["Excel","Data Cleaning","ETL", "Power BI"," Data Visualization"],
    repo: "https://github.com/youruser/global-unemployment-analysis",
    //caseStudy: "docs/global-unemployment-case-study.pdf",
    //demo: { type: "iframe", src: "" } // paste Power BI/Tableau embed URL
  },
  {
    title: "Students Performance Report",
    summary: "The goal is to identify patterns that affect academic success and help educators in making data-driven decisions.",
    tags: ["Excel","Data Cleaning", "ETL","Power BI"," Data Visualization", "DAX Query"],
    repo: "https://github.com/youruser/global-unemployment-analysis",
    //caseStudy: "docs/global-unemployment-case-study.pdf",
    //demo: { type: "iframe", src: "assets/Images/dashboard.jpg" } // paste Power BI/Tableau embed URL
  },
  {
    title: "HR Analytics Dashboard",
    summary: "The goal is to identify patterns that affect academic success and help educators in making data-driven decisions",
    tags: ["Data Exploration","Power BI","Data Visualization"],
    repo: "https://github.com/VNirmalkumar/HR-Analytics-Dashboard",
    //caseStudy: "docs/retail-forecasting.pdf",
    //demo: { type: "iframe", src: "assets/Images/HR.jpg" } // put a demo mp4 into assets
  },
  {
    title: "Telecom Churn Analysis Dashboard",
    summary: "A predictive analytics project where customer data is used to identify patterns leading to churn inthe telecom industry.",
    tags: ["Data Exploration","Power BI","Visualization"],
    repo: "https://github.com/VNirmalkumar/Telecom-Churn-Analysis-Dashboard",
    //caseStudy: "docs/churn-analysis.pdf",
    //demo: { type: "iframe", src: "" } // paste Tableau Public embed URL
  },
  {
    title: "Mobile Task Scheduler (2024)",
    summary: "This project aims to tackle the challenges of manual task management by offering a user-friendly mobile application integrated with a Firebase database for task management and automation",
    tags: ["Java","Xml","Android Studio"],
    //tools :["Android Studio"],
    repo: "https://github.com/VNirmalkumar/Mobile-Task-Scheduler",
    //caseStudy: "docs/churn-analysis.pdf",
    // demo: { type: "iframe", src: "" } // paste Tableau Public embed URL
  },
  {
    title: "Bike Zone (2023)",
    summary: "Developed a web-based application for managing driver and vehicle details using HTML, CSS, JavaScript, PHP, and MySQL. Enabled admin functionalities for efficient data handling and system management.",
    tags: ["Html","CSS","Java Script","PHP","MySQL"],
    repo: "https://github.com/VNirmalkumar/Bike-Zone",
    //caseStudy: "docs/churn-analysis.pdf",
    //demo: { type: "iframe", src: "" } // paste Tableau Public embed URL
  }
];


// Enable smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// const notebooks = [
//   { title: "NYC Taxi EDA", desc: "Exploratory data analysis with geospatial features.", link: "https://github.com/youruser/nyc-taxi-eda/blob/main/NYC_Taxi_EDA.ipynb" },
//   { title: "A/B Testing", desc: "Classical hypothesis tests and power analysis.", link: "https://github.com/youruser/ab-testing/blob/main/ab_test.ipynb" },
//   { title: "Kaggle: House Prices", desc: "Feature engineering + cross-validation.", link: "https://github.com/youruser/house-prices/blob/main/notebook.ipynb" }
// ];

// Populate Projects with search + tag filter
const tagFilter = document.getElementById("tagFilter");
const search = document.getElementById("search");
const cards = document.getElementById("projectCards");
const allTags = new Set();
projects.forEach(p => p.tags.forEach(t => allTags.add(t)));
[...allTags].sort().forEach(t => {
  const opt = document.createElement("option");
  opt.value = t; opt.textContent = t; tagFilter.appendChild(opt);
});
function renderProjects(){
  cards.innerHTML = "";
  const term = (search.value || "").toLowerCase();
  const tag = tagFilter.value;
  const filtered = projects.filter(p => {
    const matchesTerm = !term || (p.title + " " + p.summary + " " + p.tags.join(" ")).toLowerCase().includes(term);
    const matchesTag = tag === "all" || p.tags.includes(tag);
    return matchesTerm && matchesTag;
  });

  // 
  if(!filtered.length){
    const p = document.createElement("p");
    p.className = "muted";
    p.textContent = "No projects match your search.";
    cards.appendChild(p);
  }
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p class="muted">${p.summary}</p>
      <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      <div class="actions">
        ${p.repo ? `<a class="btn" href="${p.repo}" target="_blank" rel="noreferrer">Code</a>` : ""}
        ${p.caseStudy ? `<a class="btn" href="${p.caseStudy}" target="_blank" rel="noreferrer">Case Study</a>` : ""}
        ${(p.demo && p.demo.src) ? `<button class="btn primary" data-title="${p.title}" data-type="${p.demo.type}" data-src="${p.demo.src}">Live Demo</button>` : ""}
      </div>
    `;
    const demoBtn = card.querySelector("button");
    if(demoBtn){
      demoBtn.addEventListener("click", () => openModal(demoBtn.dataset));
    }
    cards.appendChild(card);
  });
}
search.addEventListener("input", renderProjects);
tagFilter.addEventListener("change", renderProjects);
renderProjects();


// Research & Publications Data
const researchPapers = [
  {
     title: "Exploring GAN Applications in Image Generation and Style Transfer (2024)",
    conference: "International Conference on Advancements in Generative AI, IIoT, and Quantum Computing for Sustainable Development.<b>(ISBN Number: 978-81-987354-1-6)</b>",
    description:
      "Presented a research paper on Generative Adversarial Networks (GANs) and their applications in image synthesis, super-resolution, and style transfer.",
    pdf: "assets/research/Erode Conference Proceeding.pdf"
  },
  {
 title: "Securing Academic Publishing With Privacy and Cybersecurity (2025)",
    conference:
      "International Conference on Computational Intelligence and Communication Technologies.<b>(ICCICT-111)</b>",
    description:
      "Proposed a secure academic publishing model using blockchain, encryption, multi-factor authentication, and encrypted cloud storage to enhance data security, ensure GDPR compliance, and protect intellectual property.",
      pdf: "assets/research/NGP Proceedings.pdf"
  },
  // {
  //   title: "Upcoming Publication",
  //   description:
  //     "This section is reserved for my upcoming research and publications. Stay tuned for updates!",
  //   pdf: "#"
  // }
];

// Inject Research Items Dynamically into Portfolio
const researchList = document.getElementById("researchList");

researchPapers.forEach((paper) => {
  const card = document.createElement("div");
  card.classList.add("research-card");

  card.innerHTML = `
    <h3>${paper.title}</h3>
     <p><strong>Conference:</strong> ${paper.conference}</p>
    <p>${paper.description}</p>
    ${
      paper.pdf !== "#"
        ? `<a href="${paper.pdf}" target="_blank" class="view-pdf">View PDF</a>`
        : `<a class="view-pdf" style="background:#9ca3af; cursor:not-allowed;">Coming Soon</a>`
    }
  `;

  researchList.appendChild(card);
});


// // Notebooks list
// const nbList = document.getElementById("nbList");
// notebooks.forEach(n => {
//   const a = document.createElement("a");
//   a.href = n.link; a.target = "_blank"; a.rel = "noreferrer";
//   const card = document.createElement("div");
//   card.className = "card";
//   card.innerHTML = `<h3>${n.title}</h3><p class="muted">${n.desc}</p>`;
//   a.appendChild(card);
//   nbList.appendChild(a);
// });

// Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e)=>{ if(e.target === modal) closeModal(); });
function openModal({title, type, src}){
  modalTitle.textContent = title || "Live Demo";
  modalBody.innerHTML = "";
  if(type === "iframe"){
    const f = document.createElement("iframe");
    f.src = src; f.setAttribute("allowfullscreen","true");
    modalBody.appendChild(f);
  }else if(type === "video"){
    const v = document.createElement("video");
    v.src = src; v.controls = true;
    modalBody.appendChild(v);
  }
  modal.classList.remove("hidden");
}
function closeModal(){
  modal.classList.add("hidden");
  modalBody.innerHTML = "";
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
