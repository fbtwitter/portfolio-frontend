import App from "@/App";
import Home from "@/pages/Home";
import Mentor from "@/pages/mentor";
import Newbie from "@/pages/mentor/newbie";
import NFTPreview from "@/pages/mentor/newbie/NFTPreview";
import ProductPreview from "@/pages/mentor/newbie/ProductPreview";
import NotFound from "@/pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="mentor/">
            <Route index element={<Mentor />}></Route>
            <Route path="newbie/">
              <Route index element={<Newbie />} />
              <Route path="nft-preview" element={<NFTPreview />} />
              <Route path="product-preview" element={<ProductPreview />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
