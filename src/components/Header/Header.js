import React,{useRef,useState,useEffect} from 'react';
import News from '../News/News';

import { getAuth, onAuthStateChanged,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import Detail from '../Detail/Detail';
import RecentSearched from '../RecentSearched/RecentSearched';





function Header() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user,setUser]=useState([])
  const [loggedIn,setLoggedIn]=useState(null);
  const [recent,setRecent]=useState([]);
  const input = useRef(null);
  const [search,setSearch] = useState();
  const [news,setNews]=useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setLoggedIn(uid)
        setUser(user)
        // ...
      } else {
        // User is signed out
        // ...
      
        setLoggedIn(null)
      }
    });
  }, [])
  const onLoginGoogle=(e)=>{
    e.preventDefault()
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
     
      // ...
    }).catch((error) => {
     
      console.log("EERRRRR")
    });
  }
   
    const onButtonClick = (e) => {
        e.preventDefault();
        if(input.current.value.trim()===""){
          return ;
        }
      setSearch(input.current.value.trim());

    };
    useEffect(()=>{
        const fetchData= async ()=>{
          
            const response= await fetch(`https://gnews.io/api/v4/search?q=${search}&token=9c8f8ec6c4d5d89067cdebb64e25fd46`)
            const data = await response.json();
            // console.log(data.articles);
            setNews(data.articles)
        // console.log(news)   
        }
        fetchData();
        addDataToRecent();
       
    },[search])
const addDataToRecent=()=>{
      
      recent.push(search);
      setRecent(recent);
      let recentData= recent.filter((item)=> {
        return item != null;
      });
      localStorage.setItem("recent",JSON.stringify(recentData));
}
const getDataFromLocal=()=>{
  const response = localStorage.getItem("recent");
  const data = JSON.parse(response);
  // console.log(data);
}

    return (
      <>
       <nav className="navbar navbar-light bg-light justify-content-between">
         <h1 className="navbar-brand">News App</h1>
                     <form className="form-inline" >
               <div className="dropdown">

                <input  required ref={input} data-toggle="dropdown" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                 <span id="recent_result"></span>
               </div>
                <button onClick={onButtonClick} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
           
            
             {loggedIn ? <Detail name={user.displayName} photo={user.photoURL} /> : ""}
             { loggedIn ?  <button  onClick={()=>{auth.signOut();}} className="nav-item nav-link active" >Sign Out</button> :
             <button  onClick={onLoginGoogle} className="nav-item nav-link active" >Login</button>}
        </nav>
        {/* <div className="d-flex justify-content-center">
              {recent.map(item=>{
                return <RecentSearched name={item} />
              })}
        </div> */}
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto max-w-7x1">
        
          <div class="flex flex-wrap -m-4">
            
        {news.map((item)=>{
            return <News title={item.title} description={item.description} image={item.image} date={item.publishedAt} url={item.url} />
        })}
           
          </div>
        </div>
      </section>
        
      </>
    )
}

export default Header
