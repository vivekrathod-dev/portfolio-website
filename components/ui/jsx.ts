import { Object3D } from "three";
import { extend, ReactThreeFiber } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      myCustomObject: ReactThreeFiber.Object3DNode<Object3D, typeof Object3D>;
    }
  }
}
