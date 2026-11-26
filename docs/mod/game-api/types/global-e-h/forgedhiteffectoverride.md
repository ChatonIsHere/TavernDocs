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
| <Link id="m-ctor" /><code>{"ForgedHitEffectOverride()"}</code> | <span className="api-desc">Creates a `ForgedHitEffectOverride` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coldhit" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" coldHit"}</code> | <span className="api-desc">Effect event played on a cold hit.</span> |
| <Link id="m-efficiencytoheatmodifier" /><code>{"private float efficiencyToHeatModifier"}</code> | <span className="api-desc">Multiplier from hit effectiveness to heat added.</span> |
| <Link id="m-hothit" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" hotHit"}</code> | <span className="api-desc">Effect event played on a hot hit.</span> |
| <Link id="m-overrides" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/forgedhiteffectoverride">{"ForgedHitEffectOverride"}</Link>{"> overrides"}</code> | <span className="api-desc">Static map of tool entity to its active override. Entries stay until `Deregister`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-coldhit-2" /><code>{"static void ColdHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">Plays the registered cold hit effect at the hit point, if the tool has an override.</span> |
| <Link id="m-deregister" /><code>{"static void Deregister("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" toolEntity)"}</code> | <span className="api-desc">Removes the tool entity's override.</span> |
| <Link id="m-hitheat" /><code>{"static float HitHeat("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">Returns hit effectiveness times the heat modifier for the tool, or 0 with no override.</span> |
| <Link id="m-hothit-2" /><code>{"static void HotHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">Plays the registered hot hit effect at the hit point, if the tool has an override.</span> |
| <Link id="m-register" /><code>{"static void Register("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" toolEntity, "}<Link to="/mod/game-api/types/global-e-h/forgedhiteffectoverride">{"ForgedHitEffectOverride"}</Link>{" hitOverride)"}</code> | <span className="api-desc">Sets or replaces the override for a tool entity.</span> |

## Used in

Members of other types that take, return or hold a `ForgedHitEffectOverride`:

<div className="api-used-in">

[`ForgingHeartCall.hitOverride`](/mod/game-api/types/global-e-h/forgingheartcall#m-hitoverride), [`ForgingHeartCallModifier.hitOverride`](/mod/game-api/types/global-e-h/forgingheartcallmodifier#m-hitoverride).

</div>
