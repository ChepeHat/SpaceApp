import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/TituloBanner/TituloBanner"
import banner from './assets/banner.png'
import Galeria from "./components/Galeria"
import fotos from './fotos.json'
import { useEffect, useState } from "react"
import ModalZoom from "./components/ModalZoom"
import Footer from "./components/Footer"

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  padding: 0 10;
`
const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%; 
  margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 30px;
`

const App = () => {

  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [tag, setTag] = useState(0)
  const [filtro, setFiltro ] = useState('')
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase);
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDeGaleria(fotosFiltradas)
  }, [filtro, tag])


  const alternarFavorito = (foto) => {
    // console.log('like', foto);\
    if(foto.id === fotoSeleccionada?.id){
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita
      })
    }
    // Mapeamos el state en vez del json directamente
    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria=>{
      return {
        ...fotoDeGaleria, 
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita 
      }
    }))
  }

  return (
    <>
    <FondoGradiente>
      <GlobalStyles/>
      <AppContainer>
        <Header
          setFiltro={setFiltro}
        />
        <MainContainer>
          <BarraLateral />
          <ContenidoGaleria>
            <Banner backgroundImage={banner} texto='La galería más completa del espacio' />
            <Galeria 
              fotos={fotosDeGaleria} 
              fotoSeleccionada={foto => setFotoSeleccionada(foto)}
              alternarFavorito={alternarFavorito}  
              setTag={setTag}
            />

          </ContenidoGaleria>
        </MainContainer>
      </AppContainer>

      <ModalZoom 
        foto={fotoSeleccionada} 
        cerrarDialog={()=>setFotoSeleccionada(null)} 
        alternarFavorito={alternarFavorito}
      />

      <Footer/>
    </FondoGradiente>  
    
    </>
  )
}


export default App
