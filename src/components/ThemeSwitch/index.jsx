import { Switch } from "@material-tailwind/react";
 
const ThemeSwitch = () => {
  return (
    <div className="fixed top-0 right-0 p-5">
      <Switch 
        className="h-full w-full checked:bg-accent-900"
        circleProps={{
          className: "before:hidden border-none bg-accent-200",
        }}
      />
    </div>
  );
}

export default ThemeSwitch;