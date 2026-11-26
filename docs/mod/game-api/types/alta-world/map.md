---
title: "Map"
description: "A hashed map asset: the map pieces players can uncover and the world area it covers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Map

A **class** in `Root.Township`, `Alta.Map`.

A hashed map asset: the map pieces players can uncover and the world area it covers.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`HashedGeneralValue<Map>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`Map`](/mod/game-api/types/alta-world/map)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Map and landmarks](/mod/game-api/world/map-and-landmarks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Map()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-firstnonreservedindex" /><code>{"private uint firstNonReservedIndex"}</code> | <span className="api-desc">Backing field for `FirstNonReservedIndex`. Landmark indexes below it are reserved; new ones start here. 1000 by default.</span> |
| <Link id="m-globalmappieces" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"[] globalMapPieces"}</code> | <span className="api-desc">Backing field for `GlobalMapPieces`.</span> |
| <Link id="m-pieces" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"[] pieces"}</code> | <span className="api-desc">Backing field for `Pieces`, the map pieces players can discover.</span> |
| <Link id="m-worldpositionbottomleft" /><code>{"private Vector2 worldPositionBottomLeft"}</code> | <span className="api-desc">Backing field for `WorldPositionBottomLeft`: the world x/z of the map's bottom-left corner.</span> |
| <Link id="m-worldpositiontopright" /><code>{"private Vector2 worldPositionTopRight"}</code> | <span className="api-desc">Backing field for `WorldPositionTopRight`: the world x/z of the map's top-right corner.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-firstnonreservedindex-2" /><code>{"uint FirstNonReservedIndex { get; }"}</code> | <span className="api-desc">First landmark index not reserved for fixed landmarks (default 1000).</span> |
| <Link id="m-globalmappieces-2" /><code><Link to="/mod/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"[] GlobalMapPieces { get; }"}</code> | <span className="api-desc">Map pieces shown to everyone.</span> |
| <Link id="m-pieces-2" /><code><Link to="/mod/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"[] Pieces { get; }"}</code> | <span className="api-desc">The map pieces that can be uncovered.</span> |
| <Link id="m-worldpositionbottomleft-2" /><code>{"Vector2 WorldPositionBottomLeft { get; }"}</code> | <span className="api-desc">World XZ of the map's bottom-left corner.</span> |
| <Link id="m-worldpositiontopright-2" /><code>{"Vector2 WorldPositionTopRight { get; }"}</code> | <span className="api-desc">World XZ of the map's top-right corner.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-piecediscovered" /><code>{"event Action<int, "}<Link to="/mod/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"> PieceDiscovered"}</code> | <span className="api-desc">Raised with the index and piece when a map piece is uncovered.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onpiecediscovered" /><code>{"void OnPieceDiscovered(int pieceIndex)"}</code> | <span className="api-desc">Raises `PieceDiscovered` for a piece index.</span> |

## Used in

Members of other types that take, return or hold a `Map`:

<div className="api-used-in">

[`ClientLandmarkManager.map`](/mod/game-api/types/alta-world/clientlandmarkmanager#m-map), [`Landmark.map`](/mod/game-api/types/alta-world/landmark#m-map), [`Landmark.Map`](/mod/game-api/types/alta-world/landmark#m-map-2), [`LandmarkManager.map`](/mod/game-api/types/alta-world/landmarkmanager#m-map), [`LandmarkSaveData.Map`](/mod/game-api/types/alta-world/landmarksavedata#m-map), [`MapBoard.map`](/mod/game-api/types/alta-world/mapboard#m-map), [`MapBoard.Map`](/mod/game-api/types/alta-world/mapboard#m-map-2), [`MapBoardSaveData1.map`](/mod/game-api/types/alta-world/mapboardsavedata1#m-map), [`MapManager.DiscoverPiece`](/mod/game-api/types/alta-world/mapmanager#m-discoverpiece), [`MapManager.MapPieceIdentifier.map`](/mod/game-api/types/alta-world/mapmanager-mappieceidentifier#m-map), [`MapManager.MapPieceIdentifier.MapPieceIdentifier`](/mod/game-api/types/alta-world/mapmanager-mappieceidentifier#m-ctor), [`MapSaveFormat.MapPieceStates`](/mod/game-api/types/alta-world/mapsaveformat#m-mappiecestates), [`MarkerInfo.Map`](/mod/game-api/types/alta-world/markerinfo#m-map), [`OldLandmarkSaveData1.Map`](/mod/game-api/types/alta-world/oldlandmarksavedata1#m-map), [`PlayerMapManager.DiscoverPiece`](/mod/game-api/types/alta-world/playermapmanager#m-discoverpiece), [`PlayerMapManager.GetUndiscoveredMapPieces`](/mod/game-api/types/alta-world/playermapmanager#m-getundiscoveredmappieces), [`PlayerMapManager.IsThisMapPieceDiscovered`](/mod/game-api/types/alta-world/playermapmanager#m-isthismappiecediscovered), [`PlayerMapManager.SerializeMap`](/mod/game-api/types/alta-world/playermapmanager#m-serializemap), [`ServerLandmarkManager.ServerLandmarkManager`](/mod/game-api/types/alta-world/serverlandmarkmanager#m-ctor).

</div>
