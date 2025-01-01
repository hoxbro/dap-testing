function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loopWithSleep() {
  let count = 0;
  while (true) {
    console.log(`Iteration ${count}`);
    await sleep(1000); // Sleep for 1 second
    count++;
  }
}

loopWithSleep();
