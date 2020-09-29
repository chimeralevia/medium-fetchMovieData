import {
    useEffect,
    useState
} from 'react';
import axios from "axios";

const FetchMovieData = (endpoint, param) => {
    const [isLoading, setIsLoading] = useState(true);
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        const options = {
            "method": "GET",
            "url": `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/${endpoint}/${param}`,
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "a50b1ae9a3msh05442c847aef18cp152c83jsnb8ae1c892285",
                "useQueryString": true
            }
        }
        setResponse(undefined);
        setError(undefined);
        setIsLoading(true)

        axios(options)
            .then((response) => {
                setResponse(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            })
    }, [endpoint, param])

    return {
        isLoading,
        response,
        error
    };
}

export default FetchMovieData;