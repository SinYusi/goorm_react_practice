import './App.css'
import ShopItemList from './components/ShopItemList'
import { shopData } from './shopData'

function App() {
  return (
    <div>
      <h2>Mandoo Shop</h2>
      {shopData.map(data => (
        <ShopItemList data={data} />
      ))}
    </div>
  )
}

export default App
