# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

Inicialmente planteé el problema en terminos de parentesis "abiertos" versus parentesis "cerrados" en donde se le asignaba un valor positivo a "abiertos" y de manera similar un valor negativo a "cerrados", siempre que la sumatoria fuera igual a 0 la funcion retornaria true.

una vez finalizado este simple codigo encontre con que esta forma de afrontar el problema estaba errada ya que no evaluaba el tipo de parentesis "abierto" con el tipo del "cerrado" por lo que la cantidad no erA suficiente, pase entonces a contemplar que para cada parentesis "cerrado" encontrado el ultimo parentesis "abierto" deberia ser siempre del mismo tipo, de lo contrario la funcion retornaria false.

el codigo entonces se trata de iterar la string y añadir los parentesis "abiertos" a un array vacia, mientras que si encuentra un parentesis "cerrado" evaluara el ultimo parentesis "abierto" agregado al array, si coincide en su tipo lo removera de la array y continuara, de lo contrario la funcion retornara false.

Al final si la array tiene algun elemento no eliminado (length !== 0) retornara falso, en caso contrario la funcion retorna true.