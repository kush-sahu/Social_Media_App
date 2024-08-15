
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Footer from './components/Foooter'
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostLists from './components/PostLists';
import { useState } from 'react';
import { Compo } from './store/post-list-store';
function App() {

  return (
    <>
      <Compo>
        <MainCompo></MainCompo>
      </Compo>
    </>
  )
}


const MainCompo = () => {
  const [currTab, setTab] = useState("Home");
  const homeclick = () => {
    setTab("Home")
  }
  const postclick = () => {
    setTab("post")
  }
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar
          homeclick={homeclick}
          postclick={postclick}
          setTab={currTab}
        />
        {currTab === "Home"
          ? <div  >
            <PostLists />
          </div> :
          <CreatePost />
        }

      </div>
      <Footer />
    </>
  );
}





export default App
