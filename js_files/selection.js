


async function selection(){
    const ele=document.querySelectorAll(".bar")
    for(let i=0;i<ele.length-1;i++){
        let miniidx=i;
        ele[i].style.background='blue'
        for(let j=i+1;j<ele.length;j++){
            ele[j].style.background='red'
            await waitforme(delay)
            if(parseInt(ele[j].style.height)<parseInt(ele[miniidx].style.height)){
                if(miniidx!==i){
                    ele[miniidx].style.background='cyan'
                }
                miniidx=j;
            }else{
                ele[j].style.background='cyan'
            }
        }
        await waitforme(delay)
        swap(ele[i],ele[miniidx])
        ele[miniidx].style.background='cyan'
        ele[i].style.background='green'

    }
    ele[ele.length-1].style.background='green'

}
const sound = document.getElementById('clickSound');
sound.volume = 0.7;
const selectionSortbtn=document.querySelector(".selectionSort");
selectionSortbtn.addEventListener("click",async function() {
    sound.currentTime = 0; // Rewind to start
  sound.play();
    disableSizeSlider()
    disableSortingBtn()
    disableNewArrayBtn()
    document.querySelector(".selectionSort").innerText="Sorting..."

    await selection()
    document.querySelector(".selectionSort").innerText="Sorted"
    document.querySelector(".selectionSort").classList.add("sorted");
    document.querySelector(".selectionSort").style.background='linear-gradient(to top,rgb(54, 255, 94),rgb(2, 64, 40));'
    enableNewArrayBtn()
    enableSortingBtn()
    enableSizeSlider()
})