---
title: "PlayerEventStep"
description: "A micro tutorial step completed by player events, with a setting for how far back to look for events that already happened."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEventStep

A **class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

A micro tutorial step completed by player events, with a setting for how far back to look for events that already happened.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`MicroTutorialStep`](/mod/game-api/types/game-other-namespaces/microtutorialstep)
- **Derived types** [`ItemCraftedStep`](/mod/game-api/types/game-other-namespaces/itemcraftedstep), [`ItemForgedStep`](/mod/game-api/types/game-other-namespaces/itemforgedstep), [`PlayerGrabbedPrefab`](/mod/game-api/types/game-other-namespaces/playergrabbedprefab), [`PlayerInPositionStep`](/mod/game-api/types/game-other-namespaces/playerinpositionstep), [`PrefabInPositionStep`](/mod/game-api/types/game-other-namespaces/prefabinpositionstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEventStep()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playereventsearchdepth" /><code>{"private int playerEventSearchDepth"}</code> | How many earlier steps' events can complete this step; -1 searches all. Defaults to 1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-playereventsearchdepth-2" /><code>{"override int PlayerEventSearchDepth { get; }"}</code> | How many earlier steps' player events can complete this step. 1 by default; -1 searches all earlier steps. |
