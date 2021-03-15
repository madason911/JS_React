
// printPyramid(5);
drawPyramid(6);
drawBlockPyramid(8);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
// function printPyramid(height) {
//     // console.log("Uh oh... the pyramid is under construction.");
//     // console.log("Check back soon, our developers are hard at work as we speak!");

//     // TODO
//     // print that pyramid!
//     let spaces = '';
//     let wall = '';
//     let count = 2;
//     for (let i = 0;i < height; i++)
//     {
//         for (let j = 0; j < height - count + 1; j++)
//             spaces += ' ';
//         for (let k = 0; k < count; k++)
//             wall += '#';
//         count++;
//         console.log(`${spaces}${wall}`);
//         spaces = '';
//         wall = '';
//     }
// }

function drawPyramid(height)
{
    let del = document.getElementById("construction");
    del.parentNode.removeChild(del);

    let pTag = document.createElement('p');
    //pTag.classList.add('line_height');
    // pTag.style.lineHeight("1");

    let pyramid = document.getElementById("pyramid");
    pyramid.appendChild(pTag);
    pTag.style.lineHeight = 1;
    let spaces = '';
    let wall = '';
    let count = 2;
    for (let i = 0;i < height; i++)
    {
        for (let j = 0; j < height - count + 1; j++)
            spaces += "\u00A0";
        for (let k = 0; k < count; k++)
            wall += '#';
        count++;
        pTag.innerHTML = pTag.innerHTML + `${spaces}${wall}` + "<br/>";
        spaces = '';
        wall = '';
    }
}

function drawBlockPyramid(height)
{
    let pyramid = document.getElementById("pyramid");
    pyramid.style.maxWidth = `${16 * (height + 2)}px`;
    // for (let i = 0; i < height * height; i++)
    // {
    //     let block = document.createElement('div');
    //     pyramid.appendChild(block);
    //     block.classList.add('block');
    // }
    //Loops for class
    let count = 2;
    for (let i = 0;i < height; i++)
    {
        for (let j = 0; j < height - count + 1; j++)
        {
            let block = document.createElement('div');
            pyramid.appendChild(block);
            block.classList.add('block-space');
        }
        for (let k = 0; k < count; k++)
        {
            let block = document.createElement('div');
            pyramid.appendChild(block);
            block.classList.add('block');
        }
        count++;
    }
}