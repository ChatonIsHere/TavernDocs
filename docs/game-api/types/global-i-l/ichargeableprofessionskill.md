---
title: "IChargeableProfessionSkill"
description: "Internal: a profession skill that can be charged, like a bow draw."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IChargeableProfessionSkill

An **internal interface** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: a profession skill that can be charged, like a bow draw. `BowStringPullbackInputMethod` calls it; `PickupBasedSkill` and `PickupBasedSkillModifier` implement it.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`PickupBasedSkill`](/game-api/types/global-p/pickupbasedskill), [`PickupBasedSkillModifier`](/game-api/types/global-p/pickupbasedskillmodifier)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendcancelled" /><code>{"void SendCancelled("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends that the player cancelled charging the skill on the entity. |
| <Link id="m-sendchargingstarted" /><code>{"void SendChargingStarted("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends that the player started charging the skill on the entity. |

## Used in

Members of other types that take, return or hold a `IChargeableProfessionSkill`:

[`BowStringPullbackInputMethod.skill`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-skill).
