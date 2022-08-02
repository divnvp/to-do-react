// Icons
import waiting from "../pictures/waiting.png";
import process from "../pictures/process.png";
import completed from "../pictures/completed.png";

export function UIIcon(props) {
  const getIcon = () => {
    return props.status === "waiting" ?
      waiting : props.status === "process" ?
        process : completed;
  }

  return (
    <div>
      <img
        src={getIcon()}
        alt="Status Icon"
        className="icon"
      />
    </div>
  )
}