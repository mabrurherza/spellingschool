import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export const Animation = () => {
  const { RiveComponent } = useRive({
    src: "animation/spellingschool.riv",
    stateMachines: "main",

    layout: new Layout({
      fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.TopLeft,
    }),
    autoplay: true,
  });

  return <RiveComponent />;
};
