import React from 'react';
import Herosection from '../components/Fristclass/Herosection';
import FeatureSection from '../components/Fristclass/FeatureSection';
import GallerySection from '../components/Fristclass/GallerySection';

const FirstClassPage = () => {

   

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-200 selection:text-amber-900 overflow-x-hidden">

            {/* --- HERO SECTION --- */}
            <Herosection />

            {/* --- FEATURES SECTION --- */}
            <FeatureSection />

            {/* --- GALLERY SECTION --- */}

            <GallerySection />
        </div>
    );
};

export default FirstClassPage;