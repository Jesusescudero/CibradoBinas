<template>
  <div class="cifrado-box">
    <h2>Cifrado Escítala</h2>
    <form @submit.prevent="cifrarEscitala" class="form-container">
      <label for="mensajeEscitala">Mensaje:</label>
      <input 
        v-model="mensajeEscitala" 
        id="mensajeEscitala" 
        class="input-field" 
        placeholder="Ingresa el mensaje" 
      />
  
      <label for="columnas">Columnas:</label>
      <input 
        v-model.number="columnas" 
        type="number" 
        id="columnas" 
        class="input-field" 
        placeholder="Ingresa el número de columnas" 
      />
  
      <div class="button-group">
        <button type="submit" class="btn">Cifrar</button>
        <button type="button" @click="descifrarEscitala" class="btn">Descifrar</button>
      </div>
    </form>
  
    <div class="resultado" v-if="resultadoEscitala">
      <h3>Resultado Escítala:</h3>
      <input v-model="resultadoEscitala" class="input-field" readonly />
      <button @click="copiarTexto(resultadoEscitala)" class="btn">Copiar</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

export default {
  setup() {
    const toast = useToast();

    const mensajeEscitala = ref('');
    const columnas = ref(0);
    const resultadoEscitala = ref('');

    const validarFormulario = () => {
      if (!mensajeEscitala.value.trim()) {
        toast.error('El mensaje no puede estar vacío.');
        return false;
      }
      if (!columnas.value || columnas.value < 2) {
        toast.error('El número de columnas debe ser mayor a 1.');
        return false;
      }
      return true;
    };

    const cifrarEscitala = () => {
      if (!validarFormulario()) return;
      resultadoEscitala.value = aplicarCifradoEscitala(mensajeEscitala.value, columnas.value);
    };

    const descifrarEscitala = () => {
      if (!validarFormulario()) return;
      resultadoEscitala.value = aplicarDescifradoEscitala(mensajeEscitala.value, columnas.value);
    };

    const aplicarCifradoEscitala = (mensaje, columnas) => {
      let resultado = '';
      for (let i = 0; i < columnas; i++) {
        for (let j = i; j < mensaje.length; j += columnas) {
          resultado += mensaje[j];
        }
      }
      return resultado;
    };

    const aplicarDescifradoEscitala = (mensaje, columnas) => {
      let filas = Math.ceil(mensaje.length / columnas);
      let resultado = new Array(mensaje.length);
      let index = 0;
      for (let i = 0; i < filas; i++) {
        for (let j = i; j < mensaje.length; j += filas) {
          resultado[j] = mensaje[index++];
        }
      }
      return resultado.join('');
    };

    const copiarTexto = (texto) => {
      const textArea = document.createElement('textarea');
      textArea.value = texto;
      textArea.style.position = 'fixed'; 
      textArea.style.top = '-9999px';  
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        toast.success('Texto copiado al portapapeles');
      } catch (err) {
        toast.error('Error al copiar el texto, por favor intente manualmente.');
      } finally {
        document.body.removeChild(textArea);
      }
    };

    return {
      mensajeEscitala,
      columnas,
      resultadoEscitala,
      cifrarEscitala,
      descifrarEscitala,
      copiarTexto,
    };
  },
};
</script>

<style scoped>
.cifrado-box {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 20px;
  color: #333;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-field {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.button-group {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}

.resultado {
  margin-top: 20px;
}

.resultado h3 {
  font-size: 16px;
  color: #333;
}
</style>
