import { IconSetting, IconStats } from "./Icons";

const iconMap = {
  setting: IconSetting,
  stats: IconStats,

  default: IconSetting,
};

// export default function ActionButton() {
//   return (
//     <button className="w-24 h-10 border-white rounded-full">
//       ActionButton
//     </button>
//   );
// }

const ActionButton = ({
  icon = "default",
  onClick = () => {},
  color = "white",
}) => {
  const IconComponent = iconMap[icon] || iconMap.default;

  const buttonClasses =
    color === "dark"
      ? "border-stone-950 fill-stone-950"
      : "border-white fill-white";

  return (
    <button
      onClick={onClick}
      className={`w-20 h-8 rounded-full flex items-center justify-center border ${buttonClasses}`}
    >
      <div>
        <IconComponent />
      </div>
    </button>
  );
};

export default ActionButton;
