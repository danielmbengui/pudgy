import React, { useEffect } from "react";

const GoogleMap = () => {
  useEffect(() => {
    // Initialisation de la carte après le chargement du script
    const initMap = () => {
      const geneva = { lat: 46.2044, lng: 6.1432 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12, // Niveau de zoom
        center: geneva, // Centrer sur Genève
      });
      new google.maps.Marker({
        position: geneva,
        map: map,
        title: "Genève", // Texte affiché au survol
      });
    };

    if (typeof window.google !== "undefined") {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap; // Attache la fonction au global pour le callback
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "100%", // Hauteur de la carte
        width: "100%", // Largeur de la carte
      }}
    ></div>
  );
};

export default GoogleMap;
