<template>
  <div class="cipher-container">
    <h4>Hashing con SHA256</h4>

    <!-- Botón para mostrar explicación -->
    <button @click="mostrarExplicacionHashing = !mostrarExplicacionHashing" class="btn">
      {{ mostrarExplicacionHashing ? 'Ocultar' : 'Mostrar' }} explicación del hashing
    </button>
    <p v-if="mostrarExplicacionHashing">
      SHA256 es un algoritmo de hashing que convierte el texto en un valor hash
      de 256 bits. Este proceso es unidireccional, lo que significa que no se 
      puede revertir el hash para obtener el texto original.
    </p>

    <textarea v-model="textToHash" placeholder="Texto a hashear"></textarea>
    <button @click="hashText">Generar Hash</button>
    
    <p class="result">
      Hash: <span class="hash">{{ hash }}</span>
      <button @click="copyToClipboard(hash)">Copiar</button>
    </p>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
import { ref } from 'vue';

export default {
  name: 'SHA256Hash',
  setup() {
    const textToHash = ref('');
    const hash = ref('');
    const mostrarExplicacionHashing = ref(false); // Estado para mostrar/ocultar la explicación

    const hashText = () => {
      hash.value = CryptoJS.SHA256(textToHash.value).toString();
    };

    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles!');
      }).catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
    };

    return {
      textToHash,
      hash,
      hashText,
      copyToClipboard,
      mostrarExplicacionHashing,
    };
  }
};
</script>

<style scoped>
.cipher-container {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow-y: auto;
  resize: vertical;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

button:hover {
  background-color: #0056b3;
}

.result {
  margin-top: 10px;
  font-weight: bold;
}

.hash {
  display: block;
  overflow-wrap: break-word;
  max-width: 100%;
}
</style>
