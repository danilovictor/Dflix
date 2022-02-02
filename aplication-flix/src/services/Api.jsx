import React , {useState , useEffect} from 'react';

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
        
        <div>

            <h3>Total de filmes {movies.length}</h3>
            {movies.map((item , index) =>(
                
                <div className=""  key={index}>


                    <img src={item.avatar}/>
                    <h3> {item.titulo}</h3>

                </div>
                
            ))}

        </div>
    )
}

export default Api;