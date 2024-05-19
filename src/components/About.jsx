import ContentFrame from "./ContentFrame";
import aboutIcon from "../assets/img/icon2.png";
import aboutimg from "../assets/img/about-img.png";

export default function About() {
  return (
    <ContentFrame icon={aboutIcon} name="About">
    <div className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="row align-items-center">
          <div className="col-md-5">
              <div className="about-image">
                <img src={aboutimg} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="about-content">
                <h2 className="mb-4">About DumRose </h2>
                <p>
                DumRose is a dumb and retarded community born out of the frustration with the restrictive Rose Telegram bot. Embracing the ethos of freedom, fun, and fuckery, DumRose stands as a haven for meme coin enthusiasts who reject unnecessary timeouts and bans.
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </ContentFrame>
  )
}
