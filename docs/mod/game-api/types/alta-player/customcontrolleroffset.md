---
title: "CustomControllerOffset"
description: "Per-hand controller offsets loaded from custom_controller_offsets.json next to the game's data folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomControllerOffset

A **class** in `Root.Township`, `Alta.Character`.

Per-hand controller offsets loaded from `custom_controller_offsets.json` next to the game's data folder. `CustomControllerOffsetReader` writes a default file and reloads it when it changes.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomControllerOffset()"}</code> | Creates a `CustomControllerOffset` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-left" /><code>{"private SerializableTransform left"}</code> | Backing field for `Left`. |
| <Link id="m-right" /><code>{"private SerializableTransform right"}</code> | Backing field for `Right`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-default" /><code>{"static "}<Link to="/mod/game-api/types/alta-player/customcontrolleroffset">{"CustomControllerOffset"}</Link>{" Default { get; }"}</code> | New offsets with empty transforms for both hands, written as the default file. |
| <Link id="m-left-2" /><code>{"SerializableTransform Left { get; }"}</code> | Offset for the left controller. |
| <Link id="m-right-2" /><code>{"SerializableTransform Right { get; }"}</code> | Offset for the right controller. |

## Used in

Members of other types that take, return or hold a `CustomControllerOffset`:

[`CustomControllerOffsetReader.settings`](/mod/game-api/types/alta-player/customcontrolleroffsetreader#m-settings).
