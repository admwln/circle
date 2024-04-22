import { useState } from "react";
import { useData } from "./assets/components/useData";
import Start from "./assets/components/Start";
import DisplayFriendCircle from "./assets/components/DisplayFriendCircle";
import Loading from "./assets/components/Loading";
import styled from "@emotion/styled";

function App() {
  const [viewState, setViewState] = useState("start");
  const [nat, setNat] = useState("AU");
  const { data: friends } = useData(
    `https://randomuser.me/api?nat=${nat}&results=3`
  );
  const { data: advice } = useData(`https://api.adviceslip.com/advice`);

  const natOptions = {
    AU: "Australia",
    BR: "Brazil",
    CA: "Canada",
    CH: "Switzerland",
    DE: "Germany",
    DK: "Denmark",
    ES: "Spain",
    FI: "Finland",
    FR: "France",
    GB: "Great Britain",
    IE: "Ireland",
    IN: "India",
    IR: "Iran",
    MX: "Mexico",
    NL: "Netherlands",
    NO: "Norway",
    NZ: "New Zealand",
    RS: "Serbia",
    TR: "Turkey",
    UA: "Ukraine",
    US: "United States",
  };

  return (
    <>
      <Start
        setNat={setNat}
        viewState={viewState}
        setViewState={setViewState}
        natOptions={natOptions}
      />
      <Loading viewState={viewState} setViewState={setViewState} />
      <DisplayFriendCircle
        friends={friends}
        advice={advice}
        viewState={viewState}
        nat={nat}
        natOptions={natOptions}
      />
    </>
  );
}
export default App;
