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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CosmeticPacker()"}</code> |

## Fields

<details>
<summary>27 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-additional" /><code>{"private static readonly int _Additional"}</code> |
| <Link id="m-bumpmap" /><code>{"private static readonly int _BumpMap"}</code> |
| <Link id="m-maintex" /><code>{"private static readonly int _MainTex"}</code> |
| <Link id="m-blendmaterial" /><code>{"private Material blendMaterial"}</code> |
| <Link id="m-blendshader" /><code>{"private Shader blendShader"}</code> |
| <Link id="m-bonesbaking" /><code>{"private "}<Link to="/game-api/types/alta-customization/bonesbaking">{"BonesBaking"}</Link>{" bonesBaking"}</code> |
| <Link id="m-cacheinputs" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{"> cacheInputs"}</code> |
| <Link id="m-defaultbindposes" /><code>{"private Matrix4x4[] defaultBindposes"}</code> |
| <Link id="m-defaultnormal" /><code>{"private Texture2D defaultNormal"}</code> |
| <Link id="m-diffuse" /><code>{"private RenderTexture diffuse"}</code> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" dummy"}</code> |
| <Link id="m-headmeshes" /><code>{"private Mesh[] headMeshes"}</code> |
| <Link id="m-inputs" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{"> inputs"}</code> |
| <Link id="m-ispackedwhilepaused" /><code>{"private bool isPackedWhilePaused"}</code> |
| <Link id="m-ispackingattheendoftheframe" /><code>{"private bool isPackingAtTheEndOfTheFrame"}</code> |
| <Link id="m-ispaused" /><code>{"private bool isPaused"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-material" /><code>{"private Material material"}</code> |
| <Link id="m-maxlodtobakebodytype" /><code>{"private int maxLODToBakeBodyType"}</code> |
| <Link id="m-meshes" /><code>{"private Mesh[] meshes"}</code> |
| <Link id="m-normal" /><code>{"private RenderTexture normal"}</code> |
| <Link id="m-pack" /><code>{"private IEnumerator pack"}</code> |
| <Link id="m-partmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/game-api/types/alta-customization/icosmeticmeshpartbase">{"ICosmeticMeshPartBase"}</Link>{"> partMap"}</code> |
| <Link id="m-shader" /><code>{"private Shader shader"}</code> |
| <Link id="m-transparentheadmeshes" /><code>{"private Mesh[] transparentHeadMeshes"}</code> |
| <Link id="m-transparentmeshes" /><code>{"private Mesh[] transparentMeshes"}</code> |
| <Link id="m-workingindexes" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", int> workingIndexes"}</code> |

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

| Member |
| --- |
| <Link id="m-startinglod" /><code>{"private int StartingLOD { get; }"}</code> |
| <Link id="m-texturesizemultiplier" /><code>{"private float TextureSizeMultiplier { get; }"}</code> |

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

| Member |
| --- |
| <Link id="m-bakingmeshes" /><code>{"private IEnumerable<Mesh> BakingMeshes(int startingLOD) (iterator)"}</code> |
| <Link id="m-fillpartmap" /><code>{"private async Task FillPartMap("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, CancellationToken cancellationToken)"}</code> |
| <Link id="m-getsafeenumerable" /><code>{"private IEnumerable<T> GetSafeEnumerable<T>(T[] elements, int start, int end) (iterator)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-packmeshes" /><code>{"private async Task PackMeshes(int startingLOD, bool isHeadSeparate, CancellationToken cancellation)"}</code> |
| <Link id="m-packtask" /><code>{"private async Task PackTask("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, CancellationToken cancellation)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPacker`:

[`CharacterDummy.cosmeticPacker`](/game-api/types/alta-player/characterdummy#m-cosmeticpacker), [`CharacterDummy.CosmeticPacker`](/game-api/types/alta-player/characterdummy#m-cosmeticpacker-2), [`CosmeticPackScheduler.Cancel`](/game-api/types/alta-customization/cosmeticpackscheduler#m-cancel), [`CosmeticPackScheduler.current`](/game-api/types/alta-customization/cosmeticpackscheduler#m-current), [`CosmeticPackScheduler.Enqueue`](/game-api/types/alta-customization/cosmeticpackscheduler#m-enqueue), [`CosmeticPackScheduler.inQueue`](/game-api/types/alta-customization/cosmeticpackscheduler#m-inqueue), [`CosmeticPackScheduler.queue`](/game-api/types/alta-customization/cosmeticpackscheduler#m-queue).
