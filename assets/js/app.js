let radius;
let height;
let cylinder;
let pi_number;


radius = prompt('Введіть радіус основи циліндра', '');
height = prompt('Введіть висоту циліндра', '');

let radius_cube = Number(radius * radius);
height = Number(height)
pi_number = 3.14

cylinder = (pi_number * radius_cube * height);

alert(cylinder);
