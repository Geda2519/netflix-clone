import React from 'react'
import Row from './Row';
import requests from '../../requests';

function Home() {
    return (
        <div>
            <Row rowID='1' title="NETFLEX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeSize />
            <Row rowID='2' title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row rowID='3' title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
            <Row rowID='4' title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row rowID='5' title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row rowID='6' title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row rowID='7' title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row rowID='8' title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
            <Row rowID='9' title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />



        </div>


    );
}

export default Home;