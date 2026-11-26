---
title: "TouchScreenKeyboard.KeyBoardEdgesInfo"
description: "Layout data for the current virtual keyboard, used when adding extra keys to the ends of rows."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenKeyboard.KeyBoardEdgesInfo

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Layout data for the current virtual keyboard, used when adding extra keys to the ends of rows.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TouchScreenKeyboard`](/game-api/types/global-t-x/touchscreenkeyboard)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"KeyBoardEdgesInfo(Vector2Int[] edgeIndexPairs, Vector2Int[] rowStackSizes, float standardKeySpacing, "}<Link to="/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{"[] keysInfo, int spaceKeyIndex)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-edgeindexpairs" /><code>{"readonly Vector2Int[] edgeIndexPairs"}</code> | Per row, the key indexes of the leftmost (x) and rightmost (y) key. |
| <Link id="m-keysinfo" /><code>{"readonly "}<Link to="/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{"[] keysInfo"}</code> | Key layout info for the keyboard. |
| <Link id="m-rowstacksizes" /><code>{"readonly Vector2Int[] rowStackSizes"}</code> | Per row, how many extra keys have been added on the left (x) and right (y). |
| <Link id="m-spacekeyindex" /><code>{"readonly int spaceKeyIndex"}</code> | Index of the space key, or -1. Its wider size is allowed for when placing extra keys next to it. |
| <Link id="m-standardkeyspacing" /><code>{"readonly float standardKeySpacing"}</code> | Horizontal distance between the first two keys, used to space extra keys. |

## Used in

Members of other types that take, return or hold a `KeyBoardEdgesInfo`:

[`TouchScreenKeyboard.keyboardEdgesInfo`](/game-api/types/global-t-x/touchscreenkeyboard#m-keyboardedgesinfo).
