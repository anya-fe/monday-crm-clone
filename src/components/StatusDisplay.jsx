const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = status.color;
    switch (status) {
      case "done":
        color = "rgb(186, 255,201)";
        break;
      case "in progress":
        color = "rgb(255, 223,286)";
        break;
      case "stuck":
        color = "rgb(255, 179,186)";
        break;
      default:
        color = "rgb(186, 225,255)";
    }
    return color;
  };

  return (
    <div
      className="sttus-display"
      style={{ backgroundColor: getColor(status) }}
    >
      {status}
    </div>
  );
};

export default StatusDisplay;
