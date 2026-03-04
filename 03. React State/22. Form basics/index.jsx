import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Challenge: add another label and input for the password field
 */

function App() {
  return (
    <section>
      <h1>Signup form</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" placeholder="********" />
        <br />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <button type="button" onClick={() => alert('Button clicked!')}>Click me!</button>
        <br />
        <label htmlFor="terms">
          <input id="terms" type="checkbox" name="terms" />
          I agree to the terms and conditions
        </label>
        <br />
        <label htmlFor="newsletter">
          <input id="newsletter" type="checkbox" name="newsletter" />
          Subscribe to newsletter
        </label>
        <br />
        
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);