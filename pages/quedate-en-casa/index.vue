<template>
  <div>
    <breadcrumb
      title=" "
      description=""
      :medias="medias"
      :options="{
                  flickity: true,
                  overlay: true
              }"
    >

    </breadcrumb>
    <b-container fluid="lg">

      <b-row class="my-4">
        <b-col cols="12">
          <p class="font-p text-center my-2">
            <span style="font-size:26px;font-family:Montserrat, sans-serif;"><b>¿Confinados?</b><br/>¡Sí, pero nos vamos de viaje!</span>
          </p>
          <p class="font-p text-center mx-1 my-3">
            <span
            style="font-size:20px;font-family:Montserrat, sans-serif;">Hemos preparado una selección de recorridos de alrededor del mundo.<br/>Debajo de cada uno indicamos lo que nos parece más destacado.<br/>Encuentra contenido adicional en las etiquetas.
            </span>
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=rbjQSRx2qya&brand=0"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">Chile | Museo Histórico Nacional</h2>
          <p class="font-p text-center">
            Una manera diferente de conocer la historia de Chile.
          </p>
        </b-col>
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=5rHaUQEssAV&brand=0"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">Grecia | IDEA</h2>
          <p class="font-p text-center">
            Ciencia y tecnología en la antigua Grecia.
          </p>
        </b-col>
      </b-row>

      <b-row class="m-0">
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=TZnkL8akkch"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">Barcelona | Parròquia Sant Joan de Gràcia</h2>
          <p class="font-p text-center">
            Descubra la Capella del Santíssim.
          </p>
        </b-col>
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=BN8jpzsNJGj&brand=0"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">Portugal | Museo de Lisboa</h2>
          <p class="font-p text-center">
            Exposición «Corpus Christi»: 1587 miniaturas de arcilla.
          </p>
        </b-col>
      </b-row>

      <b-row class="m-0">
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=eAZthWqNDTT&brand=0"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">Alemania | Ocean Plastic Lab</h2>
          <p class="font-p text-center">
            Para entender el problema del plástico en los océanos.
          </p>
        </b-col>
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=rQdmRHGywe2&brand=0"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">UK | Airbus Visitors Centre</h2>
          <p class="font-p text-center">
            75 años de fabricación aeroespacial.
          </p>
        </b-col>
      </b-row>

      <b-row class="m-0">
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=Vz8kCqGRjQA&brand=0"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">UK | National Museum of Computing</h2>
          <p class="font-p text-center">
            La más grande colección de ordenadores.
          </p>
        </b-col>
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=rbNzKmDXTKc&brand=0"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">Ireland | Athy Heritage Centre</h2>
          <p class="font-p text-center">
            Ernest Shackleton, explorador irlandés que dirigió tres expediciones al Antártico.
          </p>
        </b-col>
      </b-row>

      <b-row class="m-0">
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=iDDLAfGC7zC&brand=0"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">Alemania | Planetarium Hamburg</h2>
          <p class="font-p text-center">
            No te pierdas la vista de maqueta.
          </p>
        </b-col>
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=Kk3oYeoat3j&brand=0"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">USA | Old New-Gate Prison & Copper Mine</h2>
          <p class="font-p text-center">
            Sumérgete 70 pies en la historia norteamericana.
          </p>
        </b-col>
      </b-row>

      <b-row class="m-0">
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=bkx57o7jbCk&brand=0"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">UK | Oxford University Museum</h2>
          <p class="font-p text-center">
            ¡Dinosaurios!
          </p>
        </b-col>
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=um6mLjPhrrn&brand=0"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">Israel | Pop-Up Museum</h2>
          <p class="font-p text-center">
            Graffitis y arte callejero.
          </p>
        </b-col>
      </b-row>

      <b-row class="m-0">
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=6LUkRxbGyBq&brand=0"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">USA | Mark Twain House</h2>
          <p class="font-p text-center">
            Conozca la residencia familiar de Samuel Langhorne Clemens.
          </p>
        </b-col>
        <b-col cols="12" lg="6" class="mb-5">
          <iframe width="100%" :height="$device.isMobile ? '320' : '480'" src="https://my.matterport.com/show/?m=yF2bv4PPan6&brand=0"
                  frameborder="0" allowfullscreen allow="vr"></iframe>
          <h2 class="font-h2 text-center">USA | Cathedral of Saint Joseph</h2>
          <p class="font-p text-center">
            Explicación de los vitrales.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import breadcrumb from '~/components/partials/breadcrumb'

  export default {
    components: {
      breadcrumb
    },

    data() {
      return {
        medias: [
          {
            full_url: '/img/breadcrumbs/stay-home.jpg'
          },
        ]
      }
    },
  }
</script>

<style>
  .font-h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
  }

  .font-p {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
  }
</style>
