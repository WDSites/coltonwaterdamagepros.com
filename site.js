(function(){
  var mb=document.getElementById('menubtn'),mm=document.getElementById('mobilemenu');
  if(mb&&mm){
    mb.addEventListener('click',function(){
      var o=mm.classList.toggle('open');
      mb.setAttribute('aria-expanded',o?'true':'false');
    });
    window.addEventListener('resize',function(){
      if(window.innerWidth>900){mm.classList.remove('open');mb.setAttribute('aria-expanded','false');}
    });
  }
  var items=document.querySelectorAll('.faqitem');
  items.forEach(function(it){
    var b=it.querySelector('button'),a=it.querySelector('.ans');
    b.addEventListener('click',function(){
      var open=it.classList.toggle('open');
      b.setAttribute('aria-expanded',open?'true':'false');
      a.style.maxHeight=open?a.scrollHeight+'px':'0px';
    });
  });
})();
