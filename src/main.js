import 'animate.css'
import './input.css'

import { inject } from '@vercel/analytics';
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
inject();
