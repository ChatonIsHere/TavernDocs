---
title: "ProgressionPath"
description: "The skill trees a player can progress in: Forging, Woodcutting, Mining, Chiseling, Cooking, Melee, Ranged, plus a DevDebug path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionPath

An **enum** in `Root.Township`, the global namespace.

The skill trees a player can progress in: Forging, Woodcutting, Mining, Chiseling, Cooking, Melee, Ranged, plus a DevDebug path.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Documented in** [Progression](/mod/game-api/game-systems/progression#progressionpath)

## Values

| Member |
| --- |
| <Link id="m-chiseling" /><code>{"Chiseling = 3"}</code> |
| <Link id="m-cooking" /><code>{"Cooking = 4"}</code> |
| <Link id="m-devdebug" /><code>{"DevDebug = 7"}</code> |
| <Link id="m-forging" /><code>{"Forging = 0"}</code> |
| <Link id="m-melee" /><code>{"Melee = 5"}</code> |
| <Link id="m-mining" /><code>{"Mining = 2"}</code> |
| <Link id="m-ranged" /><code>{"Ranged = 6"}</code> |
| <Link id="m-woodcutting" /><code>{"Woodcutting = 1"}</code> |

## Used in

Members of other types that take, return or hold a `ProgressionPath`:

<div className="api-used-in">

[`AreaAttackSkill.ValidateExecutionHit`](/mod/game-api/types/global-a-b/areaattackskill#m-validateexecutionhit), [`GymnasiumXpStatusDisplay.currentPath`](/mod/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-currentpath), [`GymnasiumXpStatusDisplay.CurrentPath`](/mod/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-currentpath-2), [`GymnasiumXpStatusDisplay.IncreaseXpSinglePath`](/mod/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-increasexpsinglepath), [`GymnasiumXpStatusDisplay.MaxOutXpSinglePath`](/mod/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-maxoutxpsinglepath), [`GymnasiumXpStatusDisplay.ResetXpSinglePath`](/mod/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-resetxpsinglepath), [`GymnasiumXpStatusDisplay.ShiftProgressionPath`](/mod/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-shiftprogressionpath), [`BaseImpactChannelProgressionFilter.ApplyImpact`](/mod/game-api/types/global-a-b/baseimpactchannelprogressionfilter#m-applyimpact), [`BaseImpactChannelProgressionFilter.GainExperience`](/mod/game-api/types/global-a-b/baseimpactchannelprogressionfilter#m-gainexperience), [`BoughtSkillCrystal.CurrentPath`](/mod/game-api/types/global-a-b/boughtskillcrystal#m-currentpath), [`BoughtSkillCrystal.SetPath`](/mod/game-api/types/global-a-b/boughtskillcrystal#m-setpath), [`BoughtSkillVisualizer.SetPath`](/mod/game-api/types/global-a-b/boughtskillvisualizer#m-setpath), [`CombatImpactProgressionFilter.ApplyImpact`](/mod/game-api/types/global-c-d/combatimpactprogressionfilter#m-applyimpact), [`DynamiteStrike.ValidateExecutionHit`](/mod/game-api/types/global-c-d/dynamitestrike#m-validateexecutionhit), [`HeartCall.targetPath`](/mod/game-api/types/global-e-h/heartcall#m-targetpath), [`HeartCall.ValidateExecutionHit`](/mod/game-api/types/global-e-h/heartcall#m-validateexecutionhit), [`HebiosEnchant.ValidateExecutionHit`](/mod/game-api/types/global-e-h/hebiosenchant#m-validateexecutionhit), [`HeldPickupHandler.ReceiveHit`](/mod/game-api/types/global-e-h/heldpickuphandler#m-receivehit), [`IInputBasedSkill.ValidateExecutionHit`](/mod/game-api/types/global-i-l/iinputbasedskill#m-validateexecutionhit), [`ImpactChannelProgressionFilter.ApplyImpact`](/mod/game-api/types/global-i-l/impactchannelprogressionfilter#m-applyimpact), [`ImpactChannelProgressionFilter.path`](/mod/game-api/types/global-i-l/impactchannelprogressionfilter#m-path), [`MiningEcho.ValidateExecutionHit`](/mod/game-api/types/global-m-o/miningecho#m-validateexecutionhit), [`OfflinePlayerProgressionHandler.ModifySkills`](/mod/game-api/types/global-m-o/offlineplayerprogressionhandler#m-modifyskills), [`OfflinePlayerProgressionHandler.PlayerUpdatedFreePoints`](/mod/game-api/types/global-m-o/offlineplayerprogressionhandler#m-playerupdatedfreepoints), [`OfflinePlayerProgressionHandler.PathLevel.path`](/mod/game-api/types/global-m-o/offlineplayerprogressionhandler-pathlevel#m-path), [`PathExperience.Path`](/mod/game-api/types/global-p/pathexperience#m-path), [`PathExperience.PathExperience`](/mod/game-api/types/global-p/pathexperience#m-ctor), [`PathExperience.UpdatedPoints`](/mod/game-api/types/global-p/pathexperience#m-updatedpoints), [`PathModelDisplay.currentlyOpenPath`](/mod/game-api/types/global-p/pathmodeldisplay#m-currentlyopenpath), [`PathModelDisplay.InstantiateModel`](/mod/game-api/types/global-p/pathmodeldisplay#m-instantiatemodel), [`PickupBasedSkill.ValidateExecutionHit`](/mod/game-api/types/global-p/pickupbasedskill#m-validateexecutionhit), [`PickupBasedSkillModifier.ValidateExecutionHit`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-validateexecutionhit), [`PlayerEventsManager.PathImpactHit`](/mod/game-api/types/global-p/playereventsmanager#m-pathimpacthit), [`PlayerEventsManager.OnPathHitGenerated.BeginInvoke`](/mod/game-api/types/global-p/playereventsmanager-onpathhitgenerated#m-begininvoke), [`PlayerEventsManager.OnPathHitGenerated.Invoke`](/mod/game-api/types/global-p/playereventsmanager-onpathhitgenerated#m-invoke), [`PlayerProgression.PlayerProgression`](/mod/game-api/types/global-p/playerprogression#m-ctor), [`PlayerProgressionManager.CreatePathExperience`](/mod/game-api/types/global-p/playerprogressionmanager#m-createpathexperience), [`PlayerProgressionManager.GainExperience`](/mod/game-api/types/global-p/playerprogressionmanager#m-gainexperience), [`PlayerProgressionManager.GainSharedExperience`](/mod/game-api/types/global-p/playerprogressionmanager#m-gainsharedexperience), [`PlayerProgressionManager.GetFreePoints`](/mod/game-api/types/global-p/playerprogressionmanager#m-getfreepoints), [`PlayerProgressionManager.GetLevel`](/mod/game-api/types/global-p/playerprogressionmanager#m-getlevel-2), [`PlayerProgressionManager.GetPaths`](/mod/game-api/types/global-p/playerprogressionmanager#m-getpaths), [`PlayerProgressionManager.GetPercentageToNextLevel`](/mod/game-api/types/global-p/playerprogressionmanager#m-getpercentagetonextlevel), [`PlayerProgressionManager.MarkSlotPracticed`](/mod/game-api/types/global-p/playerprogressionmanager#m-markslotpracticed), [`PlayerProgressionManager.OnUpdatedPoints`](/mod/game-api/types/global-p/playerprogressionmanager#m-onupdatedpoints), [`PlayerProgressionManager.PathExperiences`](/mod/game-api/types/global-p/playerprogressionmanager#m-pathexperiences), [`PlayerProgressionManager.UpdatedFreePoints`](/mod/game-api/types/global-p/playerprogressionmanager#m-updatedfreepoints), [`PlayerProgressionManager.PracticeTuple.Path`](/mod/game-api/types/global-p/playerprogressionmanager-practicetuple#m-path), [`PlayerProgressionManager.PracticeTuple.PracticeTuple`](/mod/game-api/types/global-p/playerprogressionmanager-practicetuple#m-ctor-2), [`PlayerToolBasedSkillHelper.ReceiveHit`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-receivehit), [`PowerHit.ValidateExecutionHit`](/mod/game-api/types/global-p/powerhit#m-validateexecutionhit), [`PowerStrike.path`](/mod/game-api/types/global-p/powerstrike#m-path), [`PowerStrike.Path`](/mod/game-api/types/global-p/powerstrike#m-path-2), [`PowerStrike.ValidateExecutionHit`](/mod/game-api/types/global-p/powerstrike#m-validateexecutionhit), [`ProfessionDiskAvailablePointsVisualizer.SetPath`](/mod/game-api/types/global-p/professiondiskavailablepointsvisualizer#m-setpath), [`ProfessionSkillTree.GetProfessionTree`](/mod/game-api/types/global-p/professionskilltree#m-getprofessiontree), [`ProfessionSkillTree.path`](/mod/game-api/types/global-p/professionskilltree#m-path), [`ProfessionSkillTree.Path`](/mod/game-api/types/global-p/professionskilltree#m-path-2), [`ProfessionSkillTree.treeMap`](/mod/game-api/types/global-p/professionskilltree#m-treemap), [`ProfessionsProgressShrine.availablePointsVisualizers`](/mod/game-api/types/global-p/professionsprogressshrine#m-availablepointsvisualizers) and 22 more.

</div>
