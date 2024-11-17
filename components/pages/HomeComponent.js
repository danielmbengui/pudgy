import React from "react";
import * as _Builtin from "@/devlink/_Builtin";
import { NavbarTransparent } from "@/devlink/NavbarTransparent";
import { HomeHeader } from "@/devlink/HomeHeader";
import { HomeHeaderDownload } from "@/devlink/HomeHeaderDownload";
import { HomeServices } from "@/devlink/HomeServices";
import { HomeServices1 } from "@/devlink/HomeServices1";
import { HomePricing } from "@/devlink/HomePricing";
import { HomePartners } from "@/devlink/HomePartners";
import { HomePartners1 } from "@/devlink/HomePartners1";
import { HomeContact } from "@/devlink/HomeContact";
import { FooterBlack } from "@/devlink/FooterBlack";
import { NavbarComponent } from "components/navigation/NavbarComponent";
import SelectLang from "components/SelectLang";
import SwitchTheme from "components/SwitchTheme";

export function HomeComponent({
  as: _Component = _Builtin.Block,
  videoHeaderBack,
  componentLang,
  componentTheme,
  componentGoogleMap,
  menuHome = "Accueil",
  menuServices = "Services",
  menuPartners = "Partenariat",
  menuContact = "Contact",
  titleHome = "Une communauté dédiée au bien-être canin",
  subtitleHome = "Découvre Pudgy, une application qui simplifie la vie des amoureux des chiens.",
  devicesHome = "Mobile & Tablette",
  downloadHome = "Télécharge l'app dès maintenant et organise facilement tes prochaines sorties.",
  dogsitterTitle = "Dog Sitter",
  dogsitterText = "Avec notre application, trouve facilement des missions près de chez toi pour t’occuper de chiens adorables.",
  dogbabyTitle = "Dog Baby",
  dogbabyText = "Pas le temps de promener ou de garder ton chien ? Pudgy t'aide à trouver des passionnés prêts à prendre soin de lui.",
  dogtrainerTitle = "Dog Trainer",
  dogtrainerText = "Éduquer un chien peut être compliqué. Fais confiance à nos experts certifiés pour t'accompagner dans son apprentissage.",
  vetTitle = "Services Vétérinaires",
  vetText = "Besoin d'un vétérinaire en urgence ou d'une clinique proche de chez toi ? Pudgy t'aide à trouver des professionnels qualifiés rapidement.",
  nurseTitle = "Nurseries Canines",
  nurseText = "Pour les chiots ou les chiens nécessitant une attention particulière, découvre nos services de nurserie adaptés à leurs besoins spécifiques.",
  activityTitle = "Activités & Loisirs",
  menuFastLinks = "Liens rapides",
  menuSocials = "Réseaux",
  activityText = "Découvre des événements, des lieux et des activités pour renforcer le lien avec ton chien tout en s’amusant.",
  servicesTitle = "Une application conçue pour le bien être.",
  servicesSubtitle = "Profite de services personnalisés pour ton compagnon à quatre pattes : garde, promenade, éducation, et bien plus encore.",
  leitmotiv = "Une communauté dédiée au bien-être canin",
  menuLegacy = "Mentions légales",
  menuPrivacy = "Politique de confidentialité",
  menuTerms = "Conditions d'utilisation",
  copyright = "©2024-2025 Pudgy. Tous droits réservés.",
  promo = "Crée avec passion avec Webflow - Devlink",
  moreQuestions = "Des questions? Tu peux nous contacter à info@pudgy.com",
  menuNavigation = "Navigation",
}) {
  return (
    <_Component className="block-home-page" tag="div">
      <NavbarComponent
        componentLang={<SelectLang />}
        componentTheme={<SwitchTheme />}
        menuHome={menuHome}
        menuServices={menuServices}
        menuPartners={menuPartners}
        menuContact={menuContact}
      />
      <HomeHeader
        videoHeaderBack={videoHeaderBack}
        titleHome={titleHome}
        subtitleHome={subtitleHome}
      />
      <HomeHeaderDownload
        devicesHome={devicesHome}
        downloadHome={downloadHome}
      />
      <HomeServices
        dogsitterTitle={dogsitterTitle}
        dogbabyTitle={dogbabyTitle}
        dogtrainerTitle={dogtrainerTitle}
        vetTitle={vetTitle}
        nurseTitle={nurseTitle}
        activityTitle={activityTitle}
        dogsitterText={dogsitterText}
        dogbabyText={dogbabyText}
        dogtrainerText={dogtrainerText}
        vetText={vetText}
        nurseText={nurseText}
        activityText={activityText}
        servicesTitle={servicesTitle}
        servicesSubtitle={servicesSubtitle}
      />
      <HomeServices1 />
      <HomePricing />
      <HomePartners />
      <HomePartners1 />
      <HomeContact componentGoogleMap={componentGoogleMap} />
      <FooterBlack
        leitmotiv={leitmotiv}
        menuHome={menuHome}
        menuServices={menuServices}
        menuPartners={menuPartners}
        menuContact={menuContact}
        menuNavigation={menuNavigation}
        menuFastLinks={menuFastLinks}
        menuSocials={menuSocials}
        menuLegacy={menuLegacy}
        menuPrivacy={menuPrivacy}
        menuTerms={menuTerms}
        moreQuestions={moreQuestions}
        copyright={copyright}
        promo={promo}
      />
    </_Component>
  );
}
