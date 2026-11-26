---
title: "RoomFixes.Room"
description: "One open area found by the room fix flood fill."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RoomFixes.Room

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

One open area found by the room fix flood fill.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`RoomFixes`](/mod/game-api/types/alta-world-generation/roomfixes)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Room(int startX, int startY, int totalX, int totalY, int count, int group)"}</code> | <span className="api-desc">Creates a `RoomFixes.Room` from `startX`, `startY`, `totalX`, `totalY`, `count` and `group`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-average" /><code>{"Vector2 average"}</code> | <span className="api-desc">Average cell position of the room (its centre).</span> |
| <Link id="m-count" /><code>{"int count"}</code> | <span className="api-desc">Number of cells in the room.</span> |
| <Link id="m-group" /><code>{"int group"}</code> | <span className="api-desc">Connection group; rooms joined by a corridor share a group.</span> |
| <Link id="m-startx" /><code>{"int startX"}</code> | <span className="api-desc">X of the cell the flood fill started from.</span> |
| <Link id="m-starty" /><code>{"int startY"}</code> | <span className="api-desc">Z of the cell the flood fill started from.</span> |
