import {useState, useEffect} from "react";

type ViewportSize = {
  vw: number;
  vh: number;
};

const useViewport = (): ViewportSize => {
  const [viewportSize, setViewportSize] = useState<ViewportSize>({
    vw: window.innerWidth,
    vh: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        vw: window.innerWidth,
        vh: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewportSize;
};

export default useViewport;
