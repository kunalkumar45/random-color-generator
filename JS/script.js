const randomCode = ()=>{
    const randomNum = Math.floor(Math.random()*16777215);
    const hexCode ="#"+randomNum.toString(16);
    document.body.style.backgroundColor = hexCode;
    document.getElementById("color-code").innerText=hexCode;

    // auto copy color code
    navigator.clipboard.writeText(hexCode); 

};

// event call
document.getElementById("btn").addEventListener("click", randomCode);

// int call
randomCode();