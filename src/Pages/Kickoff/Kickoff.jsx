import { useContext, useState, useEffect } from "react";

import '../Kickoff/Kickoff.css'
import { Helmet } from 'react-helmet-async';
import { TheImage } from "../../Components/TheImage/TheImage";
import LanguageContext from "../../Context/LanguageContext"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import news_image from '/OtherImages/HomeImages/celal2.webp'

const CustomPrevArrow2 = ({ clickHandler, hasPrev, label }) => {
    return <div className="prev" id="newsprev" style={{ zIndex: '999', marginLeft:"5%" }} onClick={clickHandler}>&#10094;</div>;
};

const CustomNextArrow2 = ({ clickHandler, hasPrev, label }) => {
    return <div className="next" id="newsnext" style={{ zIndex: '999', marginRight:"5%"}} onClick={clickHandler}>&#10095;</div>;
};

export const Kickoff = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    const calculateTimeLeft = () => {
        const difference = new Date("Jan 6, 2024 15:00:00") - new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
    
        return timeLeft;
      };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
    });

    const { days, hours, minutes, seconds } = timeLeft;
    
    
    return(
        <div className="NewsPage" style={{marginTop: "5rem"}}> 
            <Helmet>
                <title> {getTranslation("helmet-news")} </title>
                <meta name="description" content="Do not miss a single thing happening. There's a lot going on here :)"/>
                <link rel="canonical" href="https://www.ielrobotics.org/news"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charset="UTF-8"/>
                <meta name="author" content="contact@ielrobotics.org"/>
            </Helmet>
            <TheImage source={news_image} text={getTranslation("kickoff-slogan")}/>
            <div className='team-title-holder'>
                <h1 className='team-title'> Merhaba FRC Türkiye! </h1>
            </div>
            <div className="kickoff-container">
                <img src="/OtherImages/kickoff/akis.webp" className="kickoff-wide-image"></img>
                <div className="kickoff-textbox">
                    <p className="kickoff-text">
                    6 Ocak 2024'te İstanbul Erkek Lisesi'nde sizinle Kickoff'ta buluşacak olmanın mutluluğu
                    içindeyiz. Okulumuza nasıl ulaşabileceğiniz, etkinlik programının neler içeridği gibi
                    sorularınıza burada cevap bulabilir; aklınıza takılan ekstra soruları bize sorabilirsiniz.
                    </p>
                </div>
                <div className="kickoff-subcontainer">
                    <div className="kickoff-subcontainer-sub">
                        <h2>Program Akışı</h2>
                        <img src="/OtherImages/kickoff/programakis.webp" className="kickoff-narrow-image"></img>
                    </div>
                    
                    <div className="kickoff-subcontainer-sub">
                        <h2>Yaka Kartları</h2>
                        <img src="/OtherImages/kickoff/yaka.webp" className="kickoff-narrow-image"></img>
                    </div>

                    <div className="kickoff-subcontainer-sub">
                        <h2>Konum</h2>
                        <MapContainer
                            center={[41.01216854533441, 28.97445849566546]} // Set initial map center
                            zoom={13} // Set initial zoom level
                            id="kickoff-map" // Set map height and width
                            >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; OpenStreetMap contributors"
                            />
                            <Marker position={[41.01216854533441, 28.97445849566546]} icon={L.icon({
                                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                })}>
                                <Popup>
                                <a href="https://maps.app.goo.gl/eL7DWVv1pSn8kAbo8" target='_blank' rel="noopener noreferrer">Tıkla</a>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    <div className="kickoff-subcontainer-sub">
                        <h2>Ulaşım</h2>
                        <Carousel
                            showArrows={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            dynamicHeight={true}
                            renderArrowPrev={(clickHandler, hasPrev, label) => (
                                <CustomPrevArrow2 clickHandler={clickHandler} hasPrev={hasPrev} label={label} />
                            )}
                            renderArrowNext={(clickHandler, hasNext, label) => (
                                <CustomNextArrow2 clickHandler={clickHandler} hasNext={hasNext} label={label} />
                            )}
                            className="kickoffslidertemp"
                        >
                            <div className="kickoff-slider-container">
                                <div className="kickoff-image-text">İstanbul Erkek Lisesi'ne Nasıl Gelinir?</div>
                                <img src={"/OtherImages/kickoff/iel.webp"} className="kickoffnewsimage" alt="News" />
                            </div>
                            <div className="kickoff-slider-container">
                                <div className="kickoff-image-text">Sirkeci'de indikten sonra Cağaloğlu çıkışından çıkın ve yokuş yukarı tırmanın</div>
                                <img src={"/OtherImages/kickoff/sirkeci.webp"} className="kickoffnewsimage" alt="News" />
                            </div>
                            <div className="kickoff-slider-container">
                                <div className="kickoff-image-text">T1 Çemberlitaş durağında inin ve Babıali yokuşundan aşağı ilerleyin</div>
                                <img src={"/OtherImages/kickoff/tramvay.webp"} className="kickoffnewsimage" alt="News" />
                            </div>
                    </Carousel>
                    </div>
                </div> 
                </div>
                <div className='team-title-holder' style={{marginTop: "30px", marginBottom: "30px"}}>
                <h1 className='team-title'> Geri Sayımdayız ;) </h1>
                </div>
                <div className="countdown-container">
                    <div className="countdown-number"><div>{days}</div><div className="countdown-typo">Gün</div></div>
                    <div className="countdown-number"><div>{hours}</div><div className="countdown-typo">Saat</div></div>
                    <div className="countdown-number"><div>{minutes}</div><div className="countdown-typo">Dakika</div></div>
                    <div className="countdown-number"><div>{seconds}</div><div className="countdown-typo">Saniye</div></div>
                </div>
        </div>
        
    )
}