window.onload = function () {
    const changeLink = document.getElementById("changePasswordLink");
    const studentProfileLink = document.getElementById("studentProfileLink");
    const overlay = document.getElementById("overlay");
    const passwordPopup = document.getElementById("passwordPopup");
    const studentProfilePopup = document.getElementById("studentProfilePopup");
    const body = document.body;
  
    if (changeLink && overlay && passwordPopup) {
      changeLink.addEventListener("click", function (event) {
        event.preventDefault();
        overlay.classList.add("active");
        passwordPopup.style.display = "block";
        body.classList.remove("white-bg");
      });
    }
  
    if (studentProfileLink && overlay && studentProfilePopup) {
      studentProfileLink.addEventListener("click", function (event) {
        event.preventDefault();
        overlay.classList.add("active");
        studentProfilePopup.style.display = "block";
        body.classList.add("white-bg");
      });
    }
  
    const saveButton = document.querySelector(".save-button");
    if (saveButton && passwordPopup && overlay) {
      saveButton.addEventListener("click", function () {
        passwordPopup.style.display = "none";
        overlay.classList.remove("active");
        const successPopup = document.getElementById("successPopup");
        if (successPopup) {
          successPopup.style.display = "flex";
        }
      });
    }
  
    // Handle collapsible toggles
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach((item) => {
      const toggle = item.querySelector(".dropdown-toggle");
      const content = item.querySelector(".dropdown-content");
      if (toggle && content) {
        toggle.addEventListener("click", function () {
          const isOpen = item.classList.contains("open");
  
          // Close all other dropdowns
          collapsibles.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.classList.remove("open");
              const otherContent = otherItem.querySelector(".dropdown-content");
              if (otherContent) otherContent.style.display = "none";
            }
          });
  
          // Toggle this dropdown
          if (isOpen) {
            item.classList.remove("open");
            content.style.display = "none";
          } else {
            item.classList.add("open");
            content.style.display = "block";
          }
        });
      }
    });
  
    // Save/Change button toggle
    const buttons = document.querySelectorAll(".save-change-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const container = btn.closest(".collapsible, .popup-container");
        if (!container) return;
  
        const inputs = container.querySelectorAll("input");
  
        if (btn.textContent.trim() === "Save") {
          // Save: disable inputs, show saved text span
          inputs.forEach((input) => {
            if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("saved-text")) {
              const span = document.createElement("span");
              span.textContent = input.value;
              span.classList.add("saved-text");
              input.style.display = "none";
              input.parentElement.appendChild(span);
            }
          });
          btn.textContent = "Change";
        } else {
          // Change: enable inputs, remove saved text spans
          inputs.forEach((input) => {
            input.style.display = "";
            const span = input.parentElement.querySelector("span.saved-text");
            if (span) {
              span.remove();
            }
          });
          btn.textContent = "Save";
        }
      });
    });
  };
  
  function hidePasswordPopup() {
    const passwordPopup = document.getElementById("passwordPopup");
    const overlay = document.getElementById("overlay");
    if (passwordPopup) passwordPopup.style.display = "none";
    if (overlay) overlay.classList.remove("active");
    document.body.classList.remove("white-bg");
  }
  
  function closeSuccessPopup() {
    const successPopup = document.getElementById("successPopup");
    const overlay = document.getElementById("overlay");
    if (successPopup) successPopup.style.display = "none";
    if (overlay) overlay.classList.remove("active");
  }
  
  function hideStudentProfile() {
    const studentProfilePopup = document.getElementById("studentProfilePopup");
    const overlay = document.getElementById("overlay");
    if (studentProfilePopup) studentProfilePopup.style.display = "none";
    if (overlay) overlay.classList.remove("active");
    document.body.classList.remove("white-bg");
  }
  

 function toggleMaximize() {
  const popup = document.getElementById('studentProfilePopup');
  const btn = document.querySelector('.maximize-btn');
  
  popup.classList.toggle('maximized');
  btn.textContent = popup.classList.contains('maximized') ? '🗗' : '🗖';
  
  // Adjust form layout for different sizes
  const formGrid = document.querySelector('.form-grid');
  if(popup.classList.contains('maximized')) {
    formGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
  } else {
    formGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
  }
}

function showProfile() {
      document.getElementById('studentProfilePopup').style.display = 'block';
    }

    function hideProfile() {
      document.getElementById('studentProfilePopup').style.display = 'none';
    }

    // Add event listener for student profile link
    document.getElementById('studentProfileLink').addEventListener('click', function(e) {
      e.preventDefault();
      showProfile();
    });

    // Close popup when clicking outside
    window.onclick = function(e) {
      if (e.target === document.getElementById('studentProfilePopup')) {
        hideProfile();
      }
    }