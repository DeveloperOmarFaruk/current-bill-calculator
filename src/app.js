const calc = () => {
    let tBill = document.getElementById('tBill').value;
    let tUnit = document.getElementById('tUnit').value;
    let fSUnit = document.getElementById('fSUnit').value;
    let sSUnit = document.getElementById('sSUnit').value;

    let fSMBill = '';
    let sSMBill = '';
    let j = '';
    let k = '';
    let fTSMUnit = '';
    let sTSMUnit = '';
    let aR = '';


    let perUnit = parseFloat(tBill) / parseFloat(tUnit);
    let subUnitSum = parseFloat(fSUnit) + parseFloat(sSUnit);

    if (subUnitSum <= tUnit) {
        j = parseFloat(tUnit) - parseFloat(subUnitSum);
        k = j / 2;
        fSMBill = (parseFloat(fSUnit) + k) * perUnit;
        sSMBill = (parseFloat(sSUnit) + k) * perUnit;

        fTSMUnit = parseFloat(fSUnit) + k;
        sTSMUnit = parseFloat(sSUnit) + k;
        aR = 'Add';
    } else {
        j = parseFloat(subUnitSum) - parseFloat(tUnit);
        k = j / 2;
        fSMBill = (parseFloat(fSUnit) - k) * perUnit;
        sSMBill = (parseFloat(sSUnit) - k) * perUnit;

        fTSMUnit = parseFloat(fSUnit) - k;
        sTSMUnit = parseFloat(sSUnit) - k;
        aR = 'Remove';

    }





    //     document.getElementById('showData').innerHTML = `
    //     Total Bill: ${tBill} Taka.<br>
    //     Total Unit: ${tUnit} Unit.<br>
    //     Total Sub Unit: ${subUnitSum} Unit.<br>
    //     Remaining Unit: ${j} Unit. <br>
    //     Remaining Add Unit: ${k} Unit. <br>
    //     Per Unit Rate: ${perUnit} Taka. <br>
    //     1st sub meter total unit: ${fTSMUnit} Unit.<br>
    //     1st sub meter bill: ${fSMBill.toFixed(2)} Taka. <br>
    //     2nd sub meter total unit: ${sTSMUnit} Unit.<br>
    //     2nd sub meter bill: ${sSMBill.toFixed(2)} Taka.
    // `

    document.getElementById('showData1').innerHTML = `
    Total Bill: ${tBill} Taka.<br>
`
    document.getElementById('showData2').innerHTML = `
Total Unit: ${tUnit} Unit.<br>
`

    document.getElementById('showData3').innerHTML = `
Total Sub Unit: ${subUnitSum} Unit.<br>
`
    document.getElementById('showData4').innerHTML = `
Remaining Unit: ${j} Unit. <br>
`
    document.getElementById('showData5').innerHTML = `
Remaining ${aR} Unit: ${k} Unit. <br>
`
    document.getElementById('showData6').innerHTML = `
Per Unit Rate: ${perUnit.toFixed(2)} Taka. <br>
`
    document.getElementById('showData7').innerHTML = `
1st sub meter total unit: ${fTSMUnit} Unit.<br>
`
    document.getElementById('showData8').innerHTML = `
1st sub meter bill: ${fSMBill.toFixed(2)} Taka.  <br>
`
    document.getElementById('showData9').innerHTML = `
2nd sub meter total unit: ${sTSMUnit} Unit.<br>
`

    document.getElementById('showData10').innerHTML = `
2nd sub meter bill: ${sSMBill.toFixed(2)} Taka.
`

}