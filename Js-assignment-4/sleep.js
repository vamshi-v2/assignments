async function sleep(value) {

  console.log("Inside sleep function")
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), value)
  });

  let result = await promise; 
  console.log(result); 
  console.log("Finished!");
}
console.log("Hello!");
sleep(3000);
