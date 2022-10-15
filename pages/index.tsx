import React, { lazy, useState, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Loading from "../components/Loading";
import ReactLoading from "react-loading";

const App = lazy(() => import("./app"));

const Home = () => {
  const [changeDisplay, setChangeDisplay] = useState(true);
  const EnterSite = () => {
    setTimeout(setChangeDisplay, 200, false);
  };
  if (changeDisplay) return <Loading EnterSite={EnterSite} />;
  return (
    <div>
      <Suspense
        fallback={
          <ReactLoading
            type="spinningBubbles"
            color="#f5f5f5"
            className="mx-auto mt-96"
          />
        }
      >
        <App />
      </Suspense>
    </div>
  );
};
export default Home;
