import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroeRouter } from "../heroes/router/HeroeRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroeRouter />} />
      </Routes>
    </>
  );
};
