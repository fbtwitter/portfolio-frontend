import ImageEquilibrium from "@/assets/mentor/jpg/image-equilibrium.jpg";
import ImageAvatar from "@/assets/mentor/png/image-avatar.png";
import { ReactComponent as EthereumIcon } from "@/assets/mentor/svg/icon-ethereum.svg";
import { ReactComponent as ClockIcon } from "@/assets/mentor/svg/icon-clock.svg";
import { ReactComponent as ViewIcon } from "@/assets/mentor/svg/icon-view.svg";
import { Link } from "react-router-dom";

function NFTPreview() {
  return (
    <main>
      <div className="absolute bottom-0 top-0 left-0 right-0 bg-[hsl(217,54%,11%)]">
        <div className="container mx-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <h1 className="sr-only">NFT Preview Card Component</h1>
            <article className="shadow-[0_25px_50px_rgba(0, 0, 0, 0.0952917)] flex min-w-[325px] max-w-[350px] flex-col space-y-4 rounded-2xl bg-[#15263F] p-6 font-outfit sm:space-y-6">
              <Link
                to="#"
                className="group mx-auto mb-2 overflow-clip rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] sm:mb-0"
              >
                <figure className="relative aspect-square">
                  <img
                    width={305}
                    height={305}
                    src={ImageEquilibrium}
                    alt="nft equilibrium"
                  />
                  <div className="invisible absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[#00FFF8]/50 group-hover:visible">
                    <ViewIcon />
                  </div>
                </figure>
              </Link>
              <div className="space-y-3 text-left sm:space-y-4">
                <h2>
                  <Link
                    to="#"
                    className="text-xl font-semibold text-white hover:text-[#00FFF8]"
                  >
                    Equilibrium #3429
                  </Link>
                </h2>
                <p className="text-lg font-light text-[#8BACD9]">
                  Our Equilibrium collection promotes balance and calm.
                </p>
              </div>

              <div className="flex flex-row items-center justify-between">
                <div className="flex items-center space-x-2 text-[15px] font-bold text-[#00FFF8] sm:text-base">
                  <EthereumIcon />
                  <span>0.041 ETH</span>
                </div>
                <div className="flex items-center space-x-2 text-[15px] font-normal text-[#8BACD9] sm:text-base">
                  <ClockIcon />
                  <span>3 days left</span>
                </div>
              </div>
              <div className="border-t border-[#2E405A] pt-4 pb-2">
                <div className="flex items-center justify-start space-x-4">
                  <figure className="aspect-auto rounded-full border border-white">
                    <img
                      width={33}
                      height={33}
                      src={ImageAvatar}
                      alt="nft avatar"
                    />
                  </figure>
                  <span className="text-[15px] font-normal text-[#8BACD9] sm:text-base">
                    Creation of{" "}
                    <Link to="#" className="text-white hover:text-[#00FFF8]">
                      Jules Wyvern
                    </Link>
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NFTPreview;
