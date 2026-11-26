---
title: "LightBeamSkill"
description: "class LightBeamSkill in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightBeamSkill

A **class** in `Root.Township`, `Alta.Progression.Skills`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`BowDrawSkill`](/game-api/types/alta-player/bowdrawskill)
- **Derived types** [`LightBeamSkill.Create`](/game-api/types/alta-player/lightbeamskill-create)
- **Nested types** [`Create`](/game-api/types/alta-player/lightbeamskill-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LightBeamSkill()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-beamprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" beamPrefab"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-debugshoot" /><code>{"void DebugShoot("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isAtPlayer, float speed)"}</code> |
| <Link id="m-handleinputchanged" /><code>{"protected override void HandleInputChanged(bool isEnabled, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input, "}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-destroyshotarrow" /><code>{"private void DestroyShotArrow("}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" shotEntity, Vector3 arg3)"}</code> |

</details>
