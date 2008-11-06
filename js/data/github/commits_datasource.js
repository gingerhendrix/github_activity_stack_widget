
Utils.namespace("data.github", { 
  CommitsDatasource : function(username, repo){
    this.username = username;
    this.repo = repo;
    

    Utils.extend(this, new data.Datasource(
                                       { service : "github/commits",
                                         params : ["username", "repo"]
                                       }));  
    this.makeProp("commits");
    this.onUpdate = function(response){
      this.commits(response)
    }
 }
});

data.github.UserInfoDatasource.prototype = new utils.DataBean();

