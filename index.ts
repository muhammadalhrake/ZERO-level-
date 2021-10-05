// Import stylesheets
import './style.css';
const firstArr =[1,2,3,4,5]
const secondArr=[5,6,7,8,9]
 
interface ZERO{
  first:number[],
  second:number[]
}
const  equalTen=(firstArr,secondArr)=>{
  const first=shuffle(firstArr);
  const second=shuffle(secondArr);
  return{
    first,
    second
  }as ZERO
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


console.log(equalTen(firstArr,secondArr).second);

// Used like so
/* var arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr); */

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;