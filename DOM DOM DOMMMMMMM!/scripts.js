
document.addEventListener("DOMContentLoaded", function () {

    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');

    button.appendChild(btnText);
    document.body.appendChild(button);

    let containerDiv = document.createElement('div');
    containerDiv.classList.add('flex');
    containerDiv.style.border = "solid gray";
    document.body.appendChild(containerDiv);

    let boxNum = 0;

    button.addEventListener('click', function () {
        let box = document.createElement('div');
        box.classList.add('square');
        box.id = boxNum;
        let idBox = document.createElement('span');
        idBox.className = "box-Class";
        idBox.innerText = boxNum;
        box.appendChild(idBox);
        containerDiv.appendChild(box);
        boxNum++;

        let colorArray = ["#C2272D", "#db7c0f", "#FFFF01", "#009245", "#91c3db", "#ca04ed", "#612F90", "#aeff00"]
        function generateRandomColor() {
            return Math.floor((Math.random() * 8));
        }

        box.addEventListener('click', function () {
            let randomNumber = generateRandomColor();
            box.style.backgroundColor = colorArray[randomNumber];
        });
        
        // function removeListItem (item){
        // }

        // box.addEventListener('dblclick', function () {
        //     if (boxNum % 2 == 0) {
        //     // box.removeChild(boxNum + 1);
        //     // div.parentNode.removeChild(div.nextSibling);
        //         box.parentNode.removeChild(boxNum.nextSibling);
        //     }
        //     else {
        //     // box.removeParent(boxNum - 1);
        //     // div.parentNode.removeChild(div.previousibling);
        //         box.parentNode.removeChild(boxNum.previousSibling)  
        //     }
        // });

        box.addEventListener('dblclick', function () {
            if (box.id % 2 === 0) {
                if (document.body.contains(box.nextSibling)) {
                    box.nextSibling.remove()
                } else {
                    alert("aint no box")
                }
            } else {
                if (document.body.contains(box.previousSibling)) {
                    box.previousSibling.remove()
                } else {
                    alert("aint no box")
                }
            }
        })

    });



});


