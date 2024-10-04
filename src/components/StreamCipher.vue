<template>
  <div class="cipher-container">
    <h4>Cifrado RC4</h4>

    <!-- Botón para mostrar explicación del cifrado RC4 -->
    <button @click="mostrarExplicacionCifrado = !mostrarExplicacionCifrado" class="btn">
      {{ mostrarExplicacionCifrado ? 'Ocultar' : 'Mostrar' }} explicación del cifrado RC4
    </button>
    <p v-if="mostrarExplicacionCifrado">
      RC4 es un cifrado de flujo en el que los datos se cifran byte por byte usando una clave secreta.
      Aunque es rápido y simple, ha sido considerado inseguro para muchas aplicaciones modernas.
    </p>

    <textarea v-model="textToEncrypt" placeholder="Texto a cifrar"></textarea>
    <input v-model="key" placeholder="Clave" />
    <button @click="encrypt">Cifrar</button>

    <p class="result">
      Texto Cifrado: <span class="ciphered-text">{{ encryptedText }}</span>
      <button @click="copyToClipboard(encryptedText)">Copiar</button>
    </p>

    <textarea v-model="encryptedText" placeholder="Texto cifrado a descifrar"></textarea>
    <input v-model="key" placeholder="Clave para descifrar" />
    <button @click="decrypt">Descifrar</button>

    <p class="result">
      Texto Descifrado: <span class="decrypted-text">{{ decryptedText }}</span>
      <button @click="copyToClipboard(decryptedText)">Copiar</button>
    </p>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js';

export default {
  name: 'StreamCipher',
  data() {
    return {
      textToEncrypt: '',
      key: '',
      encryptedText: '',
      decryptedText: '',
      mostrarExplicacionCifrado: false, // Estado para mostrar/ocultar la explicación del cifrado
    };
  },
  methods: {
    encrypt() {
      if (!this.textToEncrypt || !this.key) {
        alert('Por favor, ingresa el texto a cifrar y la clave.');
        return;
      }
      try {
        this.encryptedText = CryptoJS.RC4.encrypt(this.textToEncrypt, this.key).toString();
      } catch (error) {
        console.error('Error al cifrar:', error);
        alert('Hubo un error al cifrar el texto. Por favor, revisa los datos ingresados.');
      }
    },
    decrypt() {
      if (!this.encryptedText || !this.key) {
        alert('Por favor, ingresa el texto cifrado y la clave.');
        return;
      }

      try {
        const decrypted = CryptoJS.RC4.decrypt(this.encryptedText, this.key);
        const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

        if (!decryptedText) {
          throw new Error('Clave incorrecta o datos corruptos');
        }

        this.decryptedText = decryptedText;
      } catch (error) {
        console.error('Error al descifrar:', error);
        alert('Error al descifrar: clave incorrecta o texto cifrado inválido.');
      }
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles!');
      }).catch(err => {
        console.error('Error al copiar el texto:', err);
      });
    }
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

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
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

.ciphered-text,
.decrypted-text {
  display: block;
  overflow-wrap: break-word;
  max-width: 100%;
}
</style>
