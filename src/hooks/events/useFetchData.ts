import { useState, useEffect } from 'react';
import axiosInstance from '@/utils/axiosInstance';

export const useFetchData = (endpoint: string) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(endpoint);
                setData(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};
