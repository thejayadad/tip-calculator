




function total(){
    let bill = document.getElementById("bill").value;
    let tip = document.getElementById("tip").value;  
    let total = ( bill * tip) + Number(bill)
    document.getElementById("total").innerHTML = total
    console.log(total)
    return total
}

