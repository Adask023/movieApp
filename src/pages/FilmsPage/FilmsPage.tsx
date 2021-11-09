import React, { useState } from "react";
import SearchInput from "../../components/SearchInput";
import { TestText } from "../../components/TestText";
import { ToogleThemeButton } from "../../components/ToogleThemeButton";

interface Props {}

const FilmsPage = () => {
  const [searchData, setSearchData] = useState({});
  return (
    <div>
      Films page
      <ToogleThemeButton />
      <SearchInput searchData={searchData} setSearchData={setSearchData} />
      <TestText />
    </div>
  );
};
export default FilmsPage;
