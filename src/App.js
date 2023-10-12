import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import useMyHook from "./Components/myHook/useMyHook";


const App = () => {
  const [inputValue, setInputValue] = useState("tehran");
  const { data, error } = useMyHook(inputValue);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleInputChange={handleInputChange}
        error={error}
      />
      <Main data={data} />
      <Footer data={data} />
    </div>
  );
};

export default App;
