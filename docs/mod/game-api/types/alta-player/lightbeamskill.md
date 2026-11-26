---
title: "LightBeamSkill"
description: "Bow draw skill that replaces the arrow with a light beam: while active the string carries a beam projectile and the real arrow is destroyed on release."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightBeamSkill

A **class** in `Root.Township`, `Alta.Progression.Skills`.

Bow draw skill that replaces the arrow with a light beam: while active the string carries a beam projectile and the real arrow is destroyed on release. A `ScriptableObject` asset.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`BowDrawSkill`](/mod/game-api/types/alta-player/bowdrawskill)
- **Derived types** [`LightBeamSkill.Create`](/mod/game-api/types/alta-player/lightbeamskill-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-player/lightbeamskill-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LightBeamSkill()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beamprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" beamPrefab"}</code> | <span className="api-desc">Network prefab for the light beam.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-debugshoot" /><code>{"void DebugShoot("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isAtPlayer, float speed)"}</code> | <span className="api-desc">Server: spawns an unsaved beam in front of the player's head and shoots it forward, or back at the player.</span> |
| <Link id="m-handleinputchanged" /><code>{"protected override void HandleInputChanged(bool isEnabled, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input, "}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString)"}</code> | <span className="api-desc">When enabled with an arrow docked, adds a beam as an extra arrow; when disabled, removes extra arrows.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyshotarrow" /><code>{"private void DestroyShotArrow("}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" shotEntity, Vector3 arg3)"}</code> | <span className="api-desc">Destroys the arrow that was just shot (the beam goes instead) and unhooks itself.</span> |

</details>
