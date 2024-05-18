import ContentFrame from "./ContentFrame";
import HomeIcon from "../assets/img/icon1.png";
import homeimg from "../assets/img/home-content-img.png";
export default function Home() {
  return (
    <ContentFrame icon={HomeIcon} name="Home">
      <div className="home">
        <div className="container">
          <div className="home-wrapper d-flex  justify-content-center  align-items-center ">
            <div className="row m-auto align-items-center  ">
              <div className="col-md-7">
                <div className="home-content">
                  <h2 className="mb-4">Welcome to DumRose! </h2>
                  <p>
                    Rose was a relentless enforcer, handing out timeouts and
                    bans with cold, mechanical precision. Many degens found
                    themselves silenced and exiled for the most trivial of
                    reasons. The villagers were fed up with Rose's demonic
                    measures. Thus, a movement was born: the DumRose Revolution.
                  </p>
                  <button>Get Banned</button>
                </div>
              </div>
              <div className="col-md-5">
                <div className="home-image">
                  <img src={homeimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentFrame>
  );
}
