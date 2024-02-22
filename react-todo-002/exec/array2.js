const array1 = [1, 2, 3];
console.log(array1);
/*
배열복사1: 얕은 복사
실제 데이터가 복사되는 것이 아니고, 배열이 저장된 주소만 복사된다
결국 array1과 array2는 같은곳을 바라보는 배열이 된다
한곳의 배열요소 값을 변경하면 다른곳의 값도 같이 변경된다

*/
const array2 = array1;
console.log(array2);

array2[2] = 100;
console.log(array1);

// 배열복사 2 : 깊은복사
// 배열의 각각의 요소를 별도로 추출하여 새로운 배열 요소에 합치기

const array3 = [];
array1.forEach((item) => array3.push(item));
console.log("array3", array3);
array3[2] = 0;
console.log("array1", array1);

// 배열복사 3 : spread 연산자를 사용한 배욜의 깊은 복사
// 1. array1의 각 요소 값을 넓게 펼친다
// 2. 각 요소를 한개씩 추출하여 별도의 배열로 생성한다
array4 = [...array1];
// 기존 배욜에 값 추가하기
array4.push(33);

// 기존 배열을 복사하면서 새로운 값을 추가하기
const array5 = array4.map((item) => item);

// 새로 생성한 array5에 새로운 요소 추가하기

array5.push(30);
array5.push(40);
array5.push(50);

const array6 = [...array4, 30, 40, 50];
