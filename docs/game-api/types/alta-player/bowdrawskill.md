---
title: "BowDrawSkill"
description: "class BowDrawSkill in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BowDrawSkill

A **class** in `Root.Township`, `Alta.Progression.Skills`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`SpecificPickupBasedSkill`](/game-api/types/alta-player/specificpickupbasedskill)
- **Derived types** [`BowQuickdraw`](/game-api/types/alta-player/bowquickdraw), [`BowSlowdraw`](/game-api/types/alta-player/bowslowdraw), [`LightBeamSkill`](/game-api/types/alta-player/lightbeamskill)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BowDrawSkill()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bowstrings" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{", "}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{"> bowStrings"}</code> |  |
| <Link id="m-damagemultiplierperlevel" /><code>{"protected "}<Link to="/game-api/types/alta-player/floatvaluesperlevel">{"FloatValuesPerLevel"}</Link>{" damageMultiplierPerLevel"}</code> |  |
| <Link id="m-inputs" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{", "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> inputs"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"override void Deregister("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-inputchangedstate" /><code>{"override void InputChangedState(bool isEnabled, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-register" /><code>{"override void Register("}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |
| <Link id="m-getdamagemultiplier" /><code>{"protected float GetDamageMultiplier("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-gettransformtocallat" /><code>{"protected override Transform GetTransformToCallAt("}<Link to="/game-api/types/global-t-x/toolbasedskillstatus">{"ToolBasedSkillStatus"}</Link>{" status, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-handleinputchanged" /><code>{"protected virtual void HandleInputChanged(bool isEnabled, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input, "}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString)"}</code> |  |
| <Link id="m-onarrowshot" /><code>{"private void OnArrowShot("}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" shotEntity, Vector3 shotVelocity)"}</code> |  |
