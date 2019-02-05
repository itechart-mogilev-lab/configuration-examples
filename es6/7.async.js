const someAsyncAction = () =>
  new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: "R" }), 1500);
  });

const failingAsyncAction = () =>
  new Promise((resolve, reject) => {
    setTimeout(reject, 500);
  });

function OldStyle() {
  someAsyncAction().then(response => {
    console.log(response);
  });
}

async function CoolStyle() {
  let response = await someAsyncAction();
  console.log(response);
}

// OldStyle();
// CoolStyle();

function OldStyleErrorHandling() {
  someAsyncAction().then(
    response => {
      failingAsyncAction().then(anotherResponse => {
        console.log("process data");
      });
    },
    error => {
      console.log("this error processing will never happen");
    }
  );
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

// OldStyleErrorHandling();
// ErrorHandling();

async function WaitForMultiplePromises() {
  let operation1 = someAsyncAction();
  let operation2 = someAsyncAction();

  let [result1, result2] = await Promise.all([operation1, operation2]);
}

let timeoutToken = Symbol.for("timeout");
const timeoutFn = sec =>
  new Promise(resolve => setTimeout(resolve, sec * 1000, timeoutToken));

async function OperationWithTimeout() {
  let result = await Promise.race([someAsyncAction(), timeoutFn(0.1)]);
  if (result == Symbol.for("timeout")) {
    console.log("timeout");
  }
}

OperationWithTimeout();
