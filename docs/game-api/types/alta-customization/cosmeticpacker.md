---
title: "CosmeticPacker"
description: "Client: merges a character's cosmetic parts into a few meshes and one packed texture, then applies them to the character's clothes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPacker

A **class** in `Root.Township`, `Alta.Customization`.

Client: merges a character's cosmetic parts into a few meshes and one packed texture, then applies them to the character's clothes. Packing is queued on `CosmeticPackScheduler`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Input`](/game-api/types/alta-customization/cosmeticpacker-input), [`PartId`](/game-api/types/alta-customization/cosmeticpacker-partid)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPacker()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>27 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additional" /><code>{"private static readonly int _Additional"}</code> | Shader property ID for `_Additional`. |
| <Link id="m-bumpmap" /><code>{"private static readonly int _BumpMap"}</code> | Shader property ID for the normal map texture. |
| <Link id="m-maintex" /><code>{"private static readonly int _MainTex"}</code> | Shader property ID for the diffuse texture. |
| <Link id="m-blendmaterial" /><code>{"private Material blendMaterial"}</code> | Material for alpha-blended parts, made from `material` with `blendShader` when any input needs blending. |
| <Link id="m-blendshader" /><code>{"private Shader blendShader"}</code> | Shader used for the transparent (alpha-blended) clothing material. |
| <Link id="m-bonesbaking" /><code>{"private "}<Link to="/game-api/types/alta-customization/bonesbaking">{"BonesBaking"}</Link>{" bonesBaking"}</code> | Bakes bone data into the packed meshes on Android. |
| <Link id="m-cacheinputs" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{"> cacheInputs"}</code> | Copy of `inputs` taken at the start of a pack, so changes during the pack don't affect it. |
| <Link id="m-defaultbindposes" /><code>{"private Matrix4x4[] defaultBindposes"}</code> | Bind poses passed to the mesh packer for the combined meshes. |
| <Link id="m-defaultnormal" /><code>{"private Texture2D defaultNormal"}</code> | Fallback normal map used when packing textures. |
| <Link id="m-diffuse" /><code>{"private RenderTexture diffuse"}</code> | The packed diffuse render texture for all parts. |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" dummy"}</code> | The character the packed clothes are applied to. |
| <Link id="m-headmeshes" /><code>{"private Mesh[] headMeshes"}</code> | Packed opaque head mesh, used when the head is separate (first person). |
| <Link id="m-inputs" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{"> inputs"}</code> | The current cosmetic parts to pack, keyed by part ID. Exposed as `Inputs`. |
| <Link id="m-ispackedwhilepaused" /><code>{"private bool isPackedWhilePaused"}</code> | Set when `PackAndApply` is called while paused, so `Unpause` packs then. |
| <Link id="m-ispackingattheendoftheframe" /><code>{"private bool isPackingAtTheEndOfTheFrame"}</code> | Declared but not used in this class. |
| <Link id="m-ispaused" /><code>{"private bool isPaused"}</code> | While true, `PackAndApply` only marks a pack as pending. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for packing errors. |
| <Link id="m-material" /><code>{"private Material material"}</code> | The opaque clothing material using the packed textures; made on first pack. |
| <Link id="m-maxlodtobakebodytype" /><code>{"private int maxLODToBakeBodyType"}</code> | Highest LOD (exclusive) baked on Android for third-person characters. |
| <Link id="m-meshes" /><code>{"private Mesh[] meshes"}</code> | Packed opaque body meshes, one per LOD. |
| <Link id="m-normal" /><code>{"private RenderTexture normal"}</code> | The packed normal map render texture. |
| <Link id="m-pack" /><code>{"private IEnumerator pack"}</code> | Declared but not used in this class. |
| <Link id="m-partmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/game-api/types/alta-customization/icosmeticmeshpartbase">{"ICosmeticMeshPartBase"}</Link>{"> partMap"}</code> | Loaded mesh part for each part ID, filled by `FillPartMap` and cleared after each pack. |
| <Link id="m-shader" /><code>{"private Shader shader"}</code> | Shader used for the opaque clothing material. |
| <Link id="m-transparentheadmeshes" /><code>{"private Mesh[] transparentHeadMeshes"}</code> | Packed transparent head mesh for first person. |
| <Link id="m-transparentmeshes" /><code>{"private Mesh[] transparentMeshes"}</code> | Packed transparent body meshes, one per LOD. |
| <Link id="m-workingindexes" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", int> workingIndexes"}</code> | Index for each part during a pack; parts that copy another part share its index. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-androidtexturesizemultiplier" /><code>{"float AndroidTextureSizeMultiplier { get; set; }"}</code> | Scale applied to the packed texture size on Android. |
| <Link id="m-bodytypeindex" /><code>{"int BodyTypeIndex { get; set; }"}</code> | The body type used when baking bones on Android. |
| <Link id="m-inputs-2" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{"> Inputs { get; }"}</code> | The parts to pack, by part ID. Change these, then call `PackAndApply`. |
| <Link id="m-istexturesharingallowed" /><code>{"bool IsTextureSharingAllowed { get; set; }"}</code> | Whether parts may share texture space when packing. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-startinglod" /><code>{"private int StartingLOD { get; }"}</code> | First LOD to build: 1 on Android, 0 elsewhere. |
| <Link id="m-texturesizemultiplier" /><code>{"private float TextureSizeMultiplier { get; }"}</code> | Scale for the packed textures: `AndroidTextureSizeMultiplier` on Android, 1 elsewhere. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-androidprebonesbaking" /><code>{"event Action AndroidPreBonesBaking"}</code> | Raised once on Android before bones are baked into the packed meshes. Cleared after it fires. |
| <Link id="m-finishedpacking" /><code>{"event Action FinishedPacking"}</code> | Raised once when packing finishes and the result is applied. Cleared after it fires. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | Cancels any queued pack and frees the inputs, textures, materials and meshes. Called on destroy. |
| <Link id="m-packandapply" /><code>{"void PackAndApply()"}</code> | Queues a pack for the next frame. While paused, it waits until `Unpause`. |
| <Link id="m-packfromscheduler" /><code>{"async Task PackFromScheduler("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, CancellationToken cancellation)"}</code> | Runs the pack. Called by the scheduler, not by your code. |
| <Link id="m-pause" /><code>{"void Pause()"}</code> | Holds back `PackAndApply` until `Unpause`. |
| <Link id="m-unpause" /><code>{"void Unpause()"}</code> | Ends a pause, and packs if a pack was asked for meanwhile. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bakingmeshes" /><code>{"private IEnumerable<Mesh> BakingMeshes(int startingLOD) (iterator)"}</code> | Lists the packed meshes to bake bones into on Android: all LODs from the start for first person, up to `maxLODToBakeBodyType` otherwise. |
| <Link id="m-fillpartmap" /><code>{"private async Task FillPartMap("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, CancellationToken cancellationToken)"}</code> | Loads each input's cosmetic definition by hash and stores its mesh part in `partMap`; logs and skips parts that fail. |
| <Link id="m-getsafeenumerable" /><code>{"private IEnumerable<T> GetSafeEnumerable<T>(T[] elements, int start, int end) (iterator)"}</code> | Yields array elements from a start index up to an end index, clamped to the array length. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Calls `Clean` to free the packed textures, materials and meshes. |
| <Link id="m-packmeshes" /><code>{"private async Task PackMeshes(int startingLOD, bool isHeadSeparate, CancellationToken cancellation)"}</code> | Combines the part meshes into opaque and transparent meshes, with the head split out in first person. Logs the part list on failure. |
| <Link id="m-packtask" /><code>{"private async Task PackTask("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, CancellationToken cancellation)"}</code> | Does one full pack: snapshots inputs, resolves copied colours, loads parts, packs textures and meshes, then applies them to the dummy's clothes. |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPacker`:

[`CharacterDummy.cosmeticPacker`](/game-api/types/alta-player/characterdummy#m-cosmeticpacker), [`CharacterDummy.CosmeticPacker`](/game-api/types/alta-player/characterdummy#m-cosmeticpacker-2), [`CosmeticPackScheduler.Cancel`](/game-api/types/alta-customization/cosmeticpackscheduler#m-cancel), [`CosmeticPackScheduler.current`](/game-api/types/alta-customization/cosmeticpackscheduler#m-current), [`CosmeticPackScheduler.Enqueue`](/game-api/types/alta-customization/cosmeticpackscheduler#m-enqueue), [`CosmeticPackScheduler.inQueue`](/game-api/types/alta-customization/cosmeticpackscheduler#m-inqueue), [`CosmeticPackScheduler.queue`](/game-api/types/alta-customization/cosmeticpackscheduler#m-queue).
