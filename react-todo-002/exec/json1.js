const json1 = { seq: 1, name: "홍길동" };
console.log(json1);

const json2 = { ...json1, name: "이몽룡" };
console.log(json2);

const json3 = { ...json1, age: 33 };

console.log(json3);
// 객체의 구조분해 (객체와 각요소를 분해해여 별도의 변수로 생성하기)
// const seq= json3.seq
// const name= json3,name
// const age= json3.age

const [seq, name, age] = json3;
