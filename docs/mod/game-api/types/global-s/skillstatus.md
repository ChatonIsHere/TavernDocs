---
title: "SkillStatus"
description: "Whether a player can buy, sell or use a skill slot, from IsSlotAvailable on the progression manager and path experience: allowed, can't afford, owned, owned..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillStatus

An **enum** in `Root.Township`, the global namespace.

Whether a player can buy, sell or use a skill slot, from `IsSlotAvailable` on the progression manager and path experience: allowed, can't afford, owned, owned but locked by skills that depend on it, and testing variants.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Documented in** [Skills and unlocks](/mod/game-api/game-systems/skills-and-unlocks)

## Values

| Member |
| --- |
| <Link id="m-allowed" /><code>{"Allowed = 9"}</code> |
| <Link id="m-cantbuy" /><code>{"CantBuy = 3"}</code> |
| <Link id="m-notallowed" /><code>{"NotAllowed = 1"}</code> |
| <Link id="m-otherplayer" /><code>{"OtherPlayer = 0"}</code> |
| <Link id="m-owned" /><code>{"Owned = 7"}</code> |
| <Link id="m-ownedlocked" /><code>{"OwnedLocked = 5"}</code> |
| <Link id="m-testingallowed" /><code>{"TestingAllowed = 8"}</code> |
| <Link id="m-testingcantbuy" /><code>{"TestingCantBuy = 2"}</code> |
| <Link id="m-testinglockedowned" /><code>{"TestingLockedOwned = 4"}</code> |
| <Link id="m-testingowned" /><code>{"TestingOwned = 6"}</code> |

## Used in

Members of other types that take, return or hold a `SkillStatus`:

<div className="api-used-in">

[`PathExperience.IsSlotAvailable`](/mod/game-api/types/global-p/pathexperience#m-isslotavailable), [`PlayerProgressionManager.IsSlotAvailable`](/mod/game-api/types/global-p/playerprogressionmanager#m-isslotavailable), [`SkillOrb.InitializeSkill`](/mod/game-api/types/global-s/skillorb#m-initializeskill), [`SkillOrb.InitializeSlot`](/mod/game-api/types/global-s/skillorb#m-initializeslot), [`SkillOrb.Status`](/mod/game-api/types/global-s/skillorb#m-status), [`SkillOrb.UpdateAllowed`](/mod/game-api/types/global-s/skillorb#m-updateallowed), [`SkillOrbConnectionline.UpdateColor`](/mod/game-api/types/global-s/skillorbconnectionline#m-updatecolor), [`SkillOrbStatusUpdateDelegate.BeginInvoke`](/mod/game-api/types/global-s/skillorbstatusupdatedelegate#m-begininvoke), [`SkillOrbStatusUpdateDelegate.Invoke`](/mod/game-api/types/global-s/skillorbstatusupdatedelegate#m-invoke).

</div>
