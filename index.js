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
const modelos = []
const marcas = []

const fillFiltro = (zzapas) => {
  modelos.splice(0)
  marcas.splice(0)

  for (const zapa of zzapas) {
    if (!modelos.includes(zapa.modelo)) {
      modelos.push(zapa.modelo)
    }

    if (!marcas.includes(zapa.marca)) {
      marcas.push(zapa.marca)
    }
  }
}
fillFiltro(ZAPATILLAS)

const seleccionarModelo = () => {
  const divFiltros = document.querySelector('#filtros')
  const selectModelo = document.createElement('select')
  const selectMarca = document.createElement('select')

  const agregarOpciones = (array, selectElement) => {
    selectElement.innerHTML = ''
    for (const item of array) {
      const option = document.createElement('option')
      option.value = item
      option.textContent = item

      selectElement.appendChild(option)
    }
  }

  agregarOpciones(marcas, selectMarca)

  selectMarca.addEventListener('change', function () {
    const marcaSeleccionada = selectMarca.value

    const modelosDeMarca = ZAPATILLAS.filter(
      (zapa) => zapa.marca === marcaSeleccionada
    ).map((zapa) => zapa.modelo)

    const modelosUnicos = [...new Set(modelosDeMarca)]

    agregarOpciones(modelosDeMarca, selectModelo)
  })

  divFiltros.appendChild(selectMarca)
  divFiltros.appendChild(selectModelo)
}
const printZapas = (zapas) => {
  const divZapas = document.querySelector('#zapatillas')
  divZapas.innerHTML = ''
  for (const zapa of zapas) {
    const divZapa = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const nombre = document.createElement('h3')
    const modelo = document.createElement('h4')
    const precio = document.createElement('p')

    divZapa.className = 'flex-container'
    divImg.classList = 'img.container'
    img.src = zapa.imagen
    nombre.textContent = zapa.marca
    modelo.textContent = zapa.modelo
    precio.textContent = `${zapa.precio}€`

    divZapa.appendChild(divImg)
    divImg.appendChild(img)
    divZapa.appendChild(nombre)
    divZapa.appendChild(modelo)
    divZapa.appendChild(precio)
    divZapas.appendChild(divZapa)
  }
}

printZapas(ZAPATILLAS)
seleccionarModelo()
