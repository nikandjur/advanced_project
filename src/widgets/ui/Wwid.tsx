import { classNames } from "shared/lib/classNames/classNames";
import { cls } from "./Wwid.modules.scss";

interface WwidProps {
  className?: string;
}

export const Wwid = ({ className }: WwidProps) => {
  return <div className={classNames(cls.Wwid, {}, [className])}></div>;
};
