# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

Inicialmente reformule el problema en terminos que me permitieran visualizar de mejor manera lo requerido y el resultado fue: "todas las posibles sumatorias de [1, 2] que sumen exactamente N", teniendo en consideracion que el orden importa, si el primer numero es 1 todas las posibles sumatorias de ahi en mas seran inmediatamente distintas de las sumatorias iniciadas en 2 por lo  que las posibilidades inmediatamente saltan a los miles de millones. (tambien considere el caso contrario en donde el orden no importa, en cuyo caso el output es 51 para un N=100).

La primera respuesta que contemple fue una recursion en donde, mientras la sumatoria sea distinta de N, entre a un ciclo 'for' que sume 1 o 2 y llame nuevamente a la funcion y asi una y otra vez. Cada vez que la sumatoria sea igual a N se sumara 1 al contador de posibilidades.

Esto produjo un error inesperado y es el desbordamiento del Call Stack ya que javascript no maneja adecuadamente la recursion de numeros grandes por su diseño, para este problema encontre dos posibles soluciones:

1. la refactorizacion del codigo pasando de recursion a iteracion usando mas ciclos 'for'.

2. la implementasion de una funcion 'trampolin' la cual evita el desbordamiento del Call Stack asegurando la finalizacion de un ciclo de recursion antes de ir al siguiente.

Considere la segunda opcion teniendo en cuenta que la primera aumenta la Time Complexity del algoritmo, sin embargo encontre algunos problemas adicionales en la impementacion de dicha funcion por lo que, aunque el codigo es aparentemente mas limpio, corto y eficiente posiblemente seria mas recomendable la refactorizacion del codigo a una iteracion multiple por lo menos en lo que respecta al uso del mismo en javascript.