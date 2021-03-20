const btns = document.querySelectorAll(".btn");
const text = document.querySelector("h2");
const message = document.querySelector("p");
let count = 0;
btns.forEach((btn) =>{

    btn.addEventListener('click',(e) => {
        
       const styles = e.currentTarget.classList;
        if(styles.contains("increment")){
            count++;
        }else if(styles.contains("decrement")){
            count--;
        }else{
            count = 0;
        }

        if (count > 0) {
            text.style.color = "green";
            message.innerHTML = ""
          }
          if (count < 0) {
            text.style.color = "red";
           message.innerHTML = "Counter value is going below 0!!"

          }
          if (count === 0) {
            text.style.color = "#222";
            message.innerHTML = ""
          }
          text.innerHTML = count;
    });

} );

