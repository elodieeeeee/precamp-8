if(1+1 === 2){
    console.log("정답입니다!!!")
} else {
    console.log("오답입니다!!!")
}
// VM552:2 정답입니다!!!
// undefined
if(true){
    console.log("정답입니다!!!")
} else {
    console.log("오답입니다!!!")
}
// VM628:2 정답입니다!!!
// undefined
if(1+1 === 3){
    console.log("정답입니다!!!")
} else {
    console.log("오답입니다!!!")
// }
// VM672:4 오답입니다!!!
// undefined
if(1+1 === 3){
    console.log("정답입니다!!!")
}
// undefined
let age = 13
// undefined
age

// 13
if(age >= 20){
    console.log("성인입니다!!")
} else if(age >= 8){
    console.log("학생입니다!!")
} else {
    console.log("어린이입니다!!!")
}
// VM1165:4 학생입니다!!
// undefined
age = 6
// 6
if(age >= 20){
    console.log("성인입니다!!")
} else if(age >= 8){
    console.log("학생입니다!!")
} else {
    console.log("어린이입니다!!!")
}
// VM1270:6 어린이입니다!!!
// undefined
const profile = {
    name: "철수",
    age: 7,
    school: "다람쥐초등학교"
}
// undefined
profile.name
// '철수'
profile.age
// 7

profile.age=12
// 12
if (profile.age>=20) {
console.log("성인입니다")
} else if (profile.age>=8) {
console.log("학생입니다") 
} else {console.log("어린이입니다")
       }
// VM2341:4 학생입니다
// undefined