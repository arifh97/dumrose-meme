import ContentFrame from "./ContentFrame";
import Icon from "../assets/img/icon6.png";
export default function Chart() {
  return (
    <ContentFrame icon={Icon} name="Chart">
    <div className="chart">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-9">
            <div className="chart text-center ">

            </div>
          </div>
        </div>
      </div>
    </div>
  </ContentFrame>
  )
}
