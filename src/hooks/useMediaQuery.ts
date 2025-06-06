"use client";
import { useState, useEffect } from "react";

export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);

    handleChange(); // check immediately
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
