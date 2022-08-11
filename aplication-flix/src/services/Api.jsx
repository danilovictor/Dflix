import React , {useState , useEffect} from 'react';
import './styles.css'

// https://www.b7web.com.br/cinema/

const Api = ()=>{

    const [movies , setMovies] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(()=>{      
        loadMovies();

    },[])

    const loadMovies = async ()=>{
        const response = await fetch('https://api.b7web.com.br/cinema/')
        const json = await response.json()
        setMovies(json)
        console.log(json);

    }
    return (
        
        <div className="container-app">

            {/* <h3>Total de filmes {movies.length}</h3> */}
            {movies.map((item , index) =>(

                <>

                <div movies-container>

                <div className="movies-content"  key={index}>
                    <img src={item.avatar}/>
                    <h5> {item.titulo}</h5>

                    </div>
                </div>
                </>
                
            ))}

        </div>
    )
}

export default Api;