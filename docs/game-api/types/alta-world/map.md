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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`HashedGeneralValue<Map>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`Map`](/game-api/types/alta-world/map)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Map and landmarks](/game-api/world/map-and-landmarks)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Map()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-firstnonreservedindex" /><code>{"private uint firstNonReservedIndex"}</code> |
| <Link id="m-globalmappieces" /><code>{"private "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"[] globalMapPieces"}</code> |
| <Link id="m-pieces" /><code>{"private "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"[] pieces"}</code> |
| <Link id="m-worldpositionbottomleft" /><code>{"private Vector2 worldPositionBottomLeft"}</code> |
| <Link id="m-worldpositiontopright" /><code>{"private Vector2 worldPositionTopRight"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-firstnonreservedindex-2" /><code>{"uint FirstNonReservedIndex { get; }"}</code> | First landmark index not reserved for fixed landmarks (default 1000). |
| <Link id="m-globalmappieces-2" /><code><Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"[] GlobalMapPieces { get; }"}</code> | Map pieces shown to everyone. |
| <Link id="m-pieces-2" /><code><Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"[] Pieces { get; }"}</code> | The map pieces that can be uncovered. |
| <Link id="m-worldpositionbottomleft-2" /><code>{"Vector2 WorldPositionBottomLeft { get; }"}</code> | World XZ of the map's bottom-left corner. |
| <Link id="m-worldpositiontopright-2" /><code>{"Vector2 WorldPositionTopRight { get; }"}</code> | World XZ of the map's top-right corner. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-piecediscovered" /><code>{"event Action<int, "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"> PieceDiscovered"}</code> | Raised with the index and piece when a map piece is uncovered. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onpiecediscovered" /><code>{"void OnPieceDiscovered(int pieceIndex)"}</code> | Raises `PieceDiscovered` for a piece index. |

## Used in

Members of other types that take, return or hold a `Map`:

[`ClientLandmarkManager.map`](/game-api/types/alta-world/clientlandmarkmanager#m-map), [`Landmark.map`](/game-api/types/alta-world/landmark#m-map), [`Landmark.Map`](/game-api/types/alta-world/landmark#m-map-2), [`LandmarkManager.map`](/game-api/types/alta-world/landmarkmanager#m-map), [`LandmarkSaveData.Map`](/game-api/types/alta-world/landmarksavedata#m-map), [`MapBoard.map`](/game-api/types/alta-world/mapboard#m-map), [`MapBoard.Map`](/game-api/types/alta-world/mapboard#m-map-2), [`MapBoardSaveData1.map`](/game-api/types/alta-world/mapboardsavedata1#m-map), [`MapManager.DiscoverPiece`](/game-api/types/alta-world/mapmanager#m-discoverpiece), [`MapManager.MapPieceIdentifier.map`](/game-api/types/alta-world/mapmanager-mappieceidentifier#m-map), [`MapManager.MapPieceIdentifier.MapPieceIdentifier`](/game-api/types/alta-world/mapmanager-mappieceidentifier#m-ctor), [`MapSaveFormat.MapPieceStates`](/game-api/types/alta-world/mapsaveformat#m-mappiecestates), [`MarkerInfo.Map`](/game-api/types/alta-world/markerinfo#m-map), [`OldLandmarkSaveData1.Map`](/game-api/types/alta-world/oldlandmarksavedata1#m-map), [`PlayerMapManager.DiscoverPiece`](/game-api/types/alta-world/playermapmanager#m-discoverpiece), [`PlayerMapManager.GetUndiscoveredMapPieces`](/game-api/types/alta-world/playermapmanager#m-getundiscoveredmappieces), [`PlayerMapManager.IsThisMapPieceDiscovered`](/game-api/types/alta-world/playermapmanager#m-isthismappiecediscovered), [`PlayerMapManager.SerializeMap`](/game-api/types/alta-world/playermapmanager#m-serializemap), [`ServerLandmarkManager.ServerLandmarkManager`](/game-api/types/alta-world/serverlandmarkmanager#m-ctor).
