const DBProducts = [
    {
        title: "The Mandalorian - Figura de Acción",
        price: 4400,
        stock: 7,
        category: "FigurasAccion",
        detail: "The Mandalorian: Su cuerpo está blindado por una armadura beskar, su cara está oculta detrás de una máscara con visera en T, y su pasado está lleno de misterio. Diseño inspirado en la serie de Disney Plus.",
        img: "/img/Items/actionFigureMando.jpg"
    },
    {
        title: "BB8 - Taza de Cerámica",
        price: 2100,
        stock: 17,
        category: "Tazas",
        detail: "Taza de cerámica esculpida con la forma del droide BB8 de Zak Designs, sin BPA, individual, Multicolor",
        img: "/img/Items/bb8Cup.jpg"
    },
    {
        title: "Alianza Rebelde - Figuras de Acción",
        price: 4500,
        stock: 10,
        category: "FigurasAccion",
        detail: "Alianza rebelde: la Alianza Rebelde se mantuvo valientemente contra el mal del Imperio Galáctico, nunca retrocediendo a pesar de probabilidades abrumadoras. Consiste en un juego especial de 5 figuras de acción a escala de 3.75 pulgadas está inspirado en los personajes de la saga de Star Wars, y es un gran regalo para coleccionistas de Star Wars y niños a partir de 4 años.",
        img: "/img/Items/rebelAllianceFigures.jpg"
    },
    {
        title: "La Resistencia - Figuras de Acción",
        price: 5100,
        stock: 3,
        category: "FigurasAccion",
        detail: "La resistencia: una pequeña fuerza militar privada secreta, la resistencia fue fundada por la héroe rebelde Leia Organa para controlar las acciones de la Primera Orden. Este juego especial de 6 figuras de acción a escala de 3.75 pulgadas está inspirado en los personajes de la saga de Star Wars, y es un gran regalo para coleccionistas de Star Wars y niños a partir de 4 años.",
        img: "/img/Items/theResistanceFigures.jpg"
    },
    {
        title: "Dark Trooper - Figura de Acción",
        price: 4000,
        stock: 9,
        category: "FigurasAccion",
        detail: "The Mandalorian: Su cuerpo está blindado por una armadura beskar, su cara está oculta detrás de una máscara con visera en T, y su pasado está lleno de misterio. Diseño inspirado en la serie de Disney Plus.",
        img: "/img/Items/darkTrooperFigure.jpg"
    },
    {
        title: "Dark Revan - Figura de Acción",
        price: 5600,
        stock: 4,
        category: "FigurasAccion",
        detail: "Darth Revan: El enigmático héroe de la Guerra Civil Jedi, Darth Revan, continuó jugando un papel fundamental en la guerra continua entre el Imperio Sith y la República Galáctica. Figura de 50 aniversario de Leyendas Lucasfilm de 6 pulgadas para edades de 4 años en adelante.",
        img: "/img/Items/darthRevanFigure.jpg"
    },
    {

        title: "C3PO - Figura de Acción Coleccionable",
        price: 3700,
        stock: 2,
        category: "FigurasAccion",
        detail: "C-3PO: un droide programado para etiqueta y protocolo. A lo largo de los años, estuvo involucrado en algunas de las batallas más emocionantes de la galaxia y tiene fluidez en más de siete millones de formas de comunicación. La colección Archive: las figuras épicas de la serie Star Wars The Black regresan con las figuras de acción de Black Series Archive de 6 pulgadas, con decoración y diseño premium.",
        img: "/img/Items/c3poFigure.jpg"
    },
    {
        title: "Clone Trooper (Legión 501) - Figura de Acción",
        price: 2300,
        stock: 12,
        category: "FigurasAccion",
        detail: "CLONE TROOPER (501ST LEGION): liderado por el Capitán Rex, el 501st Legion es un escuadrón de punto apretado de soldados clones conocidos por la fuerza del carácter y la lealtad inquebrantable. Embalaje inspirado en el vintage: las figuras y vehículos clásicos de Star Wars The Vintage Collection de 3.75 pulgadas cuentan con la marca original Kenner.",
        img: "/img/Items/cloneTrooperFigure.jpg"
    },
    {
        title: "Darth Sidious - Figura de Acción",
        price: 3300,
        stock: 11,
        category: "FigurasAccion",
        detail: "El emperador: el lado oscuro de la Fuerza es un camino hacia muchas habilidades que algunos consideran antinaturales, y Sheev Palpatine es el seguidor más infame de sus doctrinas. Embalaje inspirado en el vintage: las figuras y vehículos clásicos de Star Wars The Vintage Collection de 3.75 pulgadas cuentan con la marca original Kenner.",
        img: "/img/Items/darthSidiousFigure.jpg"
    },
    {
        title: "Darth Vader - Figura de Acción",
        price: 2200,
        stock: 15,
        category: "FigurasAccion",
        detail: "DARTH VADER (The Dark Times): Obi-Wan Kenobi se establece años después de los dramáticos eventos de Star Wars: Revenge of the Sith donde Kenobi enfrentó la corrupción de su amigo y aprendiz Jedi, Anakin Skywalker convertido en Sith Lord Darth Vader. Embalaje de inspiración vintage: las figuras y vehículos clásicos de Star Wars The Vintage Collection de 3.75 pulgadas a escala clásica de Star Wars cuentan con la marca Kenner original.",
        img: "/img/Items/darthVaderFigure.jpg"
    },
    {
        title: "General Grievous - Figura de Acción",
        price: 5500,
        stock: 7,
        category: "FigurasAccion",
        detail: "Figura de acción Deluxe de Star Wars The Black Series de 6 pulgadas. General Grievous #D1. Star Wars. Hasbro. 6 pulgadas.",
        img: "/img/Items/generalGrievousFigure.jpg"
    },
    {
        title: "Obi-Wan Kenobi - Figura de Acción",
        price: 3600,
        stock: 23,
        category: "FigurasAccion",
        detail: "OBI-WAN KENOBI (WANDERING JEDI): Obi-Wan Kenobi se establece años después de los dramáticos eventos de Star Wars: La venganza del Sith donde Kenobi se enfrentó a la corrupción de su amigo y aprendiz Jedi, Anakin Skywalker convirtió en Sith Lord Darth Vader. STAR WARS: OBI-WAN KENOBI: Los fanáticos y coleccionistas pueden imaginar escenas de la galaxia de Star Wars con este juguete premium Obi-Wan Kenobi (Wandering Jedi), inspirado en la serie Star Wars: Obi-Wan Kenobi.",
        img: "/img/Items/obiWanKenobiFigure.jpg"
    },
    {
        title: "Tercera Hermana (Reva) - Figura de Acción",
        price: 3600,
        stock: 3,
        category: "FigurasAccion",
        detail: "REVA (tercera hermana): Obi-Wan Kenobi se establece años después de los dramáticos eventos de Star Wars: La venganza del Sith, donde Kenobi se enfrentó a la corrupción de su amigo y aprendiz Jedi, Anakin Skywalker convirtió a Sith Lord Darth Vader. STAR WARS: OBI-WAN KENOBI: Los fans y coleccionistas pueden imaginar escenas de la galaxia de Star Wars con este juguete premium Reva (Third Sister), inspirado en la serie Star Wars: Obi-Wan Kenobi.",
        img: "/img/Items/thirdSisterFigure.jpg"
    },
    {
        title: "Casco de Bo-Katan Kryze - Artículo Coleccionable",
        price: 18500,
        stock: 10,
        category: "Otros",
        detail: "BO-KATAN KRYZE: Bo-Katan Kryze lleva armadura que ha estado en su familia durante generaciones. La última de su línea, lidera un equipo de Clan Kryze Mandalorians golpeando hacia atrás en el remanente imperial. Casco electrónico de alta calidad: con decoración muy detallada, diseño inspirado en la serie, ajuste ajustable, acolchado interior y luces electrónicas, este casco Bo-Katan Kryze a escala completa es una adición icónica a la colección de cualquier fan de Star Wars.",
        img: "/img/Items/boKatanHelmetItem.jpg"
    },
    {
        title: "Cafetera con Taza de Chewbacca incluida",
        price: 3500,
        stock: 19,
        category: "Tazas",
        detail: "Cafetera individual. Interruptor de encendido/apagado iluminado. Bandeja de goteo extraíble. Tapa abatible. Taza de 12 onzas y filtro permanente incluido.",
        img: "/img/Items/coffeMakerChewCup.jpg"
    },
    {
        title: "Sable Oscuro - Artículo Coleccionable",
        price: 4300,
        stock: 10,
        category: "Otros",
        detail: "SABER OSCURO MANDALORIANA: En la saga de Star Wars, este sable de luz de hoja negra único ha sido un símbolo del poder mandaloriano durante generaciones, y ha sido manejado por algunos de los mejores guerreros de Mandalore. Iluminador electrónico con sonido FX: con un emocionante sonido electrónico FX inspirado en la serie animada de Star Wars: The Clone Wars, niños y niñas de 5 años en adelante pueden imaginar batallar en duelos épicos de sable de luz con el juguete de juego de rol de sable de luz mandaloriano Darksaber Lightsable.",
        img: "/img/Items/darkSaber.jpg"
    },
    {
        title: "Darth Vader - Remera",
        price: 3600,
        stock: 12,
        category: "Ropa",
        detail: "100% Algodón. Made in the USA or Imported. Cierre de Tirador. Lavar a máquina. Impreso en Estados Unidos. Modelo: STOW0024-10001001. Talla: XXL. Color: negro",
        img: "/img/Items/darthVaderBlackShirt.jpg"
    },
    {
        title: "Darth Vader - Remera",
        price: 3600,
        stock: 13,
        category: "Ropa",
        detail: "100 % Algodón. Made in the USA or Imported. Cierre de Tirador. Lavar a máquina. Impreso en Estados Unidos.",
        img: "/img/Items/darthVaderRedShirt.jpg"
    },
    {
        title: "Darth Vader - Vaso Térmico (acero inoxidable)",
        price: 4900,
        stock: 7,
        category: "Tazas",
        detail: "Aislamiento al vacío de doble pared para mantener las bebidas calientes y frías. Sin BPA. Acero inoxidable 18/8 con revestimiento de cobre de alta calidad. Vida útil limitada. 24 horas de frío y 8 horas de calor. Componentes incluidos: vaso y tapa.",
        img: "/img/Items/darthVaderThermalCup.jpg"
    },
    {
        title: "Imperio - Gorra con Visera",
        price: 1900,
        stock: 5,
        category: "Tazas",
        detail: "100 % Algodón. Cierre de velcro. El original sombrero \"Imperial\" de Star Wars con símbolo imperial rojo, estilo clásico de gorra de bola, extremadamente duradero pero súper cómodo, 100% sarga de algodón. 6 paneles, perfil medio, reforzado con Buckram (dos paneles frontales) corona estructurada, 4 paneles traseros no estructurados",
        img: "/img/Items/empireCap.jpg"
    },
    {
        title: "Funko Pop! El Mandalorian y Grogu - Figura de Acción",
        price: 1900,
        stock: 15,
        category: "FigurasAccion",
        detail: "El cabezal de vinilo mide aproximadamente 4.75 pulgadas de alto.",
        img: "/img/Items/funkoPopMandoGrogu.jpg"
    },
    {
        title: "Grogu - Bolso",
        price: 5300,
        stock: 3,
        category: "Otros",
        detail: "El niño sobre la marcha: la lonchera OTG Star Wars the Child Drama de Oniva, una marca Picnic Time es perfecta para excursiones intergalácticas de picnic y almuerzos en la escuela o la oficina. Fácil acceso: un bolsillo frontal con cremallera para accesorios almacena tu teléfono, cartera y llaves con un área separada para artículos estables en el estante",
        img: "/img/Items/groguBag.jpg"
    },
    {
        title: "Grogu - Taza de Cerámica (con cuchara)",
        price: 2500,
        stock: 13,
        category: "Tazas",
        detail: "Tamaño: esta taza de café Grogu tiene 11.5 onzas. Capacidad: 3.95 pulgadas de alto y 3.8 x 6.11 pulgadas de ancho (con alguna variación, ya que el producto está hecho a mano). Recomendado para niños de 13 años en adelante.",
        img: "/img/Items/groguCup.jpg"
    },
    {
        title: "Grogu - Vaso Térmico",
        price: 2900,
        stock: 5,
        category: "Tazas",
        detail: "Fabricado en Estados Unidos y de por vida. Este vaso no contiene BPA. Ideal tanto para frío como para calor. Apta para microondas y lavavajillas. Reduce la condensación.",
        img: "/img/Items/groguThermalCup.jpg"
    },
    {
        title: "\"I Am Your Father\" - Remera",
        price: 3600,
        stock: 12,
        category: "Ropa",
        detail: "100 % Algodón. Hecho en EE. UU. e importado. Cierre de Pull On. Lavar a máquina. Con licencia oficial, día del padre, cumpleaños de papá, camisetas para papá, ropa gráfica. Impreso en los Estados Unidos, tintas ecológicas, lavar a máquina por dentro y por fuera.",
        img: "/img/Items/iAmYourFatherShirt.jpg"
    },
    {
        title: "Darth Vader (Casco) - Kit de Construcción LEGO",
        price: 12000,
        stock: 4,
        category: "Otros",
        detail: "Escapa del estrés de la vida cotidiana por un tiempo y disfruta de un tiempo de calidad recreando cada detalle amenazante del casco de Darth Vader con este kit de construcción coleccionable LEGO Star Wars.",
        img: "/img/Items/legoDarthVaderHelmet.jpg"
    },
    {
        title: "Luke Skywalker (Casco del Red Five) - Kit de Construcción LEGO",
        price: 12000,
        stock: 7,
        category: "Otros",
        detail: "Despierta tu fuerza creativa: canaliza el enfoque y la atención plena similares a Jedi mientras construyes este casco LEGO Star Wars Luke Skywalker (Red Five) (75327) altamente detallado. Hecho para exhibir: despierta recuerdos de escenas de la saga de Star Wars mientras replicas detalles auténticos del casco de Luke Skywalker en ladrillos LEGO y exhibirlo en el soporte integrado con placa de identificación.",
        img: "/img/Items/legoLukeRedFiveHelmet.jpg"
    },
    {
        title: "Sable de Leia Organa - Artículo Coleccionable",
        price: 28700,
        stock: 1,
        category: "Otros",
        detail: "Luces avanzadas con efectos de sonido: el sable de luz Leia Organa Force FX Elite combina LED avanzados y efectos de sonido inspirados en el entretenimiento. Detalles premium para autenticidad: el sable de luz Leia Organa Force FX Elite cuenta con diseño y decoración basados en el icónico sable de luz azul de Leia Organa que aparece en Star Wars: The Rise of Skywalker",
        img: "/img/Items/leiaLightsaber.jpg"
    },
    {
        title: "The Mandalorian (Casco) - Artículo Coleccionable",
        price: 19000,
        stock: 7,
        category: "Otros",
        detail: "El mandaloriano: su cuerpo está protegido en una armadura beskar, su cara oculta detrás de una máscara con visera en T, y su pasado está envuelto en misterio. Casco electrónico de alta calidad: con decoración muy detallada, diseño inspirado en la serie, acolchado interior y un ajuste ajustable, este casco es una gran adición a cualquier colección de Star Wars",
        img: "/img/Items/mandoHelmet.jpg"
    },
    {
        title: "Mandalorian - Vaso Térmico",
        price: 4900,
        stock: 17,
        category: "Tazas",
        detail: "Fabricado en Estados Unidos. Este vaso no contiene BPA. Ideal tanto para cosas frías como para calientes. Apta para microondas y lavavajillas. Reduce la condensación.",
        img: "/img/Items/mandoThermalCup1.jpg"
    },
    {
        title: "Mandalorian - Vaso Térmico (Triple Pared)",
        price: 4900,
        stock: 11,
        category: "Tazas",
        detail: "Impreso con tintas vegetales ecológicas o con recubrimiento en polvo con material sin BPA directamente en la superficie inoxidable. Los vasos incluyen tapa sin BPA, resistente a las fugas, fácil de limpiar y fácil de cerrar. El triple aislamiento reduce la condensación y mantiene tu bebida caliente hasta 8 horas o fría hasta 24 horas (ten cuidado con líquidos calientes).",
        img: "/img/Items/mandoThermalCup2.jpg"
    },
    {
        title: "Sable de Obi-Wan Kenobi - Artículo Colleccionable",
        price: 38100,
        stock: 2,
        category: "Otros",
        detail: "Luces avanzadas con efectos de sonido: Combinando LED avanzados y efectos de sonido inspirados en el entretenimiento, el sable de luz Obi-Wan Kenobi Force FX Elite es el sable de luz Force FX más realista hasta el momento",
        img: "/img/Items/obiWanLightsaber.jpg"
    },
    {
        title: "Trilogía Original - Vaso Térmico con Doble Pared",
        price: 3000,
        stock: 5,
        category: "Tazas",
        detail: "Tervis Los vasos cuentan con una construcción aislada de doble pared que mantiene las bebidas calientes o frías durante más tiempo y reduce la condensación para evitar anillos en tu mesa.",
        img: "/img/Items/originalTrilogyThermalCup.jpg"
    },
    {
        title: "R2D2 - Kit de Construcción LEGO",
        price: 9000,
        stock: 12,
        category: "Otros",
        detail: "The Mandalorian: Su cuerpo está blindado por una armadura beskar, su cara está oculta detrás de una máscara con visera en T, y su pasado está lleno de misterio. Diseño inspirado en la serie de Disney Plus.",
        img: "/img/Items/r2d2ActionFigure.jpg"
    },
    {
        title: "R2D2 - Remera",
        price: 3600,
        stock: 5,
        category: "Ropa",
        detail: "Hecho en EE. UU. e importado. Cierre de Cordón. Lavar a máquina. 50 % poliéster y 50 % algodón cómoda camiseta de manga corta. Luke Skywalker Anakin princesa Leia han solo Chewbacca Kenobi Darth Vader yoda. Boba fett Dark Side Empire Jedi Force Tie Fighter Death Star Lightsable Droid Stormtrooper Cookies",
        img: "/img/Items/r2s2Shirt.jpg"
    },
    {
        title: "The Millenium Falcon - Remera",
        price: 2600,
        stock: 7,
        category: "Ropa",
        detail: "50 % algodón , 50 % poliéster. Hecho en EE. UU. e importado. Cierre de Tirador. Lavar a máquina. Camiseta oficial de Star Wars de Mad Engine. Ideal para los fanáticos de Star Wars",
        img: "/img/Items/milleniumFalconShirt.jpg"
    },
    {
        title: "Original Trilogy - Remera",
        price: 3600,
        stock: 25,
        category: "Ropa",
        detail: "Hecho en EE. UU. e importado. Cierre de Pull On. Lavar a máquina. 100% algodón, manga corta. Luke Skywalker Anakin Princesa Leia Han Solo Chewbacca Kenobi Darth Vader Yoda. Boba Fett Dark Side Fighter Estrella de la Muerte Fuerza del Imperio Jedi Lightsaber Droid Stormtrooper.",
        img: "/img/Items/originalTrilogyShirt.jpg"
    },
    {
        title: "Star Wars - Vaso Térmico (Triple Pared)",
        price: 5000,
        stock: 16,
        category: "Tazas",
        detail: "Impreso con tintas ecológicas a base de plantas o recubrimiento en polvo con material libre de BPA directamente en la superficie de acero inoxidable. Los vasos incluyen tapa sin BPA, resistente a fugas, fácil de limpiar y fácil de cerrar.El triple aislamiento reduce la condensación y mantiene tu bebida caliente hasta 8 horas o fría hasta 24 horas (ten cuidado con líquidos calientes).",
        img: "/img/Items/starWarsThermalCup.jpg"
    },
    {
        title: "Star Wars - Gorra con Visera",
        price: 1900,
        stock: 20,
        category: "Ropa",
        detail: "85% acrílico, 15% lana. Cierre de Broche de presión. Producto de Star Wars 100% con licencia oficial. Si estás buscando productos con licencia Mandalorian Star Wars o sombreros de Star Wars en específico, no busques más. Tamaño ajustable: este sombrero cuenta con un cierre clásico a presión que es un tamaño OSFM. Tiene un diseño de pico plano. Puede ser usado por hombres, mujeres, adolescentes y la mayoría de adolescentes.",
        img: "/img/Items/starWarsCap.jpg"
    },
    {
        title: "Darth Vader vs Obi-Wan Kenobi - Remera",
        price: 3200,
        stock: 5,
        category: "Ropa",
        detail: "100 % Algodón. Made in the USA or Imported. Cierre de Tirador. Lavar a máquina. Impreso en Estados Unidos. Tipo de ajuste: ajustado. Modelo: STOW0012-30001004. Color: rosa claro",
        img: "/img/Items/vaderVSObiWanShirt.jpg"
    },
    {
        title: "Star Wars - Taza de Cerámica",
        price: 2500,
        stock: 14,
        category: "Tazas",
        detail: "Taza de café grande: nuestra taza de café jumbo tiene capacidad para 20 onzas de tu café favorito con leche, capuchino o café de goteo cuando necesites aprovechar la fuerza por la mañana. Múltiples usos: es una taza coleccionable con licencia oficial que también se puede utilizar como pisapapeles, soporte para bolígrafos para tu escritorio o un lugar para almacenar tu cambio suelto.",
        img: "/img/Items/starWarsCup.jpg"
    },
    {
        title: "Stormtrooper - Taza de Cerámica",
        price: 2300,
        stock: 7,
        category: "Tazas",
        detail: "Taza de café esculpida 3D: nuestra taza de café esculpida 3D tiene capacidad para 20 onzas de tu café favorito con leche, capuchino o goteo cuando necesites aprovechar la fuerza por la mañana. Múltiples usos: es una taza coleccionable con licencia oficial que también se puede utilizar como pisapapeles, soporte para bolígrafos para tu escritorio o un lugar para almacenar tu cambio suelto.",
        img: "/img/Items/stormTrooperCup.jpg"
    },
    {
        title: "El Mandalorian y el Stormtrooper - Figuras de Acción",
        price: 3400,
        stock: 21,
        category: "FigurasAccion",
        detail: "El Mandalorian y el Stormtrooperer: el Mandalorian es un formidable cazador de recompensas en una galaxia cada vez más peligrosa. Los Stormtroopers son tropas de choque de élite fanáticamente leales al Imperio. Personajes icónicos de Star Wars: cada figura de acción a escala de 5 pulgadas en este paquete de 2 cuenta con múltiples puntos de articulación y diseño y detalles inspirados en el entretenimiento de Star Wars.",
        img: "/img/Items/stormTrooperMandoFigure.jpg"
    },
    {
        title: "Casco de Boba Fett - Artículo Coleccionable",
        price: 19000,
        stock: 5,
        category: "Otros",
        detail: "BOBA FETT (RE-ARMORED): Boba Fett aparentemente conoció su desaparición en el pozo Sarlacc en Tatooine. Fett ha sobrevivido a la bestia y ahora ha recuperado su distintiva armadura mandaloriana. Casco electrónico de alta calidad: con decoración muy detallada, diseño inspirado en la serie, acolchado interior, ajuste ajustable y luces electrónicas, este casco Boba Fett (re-Armored) es una adición icónica a la colección de cualquier fan de Star Wars.",
        img: "/img/Items/bobaFettHelmet.jpg"
    },
    {
        title: "Casco de Darth Vader - Artículo Coleccionable",
        price: 19500,
        stock: 5,
        category: "Otros",
        detail: "DARTH VADER: Obi-Wan Kenobi se establece años después de los dramáticos eventos de Star Wars: La venganza del Sith, donde Kenobi se enfrentó a la corrupción de su amigo y aprendiz Jedi, Anakin Skywalker convirtió a Sith Lord Darth Vader. Casco electrónico de alta calidad: con decoración muy detallada, diseño inspirado en la serie, múltiples piezas y sonidos icónicos de ventilación. Este casco Darth Vader a escala completa también viene con un soporte para las máximas posibilidades de visualización.",
        img: "/img/Items/darthVaderHelmet.jpg"
    },
    {
        title: "Darth Vader - Taza de Cerámica",
        price: 2000,
        stock: 5,
        category: "Tazas",
        detail: "Taza de cerámica esculpida con la forma del clásico casco de Darth Vader de Zak Designs, sin BPA, 16 onza, Café/Beige",
        img: "/img/Items/darthVaderCup.jpg"
    },
    {
        title: "Chewbacca - Taza de Cerámica",
        price: 2000,
        stock: 5,
        category: "Tazas",
        detail: "Taza de cerámica esculpida con la forma de Chewbacca de Zak Designs, sin BPA, 16 onza, Café/Beige",
        img: "/img/Items/chewCup.jpg"
    },
    {
        title: "Darth Vader - Remera",
        price: 3600,
        stock: 12,
        category: "Ropa",
        detail: "Hecho en EE. UU. e importado. Cierre de Drawstring. Lavar a máquina. 100 % algodón, manga corta. Luke Skywalker Anakin Princesa Leia Han Solo Chewbacca Kenobi Darth Vader Yoda. Boba Fett Dark Side Fighter Estrella de la Muerte Fuerza del Imperio Jedi Lightsaber Droid Stormtrooper.",
        img: "/img/Items/darthVaderEpicBlackShirt.jpg"
    },
    {
        title: "Imperio - Remera",
        price: 5000,
        stock: 16,
        category: "Ropa",
        detail: "100 % Algodón. Importado. Lavar a máquina. Producto oficial. Música, deportes y entretenimiento. Productos de calidad. Diseño gráfico detallado",
        img: "/img/Items/empireShirt.jpg"
    },
    {
        title: "Rebeldes - Remera",
        price: 2600,
        stock: 10,
        category: "Ropa",
        detail: "100% algodón. Hecho en EE. UU. e importado. Cierre de Pull On. Lavar a máquina. Playera de cuello redondo, con gráficos de Star Wars en la parte delantera.",
        img: "/img/Items/rebelsShirt.jpg"
    }

];

export default function getProducts(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(DBProducts);
        }, 2000);
    });
}

export function getEspecifiedProduct(itemId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const item = DBProducts.find(i => i.id === itemId);

            if(item){
                resolve(item);
            } else {
                reject(new Error("Producto no encontrado"));
            }
        }, 2000);
    })
}

export function getProductsByCat(cat){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const itemsFiltered = DBProducts.filter((i)=>{
               return i.category === cat;
            });

            if(itemsFiltered.length !== 0){
                resolve(itemsFiltered)
            } else {
                reject(new Error("No existe la categoria"));
            }

        }, 2000)
    });
}