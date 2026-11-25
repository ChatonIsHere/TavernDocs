---
title: "BasicObjectDisplay"
description: "abstract class BasicObjectDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicObjectDisplay

An **abstract class** in `Root.Township`, `Alta.Caves.Displays`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/game-api/types/alta-world-generation/mapchunkdisplay)
- **Derived types** [`GameObjectDisplay`](/game-api/types/alta-world-generation/gameobjectdisplay), [`WallAlignedDisplay`](/game-api/types/alta-world-generation/wallaligneddisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BasicObjectDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-displayon" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" displayOn"}</code> |  |
| <Link id="m-prefabs" /><code>{"protected "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs"}</code> |  |
| <Link id="m-staticpieces" /><code>{"private List<"}<Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{"> staticPieces"}</code> |  |
| <Link id="m-unnetworked" /><code>{"private GameObject[] unnetworked"}</code> |  |
| <Link id="m-unnetworkedprefabs" /><code>{"private "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{"[] unnetworkedPrefabs"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-render" /><code>{"override IEnumerator Render()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-process" /><code>{"protected void Process(int prefabIndex, Vector3 position, Quaternion rotation, Vector3 scale, int seed)"}</code> |  |
| <Link id="m-renderinternal" /><code>{"protected abstract IEnumerator RenderInternal()"}</code> |  |
| <Link id="m-spawn" /><code>{"private void Spawn(int x, int z, float value, ref int index)"}</code> |  |
| <Link id="m-spawn-2" /><code>{"protected abstract void Spawn(int seed, int spawnSeed, int prefabIndex, int x, int z, float value, ref int index)"}</code> |  |
| <Link id="m-spawnall" /><code>{"protected IEnumerator SpawnAll() (iterator)"}</code> |  |
