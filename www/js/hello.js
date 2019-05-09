class test {
    constructor( pId, pAge ) {
        this.id = pId;
        this.age = pAge;
        this.ele = document.getElementById(this.id);
        this.ele.onclick = this.onClick.bind(this);
    }
    onClick(){
        alert("id=" + this.id + "¥r" + "age=" + this.age);
    }
}
 
function onLoad(){
    //インスタンスを生成する
    var objTest = new test('btn01', 41);
}
