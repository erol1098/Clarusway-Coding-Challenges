const example = "   ( [(){})] )  {  }";
const openers = ["(", "{", "["];
const closers = [")", "}", "]"];
const temp = example.split("").filter((char) => char !== " ");

const check = (temp) => {
  if (temp.length % 2 === 1) return false;
  if (temp.length === 0) return true;
  if (closers.includes(temp[0])) return false;
  if (openers.indexOf(temp[0]) === closers.indexOf(temp[1]))
    return check(temp.slice(2));
  for (let i = 0; i < temp.length; i++) {
    if (openers.indexOf(temp[i]) === closers.indexOf(temp[i + 1])) {
      temp.splice(i, 2);
      return check(temp);
    }
  }
  return false;
};

console.log(check(temp));
