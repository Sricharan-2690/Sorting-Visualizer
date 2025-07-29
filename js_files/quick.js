// Lomuto partition function
async function partitionLomuto(ele, l, r) {
    let i = l - 1;
    let pivot = parseInt(ele[r].style.height);
    
    ele[r].style.background = 'red'; // Pivot bar color

    for (let j = l; j < r; j++) {
        ele[j].style.background = 'yellow';
        await waitforme(delay);

        if (parseInt(ele[j].style.height) < pivot) {
            i++;
            if (i !== j) {
                await swap(ele[i], ele[j]);
                ele[i].style.background = 'orange';
                ele[j].style.background = 'orange';
            } else {
                ele[i].style.background = 'orange';
            }
            await waitforme(delay);
        } else {
            ele[j].style.background = 'pink';
        }
    }

    i++;
    await swap(ele[i], ele[r]);

    ele[i].style.background = 'green'; // Final pivot position
    ele[r].style.background = 'pink';  // Reset old pivot color

    await waitforme(delay);

    return i;
}

// Quick Sort recursive function
async function quickSort(ele, l, r) {
    if (l < r) {
        let pivot_index = await partitionLomuto(ele, l, r);

        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    } else if (l === r) {
        // Single remaining bar should also be marked green
        ele[l].style.background = 'green';
    }
}

// Click event listener
const quickSortbtn = document.querySelector(".quickSort");

quickSortbtn.addEventListener('click', async function () {
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;

    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    this.innerText = "Sorting...";

    await quickSort(ele, l, r);

    // Make sure all bars are green after sorting
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.background = 'green';
    }

    this.innerText = "Sorted";
    this.classList.add("sorted");
    this.style.background = 'linear-gradient(to top,rgb(54, 255, 94),rgb(2, 64, 40))';

    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
