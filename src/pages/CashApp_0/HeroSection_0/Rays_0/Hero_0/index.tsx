import "./style.css";
import { Layer1 as Layer1_0 } from "./Layer1_0";
import { TEXT } from "components/TEXT";
import { Introphone1 as Introphone1_0 } from "assets/Introphone1_0";
import { Introcube1 as Introcube1_0 } from "assets/Introcube1_0";
import { Introcubes1 as Introcubes1_0 } from "assets/Introcubes1_0";
import { Intropillar1 as Intropillar1_0 } from "assets/Intropillar1_0";
import { Introstairs1 as Introstairs1_0 } from "assets/Introstairs1_0";

export const Hero = () => {
  return (
    <div className="Hero_11_6">
      <Layer1_0 />
      <TEXT characters="CASh" className="TEXT_11_2" />
      <Introphone1_0 />
      <TEXT
        characters="
APP"
        className="TEXT_11_4"
      />
      <Introcube1_0 />
      <Introcubes1_0 />
      <Intropillar1_0 />
      <Introstairs1_0 />
    </div>
  );
};
