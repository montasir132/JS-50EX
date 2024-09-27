//ex1
function textChange(){
    document.getElementById('tc').innerHTML="wellcome to my home";
}
// ex2
function showDate(){
    document.getElementById('sd').innerHTML=Date();
}
// ex3
function bulbon(){
    document.getElementById('bulb').src='images/pic_bulbon.gif';
}
function bulboff(){
    document.getElementById('bulb').src='images/pic_bulboff.gif';
}
// ex4
function changeCss(){
    document.getElementById('css').style.color='red';
}
// ex5
function textShow(){
    document.getElementById('txh').style.display="block";
}
function textHide(){
    document.getElementById('txh').style.display='none';
}
//ex6
function textShow1(){
    document.getElementById('show').innerHTML='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis nisi praesentium laborum sunt accusantium vitae sapiente nemo animi, voluptatibus similique obcaecati excepturi dolorem dolor quo a. Laborum pariatur similique dolore!';
}
// ex7
function demoResult1(){
    document.getElementById('cr1').innerHTML=2070+9-37;
}
// ex8
function demoResult2(){
    document.getElementById('cr2').innerHTML=(2070+9-370)*790/3;
}
// ex9
function demoResult4(){
    window.alert(2070+9)
}
// ex10
function demoResult3(){
    alert(2070+9*2)
}
// 11
function demoresult5(){
    console.log(685-5+863)
}
// 12
function demoResult6(){ 
    window.print()
}
// 13
function demoResult7(){
    document.getElementById('js_num').innerHTML='50.4';
}
// 14
function demoResult8(){
    let x, y;
    x=270
    y=90
    document.getElementById('xy1').innerHTML=x + y;
}
// 15
function demoResult9(){
    let x, y, z;
    x=270
    y=90
    z=9
    document.getElementById('xyz1').innerHTML=(x + y)*z;
}
// 16
function demoResult10(){
    let lastname, lastName;
    lastName = "Doe";
    lastname = "Peterson";
    document.getElementById("last-name").innerHTML = lastName;
}
// 17
function demoResult11(){
    let x, y;
    x=2070
    y=x+9
    document.getElementById("xy2").innerHTML = y;
}
// 18
function demoResult12(){
    let x, y;
    x=2070
    y=9
    z=x-y
    document.getElementById("xyz2").innerHTML = "The value of z is: " + z;
}
// 19
function demoResult13(){
    const pi = 2.65;
    let name="montasir alam";
    let answer="your name  is John Doe na?";
    document.getElementById("quotes").innerHTML = pi + "<br>" + name + "<br>" + answer;;
}
// 20
function Flow() {
    document.getElementById("textr8").style.direction = "rtl";
}
// 21
function bshow(){
	document.getElementById('boder').style.border='5px dashed pink';
}

function bhide(){
	document.getElementById('boder').style.border= 'none';
}
// 22
function promptBox() {
    let text;
    let person = prompt("Please enter your name:", "Montasir Alam");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("prmt_box").innerHTML = text;
}
//example23
function showAlert3(){
	window.alert(" previous template is not supported in Internet Explorer!!");
}

//example24

let text7 = "John Doe";

function showEnd(){
document.getElementById("send").innerHTML = text7.endsWith("Doe");

}

//example25
let text8 = `Hello world!`;
function showTem(){
document.getElementById("stem").innerHTML = text8;


}

//example26
function showAlert4(){
	window.alert(" previous template is not supported in Internet Explorer!!");
}

//example27
let text9 =

`The quick
brown fox
jumps over
the lazy dog`;
	

function showMulti(){
document.getElementById("smul").innerHTML = text9;
}
//example28
function showAlert5(){
	window.alert(" previous template is not supported in Internet Explorer!!");
}
//example29
let price = 10;
let VAT = 0.25;
let total1 = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

function showVari(){
document.getElementById("svari").innerHTML = total1;


}
//example30
function showAlert6(){
	window.alert(" previous template is not supported in Internet Explorer!!");
}

//example31
let x1 = 3.14;
let y1 = 3;
function showDeci(){
document.getElementById("sdeci").innerHTML = x1 + "<br>" + y1;

}
//example32
let x2 = 123e5;
let y2 = 123e-5;
function showSci(){
document.getElementById("sci").innerHTML = x2 + "<br>" + y2;


}

//example33
let x3 = 0.2 + 0.1;
function showFloat(){
document.getElementById("sfloat").innerHTML = "0.2 + 0.1 = " + x3;


}
//example34
function showAlert7(){
	window.alert(" Floating point arithmetic is not always 100% accurate!!");
}
//example35
let x4 = 999999999999999;
let y4 = 9999999999999999;
function showInteger(){
document.getElementById("sinte").innerHTML = x4 + "<br>" + y4;


}

//example36
let x5 = 9007199254740995n;
let y5 = 9007199254740995n;
let z = x5 * y5;
function showBmulti(){
document.getElementById("sbmulti").innerHTML = z; 


}

//example37

let x6 = 5n;
let y6 = Number(x6) / 2;
function showBdivide(){
document.getElementById("sbdivi").innerHTML = y6; 	



}

//example38
let x7 = 6;
function showNumpro(){
document.getElementById("snumpro").innerHTML = x7.MAX_VALUE;


}
//example39

let x8 = Number.MIN_VALUE;
function showMin(){
document.getElementById("smin").innerHTML = x8;

}

//example40
let x9 = Number.POSITIVE_INFINITY;
function showPos(){
document.getElementById("spos").innerHTML = x9;



}
//example41
let x10 = Number.NEGATIVE_INFINITY;
function showNeg(){
document.getElementById("sneg").innerHTML = x10;


}

//example42
const cars1 = ["Saab", "Volvo", "BMW"];

function showArray(){
document.getElementById("sarr").innerHTML = cars1;


}
//example43
const fruits = ["Banana", "Orange", "Apple", "Mango"];

function showTsring(){
document.getElementById("stsring").innerHTML = fruits.toString();


}
//example44
const person = ["John", "Doe", 46];
function showAnum(){
document.getElementById("sanum").innerHTML = person[0];



}
//example45
const person1 = {firstName:"John", lastName:"Doe", age:46};
function showNacc(){
document.getElementById("snacc").innerHTML = person1.firstName;



}

//example46
function showBool(){
document.getElementById("sbool").innerHTML = Boolean(10 > 9);



}
//example47
let x11 = 0;
function showBoold(){
document.getElementById("sboold").innerHTML = Boolean(x11);

}

//example48
let x12 = 5;
function showComp(){
document.getElementById("scomp").innerHTML = (x12 >= 8);



}
//example49
let x13 = 5;
function showCompa(){

document.getElementById("scompa").innerHTML = (x13 != 8);

}
//example50
let x14 = 6;
function showCompar(){

document.getElementById("scompar").innerHTML = (x14 != 8); 

}