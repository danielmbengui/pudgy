import React, { useEffect, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { HomePage } from "@/devlink";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { LINK_SWISS_FLAG } from "@/constants";
import { LINK_FRENCH_FLAG } from "@/constants";
import SwitchTheme from "@/components/SwitchTheme";
import { LINK_BRITISH_FLAG } from "@/constants";
import { LINK_GERMAN_FLAG } from "constants";
import { LINK_ITALIAN_FLAG } from "constants";
import GoogleMap from "components/GoogleMap";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import { TAB_NAMESPACES } from "constants";
import { TAB_LANGUAGES } from "constants";
import { NAMESPACE_HOME } from "constants";
import SelectLang from "components/SelectLang";
import { NAMESPACE_MENU } from "constants";
import { NAMESPACE_HOME_HEADER } from "constants";
import { NAMESPACE_SERVICES } from "constants";
import { NAMESPACE_FOOTER } from "constants";
import { NAMESPACE_CONTACT } from "constants";
import { NAMESPACE_PARTNERS } from "constants";
import { alpha, styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'var(--primary-text)',
  },
  '& .MuiInput-underline:after': {
    //borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--grey-light)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--royal-blue)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--blue-pudgy)',
    },
  },
});

function getJsonValue(value, lang, namespace = 'common') {
  const data = require(`@/public/locales/${lang}/${namespace}.json`);

  const dynamicValues = {
    year: `2024${new Date().getFullYear() > 2024 ? `-${new Date().getFullYear()}` : ''}`,
    //creator: 'L\'équipe Pudgy'
  };

  // Remplacement des placeholders
  const processedData = JSON.parse(
    JSON.stringify(data).replace(/{{(.*?)}}/g, (_, key) => dynamicValues[key] || '')
  );

  console.log(processedData[value]);
  return processedData[value];
}

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation(); // 'common' fait référence au fichier JSON utilisé
  const [navigation, setNavigation] = useState("");
  const [fastLinks, setFastLinks] = useState("");
  const [socials, setSocials] = useState("");

  const [home, setHome] = useState("");
  const [services, setServices] = useState("");
  const [partners, setPartners] = useState("");
  const [contact, setContact] = useState("");
  const [legacy, setLegacy] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [terms, setTerms] = useState("");

  const [leitmotiv, setLeitmotiv] = useState("");
  const [moreQuestions, setMoreQuestions] = useState("");
  const [promo, setPromo] = useState("");
  const [copyright, setCopyright] = useState("");

  const [titleHome, setTitleHome] = useState("");
  const [subtitleHome, setSubtitleHome] = useState("");
  const [devicesHome, setDevicesHome] = useState("");
  const [downloadHome, setDownloadHome] = useState("");
  const [titleServices, setTitleServices] = useState("");
  const [subtitleServices, setSubtitleServices] = useState("");
  const [dogsitterTitle, setDogsitterTitle] = useState("");
  const [dogsitterText, setDogsitterText] = useState("");
  const [dogbabyTitle, setDogbabyTitle] = useState("");
  const [dogbabyText, setDogbabyText] = useState("");
  const [dogtrainerTitle, setDogtrainerTitle] = useState("");
  const [dogtrainerText, setDogtrainerText] = useState("");
  const [vetTitle, setVetTitle] = useState("");
  const [vetText, setVetText] = useState("");
  const [nurseTitle, setNurseTitle] = useState("");
  const [nurseText, setNurseText] = useState("");
  const [activityTitle, setActivityTitle] = useState("");
  const [activityText, setActivityText] = useState("");

  const [timeTitle, setTimeTitle] = useState("");
  const [timeText, setTimeText] = useState("");
  const [securityTitle, setSecurityTitle] = useState("");
  const [securityText, setSecurityText] = useState("");
  const [usefulTitle, setUsefulTitle] = useState("");
  const [usefulText, setUsefulText] = useState("");
  const [tipsTitle, setTipsTitle] = useState("");
  const [tipsText, setTipsText] = useState("");
  const [customTitle, setCustomTitle] = useState("");
  const [customText, setCustomText] = useState("");
  const [groupsTitle, setGroupsTitle] = useState("");
  const [groupsText, setGroupsText] = useState("");

  const [titlePartners, setTitlePartners] = useState("");
  const [subtitlePartners, setSubtitlePartners] = useState("");

  const [nameContact, setNameContact] = useState("");
  const [emailContact, setEmailContact] = useState("");
  const [messageContact, setMessageContact] = useState("");
  const [sendContact, setSendContact] = useState("");

  useEffect(() => {
    setNavigation(t('navigation', { ns: NAMESPACE_FOOTER }));
    setFastLinks(t('fast_links', { ns: NAMESPACE_FOOTER }));
    setSocials(t('socials', { ns: NAMESPACE_FOOTER }));
    setLegacy(t('legacy', { ns: NAMESPACE_FOOTER }));
    setPrivacy(t('privacy', { ns: NAMESPACE_FOOTER }));
    setTerms(t('terms', { ns: NAMESPACE_FOOTER }));

    setLeitmotiv(t('leitmotiv', { ns: NAMESPACE_FOOTER }));
    setMoreQuestions(t('more_questions', { ns: NAMESPACE_FOOTER }));
    //setCopyright(t('copyright', { ns: NAMESPACE_FOOTER }));
    setCopyright(getJsonValue('copyright', i18n.language, NAMESPACE_FOOTER));
    setPromo(t('promo', { ns: NAMESPACE_FOOTER }));

    setHome(t('home', { ns: NAMESPACE_MENU }));
    setServices(t('services', { ns: NAMESPACE_MENU }));
    setPartners(t('partners', { ns: NAMESPACE_MENU }));
    setContact(t('contact', { ns: NAMESPACE_MENU }));
    setTitleHome(t('title', { ns: NAMESPACE_HOME_HEADER }));
    setSubtitleHome(t('subtitle', { ns: NAMESPACE_HOME_HEADER }));
    setDevicesHome(t('devices', { ns: NAMESPACE_HOME_HEADER }));
    setDownloadHome(t('download', { ns: NAMESPACE_HOME_HEADER }));
    setTitleServices(t('title', { ns: NAMESPACE_SERVICES }));
    setSubtitleServices(t('subtitle', { ns: NAMESPACE_SERVICES }));
    setDogsitterTitle(t('dogsitter.title', { ns: NAMESPACE_SERVICES }));
    setDogsitterText(t('dogsitter.text', { ns: NAMESPACE_SERVICES }));
    setDogbabyTitle(t('dogbaby.title', { ns: NAMESPACE_SERVICES }));
    setDogbabyText(t('dogbaby.text', { ns: NAMESPACE_SERVICES }));
    setDogtrainerTitle(t('dogtrainer.title', { ns: NAMESPACE_SERVICES }));
    setDogtrainerText(t('dogtrainer.text', { ns: NAMESPACE_SERVICES }));
    setVetTitle(t('vet.title', { ns: NAMESPACE_SERVICES }));
    setVetText(t('vet.text', { ns: NAMESPACE_SERVICES }));
    setNurseTitle(t('nurse.title', { ns: NAMESPACE_SERVICES }));
    setNurseText(t('nurse.text', { ns: NAMESPACE_SERVICES }));
    setActivityTitle(t('activity.title', { ns: NAMESPACE_SERVICES }));
    setActivityText(t('activity.text', { ns: NAMESPACE_SERVICES }));
    //console.log(router.pathname, "lang", i18n.language)
    setTimeTitle(t('time.title', { ns: NAMESPACE_SERVICES }));
    setTimeText(t('time.text', { ns: NAMESPACE_SERVICES }));

    setSecurityTitle(t('security.title', { ns: NAMESPACE_SERVICES }));
    setSecurityText(t('security.text', { ns: NAMESPACE_SERVICES }));

    setUsefulTitle(t('useful.title', { ns: NAMESPACE_SERVICES }));
    setUsefulText(t('useful.text', { ns: NAMESPACE_SERVICES }));

    setTipsTitle(t('tips.title', { ns: NAMESPACE_SERVICES }));
    setTipsText(t('tips.text', { ns: NAMESPACE_SERVICES }));

    setCustomTitle(t('custom.title', { ns: NAMESPACE_SERVICES }));
    setCustomText(t('custom.text', { ns: NAMESPACE_SERVICES }));

    setGroupsTitle(t('groups.title', { ns: NAMESPACE_SERVICES }));
    setGroupsText(t('groups.text', { ns: NAMESPACE_SERVICES }));
    //console.log(router.pathname, "lang", i18n.language)
    setTitlePartners(t('title', { ns: NAMESPACE_PARTNERS }));
    setSubtitlePartners(t('subtitle', { ns: NAMESPACE_PARTNERS }));

    setNameContact(t('name', { ns: NAMESPACE_CONTACT }));
    setEmailContact(t('email', { ns: NAMESPACE_CONTACT }));
    setMessageContact(t('message', { ns: NAMESPACE_CONTACT }));
    setSendContact(t('send', { ns: NAMESPACE_CONTACT }));
  });

  useEffect(() => {
    router.push(router.pathname, router.pathname, { locale: i18n.language });
    // router.push(router.asPath.split('#')[1] ? `#${asPath.split('#')[1]}` : '', undefined, { locale: i18n.language });
    //changeLanguage(i18n.language);
    //getJsonValue('copyright', i18n.language);
    //setCopyright(getJsonValue('copyright', i18n.language));
    /*
    setHome(t('home', {ns:NAMESPACE_MENU}));
    setServices(t('services', {ns:NAMESPACE_MENU}));
    setPartners(t('partners', {ns:NAMESPACE_MENU}));
    setContact(t('contact', {ns:NAMESPACE_MENU}));
    setTitleHome(t('title', {ns:NAMESPACE_HOME_HEADER}));
    setSubtitleHome(t('subtitle', {ns:NAMESPACE_HOME_HEADER}));
    setDevicesHome(t('devices', {ns:NAMESPACE_HOME_HEADER}));
    setDownloadHome(t('download', {ns:NAMESPACE_HOME_HEADER}));
    */
  }, [i18n.language]);



  return (
    <HomePage
      menuNavigation={navigation}
      menuFastLinks={fastLinks}
      menuSocials={socials}
      menuHome={home}
      menuServices={services}
      menuPartners={partners}
      menuContact={contact}
      menuLegacy={legacy}
      menuPrivacy={privacy}
      menuTerms={terms}

      leitmotiv={leitmotiv}
      moreQuestions={moreQuestions}
      copyright={copyright}
      promo={promo}
      promoFooter={promo}

      titleHome={titleHome}
      subtitleHome={subtitleHome}
      devicesHome={devicesHome}
      downloadHome={downloadHome}
      servicesTitle={titleServices}
      servicesSubtitle={subtitleServices}
      dogsitterTitle={dogsitterTitle}
      dogbabyTitle={dogbabyTitle}
      dogtrainerTitle={dogtrainerTitle}
      vetTitle={vetTitle}
      nurseTitle={nurseTitle}
      activityTitle={activityTitle}

      timeTitle={timeTitle}
      timeText={timeText}
      securityTitle={securityTitle}
      securityText={securityText}
      usefulTitle={usefulTitle}
      usefulText={usefulText}
      tipsTitle={tipsTitle}
      tipsText={tipsText}
      customTitle={customTitle}
      customText={customText}
      groupsTitle={groupsTitle}
      groupsText={groupsText}

      dogsitterText={dogsitterText}
      dogbabyText={dogbabyText}
      dogtrainerText={dogtrainerText}
      vetText={vetText}
      nurseText={nurseText}
      activityText={activityText}

      titlePartners={titlePartners}
      subtitlePartners={subtitlePartners}

      nameContact={nameContact}
      emailContact={emailContact}
      messageContact={messageContact}
      sendContact={sendContact}

      componentGoogleMap={<GoogleMap />}
      componentLang={<SelectLang lang={i18n.language} />}
      componentTheme={<SwitchTheme />}
      componentInputName={<CssTextField fullWidth sx={{ height: 40, }} slotProps={{
        input: {
          style: {
            height: '100%', // L'élément <input> prend la hauteur du conteneur
            width: '100%', // L'élément <input> prend la hauteur du conteneur
            color:"var(--primary-text)",
            //padding: '0 10px', // Ajuster le padding si nécessaire
          },
        },
      }} />}
      componentInputEmail={<CssTextField error helperText="Incorrect entry." fullWidth sx={{ height: 40, }} slotProps={{
        input: {
          style: {
            height: '100%', // L'élément <input> prend la hauteur du conteneur
            width: '100%', // L'élément <input> prend la hauteur du conteneur
            //padding: '0 10px', // Ajuster le padding si nécessaire
          },
        },
      }} />}
      componentInputMessage={<CssTextField multiline rows={5} fullWidth sx={{ height: 148, }}  slotProps={{
        input: {
          style: {
            height: '100%', // L'élément <input> prend la hauteur du conteneur
            width: '100%', // L'élément <input> prend la hauteur du conteneur
            //padding: '0 10px', // Ajuster le padding si nécessaire
          },
        },
      }} />}
      componentButtonSend={<Button disabled={false} fullWidth variant="contained" sx={{ height: 35, borderRadius: 50 }}>{sendContact}</Button>}

      videoHeaderBack={<Stack sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, background: 'var( --blue-pudgy-shadow)' }}>
        <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <source
              src="https://cdn.prod.website-files.com/673273ce24e1f47ec7ebf36e%2F673331c3670a32db371136c0_i_want_a_video_of_a_man_and_a_woman__walking_with_two_dogs_in_forest_617613-transcode.mp4"
              type="video/mp4"
            />
            {"Your browser does not support the video tag."}
          </video>
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, background: 'var( --blue-pudgy-shadow)' }} />

      </Stack>}
    />
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, TAB_NAMESPACES, null, TAB_LANGUAGES,)),
  },
});
