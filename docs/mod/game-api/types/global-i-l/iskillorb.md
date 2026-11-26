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
| <Link id="m-internalmodeltransform" /><code>{"Transform InternalModelTransform { get; }"}</code> | <span className="api-desc">Transform of the model inside the orb shell.</span> |
| <Link id="m-shellmaterial" /><code>{"Material ShellMaterial { get; }"}</code> | <span className="api-desc">Material of the orb's outer shell.</span> |
| <Link id="m-slot" /><code><Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" Slot { get; }"}</code> | <span className="api-desc">The progression slot the orb holds.</span> |

## Used in

Members of other types that take, return or hold a `ISkillOrb`:

<div className="api-used-in">

[`ProgressionSettings.OrbDestroyEffect`](/mod/game-api/types/global-p/progressionsettings#m-orbdestroyeffect), [`SkillOrbEffect.SetOriginalOrb`](/mod/game-api/types/global-s/skillorbeffect#m-setoriginalorb).

</div>
