import { Link } from "react-router-dom";

function Newbie() {
  return (
    <main>
      Newbie Category
      <Link to={"nft-preview"}>
        <span className="block">NFT Preview</span>
      </Link>
      <Link to={"product-preview"}>
        <span className="block">Product Preview</span>
      </Link>
    </main>
  );
}

export default Newbie;
