function CalculateTriangleArea(){
    const baseInput = document.getElementById('triangle-base');
    const baseValueText = baseInput.value;
    const value = parseFloat(baseValueText);
   
   
    console.log(value);




    const heightInput = document.getElementById('triangle-height');
    const heightValueText = heightInput.value;
    const heightValue = parseFloat(heightValueText);
    console.log(heightValue)


    const area = 0.5 * heightValue * value;
    console.log(area)


    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function CalculateReactAngleArea(){
    const heightInput = document.getElementById('rectangle-height');
    const heightValueText = heightInput.value;
    const heightValue = parseFloat(heightValueText);
    console.log(heightValue);



    const widthtInput = document.getElementById('rectangle-width');
    const widthtValueText = widthtInput.value;
    const widthtInputValue = parseFloat(widthtValueText);
    console.log(widthtInputValue);

    const areaSp = heightValue * widthtInputValue;

    console.log(areaSp);

    const areaTotal = document.getElementById('rectangle-area');
    areaTotal.innerText = areaSp; 

}