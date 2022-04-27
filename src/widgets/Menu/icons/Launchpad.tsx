import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <image width="28" height="28" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAEO0lEQVRIiZWWW0+cVRSGnxk+WhiQQ2kBQVpoS7WpUIKHWk1N6o31yp/onT/BKzUeLowiGi1pbS1VqxaGOtAKFJjT58V6tvNBTNSdTL5Z+7Detd512LvEe/n7wFngAfAH0E2MNlAGjgPHgNz5lmtJ/rdR8swY0M6AURXuq6i7sGkf2BM4jTpw4N7SEeX5kbkkt4EeYDhT+B74CugFhguH1oF7wCbQ5VwDaP4PD5ORl4Armcp+AJ4CI8ATAQcIOn8DbhYOV4BxYMh9TVk45v59jaoAmevrfocyYFcL5oAXgG9VdEYa7hwBPA+8KWhdT+sykABaRGjS3NdADWhkWlMGTqvsnorHgFMqTqMMLALX/V+ViTEVbvp/AHioM8/p7U2gVNaKLmDbA3UirnVgy/k0ujTqZIHqXzVsm8iFfeWflR8DE8AkUM7kvQzccrEK9KkwxbcI2AdsAJ+pcBp4DfgO+JCI7YT/19Q/D/QnwB4iZstaO0TU4wMi2H8S2btHxKuh52sCdytvAI/8bgG/S/MjvW8DpcwDbTf0AzNEkO8rz0nH5+5rEbW7qLfPAieIhNsCLii/quEX1bOJhd/S8hEVjxBB3wHOEQlSBX7S2iaRwdeBKQEngJc1YFE9b3tukUieVSAvG+QS8BLR4nLgKrDg5vPALHDFeDSIVK/465OlHqnvUe7z12vsczxYF/ACkX3rRFd46NyIXp2l01PXjfldvZsikmupAPqljCTwLMWwpJIDJwc0Yk+gjBhP3dcF/AJ8IsgEkaXLwMfGa5TI0pqA835LWcHqFcGHiXRfEWiAKJElY5HoqRuOVLcNjW4qHxxZJ1F6XKBbBWqXiZaWS3OVyNoWUbOTRJyHiA41TmTzjt8xov2tAZfdVwPyTAXpOqoRHWJDqwaAQb26RGRqW8quEvGdUp7TgRcFvCbgAlGHzQTY1NszRHCrRNBngNeJ+mqo5AP31jU0xZd/kEvKh+7MBJhraYWIXbe0nSba3S7RwmaImK+67450TgLfEHFOl/hHRLE3ZeLvpIFO9lWILEMvGypaA96V4l6iK30h6CRwg2jkn6p8hui1NVl7RUPLZToxfEzUVw8Rr5NElt2l0/WPud5fAB9S7i/Iz/hNe/vEOZQ0qW2NE51lxbVxPe0jemO6464RJTStV5eJ2p1TfksmFmVuNwGmwt8jivsEkbFPBH7HWExqRE3vL9LJ4h2ip74hWCqPGY1blb12AmwTqbutVUvAbSLdF6RmQ3qrej6rkVvEK6HL+U0Nzpy7TdT1GjCduZDutHR3pfttF/iRGDXikt10/ZTz6RGV3q9HH1EtolMNAudS73xeigbptLopld2XhQbRN0ed36EzSkRt1gvyXmF9WP2zKWnmVbghDU2/xQdvTud1UKfTMBIAHH4I54W1HN9CmSAVvUvP+9xvasTpYHr6tQvz/2W01N/8C4gTUiawOz11AAAAAElFTkSuQmCC" />
    </Svg>
  );
};

export default Icon;
