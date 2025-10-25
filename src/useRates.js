import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_TjpsAmzkmTTmxbcEFE12yhdyj9I9Zae2FUfJnQn4&currencies=EUR%2CUSD%2CGBP&base_currency=PLN';

export const useRates = () => {
    const [rates, setRates] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(null);

    const fetchRates = async () => {
        try {
            setLoading(true);
            setError(null);

            await new Promise(resolve => setTimeout(resolve, 2000));

            const response = await axios.get(API_URL);

            if (response.data && response.data.data) {
                const formattedRates = {};
                Object.keys(response.data.data).forEach(currency => {
                    formattedRates[currency] = 1 / response.data.data[currency].value;
                });
                setRates(formattedRates);

                if (response.data.meta.last_updated_at) {
                    setLastUpdate(new Date(response.data.meta.last_updated_at));
                }
            }
        } catch (err) {
            setError('Błąd pobierania kursów walut');
            console.error('API Error:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRates();
    }, []);

    return {
        rates,
        loading,
        error,
        lastUpdate,
        refetchRates: fetchRates
    };
};