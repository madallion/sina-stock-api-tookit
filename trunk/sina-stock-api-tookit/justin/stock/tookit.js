dojo.require("dojo.io.script");
dojo.provide("justin.stock.tookit");
(function () {
	var SINA_JS0 = "http://hq.sinajs.cn/list=";
	var SINA_JS1 = "stockinfolist = hq_str_";
	var SINA_JS2 = ".split(',')";
		justin.stock.getStockinfoList = function(/*String*/stockName){
		console.log("begin function");
		var xhrArgs = {
				url: SINA_JS0+stockName,
	            handleAs: "text",
	            load:dojo.hitch(this,function(response,request){
	            	console.log("on Load");
	            	var stockinfolist =[];
	            	eval(SINA_JS1+stockName+SINA_JS2);
	            	var stockInfo={
	            	};
	        		stockInfo.name =stockinfolist[0];
	        		stockInfo.PriceOpenToday =stockinfolist[1];
	        		stockInfo.PriceCloseYestoday=stockinfolist[2];
	        		stockInfo.CurrentPrice=stockinfolist[3];
	        		stockInfo.HighestPriceToday=stockinfolist[4];
	        		stockInfo.LowestPriceToday=stockinfolist[5];
	        		stockInfo.BuyPriceNow=stockinfolist[6];
	        		stockInfo.SellPriceNow=stockinfolist[7];
	        		stockInfo.TurnoverNum=stockinfolist[8];
	        		stockInfo.TurnoverMoney=stockinfolist[9];
	        		stockInfo.BuyNum1=stockinfolist[10];
	        		stockInfo.BuyPrice1=stockinfolist[11];
	        		stockInfo.BuyNum2=stockinfolist[12];
	        		stockInfo.BuyPrice2=stockinfolist[13];
	        		stockInfo.BuyNum3=stockinfolist[14];
	        		stockInfo.BuyPrice3=stockinfolist[15];
	        		stockInfo.BuyNum4=stockinfolist[16];
	        		stockInfo.BuyPrice4=stockinfolist[17];
	        		stockInfo.BuyNum5=stockinfolist[18];
	        		stockInfo.BuyPrice5=stockinfolist[19];
	        		stockInfo.SellNum1=stockinfolist[20];
	        		stockInfo.SellPrice1=stockinfolist[21];
	        		stockInfo.SellNum2=stockinfolist[22];
	        		stockInfo.SellPrice2=stockinfolist[23];
	        		stockInfo.SellNum3=stockinfolist[24];
	        		stockInfo.SellPrice3=stockinfolist[25];
	        		stockInfo.SellNum4=stockinfolist[26];
	        		stockInfo.SellPrice4=stockinfolist[27];
	        		stockInfo.SellNum5=stockinfolist[28];
	        		stockInfo.SellPrice5=stockinfolist[29];
	        		stockInfo.Date=stockinfolist[30];
	        		stockInfo.Time=stockinfolist[31];
	        		console.log(stockInfo)
	        		return stockInfo;
	            }),
	            error:dojo.hitch(this,function(response,request){
	            	//debugger;
	            	console.log("error");	        
				})
		};
		var defferred = dojo.io.script.get(xhrArgs);
		
	}
})();