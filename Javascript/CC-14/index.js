const arr = [10, 5, 2, 7, 8, 7];
let k = 3;
for (let i = 0; i < arr.length; i++) {
  const tempArr = arr.slice(i, k++);
  if (tempArr.length === 3) {
    const result = tempArr.reduce((acc, num) => Math.max(acc, num), 0);
    console.log(result);
  }
}
