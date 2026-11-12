import React, { useState, useEffect } from 'react';
import { COUNTRIES, TRANSLATIONS } from '../data/translations';
import { LanguageContext } from './useLanguage';

const STORAGE_KEY = 'codescinema_country';

function getInitialCountryCode() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && COUNTRIES.some((c) => c.code === saved)) {
      return saved;
    }
  } catch {
    // Ignore storage errors in restricted contexts
  }
  return 'us';
}

function isPlainObject(val) {
  return val !== null && typeof val === 'object' && !Array.isArray(val);
}

function deepMerge(base, override) {
  if (!isPlainObject(override)) return base;
  const result = { ...base };
  for (const key of Object.keys(override)) {
    if (isPlainObject(override[key]) && isPlainObject(base[key])) {
      result[key] = deepMerge(base[key], override[key]);
    } else if (override[key] !== undefined) {
      result[key] = override[key];
    }
  }
  return result;
}

export function LanguageProvider({ children }) {
  const [countryCode, setCountryCodeState] = useState(getInitialCountryCode);

  const country = COUNTRIES.find((c) => c.code === countryCode) || COUNTRIES[0];
  const t = country.code === 'us' ? TRANSLATIONS.us : deepMerge(TRANSLATIONS.us, TRANSLATIONS[country.code] || {});

  useEffect(() => {
    document.documentElement.lang = country.lang;
    document.documentElement.dir = country.dir;
    if (t.metaTitle) {
      document.title = t.metaTitle;
    }
    try {
      localStorage.setItem(STORAGE_KEY, country.code);
    } catch {
      // Ignore storage errors
    }
  }, [country, t]);

  const setCountryCode = (code) => {
    if (COUNTRIES.some((c) => c.code === code)) {
      setCountryCodeState(code);
    }
  };

  return (
    <LanguageContext.Provider value={{ country, countries: COUNTRIES, setCountryCode, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
