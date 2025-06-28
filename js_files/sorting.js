
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById('arr_sz');
    const slider2 = document.getElementById('speed_input');

    function updateSliderGradient(slider) {
        const valPercent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = `linear-gradient(to right, #3936ff, #ca0cc7 ${valPercent}%, #000 ${valPercent}%)`;
    }

    slider.addEventListener('input', () => updateSliderGradient(slider));
    slider2.addEventListener('input', () => updateSliderGradient(slider2));

    updateSliderGradient(slider); // Initialize on load
    updateSliderGradient(slider2); // Initialize on load
    createNewArray();
});



function swap(ele1,ele2){
    let temp=ele1.style.height;
    ele1.style.height=ele2.style.height
    ele2.style.height=temp
}

function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled=true
    // document.querySelector(".bubbleSort").innerText="Sorting..."

    document.querySelector(".insertionSort").disabled=true
    document.querySelector(".mergeSort").disabled=true
    document.querySelector(".quickSort").disabled=true
    document.querySelector(".selectionSort").disabled=true
}
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled=false
    // document.querySelector(".bubbleSort").innerText="Sorted"
    // document.querySelector(".bubbleSort").classList.add("sorted");
    // document.querySelector(".bubbleSort").style.background='linear-gradient(to top,rgb(54, 255, 94),rgb(2, 64, 40));'

    document.querySelector(".insertionSort").disabled=false
    document.querySelector(".mergeSort").disabled=false
    document.querySelector(".quickSort").disabled=false
    document.querySelector(".selectionSort").disabled=false
}


function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled=false
}
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled=true
}

function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled=true
}
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled=false
}

//speed
function waitforme(millisec){
    return new Promise(resolve => {

   setTimeout(()=>{
       resolve("")
   },millisec);

  })
  
}

let arraySize=document.querySelector("#arr_sz")

arraySize.addEventListener("input",function(){
    console.log(arraySize.value,typeof(arraySize.value))
    createNewArray(parseInt(arraySize.value))
})

let delay=260

let delayElement=document.querySelector("#speed_input")

delayElement.addEventListener("input",function(){
    delay=parseInt(delayElement.value)
})



let array=[]

function createNewArray(noofbars=30){
    deleteChild()
    array=[]
    for(let i=0;i<noofbars;i++){
        array.push(Math.floor(Math.random()*250)+1);
    }
    console.log(array)
    const bars=document.querySelector("#bars")
    for(let i=0;i<noofbars;i++){
       const bar=document.createElement("div")
       bar.style.height = `${array[i]*2}px`;
       bar.classList.add('bar')
       bar.classList.add('flex-item')
       bar.classList.add(`barno${i}`)
       bars.appendChild(bar)
    }
}
function deleteChild(){
    const bars=document.querySelector("#bars")
    bars.innerHTML=""
}
function resetnaming(){
    document.querySelector(".bubbleSort").innerText="BubbleSort"
    document.querySelector(".insertionSort").innerText="InsertionSort"
    document.querySelector(".mergeSort").innerText="MergeSort"
    document.querySelector(".quickSort").innerText="QuickSort"
    document.querySelector(".selectionSort").innerText="SelectionSort"
}
function resetcoloring(){
    document.querySelector(".bubbleSort").innerText="Bubble Sort"
    document.querySelector(".bubbleSort").classList.remove("sorted");

    document.querySelector(".insertionSort").innerText="Insertion Sort"
    document.querySelector(".insertionSort").classList.remove("sorted");

    document.querySelector(".mergeSort").innerText="Merge Sort"
    document.querySelector(".mergeSort").classList.remove("sorted");

    document.querySelector(".quickSort").innerText="Quick Sort"
    document.querySelector(".quickSort").classList.remove("sorted");

    document.querySelector(".selectionSort").innerText="Selection Sort"
    document.querySelector(".selectionSort").classList.remove("sorted");
}
const newArray=document.querySelector(".newArray")
newArray.addEventListener("click",function(){
    enableSizeSlider()
    enableSortingBtn()
    resetnaming()
    resetcoloring()
    createNewArray(arraySize.value)
});