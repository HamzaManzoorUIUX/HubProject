
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
  });
  // pagination changer
  var paginationItem = pagination.querySelectorAll('a');
            for (var i = 0; i < paginationItem.length; i++) {
                paginationItem[i].onclick = function () {
                    if (this.parentElement.classList.contains("waves-effect")) {
                        var activeElement = pagination.querySelector(".active");
                        this.parentElement.classList.remove("waves-effect");
                        this.parentElement.classList.add("active");
                        activeElement.classList.remove("active");
                        activeElement.classList.add("waves-effect");
                    }
                };
            }
            // pagination changer end
            // __________________________________________________
            // fixed action Btn
            document.addEventListener('DOMContentLoaded', function () {
              var elems = document.querySelectorAll('.fixed-action-btn');
              var instances = M.FloatingActionButton.init(elems, {
                  direction: 'top',
                  hoverEnabled: false
              });
          });
          // fixed action btn end
          // ______________________________________________________________
          // dropdown1
          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems);
          });
          searchBtn.onclick=function(e){
            if(inputHolder.classList.contains('scale-out'))
            {
                inputHolder.classList.remove('scale-out');
            }
            else{
                inputHolder.classList.add('scale-out');
            }
          };
          function removeOne(){
            if(Qty.value>=1)
            {
                Qty.value-=1;
            }
          }
          function addOne(){
            Qty.value=Number(Qty.value)+1;
          }