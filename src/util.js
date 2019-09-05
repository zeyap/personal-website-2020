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
    if(window.pageBanner===undefined){
      window.pageBanner = document.querySelector('.page-title');
    }
        
}
var pageExpand = function(){
    checkComponent();

    window.pageBanner.style['box-shadow'] = '0 2px 6px rgba(138, 138, 138, 0.25)';
    window.pageBanner.style['transition'] = 'box-shadow 0.5s';
    
}

var pageShrink = function(){
  // reaches top
    checkComponent();
    window.pageBanner.style['box-shadow'] = 'none';
}

var clearRouterviewComponent = function(){
    
}

export {addScrollListener, pageShrink, clearRouterviewComponent};