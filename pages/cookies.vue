<template>
  <section class="container">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Politica de privacidad y cookies</h1>
      </div>
    </div>

    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-12">
          <p><strong>POLÍTICA DE PRIVACIDAD</strong></p>
          <p>&nbsp;</p>
          <p>El presente Política de Privacidad establece los términos en que Illustrarama.com usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.</p>
          <p><strong>Información que es recogida</strong></p>
          <p>Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,&nbsp; información de contacto como&nbsp; su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.</p>
          <p><strong>Uso de la información recogida</strong></p><p>Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. &nbsp;Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.</p>
          <p>Illustrarama está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.</p>
          <p><strong>Cookies</strong></p><p>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.</p>
          <p>Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente, visitas a una web. Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.</p>
          <p><strong>Enlaces a Terceros</strong></p><p>Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.</p>
          <p><strong>Control de su información personal</strong></p><p>En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web.&nbsp; Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. &nbsp;En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.</p><p>Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.</p>
          <p>Illustrarama.com Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.</p>
        </div>
      </div>

      <hr>


    </div> <!-- /container -->

  </section>
</template>

<script>

export default {
  head () {
    return {
      htmlAttrs: {
        lang: 'es'
      },
      title: `Illustrarama | Source of illustration and design news | Politica de privacidad`,
      meta: [
        {
          "http-equiv": `content-language`,
          content:  `ll-cc`
        },
        {
          name: `msvalidate.01`,
          content: `CDA680649F7C99151274ACD92D05990E`
        },
        {
          hid: `description`,
          name: 'description',
          content: `Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración | Politica de privacidad`
        },
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'illustrarama, ilustracion, ilustración, diseno, diseño, diseño gráfico, diseno grafico, arte, artistas, ilustradores, noticias, noticias de ilustracion, noticias de ilusatración, recursos de diseno, recursos de diseño',
          content: 'illustrarama, ilustracion, ilustración, diseno, diseño, diseño gráfico, diseno grafico, arte, artistas, ilustradores, noticias, noticias de ilustracion, noticias de ilusatración, recursos de diseno, recursos de diseño'
        },
        {
          hid: `image`,
          name: 'image',
          content: 'https://www.illustrarama.com/logo.png'
        },
        {
          hid: 'facebook-domain-verification',
          name: 'facebook-domain-verification',
          content: process.env.FACEBOOK_DOMAIN || "0000000000"
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '438661783871304'
        },
        {
          hid: `name`,
          name: 'name',
          content: 'Illustrarama.com'
        },
        {
          hid: `og:title`,
          property: 'og:title',
          content: 'Illustrarama | Politica de privacidad'
        },
        {
          hid: `og:description`,
          property: 'og:description',
          content: 'Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración'
        },
        {
          hid: `og:image`,
          property: 'og:image',
          content: 'https://www.illustrarama.com/logo.png'
        },
        {
          hid: `og:type`,
          property: 'og:type',
          content: 'article'
        },
        {
          hid: `og:site_name`,
          property: 'og:site_name',
          content: 'Illustrarama.com | Politica de privacidad'
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: `https://www.illustrarama.com/about`
        },
        {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Illustrarama | Politica de privacidad'
        },
        {
          hid: `twitter:summary`,
          name: 'twitter:summary',
          content: 'Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración | Politicas de cookies'
        },
        {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración | Politicas de cookies'
        },
        {
          hid: `twitter:image`,
          name: 'twitter:image',
          content: 'https://www.illustrarama.com/logo.png'
        },
        {
          hid: `twitter:card`,
          name: 'twitter:card',
          content: 'summary'
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      link: [
        { rel: 'canonical', href: `https://www.illustrarama.com/about` }
      ]
    }
  }
}
</script>

<style>

</style>
