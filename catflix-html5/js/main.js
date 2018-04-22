(()=> {
  const profiles = document.querySelectorAll("netflix-profile-thumb");
  const modals = document.querySelectorAll("netflix-modal");

  const openModal = (modalIndex) => {
    modals[modalIndex].setAttribute("open", "");
  };

  profiles.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      openModal(index);
    });
  })
})()