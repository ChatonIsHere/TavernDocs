---
title: "AvailablePointVisualizerManager"
description: "Base for a component that shows how many skill points are free and which slots are open, including a temporary preview."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AvailablePointVisualizerManager

An **abstract class** in `Root.Township`, the global namespace.

Base for a component that shows how many skill points are free and which slots are open, including a temporary preview.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CrystalsAvailablePointManager`](/mod/game-api/types/global-c-d/crystalsavailablepointmanager), [`PipAvailablePointManager`](/mod/game-api/types/global-p/pipavailablepointmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AvailablePointVisualizerManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleantemporary" /><code>{"abstract void CleanTemporary()"}</code> | <span className="api-desc">Clears any temporary opening shown by `OpenTemporary`.</span> |
| <Link id="m-opentemporary" /><code>{"abstract void OpenTemporary(int index)"}</code> | <span className="api-desc">Shows the slot at the given index as a temporary, unconfirmed opening.</span> |
| <Link id="m-openvisual" /><code>{"abstract void OpenVisual(int index)"}</code> | <span className="api-desc">Shows the slot at the given index as opened.</span> |
| <Link id="m-updateavailablepointsvisual" /><code>{"abstract void UpdateAvailablePointsVisual(int freePoints)"}</code> | <span className="api-desc">Updates the display for the given number of free points.</span> |

## Used in

Members of other types that take, return or hold a `AvailablePointVisualizerManager`:

<div className="api-used-in">

[`ExperienceFillVisualizer.availablePointVisualizer`](/mod/game-api/types/global-e-h/experiencefillvisualizer#m-availablepointvisualizer).

</div>
