export default {
  global: {
    Name:
      'Normatividad y estructura del Sistema Nacional de Áreas Protegidas de Colombia (SINAP)',
    Description:
      'La normatividad y estructura del SINAP combinan principios de conservación, regulación y gestión sostenible para la protección de la biodiversidad y el impulso del turismo responsable. Este espacio ofrece una guía práctica paso a paso para comprender desde la definición legal de las áreas protegidas hasta su integración en estrategias de uso sostenible, abordando marcos jurídicos, actores institucionales y categorías de manejo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco normativo para la protección de la biodiversidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Perspectiva de la conservación                                             ',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema Nacional de Áreas Protegidas (SINAP)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Las áreas protegidas como sistema de gobernanza y gestión ambiental',
            hash: 't_2_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Marco normativo para la protección de la biodiversidad',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link:
        'https://www.unwto.org/es/archive/press-release/2016-12-19/la-omt-subraya-en-la-cop13-el-potencial-del-turismo-para-conservar-la-biodi#:~:text=El%20Turismo%20puede%20contribuir%20en,la%20inauguraci%C3%B3n%20de%20la%20Conferencia.',
    },
    {
      tema: 'Marco normativo para la protección de la biodiversidad',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'https://www.unwto.org/es/codigo-etico-mundial-para-el-turismo',
    },
    {
      tema: 'Marco normativo para la protección de la biodiversidad',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link:
        'https://old.parquesnacionales.gov.co/portal/es/los-parques-nacionales-conservan-nuestra-diversidad-biologica/',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente',
      significado:
        'Conjunto de elementos naturales, artificiales y sociales que permiten la vida y desarrollo de los seres vivos en un espacio y tiempo determinado.',
    },
    {
      termino: 'Aprovechamiento sustentable',
      significado:
        'Uso de los recursos naturales sin comprometer la funcionalidad de los ecosistemas ni su capacidad de regeneración a largo plazo.',
    },
    {
      termino: 'Áreas naturales protegidas',
      significado:
        'Zonas del territorio nacional poco alteradas o con necesidad de restauración, legalmente destinadas a la conservación de sus ecosistemas.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'Variedad de organismos vivos, incluyendo la diversidad genética, de especies y de ecosistemas terrestres, acuáticos y marinos.',
    },
    {
      termino: 'Capacidad de carga',
      significado:
        'Límite de uso que un ecosistema puede soportar sin perder su capacidad de recuperación natural a corto plazo.',
    },
    {
      termino: 'Conservación',
      significado:
        'Acciones para proteger y mantener ecosistemas, hábitats y especies, asegurando su permanencia en el tiempo.',
    },
    {
      termino: 'Contaminación',
      significado:
        'Presencia de sustancias o formas de energía que alteran negativamente el equilibrio del ambiente.',
    },
    {
      termino: 'Contaminante',
      significado:
        'Cualquier materia o energía que modifica la composición natural del aire, agua, suelo o seres vivos.',
    },
    {
      termino: 'Criterios ecológicos',
      significado:
        'Lineamientos legales que guían la preservación del equilibrio ecológico y el uso responsable de los recursos naturales.',
    },
    {
      termino: 'Desarrollo de poblaciones',
      significado:
        'Manejo planificado de especies silvestres para conservar sus hábitats y aumentar su supervivencia en su entorno natural.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Proceso que mejora la calidad de vida y productividad sin comprometer el equilibrio ecológico ni los recursos para futuras generaciones.',
    },
    {
      termino: 'Equilibrio ecológico',
      significado:
        'Relación armónica entre los componentes del ambiente que permite la vida y desarrollo de los seres vivos.',
    },
    {
      termino: 'Estudio de poblaciones',
      significado:
        'Investigación sobre tamaño, estructura y dinámica de poblaciones silvestres para entender su estado y evolución.',
    },
    {
      termino: 'Manejo',
      significado:
        'Aplicación de técnicas para conservar y usar de forma sustentable la vida silvestre y sus hábitats.',
    },
    {
      termino: 'Preservación',
      significado:
        'Medidas orientadas a mantener ecosistemas, hábitats y especies en su estado natural, evitando su alteración.',
    },
    {
      termino: 'Prevención',
      significado:
        'Acciones anticipadas para evitar daños al ambiente y mantener su integridad.',
    },
    {
      termino: 'Protección',
      significado:
        'Conjunto de políticas para conservar el ambiente y frenar su deterioro.',
    },
    {
      termino: 'Recuperación',
      significado:
        'Restablecimiento de las condiciones naturales de especies o ecosistemas, devolviéndoles su función ecológica.',
    },
    {
      termino: 'Recurso natural',
      significado:
        'Elemento del entorno que puede ser utilizado por el ser humano con fines productivos o de subsistencia.',
    },
    {
      termino: 'Restauración',
      significado:
        'Actividades destinadas a restablecer las condiciones que permiten el funcionamiento natural de los ecosistemas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). V Informe Nacional de Biodiversidad de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2010). Política nacional para la gestión integral de la biodiversidad y sus servicios ecosistémicos.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2012). Colombia, 20 años siguiendo agenda 21.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial del Turismo OMT. (2016). La OMT subraya en la COP13 el potencial del Turismo para conservar la Biodiversidad.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial del Turismo OMT. (sf). Código Mundial de Ética para el Turismo.',
      link: '',
    },
    {
      referencia:
        'Osorio, C. E. (2015). Sistema Nacional de Áreas Protegidas (SINAP).',
      link: '',
    },
    {
      referencia:
        'Echeverry-Galvis, M. Á., Unda, M., Bravo, M. P., García, N., Rubiano-Pinzón, G. A., & Palomino, J. V. (2019). Plan de Acción en Biodiversidad de la PNGIBSE, Metas Aichi y los Objetivos de Desarrollo Sostenible en Colombia: análisis y concordancia en el discurso entre metas propuestas para 2020. Gestión y Ambiente, 22(2), 207-234.',
      link: '',
    },
    {
      referencia:
        'Paredes-Leguizamón, G. (2011). Diagnóstico, procedimientos y lineamientos de política para la gestión de tierras y territorios en Parques Nacionales y otras áreas protegidas en Colombia. Parques Nacionales Naturales de Colombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Eugenia Arango Narváez',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Turismo - Regional Quindío',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Mejía',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
