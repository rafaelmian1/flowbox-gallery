import {RotatingLines} from "react-loader-spinner";

export const Loader = () => (
  <div className="grid h-screen w-screen place-items-center">
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="1.25"
      width="96"
      visible={true}
    />
  </div>
);
