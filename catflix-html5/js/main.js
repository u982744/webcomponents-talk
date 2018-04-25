(()=> {
  const profiles = document.querySelectorAll("catflix-profile-thumb");
  const modals = document.querySelectorAll("catflix-modal");

  const openModal = (modalIndex) => {
    modals[modalIndex].setAttribute("open", "true");
  };

  profiles.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      openModal(index);
    });
  })
})()