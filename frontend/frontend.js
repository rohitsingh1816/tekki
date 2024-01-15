let menus = [];
function addMenu() {
  const menuName = document.getElementById('menuName').value;
  const parentMenu = document.getElementById('parentMenu').value;
  const newMenu = { name: menuName, parent: parentMenu };
  menus.push(newMenu);
  // Clear form
  document.getElementById('menuForm').reset();
  // Update parent menu options
  updateParentMenuOptions();
  console.log('Menus:', menus);
}
function updateParentMenuOptions() {
  const parentMenuSelect = document.getElementById('parentMenu');
  parentMenuSelect.innerHTML = '<option value="">None</option>';
  menus.forEach(menu => {
    const option = document.createElement('option');
    option.value = menu.name;
    option.innerText = menu.name;
    parentMenuSelect.appendChild(option);
  });
}