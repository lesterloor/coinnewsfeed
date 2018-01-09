$(function() {
     //get todays date
     var dateToday = (new Date()).toString().split(' ').splice(1,3).join(' ');
     $(".today").text(dateToday)
     // get coin data using ajax
     //bitcoin
     $.ajax({
         url: "https://api.cryptonator.com/api/ticker/btc-usd",
         type: 'GET',
         dataType: 'json', // added data type
         success: function(res) {
           changePrice = res.ticker.change
           btcPrice = res.ticker.price
           var pi = btcPrice - changePrice
           var resultBTC
           function getresult(){
             resultBTC = 100*(btcPrice - pi)/pi
             return resultBTC
           }
           getresult()
           document.getElementById('currentBTC').innerHTML = "$" + parseFloat(Math.round(btcPrice * 100) / 100).toFixed(2);
           document.getElementById('changeBTC').innerHTML = "(" +  parseFloat(Math.round(resultBTC * 100) / 100).toFixed(2)+ "%)";
           if (resultBTC > 0){
             $("#changeBTC").css("color","green")
             }else{
             $("#changeBTC").css("color","red")
           }

           }
     });
     // Ethereum
     $.ajax({
        url: "https://api.cryptonator.com/api/ticker/eth-usd",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
          changePrice = res.ticker.change
          btcPrice = res.ticker.price
          var pi = btcPrice - changePrice
          var resultBTC
          function getresult(){
            resultBTC = 100*(btcPrice - pi)/pi
            return resultBTC
          }
          getresult()
          document.getElementById('currentETH').innerHTML = "$" + parseFloat(Math.round(btcPrice * 100) / 100).toFixed(2);
          document.getElementById('changeETH').innerHTML = "(" + parseFloat(Math.round(resultBTC * 100) / 100).toFixed(2)+"%)";
          if (resultBTC > 0){
            $("#changeETH").css("color","green")
            }else{
            $("#changeETH").css("color","red")
          }

          }
    });
    // Litecoin
     $.ajax({
        url: "https://api.cryptonator.com/api/ticker/ltc-usd",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
          changePrice = res.ticker.change
          btcPrice = res.ticker.price
          var pi = btcPrice - changePrice
          var resultBTC
          function getresult(){
            resultBTC = 100*(btcPrice - pi)/pi
            return resultBTC
          }
          getresult()
          document.getElementById('currentLTC').innerHTML = "$" + parseFloat(Math.round(btcPrice * 100) / 100).toFixed(2);
          document.getElementById('changeLTC').innerHTML = "(" + parseFloat(Math.round(resultBTC * 100) / 100).toFixed(2)+"%)";
          if (resultBTC > 0){
            $("#changeLTC").css("color","green")
            }else{
            $("#changeLTC").css("color","red")
          }

          }
    });
    // Zcoin
    $.ajax({
        url: "https://api.cryptonator.com/api/ticker/zec-usd",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
          changePrice = res.ticker.change
          btcPrice = res.ticker.price
          var pi = btcPrice - changePrice
          var resultBTC
          function getresult(){
            resultBTC = 100*(btcPrice - pi)/pi
            return resultBTC
          }
          getresult()
          document.getElementById('currentZEC').innerHTML = "$" + parseFloat(Math.round(btcPrice * 100) / 100).toFixed(2);
          document.getElementById('changeZEC').innerHTML = "(" + parseFloat(Math.round(resultBTC * 100) / 100).toFixed(2)+"%)";
          if (resultBTC > 0){
            $("#changeZEC").css("color","green")
            }else{
            $("#changeZEC").css("color","red")
          }

          }
    });
    // Ripple
    $.ajax({
        url: "https://api.cryptonator.com/api/ticker/xrp-usd",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
          changePrice = res.ticker.change
          btcPrice = res.ticker.price
          var pi = btcPrice - changePrice
          var resultBTC
          function getresult(){
            resultBTC = 100*(btcPrice - pi)/pi
            return resultBTC
          }
          getresult()
          document.getElementById('currentXRP').innerHTML = "$" + parseFloat(Math.round(btcPrice * 100) / 100).toFixed(2);
          document.getElementById('changeXRP').innerHTML = "(" + parseFloat(Math.round(resultBTC * 100) / 100).toFixed(2)+"%)";
          if (resultBTC > 0){
            $("#changeXRP").css("color","green")
            }else{
            $("#changeXRP").css("color","red")
          }

          }
    });
    // monero
    $.ajax({
        url: "https://api.cryptonator.com/api/ticker/xmr-usd",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
          changePrice = res.ticker.change
          btcPrice = res.ticker.price
          var pi = btcPrice - changePrice
          var resultBTC
          function getresult(){
            resultBTC = 100*(btcPrice - pi)/pi
            return resultBTC
          }
          getresult()
          document.getElementById('currentXMR').innerHTML = "$" + parseFloat(Math.round(btcPrice * 100) / 100).toFixed(2);
          document.getElementById('changeXMR').innerHTML = "(" + parseFloat(Math.round(resultBTC * 100) / 100).toFixed(2)+"%)";
          if (resultBTC > 0){
            $("#changeXMR").css("color","green")
            }else{
            $("#changeXMR").css("color","red")
          }

          }
    });


    var url = 'http://coinnews247.com/feed/';

    feednami.load(url,function(result){
  // console.log(result)
   if(result.error) {
        console.log(result.error);
   } else {
      $('.wrap').hide()
        var entries = result.feed.entries;
        for(var i = 0; i < entries.length; i++){
          var author = entries[i]["author"]
          var urlgot = 'window.location.href="'+entries[i].link+'"'
          var categorty = entries[i]["categories"][0]
          var description = entries[i]["description"]
          var timePub = entries[i]["rss:pubdate"]["#"]
          var titleget = entries[i]["title"]
          // var titleLimit = entries[i]["title"].substring(0,20) //+ "<span style='color:blue'> Read More</span>"
        $('#main').append($("<div onclick='"+ urlgot +"'>").addClass("boxcontent").html("<div class='imageClass'>"+description+"</div><div class='textResultClass' ><span class='articleTitle'>"+titleget+"</span><br><br><span class='articleauthor'>"+author+"</span></br><span class='articletime'>"+timePub.slice(0,-15)+"</span></br></div>"))
        // $('.site__wrapper').append($('<div/>').addClass("grid").html("<div class='card'><div class='card__image'><img src='' alt=''><div class='card__overlay card__overlay--indigo'><div class='card__overlay-content'><a href='"+entries[i].link+"' class='card__title'>"+titleLimit+"</a><ul class='card__meta'><li><a href=''#0'><i class='fa fa-tag'></i> "+entries[i].categories[0]+"</a></li></ul><ul class='card__meta card__meta--last'>  <li><a href=''#0'><i class='fa fa-user'></i> "+entries[i].author+"</a></li><li></br><a href='#0'><i class='fa fa-clock-o'></i>"+timePub.slice(0,-15)+"</a></li></ul></div></div>  </div></div>"))
        $('.loader').hide()
        $('.articleTitle').each(function(){
          if ($(this).text() == "null") {
            $(this).parent().parent().hide()
          }
          })
          $('.imageClass').children().not(":first-child").hide()
          $('.imageClass p:not(:has(img[src!=""]))').html("<img src='https://cointelegraph.com/images/420_Ly9jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9iNjIzYWFmMGJiNDdlZDQ5NTAzZGE5OGU4ODVlMzBmZC5qcGc=.jpg'>");

            var entry = entries[i];
            console.dir(entry);


        }
   }
});
});
