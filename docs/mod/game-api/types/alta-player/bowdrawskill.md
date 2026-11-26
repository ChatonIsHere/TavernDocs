---
title: "BowDrawSkill"
description: "Bow skill that boosts the damage of the next arrow shot from a bow while the skill is active, scaled by the player's skill level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BowDrawSkill

A **class** in `Root.Township`, `Alta.Progression.Skills`.

Bow skill that boosts the damage of the next arrow shot from a bow while the skill is active, scaled by the player's skill level.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`SpecificPickupBasedSkill`](/mod/game-api/types/alta-player/specificpickupbasedskill)
- **Derived types** [`BowQuickdraw`](/mod/game-api/types/alta-player/bowquickdraw), [`BowSlowdraw`](/mod/game-api/types/alta-player/bowslowdraw), [`LightBeamSkill`](/mod/game-api/types/alta-player/lightbeamskill)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BowDrawSkill()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-damagemultiplierperlevel" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/floatvaluesperlevel">{"FloatValuesPerLevel"}</Link>{" damageMultiplierPerLevel"}</code> | Damage multiplier for each skill level. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bowstrings" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{", "}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{"> bowStrings"}</code> | Bow string for each registered skill input. |
| <Link id="m-inputs" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> inputs"}</code> | Skill input for each bow string, the reverse of `bowStrings`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Stops tracking the input's bow string, one frame later. |
| <Link id="m-inputchangedstate" /><code>{"override void InputChangedState(bool isEnabled, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Listens for the bow string shooting while the input is enabled. A shot applies the multiplier to the arrow, uses the skill and resets the input. |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | Starts tracking the bow string of the held bow for this input. |
| <Link id="m-getdamagemultiplier" /><code>{"protected float GetDamageMultiplier("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | The damage multiplier for the player's level in this skill. |
| <Link id="m-gettransformtocallat" /><code>{"protected override Transform GetTransformToCallAt("}<Link to="/mod/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Where to show skill effects: the arrow's tip if it has one, otherwise the entity itself. |
| <Link id="m-handleinputchanged" /><code>{"protected virtual void HandleInputChanged(bool isEnabled, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input, "}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString)"}</code> | Turns the skill effect on or off for the arrow docked on the bow string, if there is one. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onarrowshot" /><code>{"private void OnArrowShot("}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" shotEntity, Vector3 shotVelocity)"}</code> | Called when a registered bow string shoots: sets the shot's one-off damage multiplier for the player's level, sends consumed and resets the input. |

</details>
