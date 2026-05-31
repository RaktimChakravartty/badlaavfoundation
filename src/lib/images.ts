// Real photographs from the existing Badlaav site, treated as duotone
// PhotoFigures. Never substitute AI or stock imagery of children.
import brandFlow from "../assets/brand-flow.jpg";
import dehradunValley from "../assets/dehradun-valley.jpg";
import skillsStillLife from "../assets/skills-stilllife.jpg";

const BASE = "https://badlaavfoundation.in/wp-content/uploads";

export const PHOTOS = {
  hero: `${BASE}/2022/04/7-1.jpg`,
  campInfinity: `${BASE}/2024/02/Camp-Infinity-2024-1.png`,
  field1: `${BASE}/2022/05/1.png`,
  field2: `${BASE}/2022/05/2.png`,
  field3: `${BASE}/2022/05/3.png`,
  field4: `${BASE}/2022/05/4.png`,
  field5: `${BASE}/2022/05/5.png`,
  field6: `${BASE}/2022/05/6.png`,
  outing: `${BASE}/2022/05/OUTING.png`,
  group: `${BASE}/2022/05/1-1-scaled.jpg`,
  // A distinct field photograph for aptitude / club sessions so the hero
  // photograph is never reused elsewhere on the site.
  session: `${BASE}/2022/05/5.png`,
  camp2: `${BASE}/2022/04/IMG-20211101-WA0046.jpg`,
} as const;

// AI-generated brand imagery. Allowed only for non-human textures and
// landscape, never for people or children. Bundled from src/assets so the
// build hashes and optimises them.
export const BRAND = {
  flow: brandFlow,
  valley: dehradunValley,
  skills: skillsStillLife,
} as const;
