import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  
  /**
   * Challenge: get the password from the form too and log
   * it to the console to be sure it came in correctly.
   */
  
  function signUp(formData) {
    const email = formData.get("email")
    console.log(email)
    const password = formData.get("password")
    console.log(password)
    // Here you can handle the form data, e.g., send it to a server
    console.log('Form submitted successfully!');
    // Reset the form if needed
    //formData.target.reset();
    // You can also redirect the user or perform other actions here
    // For example, redirecting to a thank you page:
    // window.location.href = '/thank-you'; 
  }
  
  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
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