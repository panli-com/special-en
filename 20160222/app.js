function FloorList(data){
      var mlc = 7,fl1 = [],fl2 = [],fl3 = [],fl4 = [],fl0 = [];

          for(var i=0;i<mlc;i++){
              fl0.push(data[i]);
          }
          for(var i=mlc;i<mlc*2;i++){
              fl1.push(data[i]);
          }
          for(var i=mlc*2;i<mlc*3;i++){
              fl2.push(data[i]);
          }
          for(var i=mlc*3;i<mlc*4;i++){
              fl3.push(data[i]);
          }
          for(var i=mlc*4;i<mlc*5;i++){
              fl4.push(data[i]);
          }
         
        
          FloorAll(fl0,'cat',1);
          FloorAll(fl1,'dog',2);
          FloorAll(fl2,'rabbit',3);
          FloorAll(fl3,'duck',4);
          FloorAll(fl4,'others',5);
        
        
}

function FloorAll(data,imgHead,id){

	var str = '';
            for(var i=1;i<data.length;i++){
                var name = data[i].简短商品名,
                    price = data[i].USA,                  
                    imgUrl = './build/images/products/'+imgHead+(i+1)+'.jpg',
                    proUrl = data[i].站内链接;
                    
                    
             str += '<li><a href="'+ proUrl +'" target="_blank"><img src="'+ imgUrl +'" width="200" height="200"></a>'+
              '<div class="pro_Price"><a href="'+ proUrl +'" target="_blank">'+ name +'</a><br />'+
               ' Price：$'+ price +'</div>'+
            '</li>';
              
             
             
 
            };
       var bigpro = {name : data[0].简短商品名,
                    price : data[0].USA,                  
                    imgUrl : './build/images/products/'+imgHead+(1)+'.jpg',
                    proUrl : data[0].站内链接};
                    
      var  bigHtml = '  <li><a href="'+ bigpro.proUrl +'" target="_blank"><img src="'+ bigpro.imgUrl +'" width="330" height="430"></a>'+
                '<div class="pro_title"><a href="'+ bigpro.proUrl +'" target="_blank">'+ bigpro.name +'</a><br />'+
                'Price：$'+ bigpro.price +'</div>'+
                '</li>';
         
    $("#floor-"+id).find(".big").html(bigHtml)                 
       
     $("#floor-"+id).find(".sml").html(str);
}