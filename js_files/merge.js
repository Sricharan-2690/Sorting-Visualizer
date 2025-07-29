async function merge(ele, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await waitforme(delay);
        ele[l + i].style.background = 'orange';
        left[i] = parseInt(ele[l + i].style.height);
    }

    for (let j = 0; j < n2; j++) {
        await waitforme(delay);
        ele[m + 1 + j].style.background = 'yellow';
        right[j] = parseInt(ele[m + 1 + j].style.height);
    }

    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
        await waitforme(delay);
        if (left[i] <= right[j]) {
            ele[k].style.height = left[i] + "px";
            ele[k].style.background = (r - l + 1 === ele.length) ? 'green' : 'lightgreen';
            i++;
        } else {
            ele[k].style.height = right[j] + "px";
            ele[k].style.background = (r - l + 1 === ele.length) ? 'green' : 'lightgreen';
            j++;
        }
        k++;
    }

    while (i < n1) {
        await waitforme(delay);
        ele[k].style.height = left[i] + "px";
        ele[k].style.background = (r - l + 1 === ele.length) ? 'green' : 'lightgreen';
        i++;
        k++;
    }

    while (j < n2) {
        await waitforme(delay);
        ele[k].style.height = right[j] + "px";
        ele[k].style.background = (r - l + 1 === ele.length) ? 'green' : 'lightgreen';
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r) {
    if (l < r) {
        const m = Math.floor((l + r) / 2);
        await mergeSort(ele, l, m);
        await mergeSort(ele, m + 1, r);
        await merge(ele, l, m, r);
    }
}

const mergeSortbtn = document.querySelector(".mergeSort");

mergeSortbtn.addEventListener('click', async function () {
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;

    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    document.querySelector(".mergeSort").innerText = "Sorting...";

    await mergeSort(ele, l, r);

    document.querySelector(".mergeSort").innerText = "Sorted";
    document.querySelector(".mergeSort").classList.add("sorted");
    document.querySelector(".mergeSort").style.background = 'linear-gradient(to top, rgb(54, 255, 94), rgb(2, 64, 40))';

    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

