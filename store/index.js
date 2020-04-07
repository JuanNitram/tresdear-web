import _ from 'lodash';
import Vue from 'vue';

export const state = () => {
  return {
    sliders: [],
    projects: [],
    plans: [],
    clients: [],
    services: [
      {
          id: 1,
          title: 'Recorrido virtual',
          description: 'Sus usuarios o potenciales clientes pueden recorrer el espacio antes de visitarlo, multiplicando el deseo de conocerlo personalmente.',
          imageLink: 'img/services/recorrido-virtual.jpg',
          active: true
      },
      {
          id: 2,
          title: 'Realidad virtual',
          description: 'La realidad virtual lleva la experiencia envolvente al siguiente nivel, aislando al usuario e intensificando la sensación de estar ahí.',
          imageLink: 'img/services/realidad-virtual.jpg',
          active: true
      },
      {
          id: 3,
          title: 'Etiquetas',
          description: 'El contenido adicional complementa la visita virtual, haciéndola plenamente inmersiva. Estas etiquetas pueden contener vídeos, fotos, textos, documentos, links, etc. Es decir, todo.',
          imageLink: 'img/services/etiquetas-experiencia-completa.jpg',
          active: true
      },
      {
          id: 4,
          title: 'Dollhouse',
          description: 'La vista de «casa de muñecas» le permite observar todo el espacio a la vez, rotar la imagen en 360º e ingresar a la vista de recorrido virtual desde cualquier punto.',
          imageLink: 'img/services/dollhouse.jpg',
          active: true
      },
      {
          id: 5,
          title: 'Fotos alta calidad',
          description: 'Fotografías de calidad 4K HDR, perfectas para usar en redes sociales y webs o utilizar en soportes impresos.',
          imageLink: 'img/services/fotos-de-alta-calidad.jpg',
          active: true
      },
      {
          id: 6,
          title: 'Fotos 360º',
          description: 'Fotografías circulares para utilizar en presentaciones digitales y compartir en perfiles sociales.',
          imageLink: 'img/services/fotos-360.jpg',
          active: true
      },
      {
          id: 7,
          title: 'Planos de planta',
          description: 'Planos esquemáticos, a escala y de alta calidad con medidas de una precisión superior al 99%. Para arquitectos y constructores es factible exportar archivos OBJ y planos de mayor complejidad.',
          imageLink: 'img/services/planos-de-planta.jpg',
          active: true
      },
      {
          id: 8,
          title: 'Google Street View',
          description: 'Integración a la vista de calle de Google Maps, enriqueciendo la estrategia de publicidad y accediendo a un público aún más amplio.',
          imageLink: 'img/services/google-street-view.jpg',
          active: true
      },
  ],
    featureds: [],
    loading: {}
  }
}

export const mutations = {
  PROJECTS_REQUEST (state, section) {
    Vue.set(state.loading, section, true);
  },
  PRICES_REQUEST(state, section) {
    Vue.set(state.loading, section, true);
  },
  SLIDERS_REQUEST(state, section) {
    Vue.set(state.loading, section, true);
  },
  CLIENTS_REQUEST(state, section) {
    Vue.set(state.loading, section, true);
  },

  PROJECTS_SUCCESS(state, payload){
    state.projects = payload.data;
    Vue.set(state.loading, payload.section, false);
  },
  PRICES_SUCCESS(state, payload){
    state.plans = payload.data;
    Vue.set(state.loading, payload.section, false);
  },
  SLIDERS_SUCCESS(state, payload){
    state.sliders = payload.data;
    Vue.set(state.loading, payload.section, false);
  },
  CLIENTS_SUCCESS(state, payload){
    state.clients = payload.data;
    Vue.set(state.loading, payload.section, false);
  },

  PROJECTS_FAILURE (state, section) {
    Vue.set(state.loading, section, false);
  },
  PRICES_FAILURE(state, section) {
    Vue.set(state.loading, section, false);
  },
  SLIDERS_FAILURE(state, section) {
    Vue.set(state.loading, section, false);
  },
  CLIENTS_FAILURE(state, section) {
    Vue.set(state.loading, section, false);
  },

  IMAGES_LOADING(state) {
    Vue.set(state.loading, 'IMAGES', true);
  },
  IMAGES_LOADED(state) {
    Vue.set(state.loading, 'IMAGES', false);
  }
};

export const actions = {
  async fetch({commit}, section){
    commit(`${section.toUpperCase()}_REQUEST`, section.toUpperCase());
    try {
      let { data } = await this.$axios.get(process.env.API_URL + section);
      if(data.data){
        data = data.data[section];
      }
      commit(`${section.toUpperCase()}_SUCCESS`, {data, section: section.toUpperCase()})
    } catch (err) {
      commit(`${section.toUpperCase()}_FAILURE`, section.toUpperCase());
      console.log(err);
    }
  }
}

export const getters = {
  projects: state => state.projects,
  sliders: state => state.sliders,
  clients: state => state.clients,
  featureds: state => state.featureds,
  plans: state => state.plans,
  services: state => state.services,
  loading: state => _.invert(state.loading)[true] !== undefined
}
