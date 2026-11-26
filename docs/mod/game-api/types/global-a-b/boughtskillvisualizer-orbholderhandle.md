---
title: "BoughtSkillVisualizer.OrbHolderHandle"
description: "One skill orb holder on the skill display, with the bought-skill orb placed in it (if any)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoughtSkillVisualizer.OrbHolderHandle

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One skill orb holder on the skill display, with the bought-skill orb placed in it (if any).

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Nested in** [`BoughtSkillVisualizer`](/mod/game-api/types/global-a-b/boughtskillvisualizer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OrbHolderHandle("}<Link to="/mod/game-api/types/global-s/skillorbholder">{"SkillOrbHolder"}</Link>{" holder, Vector3 orbOffset)"}</code> | <span className="api-desc">Creates a `BoughtSkillVisualizer.OrbHolderHandle` from `holder` and `orbOffset`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-holder" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillorbholder">{"SkillOrbHolder"}</Link>{" holder"}</code> | <span className="api-desc">The `SkillOrbHolder` this handle drives.</span> |
| <Link id="m-orboffset" /><code>{"private Vector3 orbOffset"}</code> | <span className="api-desc">Local position of the orb inside the holder.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-orb" /><code><Link to="/mod/game-api/types/global-a-b/boughtskillorbreplacer">{"BoughtSkillOrbReplacer"}</Link>{" Orb { get; private set; }"}</code> | <span className="api-desc">The orb in this holder, or null.</span> |
| <Link id="m-slothash" /><code>{"uint SlotHash { get; private set; }"}</code> | <span className="api-desc">Hash of the orb's skill slot, or 0 when empty.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assignorb" /><code>{"void AssignOrb("}<Link to="/mod/game-api/types/global-a-b/boughtskillorbreplacer">{"BoughtSkillOrbReplacer"}</Link>{" orb)"}</code> | <span className="api-desc">Parents the orb to the holder at `orbOffset` and opens the holder, or closes it if the orb is locked by dependencies.</span> |
| <Link id="m-clearorb" /><code>{"void ClearOrb(bool isOpen, bool isInstant = false)"}</code> | <span className="api-desc">Opens or closes the holder, then removes the orb. The server destroys the orb entity.</span> |
| <Link id="m-destroyholder" /><code>{"void DestroyHolder()"}</code> | <span className="api-desc">Destroys the holder's game object.</span> |
| <Link id="m-updatelocked" /><code>{"void UpdateLocked(bool isOpen)"}</code> | <span className="api-desc">Closes the holder if its orb is locked by dependencies, otherwise opens or closes it as asked.</span> |

## Used in

Members of other types that take, return or hold a `OrbHolderHandle`:

<div className="api-used-in">

[`BoughtSkillVisualizer.placedHolders`](/mod/game-api/types/global-a-b/boughtskillvisualizer#m-placedholders).

</div>
