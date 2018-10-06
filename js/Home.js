// scroll change
    function scrollChange(){
        if(window.scrollY>=5)
        {
            topNav.className='white';
            var navLinks=topNav.querySelectorAll('a');
            for(var i=0;i<navLinks.length;i++) {
                navLinks[i].style.color = "black";
            }
            sidenavTrigger.style.color = "black";
        }
        else{
            topNav.className='transparent z-depth-0';
            var navLinks=topNav.querySelectorAll('a');
            for(var i=0;i<navLinks.length;i++) {
                navLinks[i].style.color = "white";
            }
            sidenavTrigger.style.color = "white";

        }
    }
    
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });
