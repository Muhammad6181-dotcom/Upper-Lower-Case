var text = prompt("So'z yozing:")

var first = text.charAt(0).toLowerCase()
var second = text.charAt(0).toUpperCase()
var thrid = text.slice(1)

if (text.charAt(0) === first) {
    alert(second + thrid)
}else if(text.charAt(0) === second){
    alert(first + thrid)
}else{
    alert("xato")
}
