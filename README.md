# StoryDots-App

Aplicación creada para challenge de SroyDots, la misma cuenta con una vista principal en la que se podrán ver todos los productos traídos desde el backend y un paginado
para irlos cambiando de 3 en 3. Sobre el margen derecho del paginado se visualiza un botón "Entrar Como Administrador", dando click al mismo nos redirigirá a un componente
login donde tendremos que validar nuestras credenciales, para posteriormente, ser redirigidos al panel de administrador, en el mismo se visualizaran todos los productos,
esta vez sin paginado y con dos botones en cada carta de cada producto, uno para editar el producto y otro para eliminarlo. Dando click al botón de eliminar se eliminara 
el producto y dando click al botón editar se abrirá una ventana modal, la cual contiene un formulario y en el mismo se imprimirán en primera instancia los valores 
actuales del producto, luego en el mismo podemos formulario podemos cambiarlos por los valores que queramos.
Sobre el renderizado de los productos se verán dos botones uno "Cerrar Sesión" presionando el mismo la sesión se cerrará y seré redirigido nuevamente a la ventana de inicio,
el otro botón "Cargar producto" abrirá nuevamente una ventana modal con un formulario, pero estaba ves con los valores en blanco y cuya acción es cargar un nuevo producto.


Credenciales para entrar como administrador:

email: admin@admin.com
password: admin


Para correr la aplicación en el local hostal entrar al directorio Api y en la terminal correr el comando "npm run dev".
Para correr el cliente desde el directorio Client correr el comando "npm run dev"


Stack utilizado:

La aplicación fue desarrollada con Node js, postreSQL, sequelize y express en el Backend, el mismo fue deployado en fly.io

El Frontend fue construido con una aplicación de React,js creada mediante vite, a la misma se le añadió RTK QUERY para manejar los estados y fue deployado en Netlify.
