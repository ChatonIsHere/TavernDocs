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
| <Link id="m-ctor" /><code>{"CustomControllerOffset()"}</code> | <span className="api-desc">Creates a `CustomControllerOffset` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-left" /><code>{"private SerializableTransform left"}</code> | <span className="api-desc">Backing field for `Left`.</span> |
| <Link id="m-right" /><code>{"private SerializableTransform right"}</code> | <span className="api-desc">Backing field for `Right`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-default" /><code>{"static "}<Link to="/mod/game-api/types/alta-player/customcontrolleroffset">{"CustomControllerOffset"}</Link>{" Default { get; }"}</code> | <span className="api-desc">New offsets with empty transforms for both hands, written as the default file.</span> |
| <Link id="m-left-2" /><code>{"SerializableTransform Left { get; }"}</code> | <span className="api-desc">Offset for the left controller.</span> |
| <Link id="m-right-2" /><code>{"SerializableTransform Right { get; }"}</code> | <span className="api-desc">Offset for the right controller.</span> |

## Used in

Members of other types that take, return or hold a `CustomControllerOffset`:

<div className="api-used-in">

[`CustomControllerOffsetReader.settings`](/mod/game-api/types/alta-player/customcontrolleroffsetreader#m-settings).

</div>
