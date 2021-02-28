var addScrollListener = function(target,id){
  checkSectionsAndButtons();
  if(window.sections['me']&&window.sections['projects']){
    window.buttons['me'].addEventListener('click',()=>{
      window.sections['me'].scrollIntoView( {behavior: "smooth", block: "start"});
    })
    window.buttons['projects'].addEventListener('click',()=>{
      window.sections['projects'].scrollIntoView({behavior: "smooth", block: "start"});
    })
  }
  
  const onScroll = (function(){
    var st = target.pageYOffset || target.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    
    if (st > this.lastScrollTop[id]){
      //down
      pageExpand();
    } 
    if(st===0){
      pageShrink();
    }
    this.lastScrollTop[id] = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    onSectionsInView(st);
  }).bind(this);
  target.addEventListener('scroll',onScroll,false);
  onScroll();
};
var checkComponent=function(){
    if(window.routerwrapper===undefined)
      window.routerwrapper = document.querySelector('.router-wrapper');
    if(window.pageBanner===undefined){
      window.pageBanner = document.querySelector('.page-title');
    }
}
var checkSectionsAndButtons = function(){
  if(window.buttons===undefined){
      window.buttons = {};
      window.buttons['me'] = document.querySelector('#button-me');
      window.buttons['projects'] = document.querySelector('#button-projects');
    }
    if(window.sections===undefined){
      window.sections = {};
      window.sections['me'] = document.querySelector('#section-me');
      window.sections['projects'] = document.querySelector('#section-projects');
    }
}
var onSectionsInView = function(st){
    checkSectionsAndButtons();
    // when projects section or me section is at top, highlight the button at navigation banner
    if(!window.sections['me'] || !window.sections['projects']){
      return;
    }
    if(window.sections['me'].scrollHeight>st){
      window.buttons['projects'].style['color']='#797979';
      window.buttons['me'].style['color']='#e96443';
    }else if(window.sections['me'].scrollHeight+window.sections['projects'].scrollHeight>st){
      window.buttons['projects'].style['color']='#e96443';
      window.buttons['me'].style['color']='#797979';
    }
    // fade in project blocks coming into view
    let projectTopToPageTop = window.sections['me'].scrollHeight;
    const projects = window.sections['projects'].children;
    for(let i=0;i<projects.length;i++){
      const project = projects[i];
      if(projectTopToPageTop<st+window.innerHeight-120){
        // project is visible
        project.style.opacity = 1;
        project.style.transition = 'opacity 0.5s'
        project.style['transition-delay'] = '0.2s'
      }else{
        project.style.opacity = 0;
        project.style.transition = 'opacity 0.5s';
        project.style['transition-delay'] = '0s'
      }
      projectTopToPageTop+=project.scrollHeight+28.8;
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