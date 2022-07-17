console.log("hello");
// alert("the");
const inputs=document.querySelectorAll('.controls input');

function hu(){
    // console.log(this.value); 
    //  console.log(this.dataset);
    // let suffix="";
    // if(this.dataset.sizing)
    //     suffix=this.dataset.sizing;
    const suffix =this.dataset.sizing || '';
    console.log(suffix+this.name);
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix); 
}
console.log("dfghjk");
console.log(inputs);
inputs.forEach(input => input .addEventListener('input',hu));