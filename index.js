console.log('version 1.00');
var dsLines = '';
var lines = 15;

var dt = new Date();

retornaDtBr(dt.toISOString().substring(0, 10))



for (let index = 1; index <= lines; index++) {
    dsLines += '<p>'+index+'.________________________</p>';
    
}

document.getElementById('frameLeft').innerHTML = dsLines;
document.getElementById('frameRight').innerHTML = dsLines;


function retornaDtBr(dt){
    var dia = dt.substring(8, 10);
    var mes = dt.substring(5, 7);
    var ano = dt.substring(0, 4);

    var dtBr = dia+'/'+mes+'/'+ano;
    console.log(dt);
    console.log('dia '+dia);
    console.log('mes '+mes);
    console.log('ano '+ano);
    console.log('data '+dtBr);
}