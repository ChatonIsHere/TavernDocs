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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`RoomFixes`](/game-api/types/alta-world-generation/roomfixes)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Room(int startX, int startY, int totalX, int totalY, int count, int group)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-average" /><code>{"Vector2 average"}</code> | Average cell position of the room (its centre). |
| <Link id="m-count" /><code>{"int count"}</code> | Number of cells in the room. |
| <Link id="m-group" /><code>{"int group"}</code> | Connection group; rooms joined by a corridor share a group. |
| <Link id="m-startx" /><code>{"int startX"}</code> | X of the cell the flood fill started from. |
| <Link id="m-starty" /><code>{"int startY"}</code> | Z of the cell the flood fill started from. |
