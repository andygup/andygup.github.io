define([],function(){
    console.log("test.js is loaded");
    return {
        getDateHMS: function(){
            var date = new Date();
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            hh = hh < 10 ? "0" + hh : hh;
            mm = mm < 10 ? "0" + mm : mm;
            ss = ss < 10 ? "0" + ss : ss;
            var dateHMS = (date.getMonth()+1) + "/"+ date.getDate()
                + "/" + date.getFullYear() + " "
                + hh + ":"
                + mm + ":"
                + ss;
            return dateHMS;
        }
    }
})
