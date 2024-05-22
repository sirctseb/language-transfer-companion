import type { Data } from "../../types";

import _2 from "./2";
import _3 from "./3";
import _4 from "./4";

type LessonData = {
  [key: number]: Data;
};

export const data: LessonData = {
  2: _2,
  3: _3,
  4: _4,
};
