function update(){
    var date=new Date()
    var set_time=document.getElementById("set_time")
    set_time.innerHTML=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var set_date=document.getElementById("set_date")
    set_date.innerHTML=date.getDate()+"-"+parseInt(date.getMonth()+1)+"-"+date.getFullYear()

}
setInterval(update,10)
function get_color(){
    var color=document.getElementById("set_color").value;
    localStorage.setItem("color",color)
    document.body.style.backgroundColor=localStorage.getItem("color")
    document.getElementById("time").style.backgroundColor=localStorage.getItem("color")


}
document.getElementById("set_color").addEventListener("change",()=>{
    get_color()
})
function set_color(){
    document.getElementById("set_color").value=localStorage.getItem("color")
    document.body.style.backgroundColor=localStorage.getItem("color")
    document.getElementById("time").style.backgroundColor=localStorage.getItem("color")


}
onload=()=>{
    set_color()
}
