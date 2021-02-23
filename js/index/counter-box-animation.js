"useStrict";
{
  const counterBox = document.querySelector(".counter-box");
  const counterNumbers = document.querySelectorAll(".counter-number");
  let countingNumber = 3000;
  let flag = true;

  const updateCounter = () => {
    counterNumbers.forEach((counterNumber) => {
      const targetNumber = Number(counterNumber.textContent);
      const counter = setInterval(() => {
        ++countingNumber;
        counterNumber.textContent = countingNumber;
        if (targetNumber < countingNumber) {
          clearInterval(counter);
        }
      }, 1);
    });
  };

  const scrollHanlder = () => {
    const windowHeight = window.innerHeight;
    const counterBoxPosition = counterBox.offsetTop;
    const startPosition = parseInt(counterBoxPosition - windowHeight);

    if (flag && window.pageYOffset > startPosition) {
      updateCounter();
      flag = false;
    }
  };
  window.addEventListener("scroll", scrollHanlder);
}
