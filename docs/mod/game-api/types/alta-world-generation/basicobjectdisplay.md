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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/mod/game-api/types/alta-world-generation/mapchunkdisplay)
- **Derived types** [`GameObjectDisplay`](/mod/game-api/types/alta-world-generation/gameobjectdisplay), [`WallAlignedDisplay`](/mod/game-api/types/alta-world-generation/wallaligneddisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BasicObjectDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prefabs" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs"}</code> | <span className="api-desc">Network prefabs to place. If empty, the static unnetworked pieces are used instead.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displayon" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" displayOn"}</code> | <span className="api-desc">Platforms this display renders on; on others `Render` does nothing.</span> |
| <Link id="m-staticpieces" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{"> staticPieces"}</code> | <span className="api-desc">Static environment pieces spawned by this display, released on destroy.</span> |
| <Link id="m-unnetworked" /><code>{"private GameObject[] unnetworked"}</code> | <span className="api-desc">Obsolete list of plain prefabs; `OnValidate` converts it to `unnetworkedPrefabs` and clears it.</span> |
| <Link id="m-unnetworkedprefabs" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{"[] unnetworkedPrefabs"}</code> | <span className="api-desc">Static environment pieces to spawn when no networked `prefabs` are set.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-render" /><code>{"override IEnumerator Render()"}</code> | <span className="api-desc">Returns the render coroutine, or null if this display is not enabled for the current platform.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor: converts the obsolete unnetworked GameObject list into static environment pieces.</span> |
| <Link id="m-process" /><code>{"protected void Process(int prefabIndex, Vector3 position, Quaternion rotation, Vector3 scale, int seed)"}</code> | <span className="api-desc">Places one object: spawns the network prefab (kinematic, parented here) or a static piece run through static generation.</span> |
| <Link id="m-renderinternal" /><code>{"protected abstract IEnumerator RenderInternal()"}</code> | <span className="api-desc">The subclass's render coroutine.</span> |
| <Link id="m-spawn-2" /><code>{"protected abstract void Spawn(int seed, int spawnSeed, int prefabIndex, int x, int z, float value, ref int index)"}</code> | <span className="api-desc">Called per non-zero cell with a seeded prefab index; subclasses work out the placement and call `Process`.</span> |
| <Link id="m-spawnall" /><code>{"protected IEnumerator SpawnAll() (iterator)"}</code> | <span className="api-desc">Coroutine that calls `Spawn` for every non-zero cell and then registers renderers with the layer streamer on clients.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Resets and releases every static environment piece this display spawned.</span> |
| <Link id="m-spawn" /><code>{"private void Spawn(int x, int z, float value, ref int index)"}</code> | <span className="api-desc">Called per non-zero cell with a seeded prefab index; subclasses work out the placement and call `Process`.</span> |

</details>
