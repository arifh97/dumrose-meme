import ContentFrame from "./ContentFrame";
import Icon from "../assets/img/icon3.png";
import walletIcon from "../assets/img/walletIcon.png";
import amountIcon from "../assets/img/amountIcon.png";
import readyIcon from "../assets/img/readyIcon.png";
import CopyToClipboard from "./CopyToClipboard";
export default function How_to_buy() {
  const howtoBuyWrapper = [
    {
      url: "https://jup.ag/",
      icon:walletIcon,
      title: "Connect your wallet",
      desc:"You need to go to DumRose official presale on Pinksale and connect your wallet. Make sure you're on the BASE network.",
    },
    {
      url: "https://google.com/",
      icon:amountIcon,
      title: "Enter amount",
      desc:"Once your wallet is connected, use ETH to enter the amount of DumRose to buy. Remember to have ETH for the fees.",
    },
    {
      url: "https://photon-sol.tinyastro.io/",
      icon:readyIcon,
      title: "Ready!",
      desc:"Once the purchase is complete, you'll need to wait for the presale to end to receive your tokens!",
    },
  ]
  return (
    <ContentFrame icon={Icon} name="How To Buy">
    <div className="howtoBuy">
          <div className="row justify-content-center">
            <div className="col-sm-9 text-center">
              <div className="section-title ">
                <h2>How To Buy</h2>
                <p>Getting your hands on $Rose is easy! Simply use Phantom or Bonkbot, or if you consider yourself a professional shitcoin trader, opt for Photon.</p>
              </div>
            </div>
        </div>
        <div className="row justify-content-center">
          {howtoBuyWrapper.map((item, index)=>(
            <div className="col-lg-4 col-sm-6 mb-4 text-center" key={index}>
              <a href={item.url} target="_blank" className="single-item">
                <figure className="icon">
                  <img src={item.icon} alt="" />
                </figure>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </a>
          </div>

          ))}
        </div>
        <div className="row">
          <div className="col-12">
              <CopyToClipboard />
          </div>
        </div>
      </div>
  </ContentFrame>
  )
}
