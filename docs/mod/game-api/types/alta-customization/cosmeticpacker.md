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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Input`](/mod/game-api/types/alta-customization/cosmeticpacker-input), [`PartId`](/mod/game-api/types/alta-customization/cosmeticpacker-partid)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPacker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>27 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additional" /><code>{"private static readonly int _Additional"}</code> | <span className="api-desc">Shader property ID for `_Additional`.</span> |
| <Link id="m-bumpmap" /><code>{"private static readonly int _BumpMap"}</code> | <span className="api-desc">Shader property ID for the normal map texture.</span> |
| <Link id="m-maintex" /><code>{"private static readonly int _MainTex"}</code> | <span className="api-desc">Shader property ID for the diffuse texture.</span> |
| <Link id="m-blendmaterial" /><code>{"private Material blendMaterial"}</code> | <span className="api-desc">Material for alpha-blended parts, made from `material` with `blendShader` when any input needs blending.</span> |
| <Link id="m-blendshader" /><code>{"private Shader blendShader"}</code> | <span className="api-desc">Shader used for the transparent (alpha-blended) clothing material.</span> |
| <Link id="m-bonesbaking" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/bonesbaking">{"BonesBaking"}</Link>{" bonesBaking"}</code> | <span className="api-desc">Bakes bone data into the packed meshes on Android.</span> |
| <Link id="m-cacheinputs" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{"> cacheInputs"}</code> | <span className="api-desc">Copy of `inputs` taken at the start of a pack, so changes during the pack don't affect it.</span> |
| <Link id="m-defaultbindposes" /><code>{"private Matrix4x4[] defaultBindposes"}</code> | <span className="api-desc">Bind poses passed to the mesh packer for the combined meshes.</span> |
| <Link id="m-defaultnormal" /><code>{"private Texture2D defaultNormal"}</code> | <span className="api-desc">Fallback normal map used when packing textures.</span> |
| <Link id="m-diffuse" /><code>{"private RenderTexture diffuse"}</code> | <span className="api-desc">The packed diffuse render texture for all parts.</span> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" dummy"}</code> | <span className="api-desc">The character the packed clothes are applied to.</span> |
| <Link id="m-headmeshes" /><code>{"private Mesh[] headMeshes"}</code> | <span className="api-desc">Packed opaque head mesh, used when the head is separate (first person).</span> |
| <Link id="m-inputs" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{"> inputs"}</code> | <span className="api-desc">The current cosmetic parts to pack, keyed by part ID. Exposed as `Inputs`.</span> |
| <Link id="m-ispackedwhilepaused" /><code>{"private bool isPackedWhilePaused"}</code> | <span className="api-desc">Set when `PackAndApply` is called while paused, so `Unpause` packs then.</span> |
| <Link id="m-ispackingattheendoftheframe" /><code>{"private bool isPackingAtTheEndOfTheFrame"}</code> | <span className="api-desc">Declared but not used in this class.</span> |
| <Link id="m-ispaused" /><code>{"private bool isPaused"}</code> | <span className="api-desc">While true, `PackAndApply` only marks a pack as pending.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for packing errors.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">The opaque clothing material using the packed textures; made on first pack.</span> |
| <Link id="m-maxlodtobakebodytype" /><code>{"private int maxLODToBakeBodyType"}</code> | <span className="api-desc">Highest LOD (exclusive) baked on Android for third-person characters.</span> |
| <Link id="m-meshes" /><code>{"private Mesh[] meshes"}</code> | <span className="api-desc">Packed opaque body meshes, one per LOD.</span> |
| <Link id="m-normal" /><code>{"private RenderTexture normal"}</code> | <span className="api-desc">The packed normal map render texture.</span> |
| <Link id="m-pack" /><code>{"private IEnumerator pack"}</code> | <span className="api-desc">Declared but not used in this class.</span> |
| <Link id="m-partmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/mod/game-api/types/alta-customization/icosmeticmeshpartbase">{"ICosmeticMeshPartBase"}</Link>{"> partMap"}</code> | <span className="api-desc">Loaded mesh part for each part ID, filled by `FillPartMap` and cleared after each pack.</span> |
| <Link id="m-shader" /><code>{"private Shader shader"}</code> | <span className="api-desc">Shader used for the opaque clothing material.</span> |
| <Link id="m-transparentheadmeshes" /><code>{"private Mesh[] transparentHeadMeshes"}</code> | <span className="api-desc">Packed transparent head mesh for first person.</span> |
| <Link id="m-transparentmeshes" /><code>{"private Mesh[] transparentMeshes"}</code> | <span className="api-desc">Packed transparent body meshes, one per LOD.</span> |
| <Link id="m-workingindexes" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", int> workingIndexes"}</code> | <span className="api-desc">Index for each part during a pack; parts that copy another part share its index.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-androidtexturesizemultiplier" /><code>{"float AndroidTextureSizeMultiplier { get; set; }"}</code> | <span className="api-desc">Scale applied to the packed texture size on Android.</span> |
| <Link id="m-bodytypeindex" /><code>{"int BodyTypeIndex { get; set; }"}</code> | <span className="api-desc">The body type used when baking bones on Android.</span> |
| <Link id="m-inputs-2" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{"> Inputs { get; }"}</code> | <span className="api-desc">The parts to pack, by part ID. Change these, then call `PackAndApply`.</span> |
| <Link id="m-istexturesharingallowed" /><code>{"bool IsTextureSharingAllowed { get; set; }"}</code> | <span className="api-desc">Whether parts may share texture space when packing.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-startinglod" /><code>{"private int StartingLOD { get; }"}</code> | <span className="api-desc">First LOD to build: 1 on Android, 0 elsewhere.</span> |
| <Link id="m-texturesizemultiplier" /><code>{"private float TextureSizeMultiplier { get; }"}</code> | <span className="api-desc">Scale for the packed textures: `AndroidTextureSizeMultiplier` on Android, 1 elsewhere.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-androidprebonesbaking" /><code>{"event Action AndroidPreBonesBaking"}</code> | <span className="api-desc">Raised once on Android before bones are baked into the packed meshes. Cleared after it fires.</span> |
| <Link id="m-finishedpacking" /><code>{"event Action FinishedPacking"}</code> | <span className="api-desc">Raised once when packing finishes and the result is applied. Cleared after it fires.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | <span className="api-desc">Cancels any queued pack and frees the inputs, textures, materials and meshes. Called on destroy.</span> |
| <Link id="m-packandapply" /><code>{"void PackAndApply()"}</code> | <span className="api-desc">Queues a pack for the next frame. While paused, it waits until `Unpause`.</span> |
| <Link id="m-packfromscheduler" /><code>{"async Task PackFromScheduler("}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, CancellationToken cancellation)"}</code> | <span className="api-desc">Runs the pack. Called by the scheduler, not by your code.</span> |
| <Link id="m-pause" /><code>{"void Pause()"}</code> | <span className="api-desc">Holds back `PackAndApply` until `Unpause`.</span> |
| <Link id="m-unpause" /><code>{"void Unpause()"}</code> | <span className="api-desc">Ends a pause, and packs if a pack was asked for meanwhile.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bakingmeshes" /><code>{"private IEnumerable<Mesh> BakingMeshes(int startingLOD) (iterator)"}</code> | <span className="api-desc">Lists the packed meshes to bake bones into on Android: all LODs from the start for first person, up to `maxLODToBakeBodyType` otherwise.</span> |
| <Link id="m-fillpartmap" /><code>{"private async Task FillPartMap("}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, CancellationToken cancellationToken)"}</code> | <span className="api-desc">Loads each input's cosmetic definition by hash and stores its mesh part in `partMap`; logs and skips parts that fail.</span> |
| <Link id="m-getsafeenumerable" /><code>{"private IEnumerable<T> GetSafeEnumerable<T>(T[] elements, int start, int end) (iterator)"}</code> | <span className="api-desc">Yields array elements from a start index up to an end index, clamped to the array length.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Calls `Clean` to free the packed textures, materials and meshes.</span> |
| <Link id="m-packmeshes" /><code>{"private async Task PackMeshes(int startingLOD, bool isHeadSeparate, CancellationToken cancellation)"}</code> | <span className="api-desc">Combines the part meshes into opaque and transparent meshes, with the head split out in first person. Logs the part list on failure.</span> |
| <Link id="m-packtask" /><code>{"private async Task PackTask("}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, CancellationToken cancellation)"}</code> | <span className="api-desc">Does one full pack: snapshots inputs, resolves copied colours, loads parts, packs textures and meshes, then applies them to the dummy's clothes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPacker`:

<div className="api-used-in">

[`CharacterDummy.cosmeticPacker`](/mod/game-api/types/alta-player/characterdummy#m-cosmeticpacker), [`CharacterDummy.CosmeticPacker`](/mod/game-api/types/alta-player/characterdummy#m-cosmeticpacker-2), [`CosmeticPackScheduler.Cancel`](/mod/game-api/types/alta-customization/cosmeticpackscheduler#m-cancel), [`CosmeticPackScheduler.current`](/mod/game-api/types/alta-customization/cosmeticpackscheduler#m-current), [`CosmeticPackScheduler.Enqueue`](/mod/game-api/types/alta-customization/cosmeticpackscheduler#m-enqueue), [`CosmeticPackScheduler.inQueue`](/mod/game-api/types/alta-customization/cosmeticpackscheduler#m-inqueue), [`CosmeticPackScheduler.queue`](/mod/game-api/types/alta-customization/cosmeticpackscheduler#m-queue).

</div>
