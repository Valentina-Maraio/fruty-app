console.log("Ciao Valentina");

//axios call    ORIGINALE
axios({
    method: "GET",
    url: 'https://www.fruityvice.com/api/fruit/all'
})
.then(res => {
    const fruitBox = document.createElement('div'); 
    fruitBox.style.cssText = 
    `background-color: lightgreen;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 370px;
    margin: auto;
    padding: 20px;
    flex-wrap: wrap;`;
    document.body.appendChild(fruitBox);

    const fruitRes = document.createElement('div'); 
    fruitRes.style.cssText = 
    `margin-bottom: 30px;`;
    fruitBox.appendChild(fruitRes);

    const fruitName = document.getElementById('fruitName'); 
    fruitName.style.cssText = 
    `font-size: 30px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 300;`;
    fruitRes.appendChild(fruitName)

    const fruitFamily = document.getElementById('fruitFamily'); 
    fruitFamily.style.cssText = 
    `font-size: 20px;
    line-height: 50px;
    font-weight: 300;
    text-align: center;`;
    fruitRes.appendChild(fruitFamily);

    //specifiche nutrizione
    const carbs = document.createElement('p');
    carbs.style.cssText = 
        `color: black;`
    fruitRes.appendChild(carbs);

    const prot = document.createElement('p')
    prot.style.cssText = 
        `color: black;`
    fruitRes.appendChild(prot);

    const fat = document.createElement('p')
    fat.style.cssText = 
        `color: black;`
    fruitRes.appendChild(fat);

    const cal = document.createElement('p')
    cal.style.cssText = 
        `color: black;`
    fruitRes.appendChild(cal);

    const sugar = document.createElement('p')
    sugar.style.cssText = 
        `color: black;`
    fruitRes.appendChild(sugar);

    const fruitForm = document.createElement('form'); 
    fruitForm.style.cssText = 
    ``;
    fruitBox.appendChild(fruitForm);

    fruitInput = document.getElementById('fruty'); 
    fruitInput.style.cssText = 
    `border-radius: 30px;
    border: solid 0px;
    width: 100%; 
    margin-bottom: 10px;
    padding: 10px 0px;
    text-align: center;
    outline: none;`;
    fruitBox.appendChild(fruitInput);

    fruitBtn = document.createElement('button'); 
    fruitBtn.innerHTML = "GO";
    fruitBtn.id = "fruitBtn"
    fruitBtn.style.cssText = 
    `border-radius: 30px;
    width: 100%;
    background-color: orange;
    color: black;
    border: none;
    padding: 10px 0px;
    cursor: pointer;
    outline: none;`;
    fruitBox.appendChild(fruitBtn);

    function frutyFinder() {
        let fruitAPI = `https://www.fruityvice.com/api/fruit/` + fruty.value;

        axios(fruitAPI)
        .then(res => {
            fruitName.innerHTML = fruty.value;
            fruitFamily.innerHTML = "Family: " + res.data.family;
            carbs.innerHTML = "Carbs: " + res.data.nutritions.carbohydrates;
            prot.innerHTML = "Protein: " + res.data.nutritions.protein;
            fat.innerHTML = "Fat: " + res.data.nutritions.fat;
            cal.innerHTML = "Calories: " + res.data.nutritions.calories;
            sugar.innerHTML = "Sugar: " + res.data.nutritions.sugar;
        })
        .catch(e => alert("It does not exist"))
    }

    document.getElementById('fruitBtn').addEventListener("click", frutyFinder);


    const wrapper = document.createElement('div');
    wrapper.id = "wrapper"
    wrapper.style.cssText = 
            `width: auto;
            padding-top: 50px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;`;
    document.body.appendChild(wrapper)
     
    for (const fruit of res.data){
        const box = document.createElement('div');
        box.id = `${fruit.name}`
        box.style.cssText =
            `color: black !important;
            background-color: lightgreen;
            width: 200px;
            height: 300px;
            text-align: center;
            border-radius: 10px;
            padding: 10px;
            
            justify-content: center
            display: grid;
            grid-gap: 2em;
            margin: 10px;
            border: 1px solid black;`
        wrapper.appendChild(box);
    
        const title = document.createElement('h3');
        title.textContent = `Name: ${fruit.name}`
        title.style.cssText = 
            `color: black;`
        box.appendChild(title);
    
        const family = document.createElement('h5');
        family.textContent = `Family: ${fruit.family}`
        box.appendChild(family);

        //info button
        const btn = document.createElement('button');
        btn.innerText = "INFO";
        btn.style.cssText = 
        `border-radius: 30px;
        width: 100%;
        background-color: orange;
        color: black;
        border: none;
        padding: 5px 0px;
        cursor: pointer;
        outline: none;`;
        btn.value = "moreInfo"
        btn.id = "infoButton"

        btn.onclick = function (){

            const carbs = document.createElement('p');
            carbs.innerHTML = `Carbs: ${fruit.nutritions.carbohydrates}`
            carbs.style.cssText = 
                `color: black;`
            box.appendChild(carbs);

            const prot = document.createElement('p')
            prot.innerHTML = `Protein: ${fruit.nutritions.protein}`
            prot.style.cssText = 
                `color: black;`
            box.appendChild(prot);

            const fat = document.createElement('p')
            fat.innerHTML = `Fat: ${fruit.nutritions.fat}`
            fat.style.cssText = 
                `color: black;`
            box.appendChild(fat);

            const cal = document.createElement('p')
            cal.innerHTML = `Calories: ${fruit.nutritions.calories}`
            cal.style.cssText = 
                `color: black;`
            box.appendChild(cal);

            const sugar = document.createElement('p')
            sugar.innerHTML = `Sugar: ${fruit.nutritions.sugar}`
            sugar.style.cssText = 
                `color: black;`
            box.appendChild(sugar);
        };
        box.appendChild(btn)
    }
})
.catch (e => console.log(e));

