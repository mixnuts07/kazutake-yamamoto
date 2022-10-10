import Image from "next/image";
const Profile = ({ t }) => {
  const face = require("../public/face.jpeg");
  type BirthDayType = {
    year: number;
    month: number;
    date: number;
  };
  const birthday: BirthDayType = {
    year: 1998,
    month: 7,
    date: 19,
  };
  const getAge = (birthday: BirthDayType) => {
    const today = new Date();
    const thisYearsBirthday = new Date(
      today.getFullYear(),
      birthday.month - 1,
      birthday.date
    );
    let age = today.getFullYear() - birthday.year;
    if (today < thisYearsBirthday) {
      age--;
    }
    return age;
  };
  return (
    <div className="pt-10">
      <h1>Kazutake Yamamoto</h1>
      <p>1998.07({getAge(birthday)})</p>
      <div className="flex">
        <div>
          <h3>{t("profile.1")}</h3>
          <h3>{t("profile.2")}</h3>
        </div>
        <Image
          src={face}
          alt="face"
          width={140}
          height={140}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Profile;
