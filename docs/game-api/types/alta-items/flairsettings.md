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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested types** [`FrameMaterialMode`](/game-api/types/alta-items/flairsettings-framematerialmode)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FlairSettings()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-baseedgeface" /><code>{"private "}<Link to="/game-api/types/alta-items/flairset">{"FlairSet"}</Link>{" baseEdgeFace"}</code> |
| <Link id="m-basespine" /><code>{"private "}<Link to="/game-api/types/alta-items/flairset">{"FlairSet"}</Link>{" baseSpine"}</code> |
| <Link id="m-basespineface" /><code>{"private "}<Link to="/game-api/types/alta-items/flairset">{"FlairSet"}</Link>{" baseSpineFace"}</code> |
| <Link id="m-bookmaterial" /><code>{"private Material bookMaterial"}</code> |
| <Link id="m-emblem" /><code>{"private "}<Link to="/game-api/types/alta-items/faceemblem">{"FaceEmblem"}</Link>{" emblem"}</code> |
| <Link id="m-emblemframe" /><code>{"private "}<Link to="/game-api/types/alta-items/faceemblemframe">{"FaceEmblemFrame"}</Link>{" emblemFrame"}</code> |
| <Link id="m-flairmaterial" /><code>{"private Material flairMaterial"}</code> |
| <Link id="m-framematerialmode" /><code>{"private "}<Link to="/game-api/types/alta-items/flairsettings-framematerialmode">{"FlairSettings.FrameMaterialMode"}</Link>{" frameMaterialMode"}</code> |
| <Link id="m-glyph" /><code>{"private "}<Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" glyph"}</code> |
| <Link id="m-letter" /><code>{"private char letter"}</code> |
| <Link id="m-overrideedgeface" /><code>{"private "}<Link to="/game-api/types/alta-items/edgefaceflairs">{"EdgeFaceFlairs"}</Link>{" overrideEdgeFace"}</code> |
| <Link id="m-overridespine" /><code>{"private "}<Link to="/game-api/types/alta-items/spineflairs">{"SpineFlairs"}</Link>{" overrideSpine"}</code> |
| <Link id="m-overridespineface" /><code>{"private "}<Link to="/game-api/types/alta-items/spinefaceflairs">{"SpineFaceFlairs"}</Link>{" overrideSpineFace"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baseedgeface-2" /><code><Link to="/game-api/types/alta-items/edgefaceflairs">{"EdgeFaceFlairs"}</Link>{" BaseEdgeFace { get; }"}</code> | Edge face flairs from the base flair set, or null if none is set. |
| <Link id="m-basespine-2" /><code><Link to="/game-api/types/alta-items/spineflairs">{"SpineFlairs"}</Link>{" BaseSpine { get; }"}</code> | Spine flairs from the base flair set, or null if none is set. |
| <Link id="m-basespineface-2" /><code><Link to="/game-api/types/alta-items/spinefaceflairs">{"SpineFaceFlairs"}</Link>{" BaseSpineFace { get; }"}</code> | Spine face flairs from the base flair set, or null if none is set. |
| <Link id="m-bookmaterial-2" /><code>{"Material BookMaterial { get; }"}</code> | Material for the book itself. |
| <Link id="m-emblem-2" /><code><Link to="/game-api/types/alta-items/faceemblem">{"FaceEmblem"}</Link>{" Emblem { get; }"}</code> | Face emblem to show. Use a glyph, an emblem or a letter, not several. |
| <Link id="m-emblemframe-2" /><code><Link to="/game-api/types/alta-items/faceemblemframe">{"FaceEmblemFrame"}</Link>{" EmblemFrame { get; }"}</code> | Frame around the face emblem. |
| <Link id="m-flairmaterial-2" /><code>{"Material FlairMaterial { get; }"}</code> | Material for the flair pieces. |
| <Link id="m-framematerial" /><code><Link to="/game-api/types/alta-items/flairsettings-framematerialmode">{"FlairSettings.FrameMaterialMode"}</Link>{" FrameMaterial { get; }"}</code> | Where the frame's material comes from: unchanged, the book or the flair. |
| <Link id="m-glyph-2" /><code><Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" "}<Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" { get; }"}</code> | Glyph to show on the face. |
| <Link id="m-letter-2" /><code>{"char Letter { get; }"}</code> | Letter to show on the face. |
| <Link id="m-overrideedgeface-2" /><code><Link to="/game-api/types/alta-items/edgefaceflairs">{"EdgeFaceFlairs"}</Link>{" OverrideEdgeFace { get; }"}</code> | Edge face flairs that replace the base ones. |
| <Link id="m-overridespine-2" /><code><Link to="/game-api/types/alta-items/spineflairs">{"SpineFlairs"}</Link>{" OverrideSpine { get; }"}</code> | Spine flairs that replace the base ones. |
| <Link id="m-overridespineface-2" /><code><Link to="/game-api/types/alta-items/spinefaceflairs">{"SpineFaceFlairs"}</Link>{" OverrideSpineFace { get; }"}</code> | Spine face flairs that replace the base ones. |

## Used in

Members of other types that take, return or hold a `FlairSettings`:

[`PageCollection.flairs`](/game-api/types/alta-items/pagecollection#m-flairs), [`PageCollection.Flairs`](/game-api/types/alta-items/pagecollection#m-flairs-2).
