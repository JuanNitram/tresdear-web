
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
  featureds: [
      // {
      //     id: 1,
      //     title: 'Auditorio de Barcelona',
      //     description: 'El Auditorio de Barcelona es un edificio moderno de 42 000 m² diseñado por el arquitecto Rafael Moneo que fue inaugurado el 22 de marzo de 1999.',
      //     imageLink: 'img/featureds/auditorio-de-barcelona.jpg',
      //     active: true,
      // },
      // {
      //     id: 2,
      //     title: 'Hotel Eurostars Grand Marina',
      //     description: 'Ubicado en un edificio emblemático con forma de trasatlántico, este hotel de alto nivel en primera línea de mar se encuentra junto al World Trade Center.',
      //     imageLink: 'img/featureds/reservar-hotel-eurostars-grand-marina.jpg',
      //     active: true,
      // },
      // {
      //     id: 3,
      //     title: 'Auditorio de Barcelona',
      //     description: 'El Auditorio de Barcelona es un edificio moderno de 42 000 m² diseñado por el arquitecto Rafael Moneo que fue inaugurado el 22 de marzo de 1999.',
      //     imageLink: 'img/featureds/auditorio-de-barcelona.jpg',
      //     active: true,
      // },
      // {
      //     id: 4,
      //     title: 'Auditorio de Barcelona',
      //     description: 'El Auditorio de Barcelona es un edificio moderno de 42 000 m² diseñado por el arquitecto Rafael Moneo que fue inaugurado el 22 de marzo de 1999.',
      //     imageLink: 'img/featureds/auditorio-de-barcelona.jpg',
      //     active: true,
      // },
      // {
      //     id: 5,
      //     title: 'Auditorio de Barcelona',
      //     description: 'El Auditorio de Barcelona es un edificio moderno de 42 000 m² diseñado por el arquitecto Rafael Moneo que fue inaugurado el 22 de marzo de 1999.',
      //     imageLink: 'img/featureds/auditorio-de-barcelona.jpg',
      //     active: true,
      // },
      // {
      //     id: 6,
      //     title: 'Auditorio de Barcelona',
      //     description: 'El Auditorio de Barcelona es un edificio moderno de 42 000 m² diseñado por el arquitecto Rafael Moneo que fue inaugurado el 22 de marzo de 1999.',
      //     imageLink: 'img/featureds/auditorio-de-barcelona.jpg',
      //     active: true,
      // },

  ],
  }
}

export const mutations = {
  FETCH_PROJECTS(state, data){
    state.projects = data
  },
  FETCH_PRICES(state, data){
    state.plans = data
  },
  FETCH_SLIDERS(state, data){
    state.sliders = data
  },
  FETCH_CLIENTS(state, data){
    state.clients = data
  }
}

export const actions = {
  fetch({commit}, section){
    return new Promise((resolve, reject) => {
      this.$axios.get(process.env.API_URL + section).then(res => {
        let data = [];
        if(res.data.data){
          data = res.data.data[section];
        }
        commit('FETCH_' + (section.toUpperCase()), data)
        resolve()
      });
    })
  }
}

export const getters = {
  projects: state => state.projects,
  sliders: state => state.sliders,
  clients: state => state.clients,
  featureds: state => state.featureds,
  plans: state => state.plans,
  services: state => state.services,
}
