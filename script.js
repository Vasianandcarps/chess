let a = prompt("Введите степень в которую нужно возвести 2 что бы посчитать количество зерен на доске")
let b=Math.pow(2,a);
let c=(b*0.065)/1000;
document.write("Количество зерен:"+b);
document.write("</br>");
document.write("Их вес:"+c+"кг");