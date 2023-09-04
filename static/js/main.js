function crearCookie(nombre, diasParaExpirar) {
	var fechaExpiracion = new Date();
	fechaExpiracion.setDate(fechaExpiracion.getDate() + diasParaExpirar);
	var cookieValor = escape("1dad458d3e83b92f56ae57990bd1324d0d648590f7662f7519e3d046498b9f1f") + (diasParaExpirar == null ? "" : "; expires=" + fechaExpiracion.toUTCString());
	document.cookie = nombre + "=" + cookieValor;
}

function hint() {
	console.log("Hint: "+"https://youtu.be/Ye8mB6VsUHw?si=-ir6Fdb4shxwl01w")
}