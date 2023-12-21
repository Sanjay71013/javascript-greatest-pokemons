// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(data)
{
   const fire=data.filter((pok)=> pok.type.includes("Fire"))
   return fire
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(data)
{
    let name=0
    let height=null
    data.forEach((pok)=>{
        let hg=parseFloat(pok.height.slice(0,pok.height.indexOf(' '))) 
        if(height==null||hg<height)
        {
            height=hg 
            name=pok.name 
        }
    })
    return name
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(data)
{
    if(data.length==0)
       return 0;
    let avg=0;
    avg=data.reduce((acc,pok)=> {
        if(pok.hasOwnProperty('candy_count'))
           return acc+pok.candy_count
        else 
           return acc 
    },0)/data.length
    return parseFloat((avg).toFixed(2))
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(data)
{
    if(data.length==0)
      return 0
    const groundPoks=data.filter((pok)=> pok.type.includes('Ground'))
    const img=[]
    const arr=groundPoks.map((pok)=> pok.img).slice(0,10)
    return arr
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(data)
{
    if(data.length==0)
       return 0
    let pikachu = 0
    data.forEach((pok)=>{
        if(pok.name=="Pikachu")
        {
            pikachu=pok.weight 
            return;
        }
    })
    pikachu=parseFloat(pikachu.slice(0,pikachu.indexOf(' ')))
    const heavy=data.filter((pok)=> {
        let wg=pok.weight
        wg=parseFloat(wg.slice(0,wg.indexOf(' ')))
        if(wg>pikachu)
           return true
    })
    return heavy.map((pok)=> pok.name)
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(data)
{
    const clone=JSON.parse(JSON.stringify(data)).sort((a,b)=> {
        if(a.name>b.name)
          return 1
        else 
          return -1
    });
    return clone.map((pok)=> pok.name).slice(0,20)
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(data)
{
    const weak=data.filter((pok)=> {
        if(pok.hasOwnProperty('weaknesses'))
          return pok.weaknesses.length==1
    })
    return weak.map((pok)=> pok.name).slice(0,15)
}
