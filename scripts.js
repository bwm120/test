function showSection(sectionId) {

    document.querySelectorAll('.content-section').forEach((section) => {
      section.classList.remove('visible');
    });
    document.getElementById(sectionId).classList.add('visible');
  }
  const fadeInSections = document.querySelectorAll('.section');

  const options = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('roll');
      }
    });
  }, options);  
  
  fadeInSections.forEach(section => {
    observer.observe(section);
  });