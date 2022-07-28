import blankAvatar from "../images/blank-profile.png";

const AvatarDisplay = ({ ticket }) => {
  return (
    <div className="avatar-display">
      <div className="image-container">
        <img
          src={ticket.avatar ? ticket.avatar : blankAvatar}
          alt={"photo of " + ticket.owner}
        />
      </div>
    </div>
  );
};

export default AvatarDisplay;
