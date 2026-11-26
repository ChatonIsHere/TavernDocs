---
title: "ActionGlyphsPlacer"
description: "Shows a profession skill's practice glyphs as a vertical stack of pooled ActionGlyphAnimator objects inside a set area."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionGlyphsPlacer

A **class** in `Root.Township`, the global namespace.

Shows a profession skill's practice glyphs as a vertical stack of pooled `ActionGlyphAnimator` objects inside a set area. Used by `SkillShrineTestingArea`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionGlyphsPlacer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionglyphpool" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" actionGlyphPool"}</code> | Pool the glyph objects come from. |
| <Link id="m-activeactionglyphs" /><code>{"private List<"}<Link to="/mod/game-api/types/global-a-b/actionglyphanimator">{"ActionGlyphAnimator"}</Link>{"> activeActionGlyphs"}</code> | The glyphs shown now. |
| <Link id="m-debugcount" /><code>{"private int debugCount"}</code> | Number of sample positions drawn in the editor gizmo. |
| <Link id="m-maxsize" /><code>{"private Vector2 maxSize"}</code> | Size of the area the glyphs are stacked in. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activeskill" /><code>{"void ActiveSkill("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Shows the skill's practice glyphs, reusing existing glyphs where possible and releasing extras. |
| <Link id="m-close" /><code>{"void Close()"}</code> | Releases every shown glyph. |
| <Link id="m-reposition" /><code>{"void Reposition()"}</code> | Spaces the glyphs evenly from top to bottom of `maxSize` and scales them by one over the count. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the area and `debugCount` sample glyph positions. |

</details>

## Used in

Members of other types that take, return or hold a `ActionGlyphsPlacer`:

[`SkillShrineTestingArea.actionGlyphPlacer`](/mod/game-api/types/global-s/skillshrinetestingarea#m-actionglyphplacer).
