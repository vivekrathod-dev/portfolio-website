import { Object3D } from "three";
import type { ThreeElement } from "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    myCustomObject: ThreeElement<typeof Object3D>;
  }
}
