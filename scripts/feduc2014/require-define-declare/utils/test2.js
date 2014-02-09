define(["dojo/_base/declare"],function(declare){
    declare("utils.MapTools",null,{
        _extent : null,
        setExtent : function(map){
            this._extent = map.geographicExtent;
        },
        getExtent : function(){
            return this._extent;
        }
    })
})

