1. Para crear una app en Angular CLI:
	ng new nombreApp
2. Para levantar el servidor: ng serve (-p numeroPuerto)(4200 por defecto)

3. Para crear un componente de forma automatica:
	ng generate component nombreCarpeta (ejemplo: ng g c components/footer)

4. Instalar el bootstrap:
	
	4.1: Utilizar con CDN: Es el link que utilizamos en bootstrap, si otras paginas usan esa referencia no se carga nuevamente el arcivho, simplemente se consulta la cache.
	
	4.2: Utilizarla de forma local: se da donde dice descargar en la pagina, se copia la carpeta que se llama dist, nos vamos a nuestro proyecto y en ella vamos a assets, creamos una carpeta que se llama libs y y renombamos la carpeta como bootstrap

	4.3: Para instalarlo completamente, con un comando: npm install bootstrap --save (Para decirle que es una liberia que necesita, lo coloca dentro de los modulos de node)
	Otras cosas que son necesarias instalar:
		1. npm install jquery --save
		2. npm install popper.js --save
	Hay que modificar el archivo angular.json:
		"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.slim.min.js",
              "node_modules/popper.js/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"

            ]


5. Crear Pipes personalizados desde la consola: ng g p url ejemplo: ng g ppipes/domseguro

6. Crear modulos personalizados: ng g module material --flat (--flat permite que se cree solo un archivo)

7. Para agregar un componente a un modulo en especifico: ng g c comoponents/mapa --module=app.module

Desplegar una aplicación: 
Se debe generar una carpeta dist que servira para el despliegue pero aun no es para desplegarla, es como un predespligue
se ejecuta en consola:
ng build

*********************************************************************
Instalar rapidamente un servidor de node:  npm install http-server -g

1. Navegamos a la carpeta dist en el cmd, y en el colocamos:
	http-server -o
*********************************************************************

Configurando app para producción:
1. en enviroment.ts cambiar el valor de producción a true
2. ejecutar en consola: ng build --prod

Para las funcionalidades "nuevas de virtual scroll y drag and drop"