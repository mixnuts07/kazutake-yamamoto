const Bio = ({ t }) => {
  return (
    <div className="title">
      <h3 className="title-section">Bio</h3>
      <div className="animate-fadeInSection">
        <h5>2021.03</h5>
        <h3>{t("bio.1")}</h3>
        <h5>2021.04</h5>
        <h3>{t("bio.2")}</h3>
        <h5>2022.07</h5>
        <h3>{t("bio.3")}</h3>
      </div>
    </div>
  );
};
export default Bio;
