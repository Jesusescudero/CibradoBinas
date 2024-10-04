<template>
  <div class="ecdsa-container">
    <h4>Firma Digital ECDSA</h4>

    <!-- Botón para mostrar explicación del ECDSA -->
    <button @click="mostrarExplicacionECDSA = !mostrarExplicacionECDSA" class="btn">
      {{ mostrarExplicacionECDSA ? 'Ocultar' : 'Mostrar' }} explicación del ECDSA
    </button>
    <p v-if="mostrarExplicacionECDSA">
      ECDSA (Elliptic Curve Digital Signature Algorithm) es un algoritmo que utiliza 
      curvas elípticas para generar firmas digitales. Estas firmas permiten verificar 
      la autenticidad de un mensaje sin revelar la clave privada.
    </p>

    <textarea v-model="message" placeholder="Mensaje a firmar"></textarea>
    <input v-model="privateKey" placeholder="Clave privada" />

    <button @click="signMessage">Firmar</button>

    <p class="result" v-if="signature">
      Firma: <span class="signature">{{ signature }}</span>
      <button @click="copyToClipboard(signature)">Copiar</button>
    </p>

    <input v-model="publicKey" placeholder="Clave pública para verificar" />
    <button @click="verifyMessage">Verificar Firma</button>

    <p class="result">
      Verificación: <span class="verification">{{ verificationMessage }}</span>
    </p>
  </div>
</template>

<script>
import { ec as EC } from 'elliptic'; // Usamos 'elliptic' para la firma ECDSA
import { ref } from 'vue';

export default {
  name: 'ECDSAComponent',
  setup() {
    const ec = new EC('secp256k1'); // Usamos la curva secp256k1 (la misma utilizada en Bitcoin)
    const message = ref('');
    const privateKey = ref('');
    const publicKey = ref('');
    const signature = ref('');
    const verificationMessage = ref('');
    const mostrarExplicacionECDSA = ref(false); // Estado para mostrar/ocultar la explicación

    const signMessage = () => {
      if (!message.value || !privateKey.value) {
        alert('Por favor, ingrese el mensaje y la clave privada.');
        return;
      }

      try {
        const keyPair = ec.keyFromPrivate(privateKey.value);
        const msgHash = ec.hash().update(message.value).digest(); // Hash del mensaje
        const sig = keyPair.sign(msgHash); // Firma del mensaje
        signature.value = sig.toDER('hex'); // Convertimos la firma a hexadecimal
      } catch (error) {
        console.error('Error al firmar el mensaje:', error);
        alert('Error al firmar el mensaje.');
      }
    };

    const verifyMessage = () => {
      if (!message.value || !publicKey.value || !signature.value) {
        alert('Por favor, ingrese el mensaje, la clave pública y la firma.');
        return;
      }

      try {
        const keyPair = ec.keyFromPublic(publicKey.value, 'hex');
        const msgHash = ec.hash().update(message.value).digest();
        const isValid = keyPair.verify(msgHash, signature.value);
        verificationMessage.value = isValid ? 'Firma válida' : 'Firma inválida';
      } catch (error) {
        console.error('Error al verificar la firma:', error);
        alert('Error al verificar la firma.');
      }
    };

    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles!');
      }).catch(err => {
        console.error('Error al copiar el texto:', err);
      });
    };

    return {
      message,
      privateKey,
      publicKey,
      signature,
      verificationMessage,
      signMessage,
      verifyMessage,
      copyToClipboard,
      mostrarExplicacionECDSA,
    };
  }
};
</script>

<style scoped>
.ecdsa-container {
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

.signature,
.verification {
  display: block;
  overflow-wrap: break-word;
  max-width: 100%;
}
</style>
