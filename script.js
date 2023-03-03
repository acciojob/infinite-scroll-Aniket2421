const list = document.getElementById('infi-list');

list.addEventListener('scroll', function() {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // user has reached the end of the list
    const newItem1 = document.createElement('li');
    newItem1.textContent = 'Item ' + (list.children.length + 1);
    const newItem2 = document.createElement('li');
    newItem2.textContent = 'Item ' + (list.children.length + 2);
    list.appendChild(newItem1);
    list.appendChild(newItem2);
  }
});
