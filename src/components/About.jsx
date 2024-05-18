import ContentFrame from "./ContentFrame"
import aboutIcon from "../assets/img/icon2.png"
export default function About() {
  return (
    <div>
      <ContentFrame name="about" icon={aboutIcon}>
        <h2>about</h2>
      </ContentFrame>
    </div>
  )
}
