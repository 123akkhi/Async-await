const getButter = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Husband: I got the butter");
        resolve("butter");
      }, 2000);
    });
  };
  
  const getColdDrinks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Husband: I got the cold drinks");
        resolve("cold drinks");
      }, 2000);
    });
  };
  
  const getBurger = (ingredients) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ingredients.includes("lettuce") && ingredients.includes("cheese")) {
          console.log("Wife: I made a burger with lettuce and cheese");
          resolve("burger");
        } else {
          reject("missing ingredients");
        }
      }, 5000);
    });
  };
  
  getButter()
    .then((result) => {
      return Promise.all([result, getBurger(["lettuce", "cheese"])]);
    })
    .then(([result, burgerResult]) => {
      console.log(`Husband: ${burgerResult} and ${result} are ready, let's eat!`);
      return getColdDrinks();
    })
    .then((drinksResult) => {
      console.log(`Wife: I got the ${drinksResult}, let's eat!`);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });

    