function myObject() {
    this.x = 100;
}
//忘記new
var p = myObject(); //this會指向window造成全域變數產生
//建構函式字首大寫
function MyObject() {
    this.x = 100;
}
var p = new MyObject();