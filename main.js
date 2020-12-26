function tangDan(event){
    event.preventDefault();


    var thu1 = document.getElementById("dauTien").value;
    var thu2 = document.getElementById("thuHai").value;
    var thu3 = document.getElementById("thuBa").value;

    var nhoNhat = 0;
    var keTiep = 0;
    var lonNhat = 0;
    
    if (thu1 < thu2 && thu1<thu3 && thu2<thu3 ) { 
        nhoNhat = thu1 
        keTiep = thu2
        lonNhat = thu3
    }
    if (thu1 < thu2 && thu1<thu3 && thu2>thu3 ) { 
        nhoNhat = thu1 
        keTiep = thu3
        lonNhat = thu2
    } 
    if (thu2 < thu1 && thu2<thu3 && thu1<thu3 ) { 
        nhoNhat = thu2 
        keTiep = thu1
        lonNhat = thu3
    } 
    if (thu2 < thu1 && thu2<thu3 && thu1>thu3 ) { 
        nhoNhat = thu2 
        keTiep = thu3
        lonNhat = thu1
    } 
    if (thu3 < thu1 && thu3<thu2 && thu1<thu2 ) { 
        nhoNhat = thu3 
        keTiep = thu1
        lonNhat = thu2
    } 
    if (thu3 < thu1 && thu3<thu2 && thu1>thu2 ) { 
        nhoNhat = thu3 
        keTiep = thu2
        lonNhat = thu1
    }


    console.log(nhoNhat)
    console.log(keTiep)
    console.log(lonNhat)


    var tagResult = document.createElement("div");
    tagResult.innerHTML = "Tăng dần là: " + nhoNhat +","+ keTiep +","+ lonNhat;

    // reset nội dụng của thẻ thẻ div có id#cardFooter
    document.getElementById("cardFooter").innerHTML = "";
    
    document.getElementById("cardFooter").appendChild(tagResult);

}









function chaoHoi(event){
    event.preventDefault();

    var dad = document.getElementById("bo").checked;
    var mom = document.getElementById("me").checked;
    var bro2 = document.getElementById("anh2").checked;
    var bro3 = document.getElementById("anh3").checked;
    var sis = document.getElementById("emUt").checked;


    var chao = 0
    if (dad === true ){
        chao= "Mời bố sử dụng máy"
    }
    if (mom === true){
        chao = "Mời mẹ sử dụng máy "
    }
    if (bro2 === true){
        chao = "Mời anh hai sử dụng máy"
    }
    if (bro3 === true){
        chao = "Mời anh ba sử dụng máy"
    }
    if (sis === true){
        chao = "Mời bé Ngân hai sử dụng máy"
    }
    var tagResult1 = document.createElement("div");
    tagResult1.innerHTML = "Máy: " + chao

    // reset nội dụng của thẻ thẻ div có id#cardFooter
    document.getElementById("cardFooter1").innerHTML = "";
    
    document.getElementById("cardFooter1").appendChild(tagResult1);
}






function leChan(event){
    event.preventDefault();

    var thuDau =document.getElementById("so1").value;
    var thuHai = document.getElementById("so2").value;
    var thuBa = document.getElementById("so3").value;

    var le = 0
    var chan = 0
    
   if(thuDau%2 == 0 && thuHai%2 == 0 && thuBa%2 == 0 ){
       le=0
       chan=3
   }
   if(thuDau%2 == 0 && thuHai%2 == 0 && thuBa%2 != 0 ){
       le=1
       chan=2
   }
   if (thuDau%2 == 0 && thuHai%2 != 0 && thuBa%2 == 0 ){
       le =1
       chan=2
   }
   if (thuDau%2 == 0 && thuHai%2 != 0 && thuBa%2 != 0 ){
    le =2
    chan=1
   }
   if (thuDau%2 != 0 && thuHai%2 != 0 && thuBa%2 != 0 ){
    le =3
    chan=0
   }
   if (thuDau%2 != 0 && thuHai%2 == 0 && thuBa%2 == 0 ){
    le =1
    chan=2
   }
   if (thuDau%2 != 0 && thuHai%2 != 0 && thuBa%2 == 0 ){
    le =2
    chan=1
   }
   if (thuDau%2 != 0 && thuHai%2 == 0 && thuBa%2 != 0 ){
    le =2
    chan=1
   }
    console.log(le);
    console.log(chan);




    var tagResult2 = document.createElement("div");
    tagResult2.innerHTML = "Có tất cả" +" "+ le+ " " +"số lẻ" +","+" "+"Có tất cả" + " "+ chan+" "+ "số chẵn"

    // reset nội dụng của thẻ thẻ div có id#cardFooter
    document.getElementById("cardFooter2").innerHTML = "";
    
    document.getElementById("cardFooter2").appendChild(tagResult2);
}







function tamGiac(event) {
    event.preventDefault();
    
    
    var canhA = document.getElementById("cA").value;
    var canhB = document.getElementById("cB").value;
    var canhC = document.getElementById("cC").value;


    var types = 0;
    if (canhA == canhB &&  canhA == canhC && canhB == canhC){
        types = "Tam giác đều"
    }
    else if (canhA == canhB || canhA == canhC|| canhB == canhC){
        types = "Tam giác cân "
    }
    
    
    else if (canhA**2 + canhB**2 == canhC**2 || canhA**2 + canhC**2 == canhB**2 || canhC**2 + canhB**2 == canhA**2){
        types =  "Tam  giác vuông"
    }else{
        types = "Tam giác thường"
    }

    console.log(types);

    var tagResult3 = document.createElement("div");
    tagResult3.innerHTML =" Đây là: " + types;
    // reset nội dụng của thẻ thẻ div có id#cardFooter

    document.getElementById("cardFooter3").innerHTML = "";
    
    document.getElementById("cardFooter3").appendChild(tagResult3);


}