---
title: "ClimbingTowerProgressionVisualizer.RuneActivationElement"
description: "One rune on the climbing tower teleporter gauge: its particles, the orb that lights it and the gauge height it sets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingTowerProgressionVisualizer.RuneActivationElement

A **private struct** in `Root.Township`, `Features.Gameplay.ClimbingTower`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One rune on the climbing tower teleporter gauge: its particles, the orb that lights it and the gauge height it sets. Private to `ClimbingTowerProgressionVisualizer`, which syncs and saves the list.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Nested in** [`ClimbingTowerProgressionVisualizer`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gaugeheight" /><code>{"float GaugeHeight"}</code> | <span className="api-desc">Gauge height (clamped 0 to 3) shown when this is the highest rune the local player has unlocked.</span> |
| <Link id="m-orbindextounlockrune" /><code>{"uint OrbIndexToUnlockRune"}</code> | <span className="api-desc">The orb the local player must have in `UnlockManager.Orbs` for this rune to light up.</span> |
| <Link id="m-runeparticles" /><code>{"GameObject RuneParticles"}</code> | <span className="api-desc">Particle object turned on while the rune is active. Not synced; clients keep the prefab's reference.</span> |

## Used in

Members of other types that take, return or hold a `RuneActivationElement`:

<div className="api-used-in">

[`ClimbingTowerProgressionVisualizer.runeActivationElements`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-runeactivationelements), [`ClimbingTowerProgressionVisualizer.SetTeleporterRuneAsActive`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-setteleporterruneasactive), [`ClimbingTowerProgressionVisualizer.SetTeleporterRuneAsInactive`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-setteleporterruneasinactive), [`ClimbingTowerProgressionVisualizer.syncRuneActivationElements`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-syncruneactivationelements), [`ClimbingTowerProgressionVisualizer.SyncRuneActivationElements`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-syncruneactivationelements-2).

</div>
