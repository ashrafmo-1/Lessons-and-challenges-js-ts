// catch form 
let form = document.getElementById("register");

form.onsubmit = function() {
    let inp = document.getElementById("phone").value;
    let inpRe = /\+\(\d{2}\)\s\d{4}\s\d{4}\s\d{2}/
    let valednum = inpRe.test(inp)

    if (valednum === false) return false
    else return true
}

// +(20) 1007 4815 57  [fone naumber valed]