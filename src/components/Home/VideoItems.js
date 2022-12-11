export const VideoItems = ({ link, name }) => {
  return (
    <div className="col-md-4 col-lg-3">
      <h5>{name}</h5>
      <div class="ratio ratio-16x9">
        <iframe src={link} title="YouTube video" allowfullscreen></iframe>
      </div>
    </div>
  );
};
