const utils = require(`./utils`)


let textFile = utils.readFileContent(`./data/file.txt`);
textFile = `${textFile}`
console.log(textFile);

//1
// console.log(textFile);


// fs.readFile(`data/file.txt`, `utf-8`, function (err, data) {
//     if (err) throw err;
//     const words = lodash.words(data)
//     const reverse = lodash.reverse(words)
//     console.log(lodash.join(reverse));
// })

// fs.readFile(`data/file.txt`, `utf-8`, function (err, data) {
//     if (err) throw err;
//     const words = lodash.words(data)
//     console.log(lodash.uniq(words));
// })

// fs.readFile(`data/file.txt`, `utf-8`, function (err, data) {
//     if (err) throw err;
//     const words = lodash.words(data)
//     console.log(lodash.uniq(words).length);
// })

// fs.readFile(`data/file.txt`, `utf-8`, function (err, data) {
//     if (err) throw err;
//     const words = lodash.words(data)
//     const uniq = lodash.uniq(words)
//     console.log(lodash.upperCase(uniq));
// })

// fs.readFile(`data/file.txt`, `utf-8`, function (err, data) {
//   if (err) throw err;
//   const words = lodash.words(data);
//   const uniq = lodash.uniq(words);
//   const five = uniq.filter((word) => word.length > 5);
//   console.log(five);
// });

// fs.readFile(`data/file.txt`, `utf-8`, function (err, data) {
//   if (err) throw err;
//   const words = lodash.words(data);
//   const uniq = lodash.uniq(words);
//   uniq.forEach(() => {
//     let count = 0;
//     console.log(element);
//     if (element.includes(`a` || `e` || `i` || `o` || `u`)){
//       count++;
//       console.log(count);
//     }
//   });
// });
