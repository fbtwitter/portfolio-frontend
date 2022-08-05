import App from "@/App";
import Home from "@/pages/Home";
import NFTPreview from "@/pages/mentor/newbie/NFTPreview";
import NotFound from "@/pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="mentor/">
            <Route path="newbie/">
              <Route path="nft-preview" element={<NFTPreview />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
