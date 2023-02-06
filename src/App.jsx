import { useEffect } from 'react'
import { Searcher } from './components/Searcher'
import { PokemonList } from './components/PokemonList'
import { Logo } from './statics/Logo'
import { Col, Spin} from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchPokemonsWithDetails } from './slices/dataSlice'
import './App.css'

function App() {

  const data = useSelector(state => state.data.pokemonsFiltered, shallowEqual)
  const loading = useSelector(state => state.ui.loading)
  const dispatcher = useDispatch();

  useEffect(()=>{
    dispatcher( fetchPokemonsWithDetails())
  },[])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <Logo className={'logo'}/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      {loading 
      ? <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      : <PokemonList pokemons = {data}/>
      }
    </div>
  )
}

export default App;
