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

| Member | What it is |
| --- | --- |
| <Link id="m-beamprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" beamPrefab"}</code> | Network prefab for the light beam. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-debugshoot" /><code>{"void DebugShoot("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isAtPlayer, float speed)"}</code> | Server: spawns an unsaved beam in front of the player's head and shoots it forward, or back at the player. |
| <Link id="m-handleinputchanged" /><code>{"protected override void HandleInputChanged(bool isEnabled, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input, "}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString)"}</code> | When enabled with an arrow docked, adds a beam as an extra arrow; when disabled, removes extra arrows. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyshotarrow" /><code>{"private void DestroyShotArrow("}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" shotEntity, Vector3 arg3)"}</code> | Destroys the arrow that was just shot (the beam goes instead) and unhooks itself. |

</details>
