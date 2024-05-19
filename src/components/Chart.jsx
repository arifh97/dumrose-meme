import ContentFrame from "./ContentFrame";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Icon from "../assets/img/icon6.png";
import dextools from "../assets/img/dextools.png";
import birdeye from "../assets/img/birdeye.png";
import dexcreener from "../assets/img/dexcreener.png";
import tabDexscreener from "../assets/img/tabDexscreener.png";
import minimizeIcon from "../assets/img/minimizeIcon.png"
import zoomIcon from "../assets/img/zoomIcon.png"
import closeIcon from "../assets/img/closeIcon.png"
import chartImg from "../assets/img/chartImg1.png"
export default function Chart() {
  return (
    <ContentFrame icon={Icon} name="Chart">
      <div className="chart">
        <div className="chart-content">
          <Tab.Container defaultActiveKey="first">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="chart-item">
                  <div className="chartTopBar d-flex align-items-center justify-content-between">
                    <div className="topLeft d-flex align-items-center gap-2">
                        <figure className='tmIcon'>
                            <img src={dextools} alt="" />
                        </figure>
                        <span>{name}</span>
                    </div>
                    <div className="topRight">
                        <button><img src={minimizeIcon} alt="" /></button>
                        <button><img src={zoomIcon} alt="" /></button>
                        <button><img src={closeIcon} alt="" /></button>
                    </div>
                  </div>
                  <div className="chart-details">
                    <figure className="chartImg">
                      <img src={chartImg} alt="" />
                    </figure>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <div className="chart-item">
                  <div className="chartTopBar d-flex align-items-center justify-content-between">
                    <div className="topLeft d-flex align-items-center gap-2">
                        <figure className='tmIcon'>
                            <img src={birdeye} alt="" />
                        </figure>
                        <span>{name}</span>
                    </div>
                    <div className="topRight">
                        <button><img src={minimizeIcon} alt="" /></button>
                        <button><img src={zoomIcon} alt="" /></button>
                        <button><img src={closeIcon} alt="" /></button>
                    </div>
                  </div>
                  <div className="chart-details">
                    <figure className="chartImg">
                      <img src={chartImg} alt="" />
                    </figure>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
              <div className="chart-item">
                  <div className="chartTopBar d-flex align-items-center justify-content-between">
                    <div className="topLeft d-flex align-items-center gap-2">
                        <figure className='tmIcon'>
                            <img src={tabDexscreener} alt="" />
                        </figure>
                        <span>{name}</span>
                    </div>
                    <div className="topRight">
                        <button><img src={minimizeIcon} alt="" /></button>
                        <button><img src={zoomIcon} alt="" /></button>
                        <button><img src={closeIcon} alt="" /></button>
                    </div>
                  </div>
                  <div className="chart-details">
                    <figure className="chartImg">
                      <img src={chartImg} alt="" />
                    </figure>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
            <Nav className="d-flex align-items-center chart-tab-navs gap-2">
              <Nav.Item>
                <Nav.Link eventKey="first" className="d-flex align-items-center gap-3"> 
                  <figure>
                    <img src={dextools} alt="" />
                  </figure> 
                  <span>Dextools</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="d-flex align-items-center gap-3">
                  <figure>
                    <img src={birdeye} alt="" />
                  </figure> 
                  Birdeye
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" className="d-flex align-items-center gap-3">
                  <figure>
                    <img src={dexcreener} alt="" />
                  </figure> 
                  Dexscreener
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Tab.Container>
        </div>
      </div>
    </ContentFrame>
  );
}
