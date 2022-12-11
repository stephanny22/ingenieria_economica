import Avatar from "boring-avatars";
import { arrayRandomColors, randomVariant } from "../../utils";

export const MembersItem = ({ member }) => {
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card">
        <div className="card-img-top">
          <Avatar
            square
            size={"100%"}
            variant={randomVariant()}
            colors={arrayRandomColors()}
          />
        </div>
        <div className="card-body text-truncate">
          <span className="card-title">{member}</span>
        </div>
      </div>
    </div>
  );
};
