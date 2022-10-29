import "./FloatingDiv.css";

const FloatingDiv = ({ image, text1, text2 }) => {
  return (
    <>
      {text1 && text2 ? (
        <div className="floatingdiv__wrapper">
          <img src={image} alt="crown" />
          <span>
            {text1} <br /> {text2}
          </span>
        </div>
      ) : (
        <>
          <div className="floatingdiv__onlyEmoji">
            <img src={image} alt="crown" />
          </div>
        </>
      )}
    </>
  );
};

export default FloatingDiv;
