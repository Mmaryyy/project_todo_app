import { Fragment, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getCollectionData } from './firebase/api.js';
import { fetchTodo } from './actions/index.js';
import GlobalStyle from './styles/GlobalStyle.js'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Header from './components/Header';
import Home from './components/Home'
import Index from './components/Index';
import Search from './components/Search';
import TodoList from './components/TodoList';
import Create from './components/Create';

// const Header = lazy(() => import('./components/Header'))
// const Index = lazy(() => import('./components/Index'))
// const Search = lazy(() => import('./components/Search'))
// const TodoList = lazy(() => import('./components/TodoList'))
// const Create = lazy(() => import('./components/Create'))

function App() {
  const [isReady, setIsReady] = useState(true)
  const dispatch = useDispatch()
      useEffect (() => {
        // 스토어에 저장하기
        dispatch(fetchTodo('todoList'))
      }, [])
  const { todoList } = useSelector(state => state.todoReducer)
  console.log(todoList)
  
  return (
    <BrowserRouter>
      <div className='app-wrap'>
        <GlobalStyle />
        <Fragment>
          {!isReady
            ? <Home setIsReady={setIsReady} />
            :
            <div className='main_container'>
              <Header />
              <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/todolist' element={<TodoList />} />
                <Route path='/create' element={<Create />} />
                <Route path='/search' element={<Search />} />
                {/* 이건 모달 컴포넌트인데 루트를 쓰나 ? */}
              </Routes>
              <Nav />
            </div>}
          <Footer />
        </Fragment>
      </div>
    </BrowserRouter>
  )
}

export default App;