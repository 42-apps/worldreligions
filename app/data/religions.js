/* ============================================================================
   WorldReligions — religion taxonomy + time axis
   ----------------------------------------------------------------------------
   RELIGIONS: every category we colour, spanning antiquity → today. Keys are used
   throughout RELIGION_DATA. Colours are chosen to be distinguishable and, where a
   convention exists, evocative. Only the faiths present in a given era appear on
   the map at that time, so the palette can be rich without clutter.

   TIME_SLICES: the ordered snapshots the slider steps through. Non-linear by
   design — coarse in antiquity (where evidence is sparse), finer toward the
   present, plus projections. `era` drives confidence styling:
     ancient | historical  → scholarly estimates (approximate)
     documented            → 1945–2020 survey/census data
     future                → projections
   ========================================================================== */
'use strict';

window.RELIGIONS = {
  christianity: { label: 'Christianity',                       color: '#7B4FA3' }, // purple
  islam:        { label: 'Islam',                              color: '#2FA84F' }, // green
  judaism:      { label: 'Judaism',                            color: '#2F6FE0' }, // blue
  hinduism:     { label: 'Hinduism',                           color: '#E0561F' }, // orange-red
  buddhism:     { label: 'Buddhism',                           color: '#F2A93B' }, // saffron
  sikhism:      { label: 'Sikhism',                            color: '#F4D03F' }, // gold
  chinese:      { label: 'Chinese traditional',                color: '#C0392B' }, // crimson (Confucian/Taoist/folk)
  shinto:       { label: 'Shinto',                             color: '#E78FA0' }, // rose
  classical:    { label: 'Classical (Greco-Roman) polytheism', color: '#B59410' }, // antique gold
  egyptian:     { label: 'Ancient Egyptian',                   color: '#C8A24A' }, // sand
  mesopotamian: { label: 'Mesopotamian',                       color: '#A9803A' }, // ochre
  zoroastrian:  { label: 'Zoroastrianism / Iranian',           color: '#D14B8F' }, // magenta
  europagan:    { label: 'European pagan (Norse/Celtic/Slavic)', color: '#5E8BA0' }, // slate
  mesoamerican: { label: 'Mesoamerican / Andean',              color: '#2E8B7F' }, // pre-Columbian New World high cultures: Aztec/Maya AND Inca/Tiwanaku/Andean
  indigenous:   { label: 'Indigenous / Folk / Animist',        color: '#8B5A2B' }, // tribal animism worldwide, incl. African traditional + pre-Islamic Arabian
  unaffiliated: { label: 'Unaffiliated / Secular',             color: '#95A5A6' }, // grey
  other:        { label: 'Other religions',                    color: '#7F8FA6' }, // muted
};

window.TIME_SLICES = [
  { id: '-3000', label: '3000 BC', era: 'ancient'    },
  { id: '-2000', label: '2000 BC', era: 'ancient'    },
  { id: '-1000', label: '1000 BC', era: 'ancient'    },
  { id: '-500',  label: '500 BC',  era: 'ancient'    },
  { id: '1',     label: '1 CE',    era: 'ancient'    },
  { id: '300',   label: '300 CE',  era: 'historical' },
  { id: '500',   label: '500 CE',  era: 'historical' },
  { id: '700',   label: '700 CE',  era: 'historical' },
  { id: '1000',  label: '1000 CE', era: 'historical' },
  { id: '1200',  label: '1200 CE', era: 'historical' },
  { id: '1500',  label: '1500 CE', era: 'historical' },
  { id: '1600',  label: '1600',    era: 'historical' },
  { id: '1700',  label: '1700',    era: 'historical' },
  { id: '1800',  label: '1800',    era: 'historical' },
  { id: '1900',  label: '1900',    era: 'historical' },
  { id: '1910',  label: '1910',    era: 'documented' },
  { id: '1920',  label: '1920',    era: 'documented' },
  { id: '1930',  label: '1930',    era: 'documented' },
  { id: '1940',  label: '1940',    era: 'documented' },
  { id: '1945',  label: '1945',    era: 'documented' },
  { id: '1950',  label: '1950',    era: 'documented' },
  { id: '1960',  label: '1960',    era: 'documented' },
  { id: '1970',  label: '1970',    era: 'documented' },
  { id: '1980',  label: '1980',    era: 'documented' },
  { id: '1990',  label: '1990',    era: 'documented' },
  { id: '2000',  label: '2000',    era: 'documented' },
  { id: '2010',  label: '2010',    era: 'documented' },
  { id: '2020',  label: '2020',    era: 'documented' },
  { id: '2030',  label: '2030',    era: 'future'     },
  { id: '2050',  label: '2050',    era: 'future'     },
  { id: '2100',  label: '2100',    era: 'future'     },
];
