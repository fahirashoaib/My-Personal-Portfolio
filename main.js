document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
      // Let the form submit normally
      setTimeout(() => {
        form.reset();// reset the form after submission
        
      }, 100); // Small delay to ensure submission completes
    });
  });