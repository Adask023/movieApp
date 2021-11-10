import React, { useState } from "react";
import SearchInput from "../../components/SearchInput";
import { TestText } from "../../components/TestText";
import { ToogleThemeButton } from "../../components/ToogleThemeButton";

export type FilmsSearchType = {
  description: string;
  id: string;
  image: string;
  resultType: string;
  title: string;
};

const FilmsPage: React.FC = () => {
  const [searchData, setSearchData] = useState([] as FilmsSearchType[]);
  return (
    <div>
      Films page
      {/* <ToogleThemeButton /> */}
      <SearchInput searchData={searchData} setSearchData={setSearchData} />
      <TestText />
    </div>
  );
};
export default FilmsPage;
