function convertToFahtrenheit() {
  const celsiusInput = document.getElementById('celsiusInput').value;
  if (isNaN(celsiusInput)) {
      document.getElementById('result').textContent = 'Please enter a valid number.';
  } else {
      const fahrenheit = (celsiusInput * 9/5) + 32;
      document.getElementById('result').textContent = `${celsiusInput}°C is ${fahrenheit.toFixed(2)}°F.`;
  }
}
