---
title: "ForgedHitEffectOverride"
description: "Per-tool override for forging hit effects and the heat a hit adds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForgedHitEffectOverride

A **class** in `Root.Township`, the global namespace.

Per-tool override for forging hit effects and the heat a hit adds. Heart call skills register one against a tool entity, and `ForgedModel` checks it on each hit.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForgedHitEffectOverride()"}</code> | Creates a `ForgedHitEffectOverride` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coldhit" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" coldHit"}</code> | Effect event played on a cold hit. |
| <Link id="m-efficiencytoheatmodifier" /><code>{"private float efficiencyToHeatModifier"}</code> | Multiplier from hit effectiveness to heat added. |
| <Link id="m-hothit" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" hotHit"}</code> | Effect event played on a hot hit. |
| <Link id="m-overrides" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/forgedhiteffectoverride">{"ForgedHitEffectOverride"}</Link>{"> overrides"}</code> | Static map of tool entity to its active override. Entries stay until `Deregister`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-coldhit-2" /><code>{"static void ColdHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Plays the registered cold hit effect at the hit point, if the tool has an override. |
| <Link id="m-deregister" /><code>{"static void Deregister("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" toolEntity)"}</code> | Removes the tool entity's override. |
| <Link id="m-hitheat" /><code>{"static float HitHeat("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Returns hit effectiveness times the heat modifier for the tool, or 0 with no override. |
| <Link id="m-hothit-2" /><code>{"static void HotHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Plays the registered hot hit effect at the hit point, if the tool has an override. |
| <Link id="m-register" /><code>{"static void Register("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" toolEntity, "}<Link to="/mod/game-api/types/global-e-h/forgedhiteffectoverride">{"ForgedHitEffectOverride"}</Link>{" hitOverride)"}</code> | Sets or replaces the override for a tool entity. |

## Used in

Members of other types that take, return or hold a `ForgedHitEffectOverride`:

[`ForgingHeartCall.hitOverride`](/mod/game-api/types/global-e-h/forgingheartcall#m-hitoverride), [`ForgingHeartCallModifier.hitOverride`](/mod/game-api/types/global-e-h/forgingheartcallmodifier#m-hitoverride).
