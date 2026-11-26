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
| <Link id="m-ctor" /><code>{"ActionGlyphsPlacer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionglyphpool" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" actionGlyphPool"}</code> | <span className="api-desc">Pool the glyph objects come from.</span> |
| <Link id="m-activeactionglyphs" /><code>{"private List<"}<Link to="/mod/game-api/types/global-a-b/actionglyphanimator">{"ActionGlyphAnimator"}</Link>{"> activeActionGlyphs"}</code> | <span className="api-desc">The glyphs shown now.</span> |
| <Link id="m-debugcount" /><code>{"private int debugCount"}</code> | <span className="api-desc">Number of sample positions drawn in the editor gizmo.</span> |
| <Link id="m-maxsize" /><code>{"private Vector2 maxSize"}</code> | <span className="api-desc">Size of the area the glyphs are stacked in.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activeskill" /><code>{"void ActiveSkill("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Shows the skill's practice glyphs, reusing existing glyphs where possible and releasing extras.</span> |
| <Link id="m-close" /><code>{"void Close()"}</code> | <span className="api-desc">Releases every shown glyph.</span> |
| <Link id="m-reposition" /><code>{"void Reposition()"}</code> | <span className="api-desc">Spaces the glyphs evenly from top to bottom of `maxSize` and scales them by one over the count.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the area and `debugCount` sample glyph positions.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ActionGlyphsPlacer`:

<div className="api-used-in">

[`SkillShrineTestingArea.actionGlyphPlacer`](/mod/game-api/types/global-s/skillshrinetestingarea#m-actionglyphplacer).

</div>
