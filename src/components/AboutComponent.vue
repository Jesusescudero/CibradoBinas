<template>
  <div class="about-container">
    <!-- Encabezado del caso de estudio -->
    <div class="header">
      <h1>INGENIERIA EN TECNOLOGÍAS DE LA INFORMACIÓN: ÁREA DESARROLLO DE SOFTWARE MULTIPLATAFORMA</h1>
      
      <p>BINA: 6</p>
      <p>20221042 – JESUS ISRAEL ESCUDERO REYES</p>
      <p>20221074 – JONATHAN GARCIA MARTINEZ</p>
      <p>CUATRIMESTRE: “7” 	GRUPO “B”</p>
    </div>

    <!-- Texto de la sección Acerca de -->
    <h2>Acerca de la Aplicación</h2>
    <p>
      Esta aplicación utiliza métodos de cifrado y hashing implementados tanto en Vue.js como en React.
      A continuación, se explican las decisiones de implementación y cómo se integraron los métodos en ambos frameworks:
    </p>

    <h3>Decisiones de Implementación en Vue.js</h3>
    <p>
      En Vue.js, se utilizaron bibliotecas como <strong>CryptoJS</strong> para manejar el cifrado (por ejemplo, RC4) y el hashing (SHA256). 
      Se decidió encapsular la lógica de cifrado y descifrado en componentes reutilizables, aprovechando la reactividad de Vue para actualizar la UI 
      en tiempo real conforme el usuario interactúa con los inputs. Además, se implementaron botones para copiar las salidas cifradas y verificadas 
      al portapapeles, mejorando la experiencia del usuario.
    </p>

    <h4>Detalles de la implementación en Vue.js:</h4>
    <ul>
      <li>Uso de <code>CryptoJS</code> para operaciones de cifrado y hashing.</li>
      <li>Los métodos de cifrado y descifrado están encapsulados dentro de componentes de Vue, utilizando la API de composición de Vue 3.</li>
      <li>Se implementaron validaciones para verificar que los datos ingresados por el usuario son correctos antes de realizar cualquier operación criptográfica.</li>
      <li>Utilización de <code>ref()</code> para gestionar los datos reactivos como los resultados del cifrado y la clave.</li>
      <li>Integración de la librería <code>vue-toastification</code> para proporcionar retroalimentación visual al usuario cuando se copian datos o cuando ocurre algún error.</li>
    </ul>

    <h3>Decisiones de Implementación en React</h3>
    <p>
      La parte implementada en React sigue una estructura similar, utilizando también <strong>CryptoJS</strong> para las operaciones de cifrado y hashing. 
      Se decidió utilizar los hooks de React como <code>useState</code> para gestionar los datos de entrada y salida, actualizando el DOM cuando se generan las firmas digitales 
      o los hashes. Al igual que en Vue, se proporciona la capacidad de copiar las salidas al portapapeles para mejorar la usabilidad.
    </p>

    <h4>Detalles de la implementación en React:</h4>
    <ul>
      <li>Uso de <code>CryptoJS</code> para operaciones de cifrado y hashing.</li>
      <li>Uso de <code>useState</code> para almacenar los valores cifrados y los hashes de forma reactiva.</li>
      <li>Se integraron validaciones en los formularios de entrada para asegurar que los datos sean válidos antes de realizar operaciones de cifrado o hashing.</li>
      <li>Integración de funciones de copia al portapapeles para mejorar la experiencia del usuario.</li>
    </ul>

    <p>
      En resumen, ambas implementaciones siguen un enfoque similar, adaptándose a las características específicas de cada framework. Vue.js aprovecha la 
      reactividad de sus <code>ref()</code> y React se apoya en <code>useState</code> para gestionar el estado de las aplicaciones. Ambos frameworks utilizan 
      <code>CryptoJS</code> como la biblioteca base para las operaciones criptográficas.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent'
};
</script>

<style scoped>
.about-container {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;
}

.header h3 {
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
}

.header p {
  font-size: 16px;
  color: #555;
  margin: 5px 0;
}

h2, h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
}

p, ul {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

ul {
  padding-left: 20px;
  margin-top: 10px;
}

li {
  margin-bottom: 8px;
}

h4 {
  font-size: 20px;
  color: #333;
  margin-top: 20px;
}
</style>
