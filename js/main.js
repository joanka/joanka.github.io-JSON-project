(function () {
  var hotelInfo,
      details,
      xhr = new XMLHttpRequest(),
      btnList = document.querySelectorAll('.menu__list li'),
      arr = Array.prototype.slice.call(btnList);
  xhr.open('GET', "data.json", true);
  xhr.responseType = 'text';
  xhr.send();

  xhr.onload = function() {
    if(xhr.status === 200) {
      hotelInfo = JSON.parse(xhr.responseText);      
      show(0);
    }
  }

  function show(x) {
  document.querySelector('.item__name').innerHTML = hotelInfo[x].name;
  document.querySelector('.item__info').innerHTML = hotelInfo[x].description;
  document.querySelector('.item__photo img').src = hotelInfo[x].photo;
  document.querySelector('#weekday').innerHTML = hotelInfo[x].cost.weekday;
  document.querySelector('#weekend').innerHTML = hotelInfo[x].cost.weekend;

  details = "";
  hotelInfo[x].details.forEach(function(el) {
    details += "<p>" + el + "</p>";
  });

  document.querySelector('.amenities__list').innerHTML = details;
  }

  function display(e) {
  var index = arr.indexOf(e.target);
  show(index);
  }

  btnList.forEach(function(el) {
  el.addEventListener('click', display);
  });

}());




