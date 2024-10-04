<template>
  <div class="cipher-container">
    <h2>Métodos de Cifrado</h2>
    <div class="cipher">
      <h3>Cifrado RC4</h3>
      <RC4Cipher />
    </div>
    <div class="cipher">
      <h3>Firma Digital ECDSA</h3>
      <ECDSASigner />
    </div>
    <div class="cipher">
      <h3>Hashing con Whirlpool</h3>
      <WhirlpoolHash />
    </div>
  </div>
</template>

<script>
import RC4Cipher from './StreamCipher.vue'; 
import ECDSASigner from './DigitalSignature.vue'; 
import WhirlpoolHash from './HashWhirlpool.vue'; 

export default {
  components: {
    RC4Cipher,
    ECDSASigner,
    WhirlpoolHash
  }
};
</script>

<style scoped>
.cipher-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.cipher {
  margin-bottom: 20px;
}

h2 {
  text-align: center;
  color: #333;
}

h3 {
  color: #007bff;
}
</style>
