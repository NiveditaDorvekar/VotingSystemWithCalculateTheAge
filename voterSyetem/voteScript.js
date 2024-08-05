document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const voteMessage = document.getElementById('voteMessage');
    voteMessage.textContent = "Thank you for voting!";
  });