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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Nested in** [`ClimbingTowerProgressionVisualizer`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gaugeheight" /><code>{"float GaugeHeight"}</code> | Gauge height (clamped 0 to 3) shown when this is the highest rune the local player has unlocked. |
| <Link id="m-orbindextounlockrune" /><code>{"uint OrbIndexToUnlockRune"}</code> | The orb the local player must have in `UnlockManager.Orbs` for this rune to light up. |
| <Link id="m-runeparticles" /><code>{"GameObject RuneParticles"}</code> | Particle object turned on while the rune is active. Not synced; clients keep the prefab's reference. |

## Used in

Members of other types that take, return or hold a `RuneActivationElement`:

[`ClimbingTowerProgressionVisualizer.runeActivationElements`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-runeactivationelements), [`ClimbingTowerProgressionVisualizer.SetTeleporterRuneAsActive`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-setteleporterruneasactive), [`ClimbingTowerProgressionVisualizer.SetTeleporterRuneAsInactive`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-setteleporterruneasinactive), [`ClimbingTowerProgressionVisualizer.syncRuneActivationElements`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-syncruneactivationelements), [`ClimbingTowerProgressionVisualizer.SyncRuneActivationElements`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-syncruneactivationelements-2).
