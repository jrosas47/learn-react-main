import React from 'react';
import ReactDOM from 'react-dom/client';

function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const formData = new FormData(event.target); // Get the form data
  const data = Object.fromEntries(formData.entries()); // Convert FormData to an object
  console.log(data); // Log the form data to the console
  // Here you can handle the form data, e.g., send it to a server
  console.log('Form submitted successfully!');

  // Here you can handle the form data, e.g., send it to a server
  // For example, you could use fetch to send the data to an API endpoint
  // fetch('/api/submit', {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  //   .then(response => response.json())
  //   .then(result => {
  //     console.log('Success:', result);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
  // Reset the form if needed
  event.target.reset();
  // Optionally, you can display a success message to the user
  alert('Form submitted successfully!');
  // You can also redirect the user or perform other actions here
  // For example, redirecting to a thank you page:
  // window.location.href = '/thank-you';
}

function App() {
  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method='post'>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);