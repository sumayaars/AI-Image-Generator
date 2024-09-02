const generateButton=document.getElementById("generate-btn");
const API_KEY="0e38220cfecf810802e5a1c7bb194916";

async function imageGenarator(){
const userInput=document.getElementById("inputText").value;
const imageTag=document.createElement("img");
const imageArea=document.getElementById("imageShow");
console.log(userInput);

const data = {
  id: "clgh1vxtu0011mo081dplq3xs",
  inputs: userInput,
};
inputText.value="";
// if we want to add loading message as text
// const loadingMessage=document.createElement("p");
// loadingMessage.textContent="loading..."
// imageArea.appendChild(loadingMessage);

// add loading meassage as gif
const loadingMessage= `<img 
        class="web-logo" 
         src="icons8-loading.gif" 
         />`;

imageArea.innerHTML=loadingMessage;
        
const response = await fetch('https://simple-api.glif.app',
  {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});
const result = await response.json();
// imageArea.removeChild(loadingMessage);
imageArea.innerHTML="";
imageTag.setAttribute("src",result.output);
imageArea.appendChild(imageTag);

}

generateButton.addEventListener('click',imageGenarator);