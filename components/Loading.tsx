import style from "../styles/loading.module.scss";

const Loading = ({ EnterSite }) => {
  return (
    <div className="flex justify-center max-w-1/2 bg-dark">
      <div className={style.computer}>
        <div className={style.side}></div>
        <div className={style.top}></div>
        <div className={style.front}></div>
        <div className={style.screen}></div>
        <div className={style.text}>
          <div>
            $&nbsp;T&#8203;h&#8203;a&#8203;n&#8203;k&#8203;
            &#8203;y&#8203;o&#8203;u&#8203; &#8203;f&#8203;o&#8203;r&#8203;
            &#8203;v&#8203;i&#8203;s&#8203;i&#8203;t&#8203;i&#8203;n&#8203;g
          </div>
          <div>
            $&nbsp;P&#8203;l&#8203;e&#8203;s&#8203;e&#8203;
            &#8203;p&#8203;u&#8203;s&#8203;h&#8203;
            &#8203;b&#8203;u&#8203;t&#8203;t&#8203;o&#8203;n&#8203;↓
          </div>
        </div>
        <div className={style.button} onClick={EnterSite}>
          E&#8203;N&#8203;T&#8203;E&#8203;R
        </div>
      </div>
    </div>
  );
};
export default Loading;
