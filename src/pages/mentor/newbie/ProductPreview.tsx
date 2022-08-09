import { Link } from "react-router-dom";
import ImageMobile from "@/assets/mentor/jpg/image-product-mobile.jpg";
import ImageDesktop from "@/assets/mentor/jpg/image-product-desktop.jpg";
import { ReactComponent as CartIcon } from "@/assets/mentor/svg/icon-cart.svg";

function ProductPreview() {
  return (
    <main>
      {" "}
      <div className="absolute bottom-0 top-0 left-0 right-0 bg-[#F2EAE2]">
        <div className="container mx-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <h1 className="sr-only">Product Preview Card Component</h1>
            <article className="flex min-w-[325px] max-w-[350px] flex-col overflow-clip rounded-xl bg-[#FFFFFF] font-outfit sm:max-w-[600px] sm:flex-row">
              <aside className="h-[240px] w-full overflow-clip sm:h-full">
                <figure className="relative aspect-auto">
                  <img
                    src={ImageDesktop}
                    alt="nft equilibrium"
                    className="hidden bg-center sm:block"
                  />
                  <img
                    src={ImageMobile}
                    alt="nft equilibrium"
                    className="block bg-center sm:hidden"
                  />
                </figure>
                <h2 className="sr-only">Gabrielle Essence Eau De Parfum</h2>
              </aside>
              <div className="flex flex-col justify-between p-6 sm:max-w-[300px] sm:p-8">
                <div className="mb-6 text-left leading-none">
                  <span className="mb-3 block font-montserrat text-xs font-medium uppercase tracking-[5px] text-[#6C7289] sm:mb-5">
                    Perfume
                  </span>
                  <span className="mb-4 block font-fraunces text-[2rem] font-bold leading-none text-[#1C232B] sm:mb-5">
                    Gabrielle Essence Eau De Parfum
                  </span>
                  <span className="font-montserrat text-sm font-medium leading-6 text-[#6C7289]">
                    A floral, solar and voluptuous interpretation composed by
                    Olivier Polge, Perfumer-Creator for the House of CHANEL.
                  </span>
                </div>
                <div className="mb-5 flex items-center space-x-5 sm:mb-7">
                  <span className="font-fraunces text-[32px] font-bold leading-none text-[#3D8168]">
                    $149.99
                  </span>
                  <span className="font-montserrat text-sm font-medium text-[#6C7289] line-through">
                    $169.99
                  </span>
                </div>
                <Link
                  to="#"
                  className="flex w-full items-center justify-center space-x-3 rounded-lg bg-[#3D8168] py-4 hover:bg-[#1A4032]"
                >
                  <CartIcon />
                  <span className="font-montserrat text-sm font-bold text-[#FFFFFF]">
                    Add to Cart
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPreview;
