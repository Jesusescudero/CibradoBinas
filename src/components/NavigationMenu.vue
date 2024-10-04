<template>
  <nav class="navigation-menu">
    <ul>
      <li @click="navigateTo('StreamCipher')">Cifrado RC4</li>
      <li @click="navigateTo('DigitalSignature')">Cifrado ECDSA</li>
      <li @click="navigateTo('HashWhirlpool')">Hash Whirlpool</li>
      <li @click="navigateTo('CifradoCesar')">Cifrado César</li>
      <li @click="navigateTo('CifradoEscitala')">Cifrado Escítala</li>
      <li @click="navigateTo('AboutComponent')">Acerca de</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenu',
  methods: {
    navigateTo(method) {
      this.$emit('navigate', method); // Emitir el evento con el método seleccionado
    }
  }
};
</script>

<style scoped>
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
</style>
