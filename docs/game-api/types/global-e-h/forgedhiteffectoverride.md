---
title: "ForgedHitEffectOverride"
description: "class ForgedHitEffectOverride in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForgedHitEffectOverride

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForgedHitEffectOverride()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-coldhit" /><code>{"private "}<Link to="/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" coldHit"}</code> |
| <Link id="m-efficiencytoheatmodifier" /><code>{"private float efficiencyToHeatModifier"}</code> |
| <Link id="m-hothit" /><code>{"private "}<Link to="/game-api/types/global-p/positionrotationevent">{"PositionRotationEvent"}</Link>{" hotHit"}</code> |
| <Link id="m-overrides" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/game-api/types/global-e-h/forgedhiteffectoverride">{"ForgedHitEffectOverride"}</Link>{"> overrides"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-coldhit-2" /><code>{"static void ColdHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |
| <Link id="m-deregister" /><code>{"static void Deregister("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" toolEntity)"}</code> |
| <Link id="m-hitheat" /><code>{"static float HitHeat("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |
| <Link id="m-hothit-2" /><code>{"static void HotHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |
| <Link id="m-register" /><code>{"static void Register("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" toolEntity, "}<Link to="/game-api/types/global-e-h/forgedhiteffectoverride">{"ForgedHitEffectOverride"}</Link>{" hitOverride)"}</code> |

## Used in

Members of other types that take, return or hold a `ForgedHitEffectOverride`:

[`ForgingHeartCall.hitOverride`](/game-api/types/global-e-h/forgingheartcall#m-hitoverride), [`ForgingHeartCallModifier.hitOverride`](/game-api/types/global-e-h/forgingheartcallmodifier#m-hitoverride).
