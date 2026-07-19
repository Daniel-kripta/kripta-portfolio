import { useEffect, useState } from "react";
import { useApi } from "./useAPI";

export function useProjects(type){
    const { request, loading, error } = useApi()
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const url = type ? `/api/projects?type=${type}` : "/api/projects"
        request(url).then(setProjects)
    }, [type])

    return {projects, loading, error}
}