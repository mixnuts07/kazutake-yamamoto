import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ja: {
    translation: {
      // Profile
      bio1: "最大限、責任感を持って仕事をするために独立しました。",
      bio2: "目標は世界中で使われるサービスを作ることです。",
      bio3: "学習中...",
      // Career
      career1: "関西大学 総合情報学部 卒業",
      career2: "都内AI開発ベンチャー",
      career3: "機械学習エンジニア職 入社",
      career4: "独立",
      // SelfDev
      self_dev_title1: "画質向上Webアプリです",
      self_dev_title2: "React×TypeScript×MUI製です",
      // Works
      works1_title: "ブロックチェーン開発",
      works1_title_a: "Web3.0まわり",
      works1_des: "DAO・dapps興味あります。その他なんでも!(実務経験無しです)",
      works2_title: "Webアプリケーション開発",
      works2_des1: "フロントエンド..React",
      works2_des2: "バックエンド..Python",
      works3_title: "簡単なツール作成",
      works3_des: "サクッと自動化・効率化できます",
      works4_title: "その他",
      works4_des: "上記以外でも何かありましたら!",
      pri_high: "優先度：高",
      pri_mid: "優先度：中",
    },
  },
  en: {
    translation: {
      // Profile
      bio1: "I became independent in order to work with maximum responsibility.",
      bio2: "My goal is to create a service that is used around the world.",
      bio3: "Learning...",
      // Career
      career1: "Graduated from Kansai University, Faculty of Informatics",
      career2: "Joined an AI development venture in Tokyo",
      career3: "as a machine learning engineer.",
      career4: "Freelancer",
      // SelfDev
      self_dev_title1: "image quality improvement web application.",
      self_dev_title2: "made by React x TypeScript x MUI.",
      // Works
      works1_title: "Blockchain Development",
      works1_title_a: "",
      works1_des:
        "I am interested in DAO/dapps. Anything else !(I have no work experience)",
      works2_title: "Web Application Development",
      works2_des1: "Frontend . .React",
      works2_des2: "Backend . .Python",
      works3_title: "Create simple tool",
      works3_des: "Quickly automated and streamlined",
      works4_title: "Other",
      works4_des: "If you have anything else not listed above!",
      pri_high: "Priority: High",
      pri_mid: "Priority: Medium",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ja",
});

export default i18n;
