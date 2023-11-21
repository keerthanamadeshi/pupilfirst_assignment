document.addEventListener('DOMContentLoaded', function () {
  const userTableBody = document.getElementById('userDataBody');

  // Initially, the table is empty as the page loads

  const form = document.getElementById('registrationForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTerms = document.getElementById('acceptedTerms').checked;

    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || dob.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${password}</td>
      <td>${dob}</td>
      <td>${acceptedTerms ? 'Yes' : 'No'}</td>
    `;

    userTableBody.appendChild(newRow);

    form.reset();
  });
});
