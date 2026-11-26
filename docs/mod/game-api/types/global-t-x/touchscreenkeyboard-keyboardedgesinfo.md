---
title: "TouchScreenKeyboard.KeyBoardEdgesInfo"
description: "Layout data for the current virtual keyboard, used when adding extra keys to the ends of rows."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenKeyboard.KeyBoardEdgesInfo

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Layout data for the current virtual keyboard, used when adding extra keys to the ends of rows.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TouchScreenKeyboard`](/mod/game-api/types/global-t-x/touchscreenkeyboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KeyBoardEdgesInfo(Vector2Int[] edgeIndexPairs, Vector2Int[] rowStackSizes, float standardKeySpacing, "}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{"[] keysInfo, int spaceKeyIndex)"}</code> | <span className="api-desc">Creates a `TouchScreenKeyboard.KeyBoardEdgesInfo` from `edgeIndexPairs`, `rowStackSizes`, `standardKeySpacing`, `keysInfo` and `spaceKeyIndex`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-edgeindexpairs" /><code>{"readonly Vector2Int[] edgeIndexPairs"}</code> | <span className="api-desc">Per row, the key indexes of the leftmost (x) and rightmost (y) key.</span> |
| <Link id="m-keysinfo" /><code>{"readonly "}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{"[] keysInfo"}</code> | <span className="api-desc">Key layout info for the keyboard.</span> |
| <Link id="m-rowstacksizes" /><code>{"readonly Vector2Int[] rowStackSizes"}</code> | <span className="api-desc">Per row, how many extra keys have been added on the left (x) and right (y).</span> |
| <Link id="m-spacekeyindex" /><code>{"readonly int spaceKeyIndex"}</code> | <span className="api-desc">Index of the space key, or -1. Its wider size is allowed for when placing extra keys next to it.</span> |
| <Link id="m-standardkeyspacing" /><code>{"readonly float standardKeySpacing"}</code> | <span className="api-desc">Horizontal distance between the first two keys, used to space extra keys.</span> |

## Used in

Members of other types that take, return or hold a `KeyBoardEdgesInfo`:

<div className="api-used-in">

[`TouchScreenKeyboard.keyboardEdgesInfo`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-keyboardedgesinfo).

</div>
