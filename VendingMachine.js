let fillEvent = [
  [0,5],
];

let checkEvent = [
  [1,2],
  [0,3]
];

checkEvent.sort((a, b) => {
console.log("a = " + a);
console.log("b = " + b);
console.log("a - b = " + (a[0] - b[0]));
  return a[0] - b[0];
})

let days = checkEvent.length;
let daysFilling = [];


for (i=0; i < checkEvent.length; i++) {
  let day = i;

  let fill = 0;

  for (j=0; j < fillEvent.length; j++) {
    if (day === fillEvent[j][0]) {
      fill = fillEvent[j][1]
    }
  }

  daysFilling.push(fill);
}

let c_1 = 0;

for(i = 0; i < checkEvent.length; i++) {

  // Today
  let c = checkEvent[i][1];
  let f = daysFilling[i];

  let s = c_1 + f - c;

  console.log(s);

  c_1 = c;

}
