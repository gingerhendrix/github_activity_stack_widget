
Utils.namespace("data", { 
  Webservice : {
    url : function(service, options){
      var queryString = MochiKit.Base.queryString(options);
      return config.webservice + "/" + service + ".js?" + queryString;
    }
  
  }
});
