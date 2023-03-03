const list = document.getElementById('myList');
let page = 1;
let isLoading = false;

 function infinteScroll(){
  const { scrollTop, clientHeight, scrollHeight } = list;
  
  // check if the user has scrolled to the bottom of the list
  if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
    isLoading = true;
    
    // simulate a network request with a timeout
    setTimeout(function() {
      // create new li elements and append them to the list
      for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${page * 10 + i + 1}`;
        list.appendChild(li);
      }
      
      isLoading = false;
      page++;
    }, 1000);
  }
};
list.addEventListener('scroll',infinteScroll)