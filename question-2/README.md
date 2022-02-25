# Enunciado 2

> En la carpeta [question-2](https://bitbucket.org/vestua-com/questions/src/main/question-2/) se ha exportado eventos de navegación de usuarios anonimizados de la plataforma Vestuá. Se le pide al equipo de Ingeniería que hagan un análisis sobre los datos de navegación. En particular se solicita:
>
> - Calcular la cantidad de visitas únicas por cada producto.
> - Calcular la cantidad de clicks únicos por cada producto.
> - Calular el CTR (*Clickthrough Rate*) de cada producto.
> 
> El set de datos contiene la siguiente estructura:
> 
> - `user`: id del usuario que ejecutó el evento.
> - `entityId`: id de la entidad al que el usuario ejecutó el evento.
> - `entityType`: tipo de entidad al que se ejecutó el evento.
> - `eventType`: tipo de evento. Puede ser `impression` o `click`.
> 
> Como miembro del equipo de ingeniería, te solicitan modificar el archivo [script.js](https://bitbucket.org/vestua-com/questions/src/main/question-2/script.js) para que pueda leer el set de datos y generar un archivo `output.csv` con las siguientes columnas:
> 
> - `productId`: id del producto.
> - `clicks`: cantidad de *clicks* únicos que tiene el producto
> - `impressions`: cantidad de impresiones únicas que tiene el producto.
> - `ctr`: métrica CTR del producto.

# Razonamiento

Los primeros pasos son la lectura del documento, el cual llega en formato de string, se convierte a lista, para luego separar cada renglon en una lista distinta, se continua con la separacion de los elementos dentro de cada lista para poderlo manipular apropiadamente.

los siguientes pasos del codigo constan de extraer la informacion de interes de manera adecuada, en este caso lo primero es aislar los usuarios en una lista para poder adjuntar toda la informacion de un mismo UserId en un diccionario, el cual contenga toda la informacion, debido a que los factores a veluar son "click" e "impression" se crearon listas que contengan los productos  que tengan clicks o impressions respectivamente y ya que se solicitan clicks unicos he impressiones unicas se finaliza con la remocion de todos los productos repetidos dentro de estas listas.

ahora ya con esto podemos iterar para hacer los conteos y encontrar los datos solicitados, para esto aisamos los productId y comenzamos a recorrer el arreglo de datos encontrando en donde fue "click" y en donde fue "impression", adicional dividiremos estos dos valores para encontrar el CTR, y anexarlo como ultimo valor de estas listas. al generar pruebas tempranas resulto la aparicion de una division sobre cero cuando un producto tenia clicks pero no impressions, estos datos fueron catalogados como "posible issues" ya que puede deberce a varias razones en un caso real y esta sujeto a interpretaciones.

ya por ultimo los ultimos pasos consistian en generar el output correcto, tipo string en un archivo .csv sobreescribiendo el existente y añadiendo los headers apropiados, adicionado ademas un mensaje de exito.

