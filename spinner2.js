process.stdout.write('hello from spinner2.js... \rheyyy\n');


const spinner2 = function() {
  let delay = 100;
  let spinCycle = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\n"];

  for (const spin of spinCycle) {
    setTimeout(() => {
      process.stdout.write(spin);
    }, delay);
    delay += 200;
  }
};

spinner2();

  