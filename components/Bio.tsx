const Bio = ({ t }) => {
  return (
    <div className="pt-10">
      <h3 className="pb-5">Bio</h3>
      <h5>2021.3</h5>
      <h5>{t("bio.1")}</h5>
      <h5>2021.4</h5>
      <h5>{t("bio.2")}</h5>
      <h5>2022.7</h5>
      <h5>{t("bio.3")}</h5>
    </div>
  );
};
export default Bio;
