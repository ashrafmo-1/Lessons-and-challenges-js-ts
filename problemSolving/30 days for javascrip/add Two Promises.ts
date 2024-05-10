type P = Promise<number>

async function addTwoPromises_(promise1: P, promise2: P): P {
  return Promise.all([promise1, promise2]).then(([result1, result2]) => {
    return result1 + result2;
  });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */