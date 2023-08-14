const jokes= document.querySelector('#jokes');
const button= document.querySelector('button');


const addJokes = async () =>{
    const getjokes=await joke();
    const newLI =document.createElement('LI');
    newLI.append(getjokes);
    jokes.append(newLI);

}

const joke = async () => {
    try{
        const config={ headers:{ Accept: 'application/json'}}
        const res = await axios.get("https://icanhazdadjoke.com/",config);
        return res.data.joke;

    }catch(e){
        return "NO JOKES AVAILIABLE !!!";
    }
   

}
button.addEventListener('click',addJokes)
