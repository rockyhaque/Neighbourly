

import { MdElectricalServices } from "react-icons/md";
import { MdPlumbing } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { PiFlowerTulipDuotone } from "react-icons/pi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { TbTemperatureSun } from "react-icons/tb";
import { MdOutlineRecycling } from "react-icons/md";
import { MdOutlineFormatPaint } from "react-icons/md";
import { BiSolidWasher } from "react-icons/bi";
import { MdSignalWifiStatusbarConnectedNoInternet2 } from "react-icons/md";
import { MdOutlineConstruction } from "react-icons/md";
import { FaCarCrash } from "react-icons/fa";




export const categories = [
  {
    label: 'Electrical',
    icon: MdElectricalServices,
    description: 'Electricians for wiring, repairs, and installations.',
  },
  {
    label: 'Plumbing',
    icon: MdPlumbing,
    description: 'Plumbers for pipe repairs, leak fixing, and installations.',
  },
  {
    label: 'Carpentry',
    icon: IoBedOutline,
    description: 'Carpenters for furniture repairs, custom furniture, and woodwork.',
  },
  {
    label: 'Gardening',
    icon: PiFlowerTulipDuotone,
    description: 'Gardeners for lawn maintenance, landscaping, and plant care',
  },
  {
    label: 'Housekeeping',
    icon: MdOutlineCleaningServices ,
    description: 'Cleaners for residential and common area cleaning.',
  },
  {
    label: 'Security',
    icon: AiTwotoneSecurityScan,
    description: 'This property is near a lake!',
  },
  {
    label: 'HVAC',
    icon: TbTemperatureSun ,
    description: 'Technicians for heating, ventilation, and air conditioning repairs and maintenance.',
  },
  {
    label: 'Waste',
    icon: MdOutlineRecycling,
    description: 'Services for garbage collection, recycling, and waste disposal.',
  },
  {
    label: 'Painting',
    icon: MdOutlineFormatPaint,
    description: 'Painters for interior and exterior painting and touch-ups.',
  },
  {
    label: 'Appliance',
    icon: BiSolidWasher,
    description: 'Technicians for repairing household appliances like refrigerators, washing machines, etc.',
  },
  {
    label: 'Network',
    icon: MdSignalWifiStatusbarConnectedNoInternet2,
    description: 'Technicians for internet setup, computer repairs, and networking solutions.',
  },
  {
    label: 'Construction',
    icon: MdOutlineConstruction,
    description: 'Contractors for home improvement, renovations, and construction projects.',
  },
  {
    label: 'Vehicle',
    icon: FaCarCrash,
    description: 'Mechanics and technicians for vehicle repair and maintenance.',
  },
  
]