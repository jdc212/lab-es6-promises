// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));*/



// Iteration 1 - using callbacks
 getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          mashedPotatoes.push("Mashed potatoes are ready!")
          getInstruction("mashedPotatoes", 5, (step6) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          },
      

         (err) => console.log(err));
        }, (err) => console.log(err));
      }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
}, (err) => console.log(err));


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    
    obtainInstruction('steak', 1) 
      .then( (step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  
        obtainInstruction('steak', 2)
          .then( (step3) => {
            document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  
            obtainInstruction('steak', 3)
              .then((step4) => {
                document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
                
                obtainInstruction('steak', 4)
                  .then( (step5) => {
                    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
                    
                    obtainInstruction('steak', 5)
                      .then( (step6) => {
                        document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
                        
                        obtainInstruction('steak', 6)
                          .then( (step7) => {
                            document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
                            
                            obtainInstruction('steak', 7)
                              .then( (step8) => {
                                steak.pop();
                                steak.push("Steak is ready!");
                                obtainInstruction('steak', 7)
                                .then( (step8) => {document.querySelector("#steak").innerHTML +=  `<li>${step8}</li>`
                              })
                                document.querySelector("#steakImg").removeAttribute("hidden");
                              
                              }).catch((error) => console.error (error));
                            }).catch((error) => console.error (error));
                          }).catch((error) => console.error (error));
                        }).catch((error) => console.error (error));
                      }).catch((error) => console.error (error));
                    }).catch((error) => console.error (error));
                  }).catch((error) => console.error (error));
                }).catch((error) => console.error (error));

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    const step1 = await obtainInstruction('broccoli', 0); 
            document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`

    const step2 = await obtainInstruction('broccoli', 1); 
            document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`

    const step3 = await obtainInstruction('broccoli', 2); 
            document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`

    const step4 = await obtainInstruction('broccoli', 3); 
            document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`

    const step5 = await obtainInstruction('broccoli', 4); 
            document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`

    const step6 = await obtainInstruction('broccoli', 5); 
            document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`

    const step7 = await obtainInstruction('broccoli', 6); 
            document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`
            broccoli.push("Broccoli is ready!")

    const step8 = await obtainInstruction('broccoli', 7); 
            document.querySelector("#broccoli").innerHTML += `<li>${step8}</li>`
            document.querySelector("#broccoliImg").removeAttribute("hidden");
    
    
  } catch(err) { 
    console.log (err)
  }
}
makeBroccoli()
  

// Bonus 2 - Promise all
// ...
/*const obtainInstruction = new Promise((resolve, reject) => {
  setTimeout(() => {resolve (document.querySelector(#brusselsSprouts).innerHTML += `<li>${brusselsSprouts[0]}</li>`); }, 1000);
});

const obtainInstruction1 = new Promise(() => {
  (() => );
});

const obtainInstruction2 = new Promise(() => {
  (() => );
});

const obtainInstruction3 = new Promise(() => {
  (() => );
});
const obtainInstruction4 = new Promise(() => {
  (() => );
});

const obtainInstruction5 = new Promise(() => {
  (() => );
});

const obtainInstruction6 = new Promise(() => {
  (() => );
});

const obtainInstruction7 = new Promise(() => {
  (() => );
});

Promise.all( [obtainInstruction, obtainInstruction1, obtainInstruction2, obtainInstruction3, obtainInstruction4, obtainInstruction5, obtainInstruction6, obtainInstruction7] )
.then((values) => console.log("values", values))
.catch((err)=> console.log("catch()", err)); */
