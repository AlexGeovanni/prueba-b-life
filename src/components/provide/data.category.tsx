
import AccessoriesIcon from "../icons/provide/accessories";
import AplianceIcon from "../icons/provide/apliance";
import CameraIcon from "../icons/provide/camera";
import ComputerIcon from "../icons/provide/computer";
import MobileIcon from "../icons/provide/mobile";
import OtherIcon from "../icons/provide/other";
import TvSmartIcon from "../icons/provide/tv";


// Tipamos los datos de categorias 
export type App = {
  id: number;
  title: string;
  provider: boolean;
  element: JSX.Element; // 
 }

export default function Data (){
    const DATA_CATEGORY:App[] = [
        {
          id: 1,
          provider:true,
          title: "Computer & Laptop",
          element: <ComputerIcon />,
        },
        {
          id: 2,
          provider:true,
          title: "Mobile & Phone",
          element: <MobileIcon />,
        },
        {
          id: 3,
          provider:false,
          title: "Camera",
          element: <CameraIcon />,
        },
        {
          id: 4,
          provider:true,
          title: "TV & Smart Box",
          element: <TvSmartIcon />,
        },
        {
          id: 5,
          provider:true,
          title: "Home & Appliance",
          element: <AplianceIcon />,
        },
        {
          id: 6,
          provider:false,
          title: "Accessories",
          element: <AccessoriesIcon />,
        },
        {
          id: 7,
          provider:false,
          title: "Other Categories",
          element: <OtherIcon />,
        },
      ];
    return  {DATA_CATEGORY}
}
