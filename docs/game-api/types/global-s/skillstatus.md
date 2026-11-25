---
title: "SkillStatus"
description: "The Testing values mean the player is practising that orb."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillStatus

An **enum** in `Root.Township`, no namespace.

The `Testing` values mean the player is practising that orb.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Documented in** [Skills and unlocks](/game-api/game-systems/skills-and-unlocks)

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

[`PathExperience.IsSlotAvailable`](/game-api/types/global-p/pathexperience#m-isslotavailable), [`PlayerProgressionManager.IsSlotAvailable`](/game-api/types/global-p/playerprogressionmanager#m-isslotavailable), [`SkillOrb.InitializeSkill`](/game-api/types/global-s/skillorb#m-initializeskill), [`SkillOrb.InitializeSlot`](/game-api/types/global-s/skillorb#m-initializeslot), [`SkillOrb.Status`](/game-api/types/global-s/skillorb#m-status), [`SkillOrb.UpdateAllowed`](/game-api/types/global-s/skillorb#m-updateallowed), [`SkillOrbConnectionline.UpdateColor`](/game-api/types/global-s/skillorbconnectionline#m-updatecolor), [`SkillOrbStatusUpdateDelegate.BeginInvoke`](/game-api/types/global-s/skillorbstatusupdatedelegate#m-begininvoke), [`SkillOrbStatusUpdateDelegate.Invoke`](/game-api/types/global-s/skillorbstatusupdatedelegate#m-invoke).
