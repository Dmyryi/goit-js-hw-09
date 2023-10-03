
const form = document.querySelector(".form");
const delayInput = form.querySelector("input[name='delay']");
const stepInput = form.querySelector("input[name='step']");
const amountInput = form.querySelector("input[name='amount']");
const startButton = form.querySelector("button[type='submit']");


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}



form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let currentDelay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);



  for (let position = 1; position <= amount; position++) {
    try {
  
      const result = await createPromise(position, currentDelay);

     
      console.log(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
    } catch (error) {
    
      console.log(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
    }

    currentDelay += step;
  }
});

form.addEventListener("input", () => {
  startButton.disabled = !delayInput.value || !stepInput.value || !amountInput.value;
});