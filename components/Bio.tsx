const Bio = ({ t }) => {
  return (
    <div className="pt-10 px-3 tracking-normal">
      <h3 className="title-section">Bio</h3>
      <h5>2021.3</h5>
      <h3>{t("bio.1")}</h3>
      <h5>2021.4</h5>
      <h3>{t("bio.2")}</h3>
      <h5>2022.7</h5>
      <h3>{t("bio.3")}</h3>
    </div>
  );
};
export default Bio;
