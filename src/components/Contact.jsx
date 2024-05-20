import ContentFrame from "./ContentFrame";
import Icon from "../assets/img/icon7.png";
export default function Contact() {
  return (
    <ContentFrame icon={Icon} name="Contact">
    <div className="contact">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-9">
            <div className="contact-content text-center ">
              <h2>Contact Us</h2>
              <p>Send us a message on twitter or email and if Rose lets us out of the basement we will get back to you asap.</p>
              <div>
                <a href="https://google.com" target="_blank" className="boxed-btn">Telegram</a>
                <a href="https://google.com" target="_blank" className="boxed-btn">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </ContentFrame>
  )
}
