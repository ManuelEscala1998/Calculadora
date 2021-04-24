function operacion(a,b,c) {
if (c == 1){
  console.log('Estoy sumando')
  console.log('El resultado es' , a+b)
}
else if (c == 2){
  console.log('Estoy restando')
  console.log('El resultado es ' ,a-b)
}
else if (c == 3){
  console.log('Estoy multiplicando')
  console.log('El resultado es ' ,a*b)
}
else if (c == 4){
  console.log('Estoy dividiendo')
  console.log('El resultado es',a/b)
}  

else {
  console.log('Opcion no valida')
} 

}

console.log('Calculadora');

let continuar = 's';
while (continuar ==  's')

{

numero1 = parseInt(prompt('Diga el numero uno'))
numero2 = parseInt(prompt('Diga el numero dos'))
operaciones = prompt('Que operacion deseas hacer sumar (1) ,  restar(2),  multiplicar(3), dividir (4)')

operacion(numero1,numero2,operaciones)

continuar = prompt('Desea continuar (s/n)')
}

console.log('Fin del programa Gracias')