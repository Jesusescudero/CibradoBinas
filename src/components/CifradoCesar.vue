<template>
  <div class="cifrado-box">
    <h2>Cifrado César</h2>
    <form @submit.prevent="cifrarCesar" class="form-container">
      <label for="mensajeCesar">Mensaje:</label>
      <input 
        v-model="mensajeCesar" 
        id="mensajeCesar" 
        class="input-field" 
        placeholder="Ingresa el mensaje" 
      />
  
      <label for="desplazamiento">Desplazamiento:</label>
      <input 
        v-model.number="desplazamiento" 
        type="number" 
        id="desplazamiento" 
        class="input-field" 
        placeholder="Ingresa el desplazamiento (1-25)" 
      />
  
      <div class="button-group">
        <button type="submit" class="btn">Cifrar</button>
        <button type="button" @click="descifrarCesar" class="btn">Descifrar</button>
      </div>
    </form>
  
    <div class="resultado">
      <h3>Resultado César:</h3>
      <input v-model="resultadoCesar" class="input-field" readonly />
      <button @click="copiarTexto(resultadoCesar)" class="btn">Copiar</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

export default {
  setup() {
    const toast = useToast(); // Inicializamos useToast para notificaciones
  
    const mensajeCesar = ref('');
    const desplazamiento = ref(0);
    const resultadoCesar = ref('');

    // Función para validar el formulario
    const validarFormulario = () => {
      if (!mensajeCesar.value) {
        toast.error('El mensaje no puede estar vacío.');
        return false;
      }

      if (!desplazamiento.value || desplazamiento.value < 1 || desplazamiento.value > 25) {
        toast.error('El desplazamiento debe ser un número entre 1 y 25.');
        return false;
      }

      return true;
    };

    // Función para cifrar con el Cifrado César
    const cifrarCesar = () => {
      if (!validarFormulario()) return; // Si no pasa las validaciones, detener el proceso
      resultadoCesar.value = aplicarCifradoCesar(mensajeCesar.value, desplazamiento.value);
    };

    // Función para descifrar con el Cifrado César
    const descifrarCesar = () => {
      if (!validarFormulario()) return; // Si no pasa las validaciones, detener el proceso
      resultadoCesar.value = aplicarDescifradoCesar(mensajeCesar.value, desplazamiento.value);
    };

    // Algoritmo para cifrar con César
    const aplicarCifradoCesar = (mensaje, desplazamiento) => {
      return mensaje.replace(/[a-zA-Z]/g, (char) => {
        const codigo = char.charCodeAt(0);
        if (codigo >= 65 && codigo <= 90) {
          return String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
        }
        if (codigo >= 97 && codigo <= 122) {
          return String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
        }
        return char;
      });
    };

    // Algoritmo para descifrar con César
    const aplicarDescifradoCesar = (mensaje, desplazamiento) => {
      return mensaje.replace(/[a-zA-Z]/g, (char) => {
        const codigo = char.charCodeAt(0);
        if (codigo >= 65 && codigo <= 90) {
          return String.fromCharCode(((codigo - 65 - desplazamiento + 26) % 26) + 65);
        }
        if (codigo >= 97 && codigo <= 122) {
          return String.fromCharCode(((codigo - 97 - desplazamiento + 26) % 26) + 97);
        }
        return char;
      });
    };

    // Método para copiar texto al portapapeles
    const copiarTexto = (texto) => {
      const textArea = document.createElement('textarea');
      textArea.value = texto;
      textArea.style.position = 'fixed';
      textArea.style.top = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          toast.success('Texto copiado al portapapeles');
        } else {
          toast.error('No se pudo copiar el texto');
        }
      } catch (err) {
        toast.error('Error al copiar el texto');
      } finally {
        document.body.removeChild(textArea);
      }
    };

    return {
      mensajeCesar,
      desplazamiento,
      resultadoCesar,
      cifrarCesar,
      descifrarCesar,
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
