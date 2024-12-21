let courses = [
  {
    link: "https://www.coursera.org/learn/machine-learning",
    title: "AI & Machine Learning by Coursera (offered by Stanford University)",
    description: "Learn the basics of AI and machine learning from one of the most prestigious universities in the world. This course covers supervised learning, unsupervised learning, and machine learning best practices.",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/1b/bdf48065584cbe8e096669d9dd4852/LogoFiles_DeepLearning_Coursera_200x48.png?auto=format%2Ccompress&dpr=1&h=45"
  },
  {
    link: "https://www.netacad.com/courses/cybersecurity",
    title: "Introduction to Cybersecurity by Cisco Networking Academy",
    description: "Get introduced to the world of cybersecurity, covering essential topics like threat detection, protection strategies, and ethical hacking basics.",
    image: "https://www.netacad.com/sfa-assets/images/svg/netacad_logo_black.svg"
  },
  {
    link: "https://www.theodinproject.com/",
    title: "Full-Stack Web Development by The Odin Project",
    description: "A free, comprehensive course to learn front-end and back-end development, covering HTML, CSS, JavaScript, Node.js, and more.",
    image: "https://www.theodinproject.com/assets/icons/odin-icon-22b41941.svg"
  },
  {
    link: "https://www.coursera.org/specializations/jhu-data-science",
    title: "Data Science Specialization by Coursera (offered by Johns Hopkins University)",
    description: "This course takes you from the basics of data analysis to advanced data science concepts, using R and other statistical tools.",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/74/7ae340ec6911e5b395490a2a565172/JHU-Logo-Square-Mini_180px.png?auto=format%2Ccompress&dpr=1&h=45"
  },
  {
    link: "https://info.devpost.com/",
    title: "Hackathon Preparation Course by DevPost",
    description: "Learn how to prepare for hackathons with this course that covers ideation, coding, and effective presentation techniques for project pitches.",
    image: "https://cdn.prod.website-files.com/6465152b75f6f7f1c0dfc042/64661dc4f21acc507effdea4_devpost-logo.svg"
  },
  {
    link: "https://www.coursera.org/professional-certificates/google-ux-design",
    title: "UI/UX Design by Google (offered via Coursera)",
    description: "Learn the basics of user interface and user experience (UI/UX) design, focusing on wireframing, prototyping, and usability testing.",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/fa/79e521abf14610b4fec9d677901916/0.png?auto=format%2Ccompress&dpr=1&h=45"
  }
]

const main = document.getElementById("main");
let displayCourses = () => {
  courses.forEach(course => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");
    courseCard.innerHTML = `
      <a href="${course.link}" target="_blank" class="card-link">
        <span class="card-image">
        <img src="${course.image}" alt="${course.title}"/>
        </span>
        <h3 class="card-title">${course.title}</h3>
        <p class="card-info">${course.description}</p>
      </a>
    `;
    main.appendChild(courseCard);
  });
}

document.onload = displayCourses();
