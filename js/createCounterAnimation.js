export function createCounterAnimation({
  element,
  limit,
  time = 750,
  delay = 0,
  prefix = "",
  sufix = "",
  incrementValue = 1,
}) {
  const intervalTime = time / (limit / incrementValue);
  let counter = 0;

  setTimeout(() => {
    const interval = setInterval(() => {
      if (limit === counter) {
        clearInterval(interval);
      }

      element.innerText = prefix + counter + sufix;
      counter += incrementValue;
    }, intervalTime);
  }, delay);
}
