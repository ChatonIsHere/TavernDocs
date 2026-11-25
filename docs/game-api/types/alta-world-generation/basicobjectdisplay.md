---
title: "BasicObjectDisplay"
description: "Base for cave chunk displays that place objects at each non-zero cell of a layer, either as network prefabs or as static unnetworked pieces."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicObjectDisplay

An **abstract class** in `Root.Township`, `Alta.Caves.Displays`.

Base for cave chunk displays that place objects at each non-zero cell of a layer, either as network prefabs or as static unnetworked pieces.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/game-api/types/alta-world-generation/mapchunkdisplay)
- **Derived types** [`GameObjectDisplay`](/game-api/types/alta-world-generation/gameobjectdisplay), [`WallAlignedDisplay`](/game-api/types/alta-world-generation/wallaligneddisplay)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected BasicObjectDisplay()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prefabs" /><code>{"protected "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs"}</code> | Network prefabs to place. If empty, the static unnetworked pieces are used instead. |

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-displayon" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" displayOn"}</code> |
| <Link id="m-staticpieces" /><code>{"private List<"}<Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{"> staticPieces"}</code> |
| <Link id="m-unnetworked" /><code>{"private GameObject[] unnetworked"}</code> |
| <Link id="m-unnetworkedprefabs" /><code>{"private "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{"[] unnetworkedPrefabs"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-render" /><code>{"override IEnumerator Render()"}</code> | Returns the render coroutine, or null if this display is not enabled for the current platform. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor: converts the obsolete unnetworked GameObject list into static environment pieces. |
| <Link id="m-process" /><code>{"protected void Process(int prefabIndex, Vector3 position, Quaternion rotation, Vector3 scale, int seed)"}</code> | Places one object: spawns the network prefab (kinematic, parented here) or a static piece run through static generation. |
| <Link id="m-renderinternal" /><code>{"protected abstract IEnumerator RenderInternal()"}</code> | The subclass's render coroutine. |
| <Link id="m-spawn-2" /><code>{"protected abstract void Spawn(int seed, int spawnSeed, int prefabIndex, int x, int z, float value, ref int index)"}</code> | Called per non-zero cell with a seeded prefab index; subclasses work out the placement and call `Process`. |
| <Link id="m-spawnall" /><code>{"protected IEnumerator SpawnAll() (iterator)"}</code> | Coroutine that calls `Spawn` for every non-zero cell and then registers renderers with the layer streamer on clients. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-spawn" /><code>{"private void Spawn(int x, int z, float value, ref int index)"}</code> | Called per non-zero cell with a seeded prefab index; subclasses work out the placement and call `Process`. |

</details>
