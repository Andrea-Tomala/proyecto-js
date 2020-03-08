console.log("hola mundo");   
    let user = "Andrea";
    console.log(user);
    user = "Daniel";
    console.log(user);

    user = 1234;
    console.log(user);
    user = true;
    console.log(user);

    const IVA = 12;
    console.log(IVA);

    //IVA = 14;
    //console.log(IVA);

    //OPERADORES ARITMETICOS
    let a = 3;
    let  b = "4"; //numero entre comillas si se resta y mukltiplica y divide NO SE RESTA
    let c = 4;
    let suma = c + a + b;
    console.log("LA SUMA ES:",suma);

    let resta = b-a;
    console.log("LA RESTA ES:", resta);

    let multi =  b*a;
    console.log("LA MULTIPLICACION ES:", multi); //si se puede multiplicar un numero entre comillas al igual que la resta

    let division =  b / a;
    console.log("LA division ES:", division);

    //OPERADORES BOOLEANAS
    let permisoMama = false;
    let permisoPapa = true;

    //let salir = permisoMama && permisoPapa;
    //let salir = permisoMama || permisoPapa; //alt+124 las barras. basta un verdadero para que sea verdadero
    let salir = !permisoPapa;
    console.log(salir);
    

    //CONDICIONALES
    if(permisoPapa && permisoMama) {
        console.log ("HOY SALIMOS");
    } else {
        console.log ("ME QUEDO EN CASA");
    }

    let numero = 1;
    if (numero){
        console.log("valor verdadero");
    } else {
        console.log("valor falso");
    }


    //CONTADOR
    let contador = 0;
    console.log(contador);
    contador++;
    console.log(contador);
    contador++;
    console.log(contador);
    contador++;
    console.log(contador);

    //RESTADOR
    let restador = 10;
    console.log(restador);
    restador--;
    console.log(restador);
    restador--;
    console.log(restador);
    restador--;
    console.log(restador);

    //ACUMULADOR
    let acumulador = 0;
    console.log(acumulador);
    acumulador += 2; // acumulador = acumulador + 2;
    console.log(acumulador);
    acumulador += 3;  //2+3=5
    console.log(acumulador);
    acumulador += 4;  //5+4=9
    console.log(acumulador);

    console.log('---------------'); 

    let acumulador2 = 1;
    acumulador2 *= 2; // acumulador2 = acumulador2 * 2;
    acumulador2 *= 3; // acumulador2 = acumulador2 * 3;
    console.log(acumulador2);
    
    console.log('---------------'); 
    let acumulador3 = 10;
    acumulador2 /= 2; // acumulador3 = acumulador3 / 2;
    acumulador2 /= 3; // acumulador3 = acumulador3 / 3;
    console.log(acumulador3);


    //BUCLE
    for(let i=10; i>=0; i--){
    //if(i==99) debugger;
    console.log(i);
    }

    let i = 0;
    while(i< 10){
        console.log(i);
        i++;
    }

    i=0;
    do{ 
        console.log(i);
        i++;

    }while(i<=10);


    console.log('---------------'); 

    //FOR anidado EJERCICIOS
    for(let i = 1; i<=30; i++){
        let numeroImprimir = "";
        for(let j=1; j<=i; j++){
            numeroImprimir+=i;
        }
        console.log(numeroImprimir)

    }
    console.log('---------------'); 

    //FUNCIONES
    let resultado = cuadrado(4); //puede ir abajo con el console
    function cuadrado(numero){
        return numero * numero;
    }
    console.log(resultado);
    console.log('---------------');


    function sumar(a = 1, b = 1){
        return a + b;
    }
    console.log(sumar());


    function sumar2(a, b){
        return a + b;
    }
    console.log(sumar2(50, 10));

    //OBJETO
    console.log('---------------');

    let persona = {
          nombre: ['Bob', 'Smith'], //arreglos
          edad: 32,
          genero: 'masculino',
          intereses: ['música', 'esquí'],
          bio: function() {
            alert(
              this.nombre[0] +
                '' +
                this.nombre[1] +
                ' tiene ' +
                this.edad +
                ' años. Le gusta ' +
                this.intereses[0] +
                ' y ' +
                this.intereses[1] +
                '.'
            );
          },
          saludo: function() {
            alert('Hola, Soy ' + this.nombre[0] + '. ');
          },
        };


    console.log(persona.edad);
    //persona.saludo();

    //arreglos
    let cars = ['Saab', 'Volvo', 11213, {nombre:'Thian'}];
    //console.log(cars[0]);
    //console.log(cars[1]);
    //console.log(cars[2]);
    //console.log(cars[3]);

    //debugger;
    for(let i = 0; i < cars.length; i++){
        console.log(cars[i]);
    }
    

    //funcion de arreglos
    //bucle sobre un array
    cars.forEach(function(item, index) {
        //debugger;
        console.log(item);
    });

    console.log('---------------');

    ////añadir eleemento al final de un array //1 de marzo
    
    let nuevaLongitud = cars.push("Ford");
    console.log(nuevaLongitud, cars);
    
    cars.pop(); //sin valor dentro de pop siempre elimina el ultimo
    console.log('Cars', cars);

    cars.pop();
    //cars.pop(); //elimina los 2 ultimos con 2 pop
    console.log('Cars', cars);

    console.log('---------------');

    cars.unshift('Chevrolet');
    console.log('Cars', cars);

    cars.shift();
    console.log('Cars', cars);
    
    console.log('---------------');

    let posicion = cars.indexOf(11213);
    console.log('Posicion', posicion);      

    console.log('---------------');

    //cars.splice (2, 1) //(posicion2, 1elemento)
    //console.log('Cars', cars);

    //cars.splice(0, 2); // apartir del primer elemento se borran 2
    //console.log('Cars', cars);

    cars.splice(1); //elimina a partir delprimero todos lo que siguen 
    console.log('Cars', cars);






