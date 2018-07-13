//cheerio框架提供了类似于jquery的操作方式来解析html
let superagent = require('superagent');
let cheerio = require('cheerio');
// superagent
//     .get("http://open.163.com/special/opencourse/englishs1.html")
//     .set('charset','GBK')
//     .end(function (req,res) {
//         let text = res.text;
//         if (res.ok) {
//             let $ = cheerio.load(text);
//             $("td.u-ctitle").each((x,i) => {
//                 console.log("------->>>>>>>>>begin");
//                 console.log(i);
//                 console.log("------->>>>>>>>>end");
//             });
//         }else{
//             console.log('出错了 '+ text);
//         }
//     });


superagent.get("https://cnodejs.org/").end(function(error,data){
    if(error){
        console.log("error exception occured !");
        return next(error);
    }
    var $=cheerio.load(data.text);    //注意传递的是data.text而不是data本身
    var arr=[]


    //解析的语法可以借鉴jquery的语法,
    // id -> #   class -> .
    $('#topic_list ,.topic_title').each(function(idx,element){
        var $element=$(element);
        console.log('title  '+$element.attr('title'));
        console.log('href   '+$element.attr('href'));
        // arr.push({
        //     "title":$element.attr("title"),
        //     "href":$element.attr("href")
        // });
    });


    $('.panel,.header').each(function (idx,element) {
        let $element = $(element);
        console.log('text   '+$element.text());
    });



});