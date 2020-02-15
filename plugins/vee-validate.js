import Vue from 'vue'
import VeeValidate from 'vee-validate'

VeeValidate.Validator.localize('en', {
  custom: {
    name: {
      required: '¡El campo no puede estar vacío!',
    },
    email: {
      required: '¡El campo no puede estar vacío!',
      email: 'El email no es valido!'
    },
    phone: {
      required: '¡El campo no puede estar vacío!',
    },
    message: {
      required: '¡El campo no puede estar vacío!',
    }
  }
});

Vue.use(VeeValidate, {
  inject: true
});
