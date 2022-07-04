const translateString = (ICL_LANGUAGE_CODE, en, sp, de, pt, fr) => {
    if(ICL_LANGUAGE_CODE='sp'){
        return sp;
    } else if (ICL_LANGUAGE_CODE='de') {
        return de;
    } else if (ICL_LANGUAGE_CODE='pt-pt') {
        return pt;
    } else if (ICL_LANGUAGE_CODE='fr') {
        return fr;
    } else {
        return en;
    }
}

export default translateString;