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
    <div>
      <h1>Kazutake Yamamoto</h1>
      <p>1998.07({getAge(birthday)})</p>
      <div>
        <h3 className="whitespace-pre-wrap">{t("profile.1")}</h3>
        <Image src={face} alt="face" width={80} height={80} />
      </div>
    </div>
  );
};

export default Profile;
