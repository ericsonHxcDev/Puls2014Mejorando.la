

var $form=$('#formulario'),
	$titulo=$('#titulo'),
	$url=$('#url'),
	$post=$('.item').first(),
	$contenido=$('#contenido'),
	$mostrarForm=$('#mostrarForm'),
	$agregarPost=$('#agregar');

function mostrarForm(){
	$form.slideToggle();
	return false;
}

function agregarPost(){
	$clone=$post.clone();
	$clone.hide();
	$clone.find('.titulo_item a').text($titulo.val())
			.attr('href',$url.val());
	$contenido.prepend($clone);
	$clone.fadeIn();
	return false;
}

$mostrarForm.click(mostrarForm);

$agregarPost.on('click',agregarPost);



