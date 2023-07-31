
const paragraph = document.querySelector('#myParagraph');
const myCloud = document.querySelector('#myWordCloud');

let myParagraph = paragraph.innerHTML;
let splited = myParagraph.split(' ');

function arrToObj(arr) {
    let obj = {};
    let element;
    for(let i=0; i<arr.length; i++) {
        element = arr[i]
        obj[element] = (obj[element] || 0) + 1;
    }
    return obj;
}
function newParagraph() {
    const newObj = arrToObj(splited);
    const newArr = Object.entries(newObj);
    const sortedArr = newArr.sort((a, b) => b[1] - a[1]);
    const result = sortedArr.slice(1, 13);
    console.log(result)
    const newResult = result.map(item=>item[0]);
  
    let fontSize = 64;
  
    for(let i =0; i<newResult.length; i++){
    //   newResult[i] = `<span style="font-size:${fontSize}px">${newResult[i]}</span>`
      fontSize -= 4
    }
    
    myCloud.innerHTML = newResult.join(" ");
    
    
  }
  newParagraph();



