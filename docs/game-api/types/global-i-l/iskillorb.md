---
title: "ISkillOrb"
description: "A skill orb as seen by orb effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISkillOrb

An **interface** in `Root.Township`, no namespace.

A skill orb as seen by orb effects. `ProgressionSlotContainer` implements it.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`ProgressionSlotContainer`](/game-api/types/global-p/progressionslotcontainer), [`SkillOrb`](/game-api/types/global-s/skillorb)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-internalmodeltransform" /><code>{"Transform InternalModelTransform { get; }"}</code> | Transform of the model inside the orb shell. |
| <Link id="m-shellmaterial" /><code>{"Material ShellMaterial { get; }"}</code> | Material of the orb's outer shell. |
| <Link id="m-slot" /><code><Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" Slot { get; }"}</code> | The progression slot the orb holds. |

## Used in

Members of other types that take, return or hold a `ISkillOrb`:

[`ProgressionSettings.OrbDestroyEffect`](/game-api/types/global-p/progressionsettings#m-orbdestroyeffect), [`SkillOrbEffect.SetOriginalOrb`](/game-api/types/global-s/skillorbeffect#m-setoriginalorb).
