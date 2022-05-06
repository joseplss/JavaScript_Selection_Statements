console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1

let n = Math.floor(Math.random() * 11);
console.log(n);
let userInput = prompt(`Please enter a number:`);
if (userInput < n){
    alert(`Too low`);
}
else if (userInput > n){
    alert(`Too high`);
}
else{
    alert(`Congratulations!!!`);
    
}

// Exercise 2
let userInput2 = 'window.prompt=(“How mnay fingers am i holding?”[1-5])';
switch(userInput2){
    case '1':
        console.log('Am I holding 1? you dont know...');
        break;
    case '2':
        console.log('two? peace to the world man!');
        break;
    case '3':
        console.log('three? if i turn it upside down, its an M!');
        break;
    case '4':
        console.log('four? you are really close!');
        break;
    case '5':
        console.log('Damn youre good...');
}