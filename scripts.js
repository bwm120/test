function showSection(sectionId) {

    document.querySelectorAll('.content-section').forEach((section) => {
      section.classList.remove('visible');
    });
    document.getElementById(sectionId).classList.add('visible');
  }
