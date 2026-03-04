import ReactDOM from 'react-dom/client';

function App() {
  const firstName = "Joe"
  const lastName = "Schmoe"
  const hour = new Date().getHours();
  let timeOfDay;

  if (hour < 12) {
    timeOfDay = "morning";
  }
  else if (hour < 18) {
    timeOfDay = "afternoon";
  }
  else {
    timeOfDay = "evening";
  }
  /**
   * Challenge: finish off the h1 below so it says "Hello Joe Schmoe"
   */
  
  return (
    <h1>Good {timeOfDay} {firstName} {lastName}, the hour is {hour % 12}</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);