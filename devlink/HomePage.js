"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { NavbarTransparent } from "./NavbarTransparent";
import { HomeHeader } from "./HomeHeader";
import { HomeHeaderDownload } from "./HomeHeaderDownload";
import { HomeServices } from "./HomeServices";
import { HomeServices1 } from "./HomeServices1";
import { HomePricing } from "./HomePricing";
import { HomePartners } from "./HomePartners";
import { HomePartners1 } from "./HomePartners1";
import { HomeContact } from "./HomeContact";
import { FooterBlack } from "./FooterBlack";

export function HomePage({
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
  nameContact = "Nom",
  messageContact = "Message",
  emailContact = "Email",
  activityText = "Découvre des événements, des lieux et des activités pour renforcer le lien avec ton chien tout en s’amusant.",
  subtitlePartners = "Rejoignez une communauté qui partage vos valeurs et celles des amoureux des chiens.",
  titlePartners = "Nos partenaires",
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
  componentInputName,
  componentInputEmail,
  componentInputMessage,
  componentButtonSend,
  timeTitle = "Gain de temps",
  timeText = "Ne cherche plus partout : une seule application pour répondre à tous les besoins de ton chien.",
  securityTitle = "Sécurisé",
  securityText = "Tous nos professionnels sont vérifiés pour assurer la sécurité et le confort de ton chien.",
  usefulTitle = "Utile",
  usefulText = "Besoin de lieux acceptant les chiens ? Pudgy t'accompagne avec des conseils adaptés à toi et ton compagnon.",
  groupsTitle = "Groupes",
  groupsText = "Organise ou rejoins des promenades collectives pour que ton chien se sociabilise tout en s’amusant.",
  customText = "Besoin d’un service pour ton chien ? De la garde à l’éducation, tout est à portée de main.",
  customTitle = "Personnalisé",
  tipsText = "Chaque jour des conseils pour prendre soin de ton chien : alimentation, santé, activités et bien plus encore.",
  tipsTitle = "Conseils quotidiens",
}) {
  return (
    <_Component className="block-home-page" tag="div">
      <NavbarTransparent
        componentLang={componentLang}
        componentTheme={componentTheme}
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
      <HomeServices1
        timeTitle={timeTitle}
        timeText={timeText}
        securityTitle={securityTitle}
        securityText={securityText}
        usefulTitle={usefulTitle}
        usefulText={usefulText}
        groupsTitle={groupsTitle}
        groupsText={groupsText}
        customText={customText}
        customTitle={customTitle}
        tipsText={tipsText}
        tipsTitle={tipsTitle}
      />
      <HomePricing />
      <HomePartners />
      <HomePartners1
        titlePartners={titlePartners}
        subtitlePartners={subtitlePartners}
      />
      <HomeContact
        componentGoogleMap={componentGoogleMap}
        nameContact={nameContact}
        emailContact={emailContact}
        messageContact={messageContact}
        componentInputName={componentInputName}
        componentInputEmail={componentInputEmail}
        componentInputMessage={componentInputMessage}
        componentButtonSend={componentButtonSend}
      />
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
