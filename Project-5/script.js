// const inputElement = document.getElementById("input");

// const buttonElement =document.getElementById("adbutton");

// function add() {

//  console.log('jay');

// display
// }



const arrNum = [2,4,1,9,3,8];

function triple(x){
        return x*3;
}

const output = arrNum.map(triple);

console.log(output);

function findsum(arrNum){
  let sum =0;
  for(let i=0;i<arrNum.length;i++){
        sum =sum +arrNum[i];

  }
  return sum;
}

console.log(findsum(arrNum));



