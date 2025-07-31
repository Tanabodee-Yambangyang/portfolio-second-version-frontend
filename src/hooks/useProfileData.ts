"use client";
import { portfolioData } from "@/data";

import { useState, useEffect } from "react";
import { Contact, Introduction, Education, Project, Experience, Skills } from "@/types/fetchedData";

export const usePortfolioData = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<boolean>(false);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
    const [contactData, setContactData] = useState<Contact>();
    const [educationData, setEducationData] = useState<Education[]>();
    const [projectData, setProjectData] = useState<Project[]>();
    const [experienceData, setExperienceData] = useState<Experience[]>();
    const [skillsData, setSkillsData] = useState<Skills>();
    const [profile, setProfile] = useState<Introduction>();

    const handleSwitchTheme = () => {
        setIsDarkTheme(prev => !prev);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);                
                const data = portfolioData[0]
                const introData = {
                    cv: data.cv,
                    image: data.image,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    address: data.address,
                    about_me: data.about_me,
                    introduction: data.introduction
                };
                setContactData(data.contact);
                setProfile(introData);
                setSkillsData(data.skills);
                setEducationData(data.education);
                setExperienceData(data.experiences);
                setProjectData(data.projects);
            } catch {
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
        contactData,
        profile,
        skillsData,
        educationData,
        experienceData,
        projectData
    }
};
