import React from "react";
import { Image } from "react-bootstrap";
import zomi from '../../assets/images/zomi.png';
import zlp from '../../assets/images/zlip.png';
const heroCard = [
  {
    name: "Total Trading Volume",
    value: 0,
    image: 'https://zomi.finance/static/media/ic_trading.2c53815a.svg',
  },
  {
    name: "Open Interest",
    value: 0,
    image: 'https://zomi.finance/static/media/ic_stats.f0a18011.svg',
  },
  {
    name: "Total Users",
    value: 0,
    image: 'https://zomi.finance/static/media/ic_totaluser.ae09b310.svg',
  }
]
const feature = [
  {
    title: "Reduce Liquidation Risks",
    description: "An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.",
    img: "https://zomi.finance/static/media/ic_liquidity.505b3f30.svg"
  },
  {
    title: "Save on Costs",
    description: "Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.",
    img: "https://zomi.finance/static/media/ic_cost.b4a729d3.svg"
  },
  {
    title: "Simple Swaps",
    description: "Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.",
    img: "https://zomi.finance/static/media/ic_simpleswaps.2005009f.svg"
  },
]
export default function Home() {
  return (
    <section className="home-page">
      {/* ================ HOME HERO SECTION START ============= */}
      <div className="home-hero-section">
        <div className="container">
          <div className="home-hero-wrapper">
            <h3 className="fs-57-43 fw-bold text-white">
              Decentralized Perpetual Exchange
            </h3>
            <p className="text-white fs-20-16 fw-normal mw-400 mb-4">Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet</p>
            <button className="primary-btn">Launch Exchange</button>
          </div>
          <div className="insights-wrapper">
            {heroCard?.map((item, i) => {
              return (
                <div className="insight-box d-flex align-items-center">
                  <div className="image-box">
                    <Image src={item.image} alt="image" />
                  </div>
                  <div className="box-content">
                    <h6 className="text-white">{item.name}</h6>
                    <h3 className="fs-29-24 fw-bold text-white">${item.value}</h3>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
      {/* ================ HOME HERO SECTION END ============= */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ======================== SECOND SECTION START ================ */}
      <div className="second-seciton">
        <div className="container">
          <div className="feature-wrapper">
            {feature?.map((item, i) => {
              return (
                <div className="feature-card">
                  <h5 className="fs-22-19 fw-medium text-white">
                    <Image src={item.img} alt="image" className="feature-img" />
                    {item.title}
                  </h5>
                  <p className="fs-18-14 fw-normal mt-3 text-white">
                    {item.description}
                  </p>
                </div>
              )
            })}

          </div>
          <div className="tokens-create-wrapper">
            <h4 className="fx-38 fw-bold text-white">Two tokens create <br /> our ecosystem</h4>
            <div className="token-crad-frame">
              <div className="token-card">
                <h5 className="fs-22-19 fw-medium text-white">
                  <Image src={zomi} alt="image" className="feature-img" />
                  $ZOMI
                </h5>
                <p className="fs-18-14 fw-normal mt-3 text-white">
                  $ZOMI is the utility and governance token. Accrues 30% of the platform's generated fees.
                </p>
                <p className="fs-18-14 fw-normal mt-3 text-white">
                  Ethereum APR: 0.00%
                </p>
                <div className="d-flex mb-wrap mb-full gap-3">
                  <button className="primary-btn "> Buy </button>
                  <button className="gost-btn text-white  border-white"> Read more </button>
                </div>
              </div>
              <div className="token-card">
                <h5 className="fs-22-19 fw-medium text-white">
                  <Image src={zlp} alt="image" className="feature-img" />
                  $ZLP
                </h5>
                <p className="fs-18-14 fw-normal mt-3 text-white">
                  $ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.
                </p>
                <p className="fs-18-14 fw-normal mt-3 text-white">
                  Ethereum APR: 1,655,157,052.45%
                </p>
                <div className="d-flex mb-wrap mb-full gap-3">
                  <button className="primary-btn "> Buy </button>
                  <button className="gost-btn text-white  border-white"> Read more </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================== SECOND SECTION END ================ */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
    </section>
  );
}
