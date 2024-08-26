//your JS code here. If required.

 function solve() {
            const select  = document.querySelector("select");
            const selectedValue = select.value ;
            let options = select.children ;
            for(let i= 0 ; i < options.length; i++) {
                if(options[i].value === selectedValue){
                    options[i].remove();
                    break;
                }
            }
        }
