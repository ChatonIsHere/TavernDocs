---
title: "WaterfallEffectGenerator"
description: "River visual that puts a pooled waterfall effect and sound on every waterfall, shown only while its chunk is loaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WaterfallEffectGenerator

A **class** in `Root.Township`, `Alta.Forests`.

River visual that puts a pooled waterfall effect and sound on every waterfall, shown only while its chunk is loaded.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IRiverVisual`](/game-api/types/alta-world-generation/irivervisual)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WaterfallEffectGenerator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnregenerate" /><code>{"private bool btnRegenerate"}</code> | Inspector button for `Generate`. |
| <Link id="m-effect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect"}</code> | Pooled waterfall effect. |
| <Link id="m-heightrtpc" /><code>{"private RTPC heightRTPC"}</code> | Wwise parameter set to the waterfall's drop. |
| <Link id="m-heightvolume" /><code>{"private AnimationCurve heightVolume"}</code> | Obsolete. |
| <Link id="m-pooled" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{", "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> pooled"}</code> | Spawned effects and the chunk each sits in. |
| <Link id="m-river" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" river"}</code> | River generator. |
| <Link id="m-sizertpc" /><code>{"private RTPC sizeRTPC"}</code> | Wwise parameter set to the waterfall's water volume. |
| <Link id="m-sizevolume" /><code>{"private AnimationCurve sizeVolume"}</code> | Obsolete. |
| <Link id="m-soundeffect" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect"}</code> | Waterfall sound. |
| <Link id="m-sounds" /><code>{"private List<"}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{"> sounds"}</code> | Playing waterfall sounds. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"void Generate("}<Link to="/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{" generation)"}</code> | Clears old effects, then adds an effect and a looping sound (sized by height and volume) for each waterfall. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Releases the effects and stops the sounds. |

</details>
