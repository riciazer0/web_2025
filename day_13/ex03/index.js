export default async function main(){
    console.log('start App')

    const main_menu = document.querySelector('#main-menu')
    //const newGame = document.querySelector('')
    const creditScreen = document.querySelector('#credit-screen')
    let currentScreen = "main_menu"
    const optionScreen = document.querySelector('#option-screen')


    let currentIndex = 0;
    const menuitems = document.querySelectorAll(".menu-item");
    const optionitems = document.querySelectorAll(".option-item");
    let currentIndex2 = 0;


    console.log(menuitems.length)
    const menuitems_count = menuitems.length
    const option_count = optionitems.length

    menuitems[currentIndex].classList.add("select")
    optionitems[currentIndex2].classList.add("select")    

    document.addEventListener("keydown", (e) => {
        menuitems[currentIndex].classList.remove('select')
        optionitems[currentIndex2].classList.remove('select')        

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
                else if(select_action == 'Option'){
                    main_menu.classList.add('hide')
                    creditScreen.classList.add('hide')
                    optionScreen.classList.remove('hide')
                    currentScreen = "optionScreen"
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
        else if(currentScreen == "optionScreen"){
            console.log(e.key)
            if(e.key == "ArrowUp"){
                currentIndex2--
                if(currentIndex2 < 0){
                    currentIndex2 = option_count-1
                }
            }
            else if(e.key == "ArrowDown"){
                currentIndex2++
                currentIndex2 %= option_count
            }            
            if(e.key == "Enter"){
                optionScreen.classList.add('hide')
                    creditScreen.classList.add('hide')                
                main_menu.classList.remove('hide')
                currentScreen="main_menu"
            }
            console.log(currentIndex2)  
            optionitems[currentIndex2].classList.add('select')
        }

    })


}