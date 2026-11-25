---
title: "BoughtSkillVisualizer.OrbHolderHandle"
description: "class BoughtSkillVisualizer.OrbHolderHandle in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoughtSkillVisualizer.OrbHolderHandle

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Nested in** [`BoughtSkillVisualizer`](/game-api/types/global-a-b/boughtskillvisualizer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OrbHolderHandle("}<Link to="/game-api/types/global-s/skillorbholder">{"SkillOrbHolder"}</Link>{" holder, Vector3 orbOffset)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-holder" /><code>{"private "}<Link to="/game-api/types/global-s/skillorbholder">{"SkillOrbHolder"}</Link>{" holder"}</code> |  |
| <Link id="m-orboffset" /><code>{"private Vector3 orbOffset"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-orb" /><code><Link to="/game-api/types/global-a-b/boughtskillorbreplacer">{"BoughtSkillOrbReplacer"}</Link>{" Orb { get; private set; }"}</code> |  |
| <Link id="m-slothash" /><code>{"uint SlotHash { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assignorb" /><code>{"void AssignOrb("}<Link to="/game-api/types/global-a-b/boughtskillorbreplacer">{"BoughtSkillOrbReplacer"}</Link>{" orb)"}</code> |  |
| <Link id="m-clearorb" /><code>{"void ClearOrb(bool isOpen, bool isInstant = false)"}</code> |  |
| <Link id="m-destroyholder" /><code>{"void DestroyHolder()"}</code> |  |
| <Link id="m-updatelocked" /><code>{"void UpdateLocked(bool isOpen)"}</code> |  |

## Used in

Members of other types that take, return or hold a `OrbHolderHandle`:

[`BoughtSkillVisualizer.placedHolders`](/game-api/types/global-a-b/boughtskillvisualizer#m-placedholders).
