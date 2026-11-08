
import { useState, useEffect } from 'react';

// --- Language Translations ---
const translations = {
    en: {
        title: "This website uses cookies",
        description: "This website uses cookies to improve user experience.",
        readMore: "Read more",
        acceptAll: "ACCEPT ALL",
        declineAll: "DECLINE ALL",
        saveClose: "SAVE & CLOSE",
        showDetails: "SHOW DETAILS",
        aboutTab: "ABOUT COOKIES",
        declarationTab: "COOKIE DECLARATION",
        showCookies: "SHOW COOKIES",
        hideCookies: "HIDE COOKIES",
        report: "Cookie report created by CookieScript",
        categories: {
            necessary: {
                title: "Strictly necessary",
                description: "Strictly necessary cookies allow core website functionality such as user login and account management. The website cannot be used properly without strictly necessary cookies."
            },
            performance: {
                title: "Performance",
                description: "Performance cookies are used to see how visitors use the website, eg. analytics cookies. Those cookies cannot be used to directly identify a certain visitor."
            },
            targeting: {
                title: "Targeting",
                description: "Targeting cookies are used to identify visitors between different websites, eg. content partners, banner networks. Those cookies may be used by companies to build a profile of visitor interests or show relevant ads on other sites."
            }
        },
        aboutText: "Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. You can change your consent to cookie usage at any time."
    },
    // Add other languages here if needed
};

// --- Helper Components & Data ---
const UKFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="15">
        <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
        <clipPath id="b"><path d="M30 15h30v15H30zm-30 0h30v15H0zm30-15h30v15H30zM0 0h30v15H0z"/></clipPath>
        <g clipPath="url(#a)">
            <path d="M0 0v30h60V0z" fill="#012169"/>
            <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
            <path d="M0 0l60 30m0-30L0 30" clipPath="url(#b)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
    </svg>
);

const ChevronDown = () => (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
);

const LanguageSwitcher = ({ lang, setLang }: { lang: string, setLang: (l: string) => void }) => (
    <div className="flex items-center gap-2">
        <UKFlag />
        <span className="font-semibold text-sm">ENGLISH</span>
        <ChevronDown />
    </div>
);


export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [activeTab, setActiveTab] = useState('declaration');
    const [language, setLanguage] = useState('en');
    const [cookieChoices, setCookieChoices] = useState({ performance: true, targeting: false });
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

    useEffect(() => {
        // --- For development: always show banner. --- 
        const timer = setTimeout(() => {
            setShowBanner(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleSetConsent = (value: 'accepted' | 'declined' | 'saved') => {
        // Here you would save the actual choices from `cookieChoices` if value === 'saved'
        setShowBanner(false);
        setShowDetails(false);
        const d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = `cookie_consent=${value};${expires};path=/;SameSite=Lax`;
    };

    const openDetails = () => {
        setShowBanner(false);
        setShowDetails(true);
    };
    
    const closeDetails = () => {
        setShowDetails(false);
        setShowBanner(true);
    };
    
    const toggleCategory = (category: string) => {
        setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }));
    };

    const t = translations[language as keyof typeof translations];

    if (!showBanner && !showDetails) return null;

    return (
        <>
            {/* --- Small corner banner --- */}
            {showBanner && (
                <div className="fixed bottom-4 right-4 z-[100] w-full max-w-sm bg-white text-gray-800 shadow-2xl rounded-lg p-6">
                    <h2 className="text-lg font-bold">{t.title}</h2>
                    <p className="text-sm mt-2">{t.description} <a href="#" className="text-primary underline">{t.readMore}</a></p>
                    <div className="flex gap-4 mt-6">
                        <button onClick={() => handleSetConsent('accepted')} className="btn btn-sm flex-1 btn-primary text-white">{t.acceptAll}</button>
                        <button onClick={openDetails} className="btn btn-sm flex-1 btn-outline border-gray-300 hover:bg-gray-100">{t.showDetails}</button>
                    </div>
                </div>
            )}

            {/* --- Large details modal --- */}
            {showDetails && (
                <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl text-gray-800">
                        {/* --- Modal Header --- */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-200">
                            <LanguageSwitcher lang={language} setLang={setLanguage} />
                            <button onClick={closeDetails} className="text-gray-400 hover:text-gray-800">&times;</button>
                        </div>

                        {/* --- Modal Body --- */}
                        <div className="p-8">
                            <h2 className="text-2xl font-bold">{t.title}</h2>
                            <p className="text-sm mt-1">{t.description} <a href="#" className="text-primary underline">{t.readMore}</a></p>

                            {/* --- Tabs --- */}
                            <div className="flex border-b border-gray-200 mt-6">
                                <button
                                    onClick={() => setActiveTab('declaration')}
                                    className={`py-2 px-4 text-sm font-semibold ${activeTab === 'declaration' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                                >
                                    {t.declarationTab}
                                </button>
                                <button
                                    onClick={() => setActiveTab('about')}
                                    className={`py-2 px-4 text-sm font-semibold ${activeTab === 'about' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                                >
                                    {t.aboutTab}
                                </button>
                            </div>

                            {/* --- Tab Content --- */}
                            <div className="mt-6 text-sm leading-6 max-h-64 overflow-y-auto">
                                {activeTab === 'declaration' ? (
                                    <div className="space-y-4">
                                        {Object.entries(t.categories).map(([key, cat]) => (
                                            <div key={key} className="border-b border-gray-200 pb-4">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-bold">{cat.title}</h4>
                                                        <p className="mt-1 text-gray-600">{cat.description}</p>
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        className="toggle toggle-sm"
                                                        disabled={key === 'necessary'}
                                                        checked={key === 'necessary' ? true : cookieChoices[key as keyof typeof cookieChoices]}
                                                        onChange={(e) => setCookieChoices(prev => ({...prev, [key]: e.target.checked}))}
                                                    />
                                                </div>
                                                <button onClick={() => toggleCategory(key)} className="text-primary font-semibold text-xs mt-2 flex items-center gap-1">
                                                    {expandedCategories[key] ? t.hideCookies : t.showCookies} <ChevronDown />
                                                </button>
                                                {expandedCategories[key] && (
                                                    <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                                                        <p>Details about {cat.title} cookies would be listed here.</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>{t.aboutText}</p>
                                )}
                            </div>
                        </div>

                        {/* --- Modal Footer --- */}
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-b-lg">
                            <div className="flex gap-2">
                                <button onClick={() => handleSetConsent('accepted')} className="btn btn-sm btn-outline border-gray-300">{t.acceptAll}</button>
                                <button onClick={() => handleSetConsent('declined')} className="btn btn-sm btn-outline border-gray-300">{t.declineAll}</button>
                            </div>
                             <p className="text-xs text-center text-base-content/50 mt-4">{t.report}</p>
                            <button onClick={() => handleSetConsent('saved')} className="btn btn-sm bg-gray-200 hover:bg-gray-300 border-gray-300">{t.saveClose}</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
