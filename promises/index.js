// Promise = An Object that manages asynchronous operations.
//           Wrap a promise Object around {asynchronous code}
//           “I promise to return a value”
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const dogWalked = true;
        if (dogWalked) {
      resolve("You walk the dog 🐕");
        } else {
            reject("You DIDN'T walk the dog 🐕")
        }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const kitchenCleaned = true;
        if (kitchenCleaned) {
      resolve("You clean the kitchen 🧹");
        } else {
            reject("You DIDN'T clean the kitchen 🧹")
        }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const trashTakenOut = false;
        if (trashTakenOut) {
      resolve("You take out the trash 🗑️");
        } else {
      reject("You DIDN'T take out the trash 🗑️");
        }
    }, 500);
  });
}

/*
walkDog(() => {
  cleanKitchen(() => {
    takeOutTrash(() => {
      console.log("You finished the all chores!");
    });
  });
});
*/

walkDog().then((value) => {console.log(value); return cleanKitchen()})
        .then((value) => {console.log(value); return takeOutTrash()})
        .then((value) => {console.log(value); console.log("You finished the all chores!")}).catch((error) => {console.error(error)});
