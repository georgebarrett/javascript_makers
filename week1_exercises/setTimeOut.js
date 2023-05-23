const printHelloOne = () => {
    console.log('Hello user!');
  };
  
  setTimeout(printHelloOne, 3000);


  const executeAfterDelay = (s, func) => {
    setTimeout(func, s * 1000);
  };
  
  const printHello = () => {
    console.log('Hello!');
  }
  
  executeAfterDelay(20, printHello);