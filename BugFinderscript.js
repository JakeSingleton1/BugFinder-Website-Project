/* BugFinderscript.js */

// Wait for the DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  // 1) Bug Report Form submission
  const bugReportForm = document.getElementById('bugReportForm');
  if (bugReportForm) {
    bugReportForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your bug report! Our team will review it shortly.');
      bugReportForm.reset();
    });
  }
  
  // 2) Comment form on bug details page
  const commentForm = document.getElementById('commentForm');
  if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const commentText = document.getElementById('commentText').value;
      if (commentText.trim() !== '') {
        const commentList = document.querySelector('.comments ul');
        const li = document.createElement('li');
        li.innerHTML = `<strong>You:</strong> ${commentText}`;
        commentList.appendChild(li);
        document.getElementById('commentText').value = '';
      }
    });
  }
  
  // 3) Simulated Login form submission
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Login successful! (Simulated)');
      loginForm.reset();
      window.location.href = 'BugFinderdashboard.html';
    });
  }
  
  // 4) Simulated Registration form submission
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Registration successful! (Simulated)');
      registerForm.reset();
      window.location.href = 'BugFinderdashboard.html';
    });
  }
  
  // 5) Developer Dashboard update status button simulation
  const updateStatusButtons = document.querySelectorAll('.update-status');
  updateStatusButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const newStatus = prompt('Enter new status for this bug report:');
      if (newStatus) {
        // In a real application, update the status in the backend.
        alert(`Status updated to: ${newStatus} (Simulated)`);
      }
    });
  });

  // 6) Dark/Light Mode Toggle
  const navContainer = document.querySelector('nav .container');
  if (navContainer) {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Dark Mode';
    toggleButton.classList.add('mode-toggle');
    
    // Append the toggle button to the nav container
    navContainer.appendChild(toggleButton);

    // Toggle dark mode on click
    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
      } else {
        toggleButton.textContent = 'Dark Mode';
      }
    });
  }

  // 7) Upvote functionality for BugFinderbrowse page
  const upvoteButtons = document.querySelectorAll('.upvote-button');
  upvoteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Find the vote count element in the same row
      const row = button.closest('tr');
      const voteCountElem = row.querySelector('.vote-count');
      let currentVotes = parseInt(voteCountElem.textContent);
      currentVotes += 1;
      voteCountElem.textContent = currentVotes;
    });
  });

  // 8) Filter functionality for the Browse page
  const filterLinks = document.querySelectorAll('.filter-link');
  if (filterLinks.length > 0) {
    filterLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        const rows = document.querySelectorAll('#bugBrowseTable tbody tr');
        rows.forEach(row => {
          if (category === 'all' || row.getAttribute('data-category') === category) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
        // Update active state on filter links
        filterLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
      });
    });
  }
  
  // 9) Mobile Sidebar Toggle for Hamburger Icon
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  if (hamburger && sidebar) {
    hamburger.addEventListener('click', function() {
      sidebar.classList.toggle('active');
    });
  }
});


// Dark Mode Toggle Functionality
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = localStorage.getItem("darkMode") === "enabled" ? "☀️ Light Mode" : "🌙 Dark Mode";
    toggleButton.classList.add("mode-toggle");

    // Insert button into sidebar
    const sidebar = document.querySelector(".sidebar-nav ul");
    if (sidebar) {
        const toggleContainer = document.createElement("li");
        toggleContainer.appendChild(toggleButton);
        sidebar.appendChild(toggleContainer);
    }

    // Toggle dark mode on click
    toggleButton.addEventListener("click", function() {
        if (document.documentElement.classList.contains("dark-mode")) {
            document.documentElement.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            toggleButton.textContent = "🌙 Dark Mode";
        } else {
            document.documentElement.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            toggleButton.textContent = "☀️ Light Mode";
        }
    });
});
