import React from 'react';
import Header from '../../components/Header';
import ArtNews from '../../components/ArtNews';
import FormNews from '../../components/FormNews';
import MarkFlix from '../../components/MarkFlix';
import Branch from '../../components/Branch';
import Footer from '../../components/Footer';



const Home = ()=>{
    return (
        <div>
            <Header/>
            <ArtNews/>
            <FormNews/>
            <MarkFlix/>
            <Branch/>
            <Footer/>
        </div>
    )
}

export default Home;