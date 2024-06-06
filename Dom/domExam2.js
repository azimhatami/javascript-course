let pepole = [
  {name: 'Mehran', new_member: true},
  {name: 'Ali', new_member: false},
  {name: 'Azim', new_member: false},
  {name: 'Amir', new_member: true},
];

function create_navbar (pepole) {
  let ul = document.querySelector('ul');
  ul.innerHTML = '';
  pepole.forEach(p => {
    if (p.new_member){
      ul.innerHTML += `<li>${p.name} <span class="badge badge-danger">new</span></li>`
    } else {
      ul.innerHTML += `<li>${p.name}</li>`;
    };
  });
};

create_navbar(pepole);
