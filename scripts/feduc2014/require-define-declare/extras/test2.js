define(["dojo/_base/declare"],function(declare){
    declare("extras.MapTools",null,{
        _extent : null,
        setExtent : function(map){
            this._extent = map.geographicExtent;
        },
        getExtent : function(){
            return this._extent;
        }
    })
})

