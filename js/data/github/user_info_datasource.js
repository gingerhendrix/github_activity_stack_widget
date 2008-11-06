
Utils.namespace("data.github", { 
  UserInfoDatasource : function(username){
    this.username = username;
    
    this.makeProp("user_info");
    Utils.extend(this, new data.Datasource(
                                       { service : "github/user_info",
                                         params : ["username"]
                                       }));  
    this.onUpdate = function(response){
      this.user_info(response);
    }
 }
});

data.github.UserInfoDatasource.prototype = new utils.DataBean();
