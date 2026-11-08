
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    if (!document.cookie.includes('cookie_consent=')) {
      setShowBanner(true);
    }
  }, []);

  const setConsentCookie = (value: 'accepted' | 'declined') => {
    setShowBanner(false);
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000)); // Expires in 1 year
    const expires = "expires=" + d.toUTCString();
    document.cookie = `cookie_consent=${value};${expires};path=/;SameSite=Lax`;
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body">
          <div className="flex justify-between items-start">
            <h2 className="card-title">This website uses cookies</h2>
            <button onClick={() => setConsentCookie('declined')} className="btn btn-sm btn-circle btn-ghost">✕</button>
          </div>
          <p>This website uses cookies to improve user experience. <a href="/privacy" className="link">Read more</a></p>
          <div className="card-actions justify-end mt-4">
            <button onClick={() => setConsentCookie('accepted')} className="btn btn-primary">ACCEPT ALL</button>
            <button onClick={() => setConsentCookie('declined')} className="btn btn-ghost">DECLINE ALL</button>
          </div>
          <div className="text-center mt-2">
            <a href="#" className="btn btn-link btn-sm no-underline">SHOW DETAILS</a>
          </div>
        </div>
      </div>
    </div>
  );
}
