import {
  Info,
  Workflow,
  BookOpen,
  HandHeart,
  Heart,
  Award,
  Sprout,
  Landmark,
  Compass,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

// One source of truth for the icon language across nav, dropdowns and footer.
export const ROUTE_ICONS: Record<string, LucideIcon> = {
  "/about": Info,
  "/our-model": Workflow,
  "/stories": BookOpen,
  "/get-involved": HandHeart,
  "/support": Heart,
  "/certificate": Award,
  "/care": Sprout,
  "/dagdya": Landmark,
  "/camp-infinity": Compass,
};

export const PROGRAMMES_ICON = LayoutGrid;

// Accent colour paired with each programme, kept consistent everywhere.
export const PROGRAMME_ACCENT: Record<string, string> = {
  "/care": "var(--teal)",
  "/dagdya": "var(--plum)",
  "/camp-infinity": "var(--saffron)",
};