---
title: "BoughtSkillVisualizer.OrbHolderHandle"
description: "One skill orb holder on the skill display, with the bought-skill orb placed in it (if any)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoughtSkillVisualizer.OrbHolderHandle

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One skill orb holder on the skill display, with the bought-skill orb placed in it (if any).

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Nested in** [`BoughtSkillVisualizer`](/game-api/types/global-a-b/boughtskillvisualizer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OrbHolderHandle("}<Link to="/game-api/types/global-s/skillorbholder">{"SkillOrbHolder"}</Link>{" holder, Vector3 orbOffset)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-holder" /><code>{"private "}<Link to="/game-api/types/global-s/skillorbholder">{"SkillOrbHolder"}</Link>{" holder"}</code> | The `SkillOrbHolder` this handle drives. |
| <Link id="m-orboffset" /><code>{"private Vector3 orbOffset"}</code> | Local position of the orb inside the holder. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-orb" /><code><Link to="/game-api/types/global-a-b/boughtskillorbreplacer">{"BoughtSkillOrbReplacer"}</Link>{" Orb { get; private set; }"}</code> | The orb in this holder, or null. |
| <Link id="m-slothash" /><code>{"uint SlotHash { get; private set; }"}</code> | Hash of the orb's skill slot, or 0 when empty. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assignorb" /><code>{"void AssignOrb("}<Link to="/game-api/types/global-a-b/boughtskillorbreplacer">{"BoughtSkillOrbReplacer"}</Link>{" orb)"}</code> | Parents the orb to the holder at `orbOffset` and opens the holder, or closes it if the orb is locked by dependencies. |
| <Link id="m-clearorb" /><code>{"void ClearOrb(bool isOpen, bool isInstant = false)"}</code> | Opens or closes the holder, then removes the orb. The server destroys the orb entity. |
| <Link id="m-destroyholder" /><code>{"void DestroyHolder()"}</code> | Destroys the holder's game object. |
| <Link id="m-updatelocked" /><code>{"void UpdateLocked(bool isOpen)"}</code> | Closes the holder if its orb is locked by dependencies, otherwise opens or closes it as asked. |

## Used in

Members of other types that take, return or hold a `OrbHolderHandle`:

[`BoughtSkillVisualizer.placedHolders`](/game-api/types/global-a-b/boughtskillvisualizer#m-placedholders).
