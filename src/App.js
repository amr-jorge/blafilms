import React, { useState, useEffect } from 'react';
import './App.css';
import Searcher from "./components/Searcher";
import FilmsList from "./components/FilmsList";
import Error from './components/Error';
import { searchFilms } from './services/films.service';
import { ReactComponent as ChevronLeft } from './icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from './icons/chevron-right.svg';
import Api from "./config";

function App() {

  //App state
  const [search, setSearch] = useState('');
  const [films, setFilms] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const sendQuery = async () => {

      if(search === '') return;
      const result= await searchFilms(search, currentPage);
      setFilms(result.Search);

      if(result.Response === 'True'){
        // calculate total pages
        const calcTotalPages = Math.ceil(result.totalResults / Api.itemsPerPage);
        setTotalPages(calcTotalPages);

        // scroll page to top
        const jumbotron = document.querySelector('.search');
        jumbotron.scrollIntoView({ behavior: 'smooth' });
        setApiError(false);
      }else{
        setTotalPages(0);
        setApiError(true)        
      }      
    }

    sendQuery();
  }, [search, currentPage])

  // define previous page
  const prevPage= () => {
    const newCurrentPage = currentPage - 1;
    if(newCurrentPage === 0 ) return;

    setCurrentPage(newCurrentPage);
  }

  // define next page
  const nextPage = () => {
    const newCurrentPage = currentPage + 1;
    if(newCurrentPage > totalPages ) return;

    setCurrentPage(newCurrentPage);
  }

  return (
    <div className="App">
      <Searcher
          setSearch={setSearch} 
      />    
      { apiError ? (<Error message="Too many results" />): null }

      {!films ? null :(
        <div>
          <div className="paginator">
            <span className="text-center page-number">Page: {currentPage}  of {totalPages}</span>
          </div>
          
          <div className="search-results"> 
            <div className="chevron">
              {(currentPage === 1) ? null : (
                <ChevronLeft title={`back to page: ${currentPage -1 }` }
                  onClick={prevPage}
                />
              )}          
            </div>  

            <FilmsList 
              films={films}
            />  

            <div className="chevron">
              {(currentPage === totalPages) ? null : (
                <ChevronRight title={`go to page: ${currentPage +1 }` }
                  onClick={nextPage}
                />
              )}          
            </div>     
          </div>

        </div>


      )}  
      
    </div>
  )
}

export default App
