import { Route, Routes } from "react-router-dom";
import { DcPage, MarvelPage, SearchPage } from "../pages";
import { Navbar } from "../../ui/components";

export const HeroeRouter = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<DcPage />} />
          <Route path="/*" element={<DcPage to="/dc" />} />
        </Routes>
      </div>
    </>
  );
};
