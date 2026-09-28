export type IconName =
  | "layout"
  | "trendingUp"
  | "trendingDown"
  | "pieChart"
  | "users"
  | "package"
  | "barChart"
  | "shield"
  | "zap"
  | "target"
  | "checkCircle"
  | "database"
  | "globe"
  | "check"
  | "arrowRight"
  | "arrowLeft"
  | "arrowUp"
  | "lock"
  | "menu"
  | "close"
  | "palette"
  | "devices"
  | "search"
  | "gauge"
  | "messageSquare"
  | "share"
  | "mapPin"
  | "lineChart"
  | "rocket"
  | "mail"
  | "phone"
  | "clock"
  | "sliders"
  | "externalLink"
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "linkedin"
  | "sparkles"
  | "box";

export interface ServiceItem {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}

export type ProjectVisualStyle = "institutional" | "restaurant" | "local";

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies?: string[];
  visual?: ProjectVisualStyle;
  accent?: string;
  url?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  preserveImageQuality?: boolean;
}
