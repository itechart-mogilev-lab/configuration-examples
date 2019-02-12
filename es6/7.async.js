const someAsyncAction = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: "R" });
    }, 1500);
  });

const failingAsyncAction = () =>
  new Promise((resolve, reject) => {
    setTimeout(reject, 500);
  });

function OldStyle() {
  return someAsyncAction().then(response => {
    console.log(response);
    return someAsyncAction();
  });
}

async function CoolStyle() {
  let response = await someAsyncAction();
  console.log(response);
}

// OldStyle().then((result) => console.log('all done', result));
// CoolStyle();

function OldStyleErrorHandling() {
  return someAsyncAction().then(
    response => {
      return failingAsyncAction().then(anotherResponse => {
        console.log("process data");
      })
    }).catch(error => {
      console.log("this error processing will never happen");
    });
}

async function ErrorHandling() {
  try {
    let response = await someAsyncAction();
    let anotherResponse = await failingAsyncAction(response);
    console.log(anotherResponse);
  } catch {
    console.log("error");
  }
}

// OldStyleErrorHandling().then();
// ErrorHandling();

async function WrongCode() {
  let result1 =  await someAsyncAction();
  let result2 = await someAsyncAction();
}


async function WaitForMultiplePromises() {
  let operation1 = someAsyncAction();
  let operation2 = someAsyncAction();

  let [result1, result2] = await Promise.all([operation1, operation2]);
}

let timeoutToken = "timeout";
const timeoutFn = sec =>
  new Promise(resolve => setTimeout(resolve, sec * 1000, timeoutToken));

async function OperationWithTimeout() {
  let result = await Promise.race([someAsyncAction(), timeoutFn(2)]);
  if (result == "timeout") {
    console.log("timeout");
  } 
}

OperationWithTimeout();
