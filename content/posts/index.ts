import type { ReactNode } from "react"
import { body as accessibility } from "./accessibility"
import { body as agileUx } from "./agile-ux"
import { body as buildingTeam } from "./building-team"
import { body as completeWellnessWorkspace } from "./complete-wellness-workspace"
import { body as dontBuildAlone } from "./dont-build-alone"
import { body as leadershipManagement } from "./leadership-management"
import { body as lessonsIndustry } from "./lessons-industry"
import { body as marshall } from "./marshall"
import { body as mergers } from "./mergers"
import { body as routesToFinance } from "./routes-to-finance"
import { body as safe } from "./safe"
import { body as socialMedia } from "./social-media"
import { body as ux2060 } from "./ux-2060"
import { body as wealthCreation } from "./wealth-creation"

export const postBodies: Record<string, ReactNode> = {
  "accessibility": accessibility,
  "agile-ux": agileUx,
  "building-team": buildingTeam,
  "complete-wellness-workspace": completeWellnessWorkspace,
  "dont-build-alone": dontBuildAlone,
  "leadership-management": leadershipManagement,
  "lessons-industry": lessonsIndustry,
  "marshall": marshall,
  "mergers": mergers,
  "routes-to-finance": routesToFinance,
  "safe": safe,
  "social-media": socialMedia,
  "ux-2060": ux2060,
  "wealth-creation": wealthCreation,
}
