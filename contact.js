document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  try {
    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();
    const responseEl = document.getElementById('response-message');

    if (res.ok) {
      responseEl.textContent = "Message sent successfully!";
      responseEl.style.color = "green";
      document.getElementById('contact-form').reset();
    } else {
      responseEl.textContent = data.error || "Something went wrong.";
      responseEl.style.color = "red";
    }
  } catch (err) {
    console.error("Fetch error:", err);
    const responseEl = document.getElementById('response-message');
    responseEl.textContent = "Failed to send message.";
    responseEl.style.color = "red";
  }
});
