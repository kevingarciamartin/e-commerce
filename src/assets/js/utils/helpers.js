// Calculates the time delay until the next midnight
export function getDelayUntilNextMidnight() {
  const now = new Date();
  const nextMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  return nextMidnight - now;
}

export function resetMain() {
  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="content-container"></section>
  `;
}
