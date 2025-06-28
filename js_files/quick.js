
async function partitionLomuto(ele,l,r){
    let i=l-1
    let pivot=parseInt(ele[r].style.height)
    //seet pivot element color
    ele[r].style.background = 'red';
    for(let j=l;j<r;j++){
        ele[j].style.background='yellow';
        await waitforme(delay);
        if(parseInt(ele[j].style.height)<pivot){
            i++;
            ele[i].style.background='orange';
            if(i!=j) ele[j].style.background='orange';
            await waitforme(delay);
            swap(ele[j],ele[i])
        }
        else{
            ele[j].style.background='pink';
        }
    }
    i++;
    swap(ele[i],ele[r])
    ele[i].style.background='green'
    ele[r].style.background='pink'

    await waitforme(delay)
    for(let k=0;k<ele.length;k++){
        if(ele[k].style.background!='green'){
            ele[k].style.background='cyan'
        }
    }
    return i;
}


async function quickSort(ele, l, r){
    if(l<r){
        let pivot_index=await partitionLomuto(ele,l,r)
        await quickSort(ele,l,pivot_index-1)
        await quickSort(ele,pivot_index+1,r)
    }
    else{
        if(l>=0 && r>=0 && l<ele.length && r<ele.length){
            ele[l].style.background='green'
            ele[r].style.background='green'
        }
    }
    ele[r].style.background='green'
}

const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    document.querySelector(".quickSort").innerText="Sorting..."

    await quickSort(ele, l, r);
    document.querySelector(".quickSort").innerText="Sorted"
    document.querySelector(".quickSort").classList.add("sorted");
    document.querySelector(".quickSort").style.background='linear-gradient(to top,rgb(54, 255, 94),rgb(2, 64, 40));'
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});