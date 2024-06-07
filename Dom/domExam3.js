// get attribute

// let header = document.querySelector('#header');

// console.log(header.classList.add('mb-5'));
// header.classList.add('mb-5');
// header.classList.remove('btn-success');
// header.classList.toggle('btn-danger');

// console.log(header.getAttribute('id'));
// header.setAttribute('title', 'My header title!');;

// let links = document.querySelectorAll('a');

// links.forEach(link => {
  // let href = link.getAttribute('href');
  // link.setAttribute('href', href.replace('http://', 'https://'));
  // console.log(href);
  // link.setAttribute('data-protocol', 'SSL');
  // let href = link.href;
  // link.href = href.replace('http://', 'https://');
  // console.log(link.dataset.protocol);
  // console.log(href);
  // link.dataset.protocol2 = 'SSL';
  // link.setAttribute("style", link.getAttribute("style") + "color: red; font-size: 20px");
  // link.style.color = 'red';
  // link.style.fontSize = '20px';
// });


let lists = document.querySelectorAll('li');

lists.forEach(list => {
  if (list.textContent.includes('success')) {
    list.classList.add('text-success');
  };

  if (list.textContent.includes('danger')) {
    list.classList.add('text-danger');
  };
});
