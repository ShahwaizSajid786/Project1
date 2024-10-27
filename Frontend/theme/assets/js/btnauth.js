


document.addEventListener('DOMContentLoaded', function() {
    // Function to manage login/logout button visibility
    function manageAuthButtons() {
      const token = localStorage.getItem('token');
      const loginBtn = document.getElementById('loginBtn');
      const logoutBtn = document.getElementById('logoutBtn');
  
      if (loginBtn && logoutBtn) {
        if (token) {
          // User is logged in
          logoutBtn.style.display = 'inline-block';
          loginBtn.style.display = 'none';
        } else {
          // User is not logged in
          loginBtn.style.display = 'inline-block';
          logoutBtn.style.display = 'none';
        }
  
        // Handle Logout click
        logoutBtn.addEventListener('click', function() {
          localStorage.removeItem('token'); // Remove token
          window.location.reload(); // Reload to reflect changes
        });
      } else {
        console.error('Login or Logout button not found in DOM');
      }
    }
  
    // Token validation and redirection
  
      manageAuthButtons();

  });