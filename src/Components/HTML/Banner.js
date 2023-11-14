import React, { useState, useEffect } from 'react'
import '../CSS/Banner.css';
import axios from '../../axios';
import requsts from '../../requests';

const base_Url = 'https://image.tmdb.org/t/p/original/';
function Banner() {
    const [movie, setMovies] = useState([]);
    // const [img, setImg] = useState([]);

    // useEffect(() => {
    //     async function Fetcher() {
    //         const requests = await axios.get(requsts.fetchOrigins);
    //         // console.log(request);
    //         // console.log(request.data.results);
    //         setMovies(requests?.data.results);
    //         return requests;
    //     }
    //     Fetcher();
    // }, []);

    // useEffect(() => {
    //     async function Fetcher() {
    //         const requests = await axios.get(requsts.fetchOrigins);
    //         setImg(requests?.data.results[
    //             Math.floor(Math.random() * requests.data.results.length)
    //         ])
    //         return requests;
    //     }
    //     Fetcher();
    // }, []);
    async function fetchBanner() {
        const response = await axios.get(requsts.fetchNetflixOriginals);
        // console.log(response.data.results[Math.floor(Math.random() * 2)]);
        setMovies(response?.data.results[Math.floor(Math.random() * 20)]);
    }

    useEffect(() => {
        fetchBanner();
    }, []);
    // console.log(movie);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    } // this part use for to minimize the description ...

    return (
        <div>
            <header className='banner text-white'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${base_Url}${movie?.backdrop_path})`,
                    backgroundPosition: "center"
                }}>
                <div className="banner_containts ms-5">
                    <h1 className="banner_tittle py-3 fw-bolder">{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className="banner_Buttons">
                        <button className='banner_btn fw-bold'>Play</button>
                        <button className='banner_btn fw-bold'>My List</button>
                    </div>
                    <h1 className="banner_Descriptions">{truncate(movie?.overview, 150)}</h1>
                </div>

                <div className="banner_faded" />
            </header>

        </div>
    );
}

export default Banner;