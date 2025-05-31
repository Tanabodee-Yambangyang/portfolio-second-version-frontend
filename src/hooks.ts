"use client";

import { fetchPortfolioData } from "@/fetcher";
import { useState, useEffect } from "react";
import { Contact } from "@/types/fetchedData";

export const usePortfolioData = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<boolean>(false);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
    const [contactData, setContactData] = useState<Contact>();

    const handleSwitchTheme = () => {
        setIsDarkTheme(prev => !prev);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const result = await fetchPortfolioData();
                const data = result[0]
                setContactData(data.contact);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return {
        loading,
        error,
        handleSwitchTheme,
        isDarkTheme,
        contactData
    }
};
