var addScrollListener = function(target,id){
      target.addEventListener('scroll',(function(){
      var st = target.pageYOffset || target.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      
      if (st > this.lastScrollTop[id]){
        //down
        pageExpand();
      } 
      if(st===0){
        pageShrink();
      }
      this.lastScrollTop[id] = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }).bind(this),false);
};
var checkComponent=function(){
    if(window.routerwrapper===undefined)
        window.routerwrapper = document.querySelector('.router-wrapper');
    if(window.resumecol===undefined)
        window.resumecol = document.querySelectorAll('.resume-col');
    if(window.pagetitle===undefined)
        window.pagetitle = document.querySelector('.page-title');
}
var pageExpand = function(){
    checkComponent();
    if(routerwrapper.style.height == "calc(100vh - 90px)")return;
    routerwrapper.style.height = "calc(100vh - 90px)";
    routerwrapper.style.margin = "40px 0 50px 0";
    
    resumecol.forEach((col)=>{
        col.style.height = "calc(100vh - 90px)";
    })
    pagetitle.style.top="8px";
}

var pageShrink = function(){
    checkComponent();
    if(routerwrapper.style.height == "calc(100vh - 130px)")return;
    routerwrapper.style.height = "calc(100vh - 130px)";
    routerwrapper.style.margin = "80px 0 50px 0";
    
    resumecol.forEach((col)=>{
        col.style.height = "calc(100vh - 130px)";
    })
    pagetitle.style.top="40px";
}

var clearRouterviewComponent = function(){
    // window.routerwrapper = undefined;
    window.resumecol = undefined;
    // window.pagetitle = undefined;
}

export {addScrollListener, pageShrink, clearRouterviewComponent};