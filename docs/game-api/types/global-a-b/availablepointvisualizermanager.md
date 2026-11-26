---
title: "AvailablePointVisualizerManager"
description: "Base for a component that shows how many skill points are free and which slots are open, including a temporary preview."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AvailablePointVisualizerManager

An **abstract class** in `Root.Township`, no namespace.

Base for a component that shows how many skill points are free and which slots are open, including a temporary preview.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CrystalsAvailablePointManager`](/game-api/types/global-c-d/crystalsavailablepointmanager), [`PipAvailablePointManager`](/game-api/types/global-p/pipavailablepointmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AvailablePointVisualizerManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleantemporary" /><code>{"abstract void CleanTemporary()"}</code> | Clears any temporary opening shown by `OpenTemporary`. |
| <Link id="m-opentemporary" /><code>{"abstract void OpenTemporary(int index)"}</code> | Shows the slot at the given index as a temporary, unconfirmed opening. |
| <Link id="m-openvisual" /><code>{"abstract void OpenVisual(int index)"}</code> | Shows the slot at the given index as opened. |
| <Link id="m-updateavailablepointsvisual" /><code>{"abstract void UpdateAvailablePointsVisual(int freePoints)"}</code> | Updates the display for the given number of free points. |

## Used in

Members of other types that take, return or hold a `AvailablePointVisualizerManager`:

[`ExperienceFillVisualizer.availablePointVisualizer`](/game-api/types/global-e-h/experiencefillvisualizer#m-availablepointvisualizer).
