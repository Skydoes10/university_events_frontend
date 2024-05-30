'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '@/config/urlConfig';

const TestConnection = () => {
    const [connectionStatus, setConnectionStatus] = useState<string>('');

    useEffect(() => {
        const testBackendConnection = async () => {
            try {
                const response = await axios.get(`${config.backendUrl}/testconection`);
                setConnectionStatus(response.data.message);
            } catch (error) {
                console.error('Error connecting to the backend:', error);
                console.log(error);
                if (axios.isAxiosError(error)) {
                  console.log("Es error de Axios");
                    console.error('Axios error message:', error.message);
                    if (error.response) {
                        console.error('Response data:', error.response.data);
                        console.error('Response status:', error.response.status);
                        console.error('Response headers:', error.response.headers);
                    } else if (error.request) {
                        console.error('Request made but no response received:', error.request);
                    } else {
                        console.error('Error setting up the request:', error.message);
                    }
                }
                setConnectionStatus('Error connecting to the backend');
            }
        };

        testBackendConnection();
    }, []);

    return (
        <div>
            <h1>Test Connection</h1>
            <p>{connectionStatus}</p>
        </div>
    );
};

export default TestConnection;
