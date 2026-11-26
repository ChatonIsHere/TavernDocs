---
title: "IHeartCallModifier"
description: "Something that changes a hit while the Heart Call skill is active on a tool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHeartCallModifier

An **interface** in `Root.Township`, no namespace.

Something that changes a hit while the Heart Call skill is active on a tool. `HeartCall` calls every modifier registered for the hitting tool. Implemented by `ForgingHeartCallModifier`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`ForgingHeartCallModifier`](/game-api/types/global-e-h/forgingheartcallmodifier)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifyhit" /><code>{"void ModifyHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | Changes the hit before it is applied. If any modifier exists, `HeartCall` may skip its own multiplier. |

## Used in

Members of other types that take, return or hold a `IHeartCallModifier`:

[`HeartCall.modifiers`](/game-api/types/global-e-h/heartcall#m-modifiers), [`HeartCall.Modify`](/game-api/types/global-e-h/heartcall#m-modify).
