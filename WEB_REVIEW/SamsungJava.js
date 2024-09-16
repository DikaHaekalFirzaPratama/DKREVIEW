function showSpec(id) {
  var specList = document.getElementById(id);
  specList.classList.toggle('hidden');
}

function search() {
  var input = document.getElementById('searchInput').value.toLowerCase();
  filterItems(input);
}

function filterItems(input) {
  var hpItems = document.getElementsByClassName('hp-item');

  for (var i = 0; i < hpItems.length; i++) {
    var itemName = hpItems[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
    if (itemName.includes(input)) {
      hpItems[i].style.display = 'block';
    } else {
      hpItems[i].style.display = 'none';
    }
  }
}
