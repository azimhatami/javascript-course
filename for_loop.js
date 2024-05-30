// Control structure for loop

for (var i = 0; i < 11; i++) {
  console.log(i);
};

// Control structure nested loop

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 2; j++) {
    console.log(i * j)
  };
};


for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    // document.write('*');
  };
  // document.write('<br>');
};


for (var i = 1; i <= 10; i++) {
  var stars = '';
  for (var j = 1; j <= 10; j++) {
    stars += '*';
  };
  console.log(stars);
};
