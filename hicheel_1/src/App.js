import Header from './component/header.js'
import Card from './component/card.js'
import './App.css'

import zurag1 from '../src/assets/zurag/download.jfif'
import zurag2 from '../src/assets/zurag/2.5.jfif'
import zurag3 from '../src/assets/zurag/promaster-fanart.jfif'
import zurag4 from '../src/assets/zurag/level3.jfif'

function App() {
  return(
    <div className='Sharingan'>
    <Card img={zurag1} text='' />
    <Card img={zurag2} text='Ene bol suga sharingan 3 honog uuchihad bi ch cmd genjutsu shaana' />
    <Card img={zurag3} text='haraal idsen har darsan zvvdendee tawtai moril Tsukuyomi' />
    <Card img={zurag4} text='MS arai suga ni ' />
    <Card img={zurag1} text='' />
    <Card img={zurag3} text='haraal idsen har darsan zvvdendee tawtai moril Tsukuyomi' />
    <Card img={zurag4} text='MS arai suga ni ' />
    <Card img={zurag1} text='' />
    <Card img={zurag2} text='Ene bol suga sharingan 3 honog uuchihad bi ch cmd genjutsu shaana' />
    <Card img={zurag3} text='haraal idsen har darsan zvvdendee tawtai moril Tsukuyomi' />
    </div>
  )
} export default App