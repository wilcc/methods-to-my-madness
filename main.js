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
  else if(para === undefined && para2 === undefined)
      {for(let i = 0; i< str.length;i++){
        result += str[i]
      }
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
function split(string,separator){
  const array = []
  if (separator===undefined){
  array.push(string)}
  else {
  for (let i =0; i<string.length;i++){
    array.push(string.substring(0,string.indexOf(separator)))
    array.push(string.substring(string.indexOf(separator)+1,string.length))}
}
return array
}

function trimStart(str){
  
  for (let i = 0;i < str.length;i++){
    if (str[i] !==' ')
    {return str.slice(i)}
  }
return ''
}
//     if (str[i] ===' '){
//     {newStr += str[i]}


//     }
//   }
// }

function trimEnd(str){
  
  for (let i =str.length;i >=0;i--){
    if (str[i] !==' ')
    {return str.slice(0,i)}
  else return ''
  }
  
}
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
