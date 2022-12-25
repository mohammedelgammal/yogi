// styling
import Style from "./Spacer.module.css";

const Spacer = ({ h, xl, lg, md, sm, xs }) => {
  return (
    <div
      className={
        xl
          ? Style.spacerXl
          : lg
          ? Style.spacerLg
          : md
          ? Style.spacerMd
          : sm
          ? Style.spacerSm
          : xs && Style.spacerXs
      }
      style={h && { height: `${h}px` }}
    />
  );
};

export default Spacer;
