import React from "react";
//To call once, put in another component or heade
const [state, setState] = useState({
    ip: "",
    countryName: "",
});

//To call once, put in another component or header
const getGeoInfo = () => { 
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setState({
          ...state,
          ip: data.ip,
          countryName: data.country_name
        });
    })
    .catch((error) => {
      console.log(error);
    });
};
useEffect(() => {
    getGeoInfo();
}, []);

region = state.countryName;
//---------------------------------

const Translator = (props) => {
    const { region, EN, ESP, DE, PO } = props;

    switch (region) {
        case United-Kingdom:
            return EN;
        case Spain:
            return ESP;
        case Germany:
            return DE;
        case Protugal:
            return PO;
        default:
            return EN;
    }
}

export default Translator;