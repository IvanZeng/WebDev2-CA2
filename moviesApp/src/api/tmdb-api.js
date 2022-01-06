// export const getMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };

export const getMovies = () => {
  return fetch(
    '/api/movies/tmdb/movies',
    {headers: {
      'Authorization': window.localStorage.getItem('token')
    }}
    ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

// export const getMovie = (args) => {
//   // console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/tmdb/${id}`, 
    {headers: {
      "Authorization": window.localStorage.getItem("token")
    }
  }
  ).then(res=>res.json());
};

  // export const getGenres = async () => {
  //   return fetch(
  //     "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
  //       process.env.REACT_APP_TMDB_KEY +
  //       "&language=en-US"
  //   ).then( (response) => {
  //     if (!response.ok) {
  //       throw new Error(response.json().message);
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     throw error
  //  });
  // };

  export const getGenres = () => {
    return fetch(
      '/api/genres/',
      {headers: {
        'Authorization': window.localStorage.getItem('token')
      }}
      ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };
  
  // export const getMovieImages = ({ queryKey }) => {
  //   const [, idPart] = queryKey;
  //   const { id } = idPart;
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //   ).then( (response) => {
  //     if (!response.ok) {
  //       throw new Error(response.json().message);
  //     }
  //     return response.json();
  
  //   })
  //   .catch((error) => {
  //     throw error
  //  });
  // };

  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `/api/movies/${id}/images`, 
      {headers: {
   "Authorization": window.localStorage.getItem("token")
       }
   }  
   ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  // export const getMovieReviews = (id) => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((json) => {
  //       // console.log(json.results);
  //       return json.results;
  //     });
  // };

  export const getMovieReviews = (id) => {
    return fetch(
      `/api/movies/${id}/reviews`, 
      {headers: {
        "Authorization": window.localStorage.getItem("token")
      }
    }
    ).then((res) => res.json())
     .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  // export const getUpcomingMovies = () => {
  // return fetch(
  //   `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  //   ).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.json().message);
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //      throw error
  //   });
  // };

  export const getUpcomingMovies = () => {
    return fetch(
      `/api/movies/upcoming`,
      {headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};


  //  export const getTopRatedMovies = () => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  //   ).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.json().message);
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //      throw error
  //   });
  // };

  
  export const getTopRatedMovies = () => {
    return fetch(
      `/api/movies/toprated`, 
      {headers: {
        "Authorization": window.localStorage.getItem("token")
      }
    }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const getNowPlayingMovies = (args) => {
    return fetch(
      "/api/movies/nowplaying", 
      {headers: {
        "Authorization": window.localStorage.getItem("token")
      }
    }
    ).then(res=>res.json());
  };

  // export const getSimilarMovies = id => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  //   )
  //     .then(res => res.json())
  //     .then(json => json.results);
  // };

  export const getSimilarMovies = (id) => {
    return fetch(
      `/api/movies/${id}/similar`,
      {headers: {
        'Authorization': window.localStorage.getItem('token')
      }}
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  // export const getPopularMovies = () => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  //   ).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.json().message);
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //      throw error
  //   });
  // };

  export const getPopularMovies = () => {
    return fetch(
      "/api/movies/popular", 
      {headers: {
        "Authorization": window.localStorage.getItem("token")
      }
    }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };


//   export const getPeople = (args) => {
//    const [, idPart] = args.queryKey;
//    const { id } = idPart;
//    return fetch(
//      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//    ).then((response) => {
//      if (!response.ok) {
//        throw new Error(response.json().message);
//      }
//      return response.json();
//    })
//    .catch((error) => {
//      throw error
//   });
//  };

  export const getPeople = (args) => {
   const [, idPart] = args.queryKey;
   const { id } = idPart;
   return fetch(
    `/api/actors/${id}`, 
    {headers: {
      "Authorization": window.localStorage.getItem("token")
    }
  }
   ).then((response) => {
     if (!response.ok) {
       throw new Error(response.json().message);
     }
     return response.json();
   })
   .catch((error) => {
     throw error
  });
 };

//  export const getPeopleImages = ({ queryKey }) => {
//   const [, idPart] = queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then( (response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();

//   })
//   .catch((error) => {
//     throw error
//  });
// }; 

export const getPeopleImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `/api/actors/${id}/images`, 
    {headers: {
      "Authorization": window.localStorage.getItem("token")
    }
  }
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
}; 

// export const getPopularPeople = () => {
  
//   return fetch(
//     `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

export const getPopularPeople = () => {
  return fetch(
    "/api/actors?page=1", 
    {headers: {
      "Authorization": window.localStorage.getItem("token")
    }
  }
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
