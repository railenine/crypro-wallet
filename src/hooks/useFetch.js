import axios from "axios";

export const useDbFetch = () => {
    axios('http://localhost:3001/values')
}