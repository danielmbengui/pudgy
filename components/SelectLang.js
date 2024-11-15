import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { LINK_FRENCH_FLAG } from 'constants';
import { LANGUAGE_FRENCH } from 'constants';
import { LANGUAGE_GERMAN } from 'constants';
import { LINK_GERMAN_FLAG } from 'constants';
import { LINK_BRITISH_FLAG } from 'constants';
import { LINK_ITALIAN_FLAG } from 'constants';
import { useTranslation } from 'next-i18next';
import { NAMESPACE_COMMON } from 'constants';

const ARRAY_LANGUAGES_JSON = [
    {
        value: "fr",
        name: "Français",
        flag: LINK_FRENCH_FLAG
    },
    {
        value: "de",
        name: "Allemand",
        flag: LINK_GERMAN_FLAG
    },
    {
        value: "it",
        name: "Italien",
        flag: LINK_ITALIAN_FLAG
    },
    {
        value: "en",
        name: "Anglais",
        flag: LINK_BRITISH_FLAG
    }
]

export default function SelectLang() {
    const [age, setAge] = useState(10);
    const { t, i18n} = useTranslation(NAMESPACE_COMMON); // 'common' fait référence au fichier JSON utilisé
    const [lang, setLang] = useState(i18n.language);
    
    const handleChange = (event) => {
        //setAge(event.target.value);
        setLang(event.target.value);
    };

    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
            //label="Age"
            onChange={handleChange}
            sx={{
                height: 40,
                //width: 40,
              //width:'80%',
                //background:'red',
                color: 'var(--primary-text)',
                border: 'none', // Supprime la bordure
                '& fieldset': { border: 'none' } // Supprime le style par défaut du conteneur
            }}
            MenuProps={{
                PaperProps: {
                    sx: {
                        bgcolor: 'var(--background)', // Couleur de fond du menu
                        color: 'var(--primary-text)', // Couleur du texte
                        '& .MuiMenuItem-root': {
                            '&.Mui-selected': {
                                bgcolor: 'var(--blue-pudgy)', // Fond de l'élément sélectionné
                                color: 'white', // Couleur du texte sélectionné
                            },
                            '&:hover': {
                                bgcolor: 'var(--royal-blue)', // Couleur au survol
                                color: 'white', // Texte au survol
                            },
                        },
                    },
                },
            }}
            IconComponent={() => null} // Supprime l'icône par défaut
        >
            {
                ARRAY_LANGUAGES_JSON
                .sort((a, b) => t(a.value).localeCompare(t(b.value)))
                .map((lang, index) => {
                    return (<MenuItem key={`lang${lang.name}${index}`} value={lang.value} >
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{width:'100%'}} onClick={() => {
                            i18n.changeLanguage(lang.value);
                        }}>
                            <Image src={lang.flag} width={20} height={20} loading="lazy" alt={`${lang.name} flag`} style={{ width: 'auto' }} />
                            <Typography fontSize={12}>{t(lang.value)}</Typography>
                        </Stack></MenuItem>);
                })
            }
        </Select>
    );
}
