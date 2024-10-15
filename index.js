const ZAPATILLAS = [
  {
    id: 1,
    imagen: './assets/1.png',
    marca: 'Nike Original',
    modelo: 'Air Max 1',
    precio: 120.0
  },
  {
    id: 2,
    imagen: './assets/2.png',
    marca: 'New Balance',
    modelo: 'NB 9060',
    precio: 80.0
  },
  {
    id: 3,
    imagen: './assets/3.png',
    marca: 'Nike Original',
    modelo: 'Nike Revolution',
    precio: 90.0
  },
  {
    id: 4,
    imagen: './assets/4.png',
    marca: 'Adidas Original',
    modelo: 'Forum Buckle',
    precio: 100.0
  },
  {
    id: 5,
    imagen: './assets/5.png',
    marca: 'Adidas Original',
    modelo: 'Campus',
    precio: 120.0
  },
  {
    id: 6,
    imagen: './assets/6.png',
    marca: 'New Balance',
    modelo: 'NB 327',
    precio: 120.0
  },
  {
    id: 7,
    imagen: './assets/7.png',
    marca: 'Nike Original',
    modelo: 'Dunk Low',
    precio: 100.0
  },
  {
    id: 8,
    imagen: './assets/8.png',
    marca: 'Adidas Original',
    modelo: 'Gazelle',
    precio: 90.0
  },
  {
    id: 9,
    imagen: './assets/9.png',
    marca: 'Nike Original',
    modelo: 'Air Max SC',
    precio: 150.0
  },
  {
    id: 10,
    imagen: './assets/10.png',
    marca: 'Adidas Original',
    modelo: 'Handball Spezial',
    precio: 120.0
  },
  {
    id: 11,
    imagen: './assets/11.png',
    marca: 'Nike Original',
    modelo: 'Air Force',
    precio: 130.0
  },
  {
    id: 12,
    imagen: './assets/12.png',
    marca: 'New Balance',
    modelo: 'NB 9060',
    precio: 100.0
  },
  {
    id: 13,
    imagen: './assets/13.png',
    marca: 'New Balance',
    modelo: 'NB 480',
    precio: 150.0
  },
  {
    id: 14,
    imagen: './assets/14.png',
    marca: 'Nike Original',
    modelo: 'Full Force Low',
    precio: 70.0
  },
  {
    id: 15,
    imagen: './assets/15.png',
    marca: 'Nike Original',
    modelo: 'Air Max SC',
    precio: 160.0
  },
  {
    id: 16,
    imagen: './assets/16.png',
    marca: 'Nike Original',
    modelo: 'Handball Spezial',
    precio: 140.0
  }
]

const printHeader = (header) => {
  const divHeader = document.querySelector('#headerPage')
  const logo = document.createElement('img')
  const logoLink = document.createElement('a')

  const OptionSearch = document.createElement('section')
  const hombre = document.createElement('a')
  const mujer = document.createElement('a')
  const niños = document.createElement('a')
  const ofertas = document.createElement('a')

  const OptionUser = document.createElement('section')
  const filtro = document.createElement('img')
  const cesta = document.createElement('img')
  const user = document.createElement('img')
  const filtroLink = document.createElement('a')
  const cestaLink = document.createElement('a')
  const userLink = document.createElement('a')

  logo.src = './assets/JDlogo.png'
  logo.alt = 'logo_main'
  logo.className = 'logo'
  logoLink.href = '#'

  OptionSearch.className = 'header-options flex-container'
  hombre.href = '#'
  mujer.href = '#'
  niños.href = '#'
  ofertas.href = '#'
  hombre.textContent = 'Hombre'
  mujer.textContent = 'Mujer'
  niños.textContent = 'Niños'
  ofertas.textContent = 'Ofertas'

  OptionUser.className = 'user-options flex-container'
  logo.src = './assets/JDlogo.png'
  logo.alt = 'logo_main'
  logo.className = 'logo'
  logoLink.href = '#'

  filtro.src = './assets/iconfilter.png'
  filtro.alt = 'filtro_main'
  filtro.className = 'filtro'
  filtroLink.href = '#'
  cesta.src = './assets/iconshopping.png'
  cesta.alt = 'cesta_main'
  cesta.className = 'cesta'
  cestaLink.href = '#'
  user.src = './assets/iconuser.png'
  user.alt = 'user_main'
  user.className = 'user'
  userLink.href = '#'

  logoLink.appendChild(logo)
  divHeader.appendChild(logoLink)
  divHeader.appendChild(OptionSearch)
  OptionSearch.appendChild(hombre)
  OptionSearch.appendChild(mujer)
  OptionSearch.appendChild(niños)
  OptionSearch.appendChild(ofertas)

  divHeader.appendChild(OptionUser)
  filtroLink.appendChild(filtro)
  OptionUser.appendChild(filtroLink)
  cestaLink.appendChild(cesta)
  OptionUser.appendChild(cestaLink)
  userLink.appendChild(user)
  OptionUser.appendChild(userLink)
}
printHeader()

const cover = () => {
  const coverMain = document.querySelector('#JDstyle')
  const imageCover = document.createElement('img')
  coverMain.src = './assets/cover.png'
  coverMain.alt = 'cover_main'
  coverMain.className = 'cover'

  coverMain.appendChild(imageCover)
}
cover()

