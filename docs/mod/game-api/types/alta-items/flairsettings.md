---
title: "FlairSettings"
description: "How a book's cover is decorated: flair meshes for the spine, spine face and edge face, materials, and one face mark (a glyph, an emblem or a letter)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlairSettings

A **class** in `Root.Township`, `Alta.Pages`.

How a book's cover is decorated: flair meshes for the spine, spine face and edge face, materials, and one face mark (a glyph, an emblem or a letter).

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested types** [`FrameMaterialMode`](/mod/game-api/types/alta-items/flairsettings-framematerialmode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlairSettings()"}</code> | <span className="api-desc">Creates a `FlairSettings` with default values.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseedgeface" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/flairset">{"FlairSet"}</Link>{" baseEdgeFace"}</code> | <span className="api-desc">Flair set whose edge face flairs are used when no override is set.</span> |
| <Link id="m-basespine" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/flairset">{"FlairSet"}</Link>{" baseSpine"}</code> | <span className="api-desc">Flair set whose spine flairs are used when no override is set.</span> |
| <Link id="m-basespineface" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/flairset">{"FlairSet"}</Link>{" baseSpineFace"}</code> | <span className="api-desc">Flair set whose spine face flairs are used when no override is set.</span> |
| <Link id="m-bookmaterial" /><code>{"private Material bookMaterial"}</code> | <span className="api-desc">Material for the book body.</span> |
| <Link id="m-emblem" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/faceemblem">{"FaceEmblem"}</Link>{" emblem"}</code> | <span className="api-desc">Cover emblem, used when there is no glyph.</span> |
| <Link id="m-emblemframe" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/faceemblemframe">{"FaceEmblemFrame"}</Link>{" emblemFrame"}</code> | <span className="api-desc">Frame shown around the cover emblem, glyph or letter.</span> |
| <Link id="m-flairmaterial" /><code>{"private Material flairMaterial"}</code> | <span className="api-desc">Material for the flairs.</span> |
| <Link id="m-framematerialmode" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/flairsettings-framematerialmode">{"FlairSettings.FrameMaterialMode"}</Link>{" frameMaterialMode"}</code> | <span className="api-desc">Which material the emblem frame gets: its own, the book's or the flair one.</span> |
| <Link id="m-glyph" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" glyph"}</code> | <span className="api-desc">Cover glyph sprite. Takes priority over the emblem and letter.</span> |
| <Link id="m-letter" /><code>{"private char letter"}</code> | <span className="api-desc">Letter shown on the cover when there is no glyph or emblem.</span> |
| <Link id="m-overrideedgeface" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/edgefaceflairs">{"EdgeFaceFlairs"}</Link>{" overrideEdgeFace"}</code> | <span className="api-desc">Edge face flairs that replace the base set's, slot by slot.</span> |
| <Link id="m-overridespine" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/spineflairs">{"SpineFlairs"}</Link>{" overrideSpine"}</code> | <span className="api-desc">Spine flairs that replace the base set's, slot by slot.</span> |
| <Link id="m-overridespineface" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/spinefaceflairs">{"SpineFaceFlairs"}</Link>{" overrideSpineFace"}</code> | <span className="api-desc">Spine face flairs that replace the base set's, slot by slot.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baseedgeface-2" /><code><Link to="/mod/game-api/types/alta-items/edgefaceflairs">{"EdgeFaceFlairs"}</Link>{" BaseEdgeFace { get; }"}</code> | <span className="api-desc">Edge face flairs from the base flair set, or null if none is set.</span> |
| <Link id="m-basespine-2" /><code><Link to="/mod/game-api/types/alta-items/spineflairs">{"SpineFlairs"}</Link>{" BaseSpine { get; }"}</code> | <span className="api-desc">Spine flairs from the base flair set, or null if none is set.</span> |
| <Link id="m-basespineface-2" /><code><Link to="/mod/game-api/types/alta-items/spinefaceflairs">{"SpineFaceFlairs"}</Link>{" BaseSpineFace { get; }"}</code> | <span className="api-desc">Spine face flairs from the base flair set, or null if none is set.</span> |
| <Link id="m-bookmaterial-2" /><code>{"Material BookMaterial { get; }"}</code> | <span className="api-desc">Material for the book itself.</span> |
| <Link id="m-emblem-2" /><code><Link to="/mod/game-api/types/alta-items/faceemblem">{"FaceEmblem"}</Link>{" Emblem { get; }"}</code> | <span className="api-desc">Face emblem to show. Use a glyph, an emblem or a letter, not several.</span> |
| <Link id="m-emblemframe-2" /><code><Link to="/mod/game-api/types/alta-items/faceemblemframe">{"FaceEmblemFrame"}</Link>{" EmblemFrame { get; }"}</code> | <span className="api-desc">Frame around the face emblem.</span> |
| <Link id="m-flairmaterial-2" /><code>{"Material FlairMaterial { get; }"}</code> | <span className="api-desc">Material for the flair pieces.</span> |
| <Link id="m-framematerial" /><code><Link to="/mod/game-api/types/alta-items/flairsettings-framematerialmode">{"FlairSettings.FrameMaterialMode"}</Link>{" FrameMaterial { get; }"}</code> | <span className="api-desc">Where the frame's material comes from: unchanged, the book or the flair.</span> |
| <Link id="m-glyph-2" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" { get; }"}</code> | <span className="api-desc">Glyph to show on the face.</span> |
| <Link id="m-letter-2" /><code>{"char Letter { get; }"}</code> | <span className="api-desc">Letter to show on the face.</span> |
| <Link id="m-overrideedgeface-2" /><code><Link to="/mod/game-api/types/alta-items/edgefaceflairs">{"EdgeFaceFlairs"}</Link>{" OverrideEdgeFace { get; }"}</code> | <span className="api-desc">Edge face flairs that replace the base ones.</span> |
| <Link id="m-overridespine-2" /><code><Link to="/mod/game-api/types/alta-items/spineflairs">{"SpineFlairs"}</Link>{" OverrideSpine { get; }"}</code> | <span className="api-desc">Spine flairs that replace the base ones.</span> |
| <Link id="m-overridespineface-2" /><code><Link to="/mod/game-api/types/alta-items/spinefaceflairs">{"SpineFaceFlairs"}</Link>{" OverrideSpineFace { get; }"}</code> | <span className="api-desc">Spine face flairs that replace the base ones.</span> |

## Used in

Members of other types that take, return or hold a `FlairSettings`:

<div className="api-used-in">

[`PageCollection.flairs`](/mod/game-api/types/alta-items/pagecollection#m-flairs), [`PageCollection.Flairs`](/mod/game-api/types/alta-items/pagecollection#m-flairs-2).

</div>
