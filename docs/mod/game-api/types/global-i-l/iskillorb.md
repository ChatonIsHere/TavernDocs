---
title: "ISkillOrb"
description: "A skill orb as seen by orb effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISkillOrb

An **interface** in `Root.Township`, the global namespace.

A skill orb as seen by orb effects. `ProgressionSlotContainer` implements it.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`ProgressionSlotContainer`](/mod/game-api/types/global-p/progressionslotcontainer), [`SkillOrb`](/mod/game-api/types/global-s/skillorb)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-internalmodeltransform" /><code>{"Transform InternalModelTransform { get; }"}</code> | Transform of the model inside the orb shell. |
| <Link id="m-shellmaterial" /><code>{"Material ShellMaterial { get; }"}</code> | Material of the orb's outer shell. |
| <Link id="m-slot" /><code><Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" Slot { get; }"}</code> | The progression slot the orb holds. |

## Used in

Members of other types that take, return or hold a `ISkillOrb`:

[`ProgressionSettings.OrbDestroyEffect`](/mod/game-api/types/global-p/progressionsettings#m-orbdestroyeffect), [`SkillOrbEffect.SetOriginalOrb`](/mod/game-api/types/global-s/skillorbeffect#m-setoriginalorb).
