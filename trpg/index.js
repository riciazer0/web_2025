export default async function main(){
    console.log('start App')

    /* 스크린 정의*/
    const main_menu = document.querySelector('#main-menu')
    const creditScreen = document.querySelector('#credit-screen')
    const optionScreen = document.querySelector('#option-screen')
    const themeScreen = document.querySelector('#set-theme')
    let currentScreen = "main_menu"
    let theme = document.querySelector("#theme")
    let container = document.querySelector(".container")
    const startScreen = document.querySelector('#start-screen')
    const chaScreen = document.querySelector('#make-char')
    const screScreen = document.querySelector("select-scre")

    /*아이템(커서?)를 위한 정의*/
    let currentIndex = 0; /*타이틀*/
    let currentIndex2 = 0; /*옵션*/
    let currentIndex3 = 0; /*메인화면*/
    let currentIndex0 = 0; /*테마*/
    const menuitems = document.querySelectorAll(".menu-item");
    const optionitems = document.querySelectorAll(".option-item");
    const startitems = document.querySelectorAll(".start-item");
    const themeitems = document.querySelectorAll(".theme-item");
    const tutorial = document.querySelector('#tuto')
    const tutori = document.querySelector(".tuto")
   

    /* 길이 정의(커서 이동)*/
    console.log(menuitems.length)
    const menuitems_count = menuitems.length
    const optionitems_count = optionitems.length
    const startitems_count = startitems.length
    const themeitems_count = themeitems.length

    /*커서 class넣기*/
    menuitems[currentIndex].classList.add("select")
    optionitems[currentIndex2].classList.add("select")
    startitems[currentIndex3].classList.add("select")
    themeitems[currentIndex0].classList.add("select")
    tutorial.classList.remove("hide")


    document.addEventListener("keydown", (e) => {
        menuitems[currentIndex].classList.remove("select")

        /*타이틀*/
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

                if(select_action == 'Option'){
                    main_menu.classList.add('hide')
                    optionScreen.classList.remove('hide')
                    currentScreen = "optionScreen"
                }
             if(select_action == 'New'){
                    main_menu.classList.add('hide')
                    optionScreen.classList.add('hide')
                    startScreen.classList.remove('hide')
                    currentScreen = "startScreen"
                }                
            }
                console.log(currentIndex)
                 menuitems[currentIndex].classList.add("select")
        }
        /*옵션창*/
        else if(currentScreen == 'optionScreen'){
            console.log(e.key)
            optionitems[currentIndex2].classList.remove("select")
            if(e.key == "ArrowUp"){
                currentIndex2--
                if(currentIndex2 < 0){
                    currentIndex2 = optionitems_count-1
                }
            }
            else if(e.key == "ArrowDown"){
                currentIndex2++
                currentIndex2 %= optionitems_count
            }

            else if(e.key == "Enter"){
                const select_action2 = optionitems[currentIndex2].dataset.action 

                if(select_action2 == 'credit'){
                    main_menu.classList.add('hide')
                    optionScreen.classList.add('hide')
                    creditScreen.classList.remove('hide')
                    currentScreen = "creditScreen"
                }
                else if(select_action2 == "theme"){
                    main_menu.classList.add('hide')
                    optionScreen.classList.add('hide')
                    themeScreen.classList.remove('hide')
                    currentScreen = "themeScreen"
                }              
                else if(select_action2 == "back"){
                    main_menu.classList.remove('hide')
                    optionScreen.classList.add('hide')
                    currentScreen = "main_menu"
                }
            }
            optionitems[currentIndex2].classList.add("select")
        }

        /*크래딧*/
        else if(currentScreen == "creditScreen"){
                
            console.log('credit screen') 

            if(e.key == "Enter"){
                creditScreen.classList.add('hide')
                main_menu.classList.remove('hide')
                currentScreen = "main_menu"
            }

        }

        /*테마*/
        else if(currentScreen == "themeScreen"){
            console.log(e.key)
            themeitems[currentIndex0].classList.remove("select")
            if(e.key == "ArrowUp"){
                currentIndex0--
                if(currentIndex0 < 0){
                    currentIndex0 = themeitems_count-1
                }
            }
            else if(e.key == "ArrowDown"){
                currentIndex0++
                currentIndex0 %= themeitems_count
            }

            else if(e.key == "Enter"){
                const select_action0 = themeitems[currentIndex0].dataset.action 

                if(select_action0 == 'white'){
                    theme.className = 'theme0'  
                    container.className = 'container' 
                   
                }
                else if (select_action0 == 'black'){
                    theme.className = 'theme1'
                    container.className = 'container2'
                }                
                else if (select_action0 == 'mint'){
                    theme.className = 'theme2'
                    container.className = 'container'
                }
                else if (select_action0 == 'back'){
                    themeScreen.classList.add('hide')
                    main_menu.classList.remove('hide')
                    currentScreen = "main_menu"
                }
            }
            themeitems[currentIndex0].classList.add("select")      
                                      

        }

        /*메인화면*/
        else if(currentScreen == 'startScreen'){
            console.log(e.key)
            startitems[currentIndex3].classList.remove("select")
            if(e.key == "ArrowUp"){
                currentIndex3--
                if(currentIndex3 < 0){
                    currentIndex3 = startitems_count-1
                }
            }
            else if(e.key == "ArrowDown"){
                currentIndex3++
                currentIndex3 %= startitems_count
            }

            else if(e.key == "Enter"){
                const select_action3 = startitems[currentIndex3].dataset.action 

                if(select_action3 == 'make-cha'){
                    startScreen.classList.add('hide')
                    chaScreen.classList.remove('hide')
                    currentScreen = "chaScreen"
                }
                else if(select_action3 == 'selec-sc'){
                    startScreen.classList.add('hide')
                    screScreen.classList.remove('hide')
                    currentScreen = "screScreen"
                }                
                else if (select_action3 == 'back'){
                    startScreen.classList.add('hide')
                    main_menu.classList.remove('hide')
                    currentScreen = "main_menu"
                }                  
            }
            startitems[currentIndex3].classList.add("select")
        }            
    
        /*캐릭터 생성 창*/
        else if(currentScreen == 'chaScreen'){          
        }
 
    })

        document.getElementById('back_but').addEventListener('click', function(){
                chaScreen.classList.add('hide')
                startScreen.classList.remove('hide')
                currentScreen = "startScreen"
             }); 

    /*스텟 설정*/
            function getRandomNumbers(count, min, max) {
            const randomNumbers = [];
            let sum = 0;
            
            for (let i = 0; i < count; i++) {
                const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                randomNumbers.push(randomNumber);
                sum += randomNumber;
            }
            
            return {randomNumbers, sum};
            }

            /*이름*/
            document.getElementById('ro01').addEventListener('click', function(){          
                let name = document.getElementById("name_set")                     
                document.getElementById('name').textContent = name.value;
            }); 
            /*나이*/
            document.getElementById('ro0').addEventListener('click', function(){          
                let age = document.getElementById("age_set")                     
                document.getElementById('age').textContent = age.value;
            });             

            /*근력*/
            document.getElementById('ro1').addEventListener('click', function(){
                
                const {randomNumbers, sum} = getRandomNumbers(3, 1, 6);
                const str = sum * 5
                console.log(randomNumbers)
                console.log(str)               

                document.getElementById('str').textContent = str; 
                if(0 <= str && str < 15){
                    document.getElementById('str1').textContent = "일어서거나 물잔을 들 수도 없습니다.";
                }
                else if(15 <= str && str < 50){
                    document.getElementById('str1').textContent = "연약.";
                }
                else if(50 <= str && str < 90){
                    document.getElementById('str1').textContent = "평균적인 인간의 근력.";
                }         
                else if(90 <= str && str < 99){
                    document.getElementById('str1').textContent = "평생 만난 사람 중에서 손꼽을 정도로 힘이 셈.";
                }             
                else if(99 <= str && str < 140){
                    document.getElementById('str1').textContent = "세계 최고 수준.";
                }                              
            });
            /*민첩성*/
                document.getElementById('ro2').addEventListener('click', function(){
                const {randomNumbers, sum} = getRandomNumbers(3, 1, 6);
                const spe = sum * 5
                console.log(randomNumbers)
                console.log(spe)               
                document.getElementById('spe').textContent = spe; 
                if(0 <= spe && spe < 15){
                    document.getElementById('spe1').textContent = "도움을 받지 않으면 움직일 수 없습니다.";
                }
                else if(15 <= spe && spe < 50){
                    document.getElementById('spe1').textContent = "느리고 둔하며 섬세한 조작을 할 수 없습니다.";
                }
                else if(50 <= spe && spe < 90){
                    document.getElementById('spe1').textContent = "평균적인 인간의 민첩성.";
                }         
                else if(90 <= spe && spe < 99){
                    document.getElementById('spe1').textContent = "빠르고 민첩하며 섬세한 움직임이 뛰어납니다.";
                }             
                else if(99 <= spe && spe < 120){
                    document.getElementById('spe1').textContent = "세계적인 수준의 운동선수. 인간의 최대치.";
                }                   
            });
            /*지능*/
                document.getElementById('ro3').addEventListener('click', function(){
                const {randomNumbers, sum} = getRandomNumbers(2, 1, 6);
                const int = (sum + 6) * 5
                console.log(randomNumbers)
                console.log(int)               
                document.getElementById('int').textContent = int; 
                if(0 <= int && int < 15){
                    document.getElementById('int1').textContent = "지성 없음. 주변의 세계를 이해할 수 없습니다.";
                }
                else if(15 < int && int < 50){
                    document.getElementById('int1').textContent = "배움이 느림. 기초적인 수준의 수학이나 초급 수준의 독서만 가능합니다.";
                }
                else if(50 <= int && int < 90){
                    document.getElementById('int1').textContent = "평균적인 인간의 지능.";
                }         
                else if(90 < int && int < 99){
                    document.getElementById('int1').textContent = "번뜩이는 재치. 언어나 이론 여러 개를 이해하고 있을 가능성이 큽니다.";
                }             
                else if(99 <= int && int < 140){
                    document.getElementById('int1').textContent = "천재.";
                }                 
            });            
            /*건강*/
                document.getElementById('ro4').addEventListener('click', function(){
                const {randomNumbers, sum} = getRandomNumbers(3, 1, 6);
                const heal = sum * 5
                console.log(randomNumbers)
                console.log(heal)               
                document.getElementById('heal').textContent = heal; 
                if(heal == 0){
                    document.getElementById('heal1').textContent = "사망.";
                }
                else if(1 <= heal && heal < 15){
                    document.getElementById('heal1').textContent = "병약. 오래 병을 앓는 일이 많으며 도움이 없이 생활하지 못할 가능성이 큽니다.";
                }                
                else if(15 <= heal && heal < 50){
                    document.getElementById('heal1').textContent = "불건강. 지병이 발작하거나 고통에 시달리는 일이 많습니다.";
                }
                else if(50 <= heal && heal < 90){
                    document.getElementById('heal1').textContent = "평균적인 건강한 인간.";
                }         
                else if(90 <= heal && heal < 99){
                    document.getElementById('heal1').textContent = "감기에도 잘 걸리지 않고 튼튼하며 활기참.";
                }             
                else if(99 <= heal && heal < 140){
                    document.getElementById('heal1').textContent = "강철 같은 건강. 엄청난 고통을 견딜 수 있습니다. 인간의 최대치.";
                }                
            });            
            /*외모*/
                document.getElementById('ro5').addEventListener('click', function(){
                const {randomNumbers, sum} = getRandomNumbers(3, 1, 6);
                const bea = sum * 5
                console.log(randomNumbers)
                console.log(bea)               
                document.getElementById('bea').textContent = bea;
                if(0 <= bea && bea < 15){
                    document.getElementById('bea1').textContent = "너무나 추악해서 다른 사람들이 두려워하거나, 피하거나, 동정합니다.";
                }
                else if(15 <= bea && bea < 50){
                    document.getElementById('bea1').textContent = "추함, 부상이나 선천적인 문제로 인해 신체가 심하게 훼손되었을 수 있습니다.";
                }
                else if(50 <= bea && bea < 90){
                    document.getElementById('bea1').textContent = "평균적인 인간의 외모.";
                }         
                else if(90 <= bea && bea < 99){
                    document.getElementById('bea1').textContent = "평생 만난 사람 중에서 손곱을 정도로 아름다움, 넘치는 매력.";
                }             
                else if(bea == 99){
                    document.getElementById('bea1').textContent = "미와 멋의 정점. 인간의 최대치.";
                }                 
                else if(bea > 99){
                    bea = 99;
                }

            });
            /*정신력*/ /*이성*/ /*마력*/
                document.getElementById('ro6').addEventListener('click', function(){
                const {randomNumbers, sum} = getRandomNumbers(3, 1, 6);
                const sin = sum * 5
                console.log(randomNumbers)
                console.log(sin)               
                document.getElementById('sin').textContent = sin; 
                if(0 <= sin && sin < 15){
                    document.getElementById('sin1').textContent = "무기력한 정신. 의지력도 마법적인 잠재력도 없음.";
                }
                else if(15 <= sin && sin < 50){
                    document.getElementById('sin1').textContent = "약한 의지력, 지능이 높거나 의지력이 강한 사람에게 쉽게 재배됩니다.";
                }
                else if(50 <= sin && sin < 90){
                    document.getElementById('sin1').textContent = "평균적인 인간.";
                }         
                else if(90 <= sin && sin < 100){
                    document.getElementById('sin1').textContent = "의지가 강하고, 추진력이 있고, 보이지 않거나 마법적인 것과 소통할 수 있는 잠재력이 큽니다.";
                }             
                else if(100 <= sin && sin < 140 ){
                    document.getElementById('sin1').textContent = "강철과 같은 의지력. 영적인 세계나 보이지 않는 세상과의 연결이 강력합니다.";
                }                      
                 document.getElementById('san').textContent = sin;
                  document.getElementById('mana').textContent = sin/5;
            });
            /*크키*/
                document.getElementById('ro7').addEventListener('click', function(){
                const {randomNumbers, sum} = getRandomNumbers(2, 1, 6);
                const size = (sum + 6) * 5
                console.log(randomNumbers)
                console.log(size)               
                document.getElementById('size').textContent = size; 
                if(0 <= size && size < 15){
                    document.getElementById('size1').textContent = "아기.";
                }
                else if(15 <= size && size < 60){
                    document.getElementById('size1').textContent = "어린이, 매우 작은 사람.";
                }
                else if(60 <= size && size < 80){
                    document.getElementById('size1').textContent = "평균적인 인간의 크기.";
                }         
                else if(80 <= size && size < 99){
                    document.getElementById('size1').textContent = "매우 키가 크거나, 근육이 많거나, 비대한 사람";
                }             
                else if(99 <= size && size < 150){
                    document.getElementById('size1').textContent = "어떤 면으로든 심하게 큰 몸집.";
                } 
            });
            /*교육*/
                document.getElementById('ro8').addEventListener('click', function(){
                const {randomNumbers, sum} = getRandomNumbers(2, 1, 6);
                const edu =(sum + 6) * 5
                console.log(randomNumbers)
                console.log(edu)               
                document.getElementById('edu').textContent = edu; 
                if(0 <= edu && edu < 15){
                    document.getElementById('edu1').textContent = "신생아.";
                }
                else if(15 <= edu && edu < 60){
                    document.getElementById('edu1').textContent = "어떤 방식의 교육도 받지 않았음.";
                }
                else if(60 <= edu && edu < 70){
                    document.getElementById('edu1').textContent = "고등학교 졸업.";
                }         
                else if(70 <= edu && edu < 80){
                    document.getElementById('edu1').textContent = "대학교 졸업(학사 학위).";
                }             
                else if(80 <= edu && edu < 90){
                    document.getElementById('edu1').textContent = "대학원(석사학위).";
                }
                else if(90 <= edu && edu < 96){
                    document.getElementById('edu1').textContent = "박사, 교수";
                }
                else if(96 <= edu && edu < 99){
                    document.getElementById('edu1').textContent = "자기 분야에서 세계적인 권위자.";
                }
                else if(edu == 99){
                    document.getElementById('edu1').textContent = "인간의 최대치.";
                }                                
                else if(edu > 99){
                    edu = 99;
                }
            });

            /*운*/
            document.getElementById('ro10').addEventListener('click', function(){
                const {randomNumbers, sum} = getRandomNumbers(3, 1, 6);
                const luck = sum * 5
                console.log(randomNumbers)
                console.log(luck)               
                document.getElementById('luck').textContent = luck;
            });  

            /*이동력*/ 
            function getAbilityValue(elementId) {
                const element = document.getElementById(elementId);
                const text = element.textContent || element.innerText;
                return text.match(/\d+/g) ? parseInt(text.match(/\d+/g)[0]) : 0;
            }
            document.getElementById('ro9').addEventListener('click', function() {
                const str2 = getAbilityValue('str');
                const spe2 = getAbilityValue('spe');
                const size2 = getAbilityValue('size');
                const age = getAbilityValue('age');
                
                let move = 0;
                if (spe2 < size2 && str2 < size2)
                    {
                    move = 7;
                    }
                    else if ((spe2 == size2 && size2 == str2) || str2 >= size2 && spe2 < size2 || spe2 >= size2 && str2 < size2)
                        {
                    move = 8;
                    }
                    else if (spe2 > size2 && str2 > size2)
                        {
                            move = 9;
                        }
                            if (age >= 40 && age < 50) move -= 1;
                            else if (age >= 50 && age < 60) move -= 2;
                            else if (age >= 60 && age < 70) move -= 3;
                            else if (age >= 70 && age < 80) move -= 4;
                            else if (age >= 80) move -= 5;
                document.getElementById('move').textContent = move;
            });    

            /*체력*/
            function getAbilityValue(elementId) {
                const element = document.getElementById(elementId);
                const text = element.textContent || element.innerText;
                return text.match(/\d+/g) ? parseInt(text.match(/\d+/g)[0]) : 0;
            }
            document.getElementById('ro02').addEventListener('click', function() {
                const size2 = getAbilityValue('size');
                const heal2 = getAbilityValue('heal');
                let health = 0;
                health = size2 + heal2;

                document.getElementById('health').textContent = health / 10;
            });

        
        document.getElementById('tuto').addEventListener('click', function(){
                 tutori.classList.remove('hide')                
        });
            

        }

        /* 가능한 선에서 최대한 더 작업해보기(시나리오 작성해서 최대한 구현시도하기)*/