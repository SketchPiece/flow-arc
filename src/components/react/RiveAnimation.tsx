import { useRive } from "@rive-app/react-canvas";
import { useEffect, useState, type PropsWithChildren } from "react";

interface RiveAnimationProps extends PropsWithChildren {
  src: string;
  width?: number;
  height?: number;
}

export default function RiveAnimation({
  src,
  width,
  height,
  children,
}: RiveAnimationProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { RiveComponent } = useRive({
    src,
    autoplay: true,
  });

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 100);
  }, []);

  return (
    <div
      className="relative hidden sm:block"
      style={{ width: width, height: height }}
    >
      <RiveComponent />
      {!isMounted && <div className="absolute inset-0">{children}</div>}
    </div>
  );
}
