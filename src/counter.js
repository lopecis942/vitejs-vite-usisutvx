export function setupCounter(element) {
  let counter = 0
  const setCounter = (count = 0) => {
    element.innerHTML = `${count} times clicked..!`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
