<template>
  <div id="app" class="app-container">
    <h1 class="app-title">Aplicación de Cifrado</h1>

    <NavigationMenu @navigate="handleNavigation" />

    <div class="content-container">
      <div v-if="currentMethod === 'StreamCipher'" class="cipher-container">
        <StreamCipher />
      </div>
      <div v-else-if="currentMethod === 'DigitalSignature'" class="cipher-container">
        <DigitalSignature />
      </div>
      <div v-else-if="currentMethod === 'HashWhirlpool'" class="cipher-container">
        <HashWhirlpool />
      </div>
      <div v-else-if="currentMethod === 'CifradoCesar'" class="cipher-container">
        <CifradoCesar />
      </div>
      <div v-else-if="currentMethod === 'CifradoEscitala'" class="cipher-container">
        <CifradoEscitala />
      </div>
      <div v-else-if="currentMethod === 'AboutComponent'" class="about-container">
        <AboutComponent />
      </div>
    </div>
  </div>
</template>

<script>
import StreamCipher from './components/StreamCipher.vue';
import DigitalSignature from './components/DigitalSignature.vue';
import HashWhirlpool from './components/HashWhirlpool.vue';
import CifradoCesar from './components/CifradoCesar.vue';
import CifradoEscitala from './components/CifradoEscitala.vue';
import AboutComponent from './components/AboutComponent.vue';
import NavigationMenu from './components/NavigationMenu.vue';

export default {
  name: 'App',
  components: {
    StreamCipher,
    DigitalSignature,
    HashWhirlpool,
    CifradoCesar,
    CifradoEscitala,
    AboutComponent,
    NavigationMenu
  },
  data() {
    return {
      currentMethod: 'StreamCipher' // Método por defecto
    };
  },
  methods: {
    handleNavigation(method) {
      this.currentMethod = method; // Cambia el método actual según el botón presionado
    }
  }
};
</script>

<style>
.app-container {
  max-width: 800px; /* Ajusta el ancho máximo */
  margin: 0 auto; /* Centrar el contenido */
  padding: 20px;
  background-color: #f8f9fa; /* Fondo claro */
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.app-title {
  text-align: center;
  color: #343a40; /* Color del título */
  margin-bottom: 20px;
  font-size: 2rem; /* Tamaño de fuente grande */
}

.content-container {
  padding: 20px;
  background-color: #ffffff; /* Fondo blanco para el contenido */
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navigation-menu {
  margin-bottom: 20px;
}

.navigation-menu ul {
  list-style: none;
  padding: 0;
}

.navigation-menu li {
  display: inline;
  margin-right: 15px;
  cursor: pointer;
  color: #007bff; /* Color del texto */
  text-decoration: underline; /* Subrayado para parecer un enlace */
}

.navigation-menu li:hover {
  color: #0056b3; /* Color al pasar el mouse */
}

/* Estilos para cada método de cifrado */
.cipher-container {
  margin-bottom: 20px; /* Espacio entre métodos */
}

.about-container {
  padding: 20px;
  background-color: #f1f1f1; /* Fondo claro para Acerca de */
  border-radius: 5px;
}
</style>
