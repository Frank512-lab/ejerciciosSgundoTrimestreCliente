<?php

// Nombre del archivo XML donde se almacenarán los datos
$xmlFile = 'data.xml';

// En el siguiente bloque de código lo que se pretende es guardar en cada una de las variables los parámetrosrecibidos del formulario

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'] ?? '';
    $apellido1 = $_POST['apellido1'] ?? '';
    $apellido2 = $_POST['apellido2'] ?? '';
    $dni = $_POST['dni'] ?? '';
    $telefono = $_POST['telefono'] ?? '';
    $email = $_POST['email'] ?? '';
    $codigo_postal = $_POST['codigo_postal'] ?? '';
    $calle = $_POST['calle'] ?? '';
    $numero = $_POST['numero'] ?? '';
    $ciudad = $_POST['ciudad'] ?? '';

    // Creamos, si es que no existe, el archivo xml. Si ya existe, metemos los datos
    if (!file_exists($xmlFile)) {
        // Crear un XML base con la etiqueta <datos>
        $xml = new SimpleXMLElement('<datos></datos>');
    } else {
        
        $xml = simplexml_load_file($xmlFile);
    }

    // Añadimos cada uno de los registros al xml

    $registro = $xml->addChild('registro');
    $registro->addChild('nombre', htmlspecialchars($nombre));
    $registro->addChild('apellido1', htmlspecialchars($apellido1));
    $registro->addChild('apellido2', htmlspecialchars($apellido2));
    $registro->addChild('dni', htmlspecialchars($dni));
    $registro->addChild('telefono', htmlspecialchars($telefono));
    $registro->addChild('email', htmlspecialchars($email));
    $registro->addChild('codigo_postal', htmlspecialchars($codigo_postal));
    $registro->addChild('calle', htmlspecialchars($calle));
    $registro->addChild('numero', htmlspecialchars($numero));
    $registro->addChild('ciudad', htmlspecialchars($ciudad));

    // Guardamos el archivo xml
    
    $xml->asXML($xmlFile);

    
    echo 'Datos guardados correctamente.';
}
?>
