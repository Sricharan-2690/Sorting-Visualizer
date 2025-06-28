
async function insertion(){
        const ele=document.querySelectorAll(".bar")

        for(let i=1;i<ele.length;i++){
            let j=i-1;
            let key=ele[i].style.height
            ele[i].style.background = 'linear-gradient(to top,rgb(8, 139, 17), #00ffc8)'
            while(j>=0 && (parseInt(ele[j].style.height)>parseInt(key))){
                ele[j].style.background = 'linear-gradient(to top,rgb(8, 139, 17), #00ffc8)'
                ele[j+1].style.height=ele[j].style.height
                await waitforme(delay);
                j--;

                for(let k=i;k>=0;k--){
                    ele[k].style.background='linear-gradient(to top,rgb(229, 0, 0), #60efff)';
                }
            }
            ele[j+1].style.height=key
        ele[i].style.background = 'linear-gradient(to top,rgb(229, 0, 0), #60efff)';

        }
}



const inSortbtn=document.querySelector(".insertionSort");
inSortbtn.addEventListener("click",async function() {
    disableSizeSlider()
    disableSortingBtn()
    disableNewArrayBtn()
    document.querySelector(".insertionSort").innerText="Sorting..."

    await insertion()
    document.querySelector(".insertionSort").innerText="Sorted"
    document.querySelector(".insertionSort").classList.add("sorted");
    document.querySelector(".insertionSort").style.background='linear-gradient(to top,rgb(54, 255, 94),rgb(2, 64, 40));'
    enableNewArrayBtn()
    enableSortingBtn()
    enableSizeSlider()
})