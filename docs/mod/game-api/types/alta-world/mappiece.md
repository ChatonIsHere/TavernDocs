---
title: "MapPiece"
description: "One piece of a map that players discover: a sprite and where it sits on the map."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapPiece

A **class** in `Root.Township`, `Alta.Map`.

One piece of a map that players discover: a sprite and where it sits on the map.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`HashedGeneralValue<MapPiece>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`MapPiece`](/mod/game-api/types/alta-world/mappiece)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Map and landmarks](/mod/game-api/world/map-and-landmarks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapPiece()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-offset" /><code>{"private Vector2 offset"}</code> | <span className="api-desc">Backing field for `Offset`.</span> |
| <Link id="m-sprite" /><code>{"private Sprite sprite"}</code> | <span className="api-desc">Backing field for `Sprite`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-offset-2" /><code>{"Vector2 Offset { get; set; }"}</code> | <span className="api-desc">Where the piece sits on the map.</span> |
| <Link id="m-sprite-2" /><code>{"Sprite Sprite { get; }"}</code> | <span className="api-desc">The piece's image.</span> |

## Used in

Members of other types that take, return or hold a `MapPiece`:

<div className="api-used-in">

[`Map.globalMapPieces`](/mod/game-api/types/alta-world/map#m-globalmappieces), [`Map.GlobalMapPieces`](/mod/game-api/types/alta-world/map#m-globalmappieces-2), [`Map.PieceDiscovered`](/mod/game-api/types/alta-world/map#m-piecediscovered), [`Map.pieces`](/mod/game-api/types/alta-world/map#m-pieces), [`Map.Pieces`](/mod/game-api/types/alta-world/map#m-pieces-2), [`MapBoard.activeMapPieces`](/mod/game-api/types/alta-world/mapboard#m-activemappieces), [`MapBoard.ActiveMapPieces`](/mod/game-api/types/alta-world/mapboard#m-activemappieces-2), [`MapBoard.DiscoverMapPiece`](/mod/game-api/types/alta-world/mapboard#m-discovermappiece), [`MapBoard.SetupMapPiece`](/mod/game-api/types/alta-world/mapboard#m-setupmappiece), [`MapBoardDirectRenderer.CheckRenderDiscover`](/mod/game-api/types/alta-world/mapboarddirectrenderer#m-checkrenderdiscover), [`MapMaskPiece.Setup`](/mod/game-api/types/global-m-o/mapmaskpiece#m-setup).

</div>
