// const wrap = (line, maxLen) => {
//     let outputStr =''
//     while (line) {
//         outputStr += line.slice(0,maxLen) + '\n';
//         line = line.slice(maxLen)
//     }
//     return outputStr.slice(0, outputStr.length-1);
// };
const wrap = (line, maxLen) => {
    let outputStr = ''
    //while (line) {
      if (line.charAt(maxLen) !== ' ') {
        let newMaxLen = line.lastIndexOf(' ', maxLen)
        console.log(line.charAt(maxLen))
        
          outputStr += line.slice(0, newMaxLen+1) + '\n';
          line = line.slice(newMaxLen)
      }
       else if (line.charAt(maxLen) === ' ') {
        outputStr += line.slice(0,maxLen+1) + '\n';
        line = line.slice(maxLen)
      }
      else
      return 'hi'
    //}
    return outputStr.slice(0, outputStr.length-1);
};

module.exports = wrap;