const filtroOption = () => {
  const divFiltro = document.querySelector('#filtros')
  divFiltro.innerHTML = ''
  const filtroMarca = document.createElement('input')
  const filtroModelo = document.createElement('input')
  const botonBuscar = document.createElement('button')
  const botonLimpiar = document.createElement('button')
  const arrowImg = document.createElement('img')

  filtroMarca.className = 'filtroMarca'
  filtroMarca.placeholder = 'Marca'

  filtroModelo.className = 'filtroModelo'
  filtroModelo.placeholder = 'Modelo'

  botonBuscar.className = 'buscarBtn'
  botonBuscar.textContent = 'Buscar'
  botonLimpiar.className = 'limpiarBtn'
  botonLimpiar.textContent = 'Limpiar'

  arrowImg.src = './assets/arrowicon.png'
  arrowImg.alt = 'Arrow'
  arrowImg.className = 'arrowImg'

  divFiltro.appendChild(filtroMarca)
  divFiltro.appendChild(filtroModelo)
  divFiltro.appendChild(botonBuscar)
  divFiltro.appendChild(botonLimpiar)
  divFiltro.appendChild(arrowImg)

  filtroMarca.style.display = 'none'
  filtroModelo.style.display = 'none'
  botonBuscar.style.display = 'none'
  botonLimpiar.style.display = 'none'

  arrowImg.addEventListener('click', () => {
    const isVisible = filtroMarca.style.display === 'block'
    filtroMarca.style.display = isVisible ? 'none' : 'block'
    filtroModelo.style.display = isVisible ? 'none' : 'block'
    botonBuscar.style.display = isVisible ? 'none' : 'block'
    botonLimpiar.style.display = isVisible ? 'none' : 'block'
  })
}
filtroOption()

const filtrarZapas = () => {
  const marca = document.querySelector('.filtroMarca').value.toLowerCase()
  const modelo = document.querySelector('.filtroModelo').value.toLowerCase()

  const zapasFiltradas = ZAPATILLAS.filter((zapa) => {
    return (
      (marca === '' || zapa.marca.toLowerCase().includes(marca)) &&
      (modelo === '' || zapa.modelo.toLowerCase().includes(modelo))
    )
  })

  let zapasSugeridas = zapasFiltradas

  if (zapasFiltradas.length === 0) {
    alert('No se encuentra el producto, te sugerimos estas:')
    zapasSugeridas = getRandomZapatillas(3)
  }
  printZapas(zapasSugeridas)
}

document.querySelector('.buscarBtn').addEventListener('click', filtrarZapas)
document.querySelector('.limpiarBtn').addEventListener('click', () => {
  document.querySelector('.filtroMarca').value = ''
  document.querySelector('.filtroModelo').value = ''
  printZapas(ZAPATILLAS)
})

const getRandomZapatillas = (count) => {
  const shuffled = [...ZAPATILLAS].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const printZapas = (zapas) => {
  const divZapas = document.querySelector('#zapatillas')
  divZapas.innerHTML = ''
  for (const zapa of zapas) {
    const divZapa = document.createElement('div')
    const divImg = document.createElement('div')
    const divInfo = document.createElement('div')
    const img = document.createElement('img')
    const nombre = document.createElement('h3')
    const modelo = document.createElement('h4')
    const precio = document.createElement('p')
    const botonComprar = document.createElement('button')

    divZapa.className = 'flex-container'
    divImg.classList = 'img.container'
    divInfo.className = 'info'
    img.src = zapa.imagen
    nombre.textContent = zapa.marca
    modelo.textContent = zapa.modelo
    precio.textContent = `${zapa.precio}€`
    botonComprar.className = 'comprarBtn'
    botonComprar.textContent = 'Comprar'

    divZapa.appendChild(divImg)
    divImg.appendChild(img)
    divZapa.appendChild(divInfo)
    divInfo.appendChild(nombre)
    divInfo.appendChild(modelo)
    divInfo.appendChild(precio)
    divInfo.appendChild(botonComprar)
    divZapas.appendChild(divZapa)
  }
}
printZapas(ZAPATILLAS)

const printFooter = () => {
  const footer = document.querySelector('#footer')
  footer.className = 'flex-container'
  const columns = [
    {
      title: 'Compra con JD',
      paragraphs: [
        'Guía de tallas',
        'PBuscador de tallas',
        'Descuento estudiantes',
        'Calendario lanzamientos',
        'Inscribete a JDX',
        'JD Blog'
      ]
    },
    {
      title: 'Atención al cliente',
      paragraphs: [
        'Preguntas Frecuentes',
        'Envíos y devoluciones',
        'Seguimiento de envío',
        'Contacto'
      ]
    },
    {
      title: 'Aviso Legal',
      paragraphs: [
        'Términos y condiciones',
        'Promociones y condiciones',
        'Política de privacidad',
        'Política de cookies',
        'Ajustes de cookies',
        'Accesibilidad'
      ]
    }
  ]

  columns.forEach((column, index) => {
    const section = document.createElement('section')
    section.className = section.className = `${column.title
      .replace(/\s+/g, '-')
      .toLowerCase()}`

    for (const paragraph of column.paragraphs) {
      const p = document.createElement('p')
      p.textContent = paragraph
      section.appendChild(p)
    }
    footer.appendChild(section)
  })
}

printFooter()
