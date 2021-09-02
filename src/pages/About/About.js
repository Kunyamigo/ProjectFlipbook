import React from "react";
import imagen from "../../images/bio.jpeg"
import {
    MainSection,
    MainContainer,
    MainContent,
    MainText,
    MainImage
} from "./About.elements"

function About() {
    return (
        <MainSection>
          <MainContainer>
            <h1>KUIZ LOPEZ</h1>
            <MainContent>
              <MainText>
                <p>
                  Nuestra cultura y su simbología, inscrita en mitos y leyendas,
                  solo puede ser captada por quien ha hurgado, a profundidad, en el
                  ombligo de la memoria cósmica ancestral. Kuiz López es un artista
                  que nació con el don de la expresión a través de las formas y los
                  colores no solo en la pintura sino también en el grabado y la
                  escultura. Nace en Tonalá, Jalisco el 23 de julio de 1940. A los 8
                  años de edad ya plasmaba su fértil imaginación infantil con gran
                  fuerza expresiva. El desarrollo de su habilidad artística fue
                  entrelazándose con su propósito de vida: preservar la realidad
                  cultural de México a través de sus tradiciones sagradas. Formas
                  intangibles, etéreas… estancias; colores, dimensiones, sonidos,
                  emociones; capas celestes, animales fantásticos del día y la
                  noche… Elucubraciones que juegan metamorfoseando en el mirarse a
                  sí mismo en la sagrada comunión con El Todo. Una ventana mítica a
                  la memoria milenaria… una opción otras realidades. “Mi pintura es
                  un trabajo de investigación sobre el arte de la cultura milenaria
                  ancestral; sobre su simbología cosmogónica resaltando elementos
                  que se pueden contemporizar… Hay ideas que son producto de la
                  imaginación. Otras, provienen de visiones; de ensoñaciones; de
                  cantos oníricos, de mensajes que vienen del mundo del espíritu y
                  se van bocetando para ir tomando las ideas, dándoles un orden a
                  los personajes, las figuras, los colores cósmicos. Así, se van
                  ordenando.
                </p>
                <p>
                  El propio cuadro… los personajes… van pidiendo la posición para
                  colocarse”. Aniversario 50 años de trayectoria en el arte mexicano
                  universalista, el pintor ha experimentado con diversos estilos y
                  formas; desde lo figurativo hasta lo surrealista, neorrealista y
                  neoimpresionista. En la búsqueda de un lenguaje plástico propio,
                  ha hecho contemporáneas las formas y estilos por medio del trazo
                  más fuerte, violento y estilizado incorporando el uso del polvo de
                  mármol y pigmentos que le permiten expresar planos y crear las
                  atmósferas de cada uno de sus personajes y códices. Juiz López
                  abarca una gama que va del más intenso y audaz colorido a la
                  monocromía. En su obra proliferan los temas filosóficos. Todos
                  ellos hablan del resurgimiento de un mundo que, aunque relegado en
                  la actualidad, siempre ha estado presente como parte intrínseca de
                  nuestra identidad cultural: “El ser humano es parte del cosmos
                  pero ha perdido la memoria de su misión en la tierra y no recuerda
                  el mandato divino ni su trabajo como fuerza armonizadora”, comenta
                  el artista, otrora reconocido como hombre de conocimiento. De esta
                  manera cada parte de sus obras guarda una historia en relación a
                  la espiritualidad vivida por ancianos, hombres y niños de tiempos
                  antiguos, con mensajes y moralejas que podemos retomar. “Hay que
                  pintar la profundidad y riqueza que hay en nuestra cultura para
                  hacerla valer”, afirma el pintor. Especial mención merece la Serie
                  de los Códices Teoamoxtli –libros sagrados- que son, en realidad,
                  libros y mandatos sagrados, artísticamente expresados con un
                  lenguaje contemporáneo. Los temas son filosóficos, cosmogónicos,
                  ritualisticos y científico-religiosos. Su lectura e
                  interpretación, siguiendo códigos antiguos, se leen de abajo hacia
                  arriba y de derecha a izquierda; de manera transversal y lineales.
                  Los espacios centrales son los más importantes pues interconectan
                  los elementos que le circundan. Su colorido corresponde a órdenes
                  y niveles de importancia: mundo o universo vegetal, animal; lo
                  celeste y lo terrestre; calendárico y litúrgico; metafísico y
                  metafórico. En cada obra el Hacedor de Arte, se entrega… muere
                  dando vida, para perpetuar y perpetuarse… más allá del tiempo y el
                  espacio.
                </p>
              </MainText>
              <MainImage>
                <img src={imagen} alt="Me" />
              </MainImage>
            </MainContent>
          </MainContainer>
        </MainSection>
      )
}

export default About;
