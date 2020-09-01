export const celciusFahrenheit = (id: string) => {
  const temperature: any = (document.getElementById("temp") as HTMLInputElement)
    .value;

  if (!temperature) {
    document.getElementById("celcius-fahrenheit")!.textContent =
      "Please enter a number to convert.";
    return;
  }

  if (id === "Celcius") {
    const convertedTemp = ((temperature - 32) * 5) / 9;
    document.getElementById(
      "celcius-fahrenheit"
    )!.textContent = `${temperature}\xB0F is ${convertedTemp}\xB0C`;
  }

  if (id === "Fahrenheit") {
    const convertedTemp = (temperature * 9) / 5 + 32;
    document.getElementById(
      "celcius-fahrenheit"
    )!.textContent = `${temperature}\xB0C is ${convertedTemp}\xB0F`;
  }
};
