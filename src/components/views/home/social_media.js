import React, { useEffect } from 'react';

const SocialMediaFeed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.dataset.useServiceCore = "";
        script.defer = true;
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleToggle = (target) => {
        document.querySelectorAll('.toggleBtn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.toggleBtn[data-target="${target}"]`).classList.add('active');
        // Add logic to display corresponding feed
    };

    return (
        <>
        <div className="w-100 padding overflow-hidden hm-newsContainer">
            <div className="container-lg">
                <div className="heading mx-auto text-center">
                    <h3>Social Media Feed</h3>
                </div>
                <div className="toggleHead">
                    <button 
                        className="toggleBtn active" 
                        data-target="instagram" 
                        onClick={() => handleToggle('instagram')}
                    >
                        <i className="fab fa-instagram"></i> Instagram
                    </button>
                    <button 
                        className="toggleBtn" 
                        data-target="youtube" 
                        onClick={() => handleToggle('youtube')}
                    >
                        <i className="fab fa-youtube"></i> YouTube
                    </button>
                </div>
                <div className="social-container">
                    <div className="elfsight-app-1001f272-d148-4800-8299-64da2a0c4604 eapps-instagram-feed es-widget" data-elfsight-app-lazy="" id="eapps-instagram-feed-1">
                        {/* Social Media Feed Content Goes Here */}
                 



            <div className="social-container">
                <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core="" defer=""></script>
                <div className="elfsight-app-1001f272-d148-4800-8299-64da2a0c4604 eapps-instagram-feed es-widget" data-elfsight-app-lazy="" id="eapps-instagram-feed-1"><div className="eapps-instagram-feed-container">
    <div className="eapps-instagram-feed-title-container" eapps-link="titleContainer"><div className="eui-widget-title es-widget-title eapps-instagram-feed-title" style={{display: 'block'}}>Star Estate </div></div>

    <div className="eapps-instagram-feed-content">
        <div className="eapps-instagram-feed-header-container" eapps-link="headerContainer"></div>
        <div className="eapps-instagram-feed-posts-container" eapps-link="postsContainer"><div className="eapps-instagram-feed-posts-slider eapps-instagram-feed-posts eui-slider es-layout es-layout-carousel eapps-instagram-feed-posts-large">
    <div className="eapps-instagram-feed-posts-slider-inner eapps-instagram-feed-posts-inner eui-slider-inner es-layout-carousel-content" eapps-link="postsInner" style={{minHeight: '0px', margin: '-10px', width: '1130px'}}><div className="eapps-instagram-feed-posts-view eui-slider-slide"><div className="eapps-instagram-feed-posts-item-template-tile eapps-instagram-feed-posts-item es-post eapps-instagram-feed-posts-item-type-image eapps-instagram-feed-posts-item-visible eapps-instagram-feed-posts-item-with-data eapps-instagram-feed-posts-item-image-landscape eapps-instagram-feed-posts-item-loaded" data-code="undefined"style={{ width: 'calc(33.3333% - 20px)', margin: '10px' }}
    >
    <a className="eapps-instagram-feed-posts-item-link" href="https://www.instagram.com/p/C_SoGS5O6Zp" eapps-link="link" target="_blank" rel="noopener noreferrer nofollow">
        <div className="eapps-instagram-feed-posts-item-media es-post-media">
            <div className="eapps-instagram-feed-posts-item-image-wrapper">
    <img className="eapps-instagram-feed-posts-item-image es-post-media-image" src="https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Finstagram.fbne9-2.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F457600086_937930361684341_4236853549710377476_n.jpg%3Fstp%3Ddst-jpg_e15_s480x480%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0%26_nc_ht%3Dinstagram.fbne9-2.fna.fbcdn.net%26_nc_cat%3D101%26_nc_ohc%3DgTX3FMwz2RIQ7kNvgFJJfVs%26edm%3DAPU89FAAAAAA%26ccb%3D7-5%26oh%3D00_AYCQ5qCiQp20WHWyOVSbKZgdIrCu_BZ57i5vnFA4OVCoCQ%26oe%3D66D88C81%26_nc_sid%3Dbc0c2c" eapps-link="image" alt=" We are proud to clinch the Top Performing Partner award.  #Starestate is dee..."/>
    

    <span className="eapps-instagram-feed-posts-item-image-icon-video eapps-instagram-feed-posts-item-image-icon es-post-type">
        <svg viewBox="0 0 24 24">
            <path d="M23.467,5.762c-0.118-0.045-0.232-0.068-0.342-0.068c-0.246,0-0.451,0.087-0.615,0.26l-3.76,3.217v5.766l3.76,3.578c0.164,0.173,0.369,0.26,0.615,0.26c0.109,0,0.223-0.023,0.342-0.068C23.822,18.552,24,18.284,24,17.901V6.57C24,6.186,23.822,5.917,23.467,5.762z"></path>
            <path d="M16.33,4.412c-0.77-0.769-1.696-1.154-2.78-1.154H3.934c-1.084,0-2.01,0.385-2.78,1.154C0.385,5.182,0,6.108,0,7.192v9.616c0,1.084,0.385,2.01,1.154,2.78c0.77,0.77,1.696,1.154,2.78,1.154h9.616c1.084,0,2.01-0.385,2.78-1.154c0.77-0.77,1.154-1.696,1.154-2.78v-3.076v-3.478V7.192C17.484,6.108,17.099,5.182,16.33,4.412z M8.742,17.229c-2.888,0-5.229-2.341-5.229-5.229c0-2.888,2.341-5.229,5.229-5.229S13.971,9.112,13.971,12C13.971,14.888,11.63,17.229,8.742,17.229z"></path>
            <circle cx="8.742" cy="12" r="3.5"></circle>
        </svg>
    </span>

    <span className="eapps-instagram-feed-posts-item-image-icon-carousel eapps-instagram-feed-posts-item-image-icon es-post-type">
        <svg viewBox="0 0 45.964 45.964">
            <path d="M32.399,40.565H11.113v1.297c0,2.24,1.838,4.051,4.076,4.051h26.733c2.239,0,4.042-1.811,4.042-4.051V15.13c0-2.237-1.803-4.068-4.042-4.068h-1.415v21.395C40.507,36.904,36.845,40.566,32.399,40.565z"></path>
            <path d="M0,4.102l0,28.355c0,2.241,1.814,4.067,4.051,4.067h28.365c2.237,0,4.066-1.826,4.066-4.067l0-28.356c0-2.238-1.828-4.051-4.066-4.051H4.051C1.814,0.05,0,1.862,0,4.102z"></path>
        </svg>
    </span>
</div>

        </div>

        
            <div className="eapps-instagram-feed-posts-item-overlay" eapps-link="overlay">
                <div className="eapps-instagram-feed-posts-item-content" eapps-link="content">
                    
                        <div className="eapps-instagram-feed-posts-item-counters">
                            
                                <div className="eapps-instagram-feed-posts-item-likes-count es-post-likes-count">
    <svg className="eapps-instagram-feed-posts-item-likes-count-icon" viewBox="0 0 24 24">
        <title>Likes Count</title>
        <path d="M17.7,1.5c-2,0-3.3,0.5-4.9,2.1c0,0-0.4,0.4-0.7,0.7c-0.3-0.3-0.7-0.7-0.7-0.7c-1.6-1.6-3-2.1-5-2.1C2.6,1.5,0,4.6,0,8.3
        c0,4.2,3.4,7.1,8.6,11.5c0.9,0.8,1.9,1.6,2.9,2.5c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2c1.1-1,2.1-1.8,3.1-2.7
        c4.8-4.1,8.5-7.1,8.5-11.4C24,4.6,21.4,1.5,17.7,1.5z M14.6,18.6c-0.8,0.7-1.7,1.5-2.6,2.3c-0.9-0.7-1.7-1.4-2.5-2.1
        c-5-4.2-8.1-6.9-8.1-10.5c0-3.1,2.1-5.5,4.9-5.5c1.5,0,2.6,0.3,3.8,1.5c1,1,1.2,1.2,1.2,1.2C11.6,5.9,11.7,6,12,6.1
        c0.3,0,0.5-0.2,0.7-0.4c0,0,0.2-0.2,1.2-1.3c1.3-1.3,2.1-1.5,3.8-1.5c2.8,0,4.9,2.4,4.9,5.5C22.6,11.9,19.4,14.6,14.6,18.6z"></path>
    </svg>

    <div className="eapps-instagram-feed-posts-item-likes-count-label">6</div>
</div>

                            

                            
                        </div>
                    

                    
                        <div className="eapps-instagram-feed-posts-item-text es-post-text" eapps-link="text"> We are proud to clinch the Top Performing Partner award.  #Starestate is deeply overwhelmed and expresses heartfelt gratitude to #ExperionGroup for giving us a fair crack of the whip. Your unwavering confidence in us and our perseverance in pushing to the best of our capabilities to reach the defined goal, resonates with the success of #ExperionElements, in Sector 45, Noida.   STAR ESTATE - UP RERA REG. No.: UPRERAAGT10202 | https://up-rera.in/Agents   Project RERA REG. No. : Phase- I RERA Regn. No. UPRERAPRJ120027/04/2024, Phase-II RERA Regn. No. UPRERAPRJ953234/04/2024 https://up-rera.in   #Starestate #GaursonIndia #rewards #CorporateAwards #WorkLife #RewardsAndRecognition #R&amp;R #motivation #workwelldone</div>
                    
                <div className="eapps-instagram-feed-posts-item-text es-post-text eapps-instagram-feed-posts-item-text-clone" eapps-link="text"> We are proud to clinch the Top Performing Partner award.  #Starestate is deeply overwhelmed and expresses heartfelt gratitude to #ExperionGroup for giving us a fair crack of the whip. Your unwavering confidence in us and our perseverance in pushing to the best of our capabilities to reach the defined goal, resonates with the success of #ExperionElements, in Sector 45, Noida.   STAR ESTATE - UP RERA REG. No.: UPRERAAGT10202 | https://up-rera.in/Agents   Project RERA REG. No. : Phase- I RERA Regn. No. UPRERAPRJ120027/04/2024, Phase-II RERA Regn. No. UPRERAPRJ953234/04/2024 https://up-rera.in   #Starestate #GaursonIndia #rewards #CorporateAwards #WorkLife #RewardsAndRecognition #R&amp;R #motivation #workwelldone</div></div>
            </div>
        

        
            <div className="eapps-instagram-feed-posts-item-red-like-container es-post-like-notification" eapps-link="redLikeContainer"></div>
        
    </a>
</div><div className="eapps-instagram-feed-posts-item-template-tile eapps-instagram-feed-posts-item es-post eapps-instagram-feed-posts-item-type-image eapps-instagram-feed-posts-item-visible eapps-instagram-feed-posts-item-with-data eapps-instagram-feed-posts-item-image-landscape eapps-instagram-feed-posts-item-loaded" data-code="undefined" style={{ width: 'calc(33.3333% - 20px)', margin: '10px' }}
>
    <a className="eapps-instagram-feed-posts-item-link" href="https://www.instagram.com/p/C_Pn3iEsRaO" eapps-link="link" target="_blank" rel="noopener noreferrer nofollow">
        <div className="eapps-instagram-feed-posts-item-media es-post-media">
            <div className="eapps-instagram-feed-posts-item-image-wrapper">
    <img className="eapps-instagram-feed-posts-item-image es-post-media-image" src="https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Finstagram.fbne9-2.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F457312111_937128745097836_339860805091887687_n.jpg%3Fstp%3Ddst-jpg_e15_s480x480%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0%26_nc_ht%3Dinstagram.fbne9-2.fna.fbcdn.net%26_nc_cat%3D104%26_nc_ohc%3D1ANINgyOKhgQ7kNvgHl7RLb%26_nc_gid%3D4bf53381343a4e1b9cf5ff6ec64b7345%26edm%3DAPU89FAAAAAA%26ccb%3D7-5%26oh%3D00_AYBei3lalkYcVeSfDVeSXVKw7h0EBD51TaaLEVORV0BkPw%26oe%3D66D88756%26_nc_sid%3Dbc0c2c" eapps-link="image" alt=" Live the wish to offer fun filled life for your little bundles of joy! Where..."/>
    

    <span className="eapps-instagram-feed-posts-item-image-icon-video eapps-instagram-feed-posts-item-image-icon es-post-type">
        <svg viewBox="0 0 24 24">
            <path d="M23.467,5.762c-0.118-0.045-0.232-0.068-0.342-0.068c-0.246,0-0.451,0.087-0.615,0.26l-3.76,3.217v5.766l3.76,3.578c0.164,0.173,0.369,0.26,0.615,0.26c0.109,0,0.223-0.023,0.342-0.068C23.822,18.552,24,18.284,24,17.901V6.57C24,6.186,23.822,5.917,23.467,5.762z"></path>
            <path d="M16.33,4.412c-0.77-0.769-1.696-1.154-2.78-1.154H3.934c-1.084,0-2.01,0.385-2.78,1.154C0.385,5.182,0,6.108,0,7.192v9.616c0,1.084,0.385,2.01,1.154,2.78c0.77,0.77,1.696,1.154,2.78,1.154h9.616c1.084,0,2.01-0.385,2.78-1.154c0.77-0.77,1.154-1.696,1.154-2.78v-3.076v-3.478V7.192C17.484,6.108,17.099,5.182,16.33,4.412z M8.742,17.229c-2.888,0-5.229-2.341-5.229-5.229c0-2.888,2.341-5.229,5.229-5.229S13.971,9.112,13.971,12C13.971,14.888,11.63,17.229,8.742,17.229z"></path>
            <circle cx="8.742" cy="12" r="3.5"></circle>
        </svg>
    </span>

    <span className="eapps-instagram-feed-posts-item-image-icon-carousel eapps-instagram-feed-posts-item-image-icon es-post-type">
        <svg viewBox="0 0 45.964 45.964">
            <path d="M32.399,40.565H11.113v1.297c0,2.24,1.838,4.051,4.076,4.051h26.733c2.239,0,4.042-1.811,4.042-4.051V15.13c0-2.237-1.803-4.068-4.042-4.068h-1.415v21.395C40.507,36.904,36.845,40.566,32.399,40.565z"></path>
            <path d="M0,4.102l0,28.355c0,2.241,1.814,4.067,4.051,4.067h28.365c2.237,0,4.066-1.826,4.066-4.067l0-28.356c0-2.238-1.828-4.051-4.066-4.051H4.051C1.814,0.05,0,1.862,0,4.102z"></path>
        </svg>
    </span>
</div>

        </div>

        
            <div className="eapps-instagram-feed-posts-item-overlay" eapps-link="overlay">
                <div className="eapps-instagram-feed-posts-item-content" eapps-link="content">
                    
                        <div className="eapps-instagram-feed-posts-item-counters">
                            
                                <div className="eapps-instagram-feed-posts-item-likes-count es-post-likes-count">
    <svg className="eapps-instagram-feed-posts-item-likes-count-icon" viewBox="0 0 24 24">
        <title>Likes Count</title>
        <path d="M17.7,1.5c-2,0-3.3,0.5-4.9,2.1c0,0-0.4,0.4-0.7,0.7c-0.3-0.3-0.7-0.7-0.7-0.7c-1.6-1.6-3-2.1-5-2.1C2.6,1.5,0,4.6,0,8.3
        c0,4.2,3.4,7.1,8.6,11.5c0.9,0.8,1.9,1.6,2.9,2.5c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2c1.1-1,2.1-1.8,3.1-2.7
        c4.8-4.1,8.5-7.1,8.5-11.4C24,4.6,21.4,1.5,17.7,1.5z M14.6,18.6c-0.8,0.7-1.7,1.5-2.6,2.3c-0.9-0.7-1.7-1.4-2.5-2.1
        c-5-4.2-8.1-6.9-8.1-10.5c0-3.1,2.1-5.5,4.9-5.5c1.5,0,2.6,0.3,3.8,1.5c1,1,1.2,1.2,1.2,1.2C11.6,5.9,11.7,6,12,6.1
        c0.3,0,0.5-0.2,0.7-0.4c0,0,0.2-0.2,1.2-1.3c1.3-1.3,2.1-1.5,3.8-1.5c2.8,0,4.9,2.4,4.9,5.5C22.6,11.9,19.4,14.6,14.6,18.6z"></path>
    </svg>

    <div className="eapps-instagram-feed-posts-item-likes-count-label">4</div>
</div>

                            

                            
                        </div>
                    

                    
                        <div className="eapps-instagram-feed-posts-item-text es-post-text" eapps-link="text"> Live the wish to offer fun filled life for your little bundles of joy! Where they enjoy childhood and embrace the fragrant petrichor in a hygienic atmosphere. To explore home with lush greenscape where rains are fun, connect with #starestate.  To book a site visit call 📞 +91 7088470884 or visit🌐 www.starestate.in to schedule a site visit.  #resdentialpropertyforsale #luxuryapartmentsforsale #realestatebuying #propertypurchase #homebuying #dreamhome #apartmentsforsale #3BHKapartments #4BHKapartmentsofsale #5BHKapartmentsforsale.</div>
                    
                <div className="eapps-instagram-feed-posts-item-text es-post-text eapps-instagram-feed-posts-item-text-clone" eapps-link="text"> Live the wish to offer fun filled life for your little bundles of joy! Where they enjoy childhood and embrace the fragrant petrichor in a hygienic atmosphere. To explore home with lush greenscape where rains are fun, connect with #starestate.  To book a site visit call 📞 +91 7088470884 or visit🌐 www.starestate.in to schedule a site visit.  #resdentialpropertyforsale #luxuryapartmentsforsale #realestatebuying #propertypurchase #homebuying #dreamhome #apartmentsforsale #3BHKapartments #4BHKapartmentsofsale #5BHKapartmentsforsale.</div></div>
            </div>
        

        
            <div className="eapps-instagram-feed-posts-item-red-like-container es-post-like-notification" eapps-link="redLikeContainer"></div>
        
    </a>
</div><div className="eapps-instagram-feed-posts-item-template-tile eapps-instagram-feed-posts-item es-post eapps-instagram-feed-posts-item-type-image eapps-instagram-feed-posts-item-visible eapps-instagram-feed-posts-item-with-data eapps-instagram-feed-posts-item-image-landscape eapps-instagram-feed-posts-item-loaded" data-code="undefined" style={{ width: 'calc(33.3333% - 20px)', margin: '10px' }}
>
    <a className="eapps-instagram-feed-posts-item-link" href="https://www.instagram.com/p/C_NAeMpS2Os" eapps-link="link" target="_blank" rel="noopener noreferrer nofollow">
        <div className="eapps-instagram-feed-posts-item-media es-post-media">
            <div className="eapps-instagram-feed-posts-item-image-wrapper">
    <img className="eapps-instagram-feed-posts-item-image es-post-media-image" src="https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Finstagram.fbne9-2.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F457020996_936423735168337_5568283912092112158_n.jpg%3Fstp%3Ddst-jpg_e15_s480x480%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0%26_nc_ht%3Dinstagram.fbne9-2.fna.fbcdn.net%26_nc_cat%3D101%26_nc_ohc%3DcTKVFAFwoMMQ7kNvgHawoA7%26edm%3DAPU89FAAAAAA%26ccb%3D7-5%26oh%3D00_AYCApIJztIcqhaKgAWShSltGywFrVfK-34zQnKh9Xu_eXQ%26oe%3D66D88A82%26_nc_sid%3Dbc0c2c" eapps-link="image" alt=" A home nestled amid fresh breeze with exotic floral! Explore the home of you..."/>
    

    <span className="eapps-instagram-feed-posts-item-image-icon-video eapps-instagram-feed-posts-item-image-icon es-post-type">
        <svg viewBox="0 0 24 24">
            <path d="M23.467,5.762c-0.118-0.045-0.232-0.068-0.342-0.068c-0.246,0-0.451,0.087-0.615,0.26l-3.76,3.217v5.766l3.76,3.578c0.164,0.173,0.369,0.26,0.615,0.26c0.109,0,0.223-0.023,0.342-0.068C23.822,18.552,24,18.284,24,17.901V6.57C24,6.186,23.822,5.917,23.467,5.762z"></path>
            <path d="M16.33,4.412c-0.77-0.769-1.696-1.154-2.78-1.154H3.934c-1.084,0-2.01,0.385-2.78,1.154C0.385,5.182,0,6.108,0,7.192v9.616c0,1.084,0.385,2.01,1.154,2.78c0.77,0.77,1.696,1.154,2.78,1.154h9.616c1.084,0,2.01-0.385,2.78-1.154c0.77-0.77,1.154-1.696,1.154-2.78v-3.076v-3.478V7.192C17.484,6.108,17.099,5.182,16.33,4.412z M8.742,17.229c-2.888,0-5.229-2.341-5.229-5.229c0-2.888,2.341-5.229,5.229-5.229S13.971,9.112,13.971,12C13.971,14.888,11.63,17.229,8.742,17.229z"></path>
            <circle cx="8.742" cy="12" r="3.5"></circle>
        </svg>
    </span>

    <span className="eapps-instagram-feed-posts-item-image-icon-carousel eapps-instagram-feed-posts-item-image-icon es-post-type">
        <svg viewBox="0 0 45.964 45.964">
            <path d="M32.399,40.565H11.113v1.297c0,2.24,1.838,4.051,4.076,4.051h26.733c2.239,0,4.042-1.811,4.042-4.051V15.13c0-2.237-1.803-4.068-4.042-4.068h-1.415v21.395C40.507,36.904,36.845,40.566,32.399,40.565z"></path>
            <path d="M0,4.102l0,28.355c0,2.241,1.814,4.067,4.051,4.067h28.365c2.237,0,4.066-1.826,4.066-4.067l0-28.356c0-2.238-1.828-4.051-4.066-4.051H4.051C1.814,0.05,0,1.862,0,4.102z"></path>
        </svg>
    </span>
</div>

        </div>

        
            <div className="eapps-instagram-feed-posts-item-overlay" eapps-link="overlay">
                <div className="eapps-instagram-feed-posts-item-content" eapps-link="content">
                    
                        <div className="eapps-instagram-feed-posts-item-counters">
                            
                                <div className="eapps-instagram-feed-posts-item-likes-count es-post-likes-count">
    <svg className="eapps-instagram-feed-posts-item-likes-count-icon" viewBox="0 0 24 24">
        <title>Likes Count</title>
        <path d="M17.7,1.5c-2,0-3.3,0.5-4.9,2.1c0,0-0.4,0.4-0.7,0.7c-0.3-0.3-0.7-0.7-0.7-0.7c-1.6-1.6-3-2.1-5-2.1C2.6,1.5,0,4.6,0,8.3
        c0,4.2,3.4,7.1,8.6,11.5c0.9,0.8,1.9,1.6,2.9,2.5c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2c1.1-1,2.1-1.8,3.1-2.7
        c4.8-4.1,8.5-7.1,8.5-11.4C24,4.6,21.4,1.5,17.7,1.5z M14.6,18.6c-0.8,0.7-1.7,1.5-2.6,2.3c-0.9-0.7-1.7-1.4-2.5-2.1
        c-5-4.2-8.1-6.9-8.1-10.5c0-3.1,2.1-5.5,4.9-5.5c1.5,0,2.6,0.3,3.8,1.5c1,1,1.2,1.2,1.2,1.2C11.6,5.9,11.7,6,12,6.1
        c0.3,0,0.5-0.2,0.7-0.4c0,0,0.2-0.2,1.2-1.3c1.3-1.3,2.1-1.5,3.8-1.5c2.8,0,4.9,2.4,4.9,5.5C22.6,11.9,19.4,14.6,14.6,18.6z"></path>
    </svg>

    <div className="eapps-instagram-feed-posts-item-likes-count-label">7</div>
</div>

                            

                            
                        </div>
                    

                    
                        <div className="eapps-instagram-feed-posts-item-text es-post-text" eapps-link="text"> A home nestled amid fresh breeze with exotic floral! Explore the home of your whims and fancy right now with #Starestate, a team of seasoned real estate enthusiasts. Call 📞 +91 7088470884 or visit🌐 www.starestate.in to schedule a site visit.   #resdentialpropertyforsale #luxuryapartmentsforsale #realestatebuying #propertypurchase #homebuying #dreamhome #apartmentsforsale #3BHKapartments #4BHKapartmentsofsale #5BHKapartmentsforsale.</div>
                    
                <div className="eapps-instagram-feed-posts-item-text es-post-text eapps-instagram-feed-posts-item-text-clone" eapps-link="text"> A home nestled amid fresh breeze with exotic floral! Explore the home of your whims and fancy right now with #Starestate, a team of seasoned real estate enthusiasts. Call 📞 +91 7088470884 or visit🌐 www.starestate.in to schedule a site visit.   #resdentialpropertyforsale #luxuryapartmentsforsale #realestatebuying #propertypurchase #homebuying #dreamhome #apartmentsforsale #3BHKapartments #4BHKapartmentsofsale #5BHKapartmentsforsale.</div></div>
            </div>
        

        
            <div className="eapps-instagram-feed-posts-item-red-like-container es-post-like-notification" eapps-link="redLikeContainer"></div>
        
    </a>
</div></div></div>

    <div className="eapps-instagram-feed-posts-slider-prev eapps-instagram-feed-posts-slider-nav eui-slider-arrow-prev eui-slider-arrow es-layout-carousel-arrow es-layout-carousel-arrow-prev">
        <svg viewBox="4 0 8 16" width="12" height="16" className="eapps-instagram-feed-posts-slider-nav-icon">
            <path d="M4.3,8.7l6,5.9c0.4,0.4,1.1,0.4,1.5,0c0.4-0.4,0.4-1.1,0-1.5L6.5,8l5.2-5.2c0.4-0.4,0.4-1.1,0-1.5
        c-0.4-0.4-1.1-0.4-1.5,0l-6,6C3.9,7.7,3.9,8.3,4.3,8.7z"></path>
        </svg>
    </div>

    <div className="eapps-instagram-feed-posts-slider-next eapps-instagram-feed-posts-slider-nav eui-slider-arrow-next eui-slider-arrow es-layout-carousel-arrow es-layout-carousel-arrow-next eui-slider-arrow-enabled">
        <svg viewBox="4 0 8 16" width="12" height="16" className="eapps-instagram-feed-posts-slider-nav-icon">
            <path d="M11.7,7.3l-6-5.9c-0.4-0.4-1.1-0.4-1.5,0c-0.4,0.4-0.4,1.1,0,1.5L9.5,8l-5.2,5.2
        c-0.4,0.4-0.4,1.1,0,1.5c0.4,0.4,1.1,0.4,1.5,0l6-6C12.1,8.3,12.1,7.7,11.7,7.3z"></path>
        </svg>
    </div>
</div></div>
        <div className="eapps-instagram-feed-error-container" eapps-link="errorContainer"></div>
        <div className="eapps-instagram-feed-content-loader eapps-instagram-feed-loader" eapps-link="loader"></div>
    </div>

    <div className="eapps-instagram-feed-data-status-container" eapps-link="dataStatusContainer"><div className="eapps-instagram-feed-data-status" eapps-link="dataStatusItemsContainer">
  
</div></div>
</div>
</div>
               
            </div>
        
        </div>
    </div>
    </div></div>
        </>
    );
}

export default SocialMediaFeed;