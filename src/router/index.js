import { createRouter, createWebHistory } from 'vue-router';
import RC4Cipher from '../components/StreamCipher.vue'; // Verifica que las rutas sean correctas
import ECDSASigner from '../components/DigitalSignature.vue';
import WhirlpoolHash from '../components/HashWhirlpool.vue';
import AcercaDe from '../components/AboutComponent.vue';
import CifradoCesar from '../components/CifradoCesar.vue'; // Importa el nuevo cifrado
import CifradoEscitala from '../components/CifradoEscitala.vue'; // Importa el nuevo cifrado

const routes = [
  {
    path: '/',
    name: 'RC4',
    component: RC4Cipher
  },
  {
    path: '/ecdsa',
    name: 'ECDSA',
    component: ECDSASigner
  },
  {
    path: '/whirlpool',
    name: 'Whirlpool',
    component: WhirlpoolHash
  },
  {
    path: '/about',
    name: 'About',
    component: AcercaDe
  },
  {
    path: '/new-cipher-1',
    name: 'NewCipher1',
    component: CifradoCesar
  },
  {
    path: '/new-cipher-2',
    name: 'NewCipher2',
    component: CifradoEscitala
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
