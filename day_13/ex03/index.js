export default async function main(){
    console.log('start App')

    const main_menu = document.querySelector('#main-menu')
    //const newGame = document.querySelector('')
    const creditScreen = document.querySelector('#credit-screen')
    let currentScreen = "main_menu"


    let currentIndex = 0;
    const menuitems = document.querySelectorAll(".menu-item");


    console.log(menuitems.length)
    const menuitems_count = menuitems.length

    menuitems[currentIndex].classList.add("select")

    document.addEventListener("keydown", (e) => {
        menuitems[currentIndex].classList.remove('select')

        if(currentScreen == "main_menu"){

            console.log(e.key)
            if(e.key == "ArrowUp"){
                currentIndex--
                if(currentIndex < 0){
                    currentIndex = menuitems_count-1
                }
            }
            else if(e.key == "ArrowDown"){
                currentIndex++
                currentIndex %= menuitems_count
            }

            else if(e.key == "Enter"){
                console.log(menuitems[currentIndex].dataset.action)    
                const select_action = menuitems[currentIndex].dataset.action

                if(select_action == 'credit'){
                    main_menu.classList.add('hide')
                    creditScreen.classList.remove('hide')
                    currentScreen = "creditScreen"
                }
            }
                console.log(currentIndex)
                 menuitems[currentIndex].classList.add('select')
        }
        else if(currentScreen == "creditScreen"){
                
            console.log('credit screen') 

            if(e.key == "Enter"){
                creditScreen.classList.add('hide')
                main_menu.classList.remove('hide')
                currentScreen = "main_menu"
            }

        }
        
    


    })


}