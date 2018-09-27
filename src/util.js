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
    if(window.tweenbuttons===undefined)
        window.tweenbuttons = document.querySelector('.tweenbuttons');
        
}
var pageExpand = function(){
    checkComponent();
    if(routerwrapper.style.height == "calc(100vh - 40px)")return;
    routerwrapper.style.height = "calc(100vh - 40px)";
    routerwrapper.style.margin = "40px 0 0px 0";
    
    resumecol.forEach((col)=>{
        col.style.height = "calc(100vh - 40px)";
    })
    pagetitle.style.top="8px";
    pagetitle.style.right="40px";
    tweenbuttons.style.opacity = "0";
}

var pageShrink = function(){
    checkComponent();
    if(routerwrapper.style.height == "calc(100vh - 60px)")return;
    routerwrapper.style.height = "calc(100vh - 60px)";
    routerwrapper.style.margin = "60px 0 0px 0";
    
    resumecol.forEach((col)=>{
        col.style.height = "calc(100vh - 60px)";
    })
    pagetitle.style.top="25px";
    pagetitle.style.right="160px";
    tweenbuttons.style.opacity = "1";
}

var clearRouterviewComponent = function(){
    // window.routerwrapper = undefined;
    window.resumecol = undefined;
    // window.pagetitle = undefined;
}

export {addScrollListener, pageShrink, clearRouterviewComponent};