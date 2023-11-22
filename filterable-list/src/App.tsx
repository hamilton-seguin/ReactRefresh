import { products } from './assets/products'
import FilterableList from './components/FilterableList'
import './App.css'

function App() {

  return (
    <FilterableList products={products}/>
  )
}

export default App
