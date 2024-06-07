let element = document.createElement('div');

document.querySelector('.content').prepend(element);


window.addEventListener("online", (event) => {
  element.textContent = 'Online';
  element.className = 'alert';
  element.classList.add('alert-success');
});


window.addEventListener("offline", (event) => {
  element.textContent = 'Ofline';
  element.className = 'alert';
  element.classList.add('alert-danger');
});
