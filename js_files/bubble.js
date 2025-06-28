

async function bubble() {
    let ele=document.querySelectorAll(".bar")
    for(let i=0;i<ele.length-1;i++){
        for(let j=0;j<ele.length-1-i;j++){
            ele[j].style.background='linear-gradient(to right, #3936ff, #ca0cc7); '
            ele[j+1].style.background='linear-gradient(to right, #3936ff, #ca0cc7); '
            let l1=parseInt(ele[j].style.height)
            let l2=parseInt(ele[j+1].style.height)
            if(l1>l2){
            ele[j].style.background='linear-gradient(to top,rgb(8, 139, 17), #00ffc8)'
            ele[j+1].style.background='linear-gradient(to top,rgb(41, 216, 18), #00ffc8)'
                await waitforme(delay);
                swap(ele[j],ele[j+1]);
            }

        }
        ele[ele.length-1-i].style.background='linear-gradient(to top,rgb(255, 4, 0), #60efff)'
    }
    ele[0].style.background='linear-gradient(to top,rgb(229, 0, 0), #60efff)';
}



const bubSortbtn=document.querySelector(".bubbleSort");
bubSortbtn.addEventListener("click",async function() {
    disableSizeSlider()
    disableSortingBtn()
    disableNewArrayBtn()
    document.querySelector(".bubbleSort").innerText="Sorting..."
    await bubble()
    document.querySelector(".bubbleSort").innerText="Sorted"
    document.querySelector(".bubbleSort").classList.add("sorted");
    document.querySelector(".bubbleSort").style.background='linear-gradient(to top,rgb(54, 255, 94),rgb(2, 64, 40));'
    enableNewArrayBtn()
    enableSortingBtn()
    enableSizeSlider()
})