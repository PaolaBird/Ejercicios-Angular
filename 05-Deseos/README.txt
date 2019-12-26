Aplicaciones de Ionic
1. Instalar Ionic en el pc: npm install -g ionic
2. Para crear una aplicacion: 
	2.1 ionic start nombreApp tabs
	2.2 ionic start nombreApp blank
	2.3 ionic start nombreApp sidemenu
3. Para levantar el servidor: ionic serve
4. Para ejecutar conjuntamente con la app devapp: ionic serve --devapp
	4.1 Si no se ejecuta, probar:
		4.1.1 Instalar cordova: npm install -g cordova ionic
		4.1.2 Ejecutar: iconic cordova prepare
		4.1.3 Ejecutar ionic serve --devapp, si en la devapp no sale, probar con la ip que muestra en cmd

5. Generar servicios con ionic: ionic g s ubicacion/NombreServicio 
	5.1 Para no crear los archivos de pruebas: ionic g s ubicacion/NombreServicio --skipTests=true