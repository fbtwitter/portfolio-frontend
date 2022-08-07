import { Link } from "react-router-dom";

function Newbie() {
  return (
    <>
      Newbie Category
      <Link to={"nft-preview"}>
        <span className="block">NFT Preview</span>
      </Link>
    </>
  );
}

export default Newbie;
