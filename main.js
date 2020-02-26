/******************
 * YOUR CODE HERE *
 ******************/
function slice(str,para,para2){
  let result = ''
    if(para>= 0 && para2 === undefined){
      for (let i=para; i < str.length;i++){
        result += str[i]
      }
    }
    else if(para >= 0) {
      for (let i = para; i < para2; i++){
        result += str[i]
    }}
    else {result = str
  }return result
}

function repeat(str,num){
  let result = ''
  for (let i = 0; i < num;i++){
  result += str
  }
  return result
}

function startsWith(str,letter){
  if (letter.length === 1){
  for (let i = 0; i < str.length; i++){
    if (str[0]===letter){return true}}}
  if (letter.length > 1){
    let string =''
    let ltr =''
  for (let i = 0; i < letter.length;i++){
    string += str[i]
    ltr += letter[i]}
    {if(string === ltr)
      {return true}
    }return false
  }
  else return false
}
function endsWith(str,letter){
  if (letter.length === 1){
    for (let i = 0; i < str.length; i++){
      if (str[str.length-1]===letter)
      {return true}}}
      if (letter.length > 1){
        let string =''
        if (str===letter){
          return true
        }
      for (let i =(str.length) - (letter.length); i < str.length ;i++){
        string += str[i]}
        
        {if(string === letter)
          {return true}
        }
      }return false
}

endsWith('hello','llo')


function includes(array,str){
  for (let i = 0; i < array.length; i++){
    if (array[i]=== str){
      return true
    }
  }return false

}

function join(array,separator=''){
  let string = ''
  
    for (let i = 0; i < array.length;i++){
    if (i===array.length-1){
    string+=array[i]
    }
    else{
    string += array[i] + separator}
  }
  return string
}
function split(str, separator) {
  let arr = [];
  let restartIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === separator) {
      arr.push(slice(str,restartIndex, i));
      restartIndex = i + 1;
    }
  }

  arr.push(slice(str,restartIndex));

  return arr;
}
// function split(string,separator){
//   const array = []
//   let str = ''
//   if (separator===undefined){
//   array.push(string)}
//   else {
//     for(let i = 0; i <string.length;i++)
//     {if(string[i]===separator)
//     array.push(str)

//   }
// return array
// }

//   else {
//     let str = ''
//     let separator = false
//   for (let i =0; i<string.length;i++){
//     if(string[i] !== separator && separator ===true)
    
//     str += string[i]
//     array.push(str)
// if(string[i]===separator)
// separator === true
      // {array.push(string[i])}}
  // {  array.push(string.substring(0,string.indexOf(separator)))
    // array.push(string.substring(string.indexOf(separator)+1,string.length))
  // }
// }}

  function trimStart(str){
  
    for (let i = 0;i < str.length;i++){
      if (str[i] !==' ')
      {return slice(str,i,str.length)}
    }
  return ''
  }


  // let result = ''
  // // let notSpace = false
  // for (let i = 0;i < str.length;i++){
  
  //   if (str[i] !==' ')
  //   {notSpace === true
  //   for (let i = 0; i < str.length;i++)
  //   // if (notSpace === true)
  //     {result+=str[i]
  //     notSpace === true}
  //     return result}}
  //     // else result+= str[i]
  //     return ''
  //   }
    
//     if (str[i] ===' '){
//     {newStr += str[i]}


//     }
//   }
// }

function trimEnd(str){
let reverseStr = str.split('').reverse().join('')
// let slicedVersion = ''
// let finishedVersion = ''
// console.log(reverseStr)
for (let i = 0;i < reverseStr.length;i++){
  if (reverseStr[i] !==' ')
  {return slice(reverseStr,i,reverseStr.length).split('').reverse().join('')}
  // console.log(slicedVersion)
  // finishedVersion = slicedVersion.split('').reverse().join('')

}
return ''
}
trimEnd('   what')

  // let space = true
  // for (let i =str.length;i >=0;i--){
  //   if (str[i] !==' ')
  //   {return str.slice(0,i)}
  // else return ''
  // }
  
// }
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
