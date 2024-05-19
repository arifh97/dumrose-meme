import ContentFrame from "./ContentFrame";
import aboutIcon from "../assets/img/icon2.png";
import chart from "../assets/img/chart.png";
export default function Tokenomics() {
  return (
    <ContentFrame icon={aboutIcon} name="Tokenomics">
    <div className="tokenomics">
      <div className="container">
          <div className="row align-items-center">           
            <div className="col-md-7">
              <div className="about-content">
                <h2 className="mb-4">Tokenomics</h2>
                <p>DumRose's tokenomics are designed to ensure sustainability and growth, with a total supply of 1 billion. Our allocation strategy includes community rewards, development funds, and liquidity pools to foster a thriving and robust ecosystem.</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="chart-image">
                <img src={chart} alt="" />
              </div>
            </div>
          </div>
      </div>
    </div>
  </ContentFrame>
  )
}
