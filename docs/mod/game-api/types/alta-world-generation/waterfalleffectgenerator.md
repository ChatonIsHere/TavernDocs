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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IRiverVisual`](/mod/game-api/types/alta-world-generation/irivervisual)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WaterfallEffectGenerator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnregenerate" /><code>{"private bool btnRegenerate"}</code> | <span className="api-desc">Inspector button for `Generate`.</span> |
| <Link id="m-effect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect"}</code> | <span className="api-desc">Pooled waterfall effect.</span> |
| <Link id="m-heightrtpc" /><code>{"private RTPC heightRTPC"}</code> | <span className="api-desc">Wwise parameter set to the waterfall's drop.</span> |
| <Link id="m-heightvolume" /><code>{"private AnimationCurve heightVolume"}</code> | <span className="api-desc">Obsolete.</span> |
| <Link id="m-pooled" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> pooled"}</code> | <span className="api-desc">Spawned effects and the chunk each sits in.</span> |
| <Link id="m-river" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" river"}</code> | <span className="api-desc">River generator.</span> |
| <Link id="m-sizertpc" /><code>{"private RTPC sizeRTPC"}</code> | <span className="api-desc">Wwise parameter set to the waterfall's water volume.</span> |
| <Link id="m-sizevolume" /><code>{"private AnimationCurve sizeVolume"}</code> | <span className="api-desc">Obsolete.</span> |
| <Link id="m-soundeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect"}</code> | <span className="api-desc">Waterfall sound.</span> |
| <Link id="m-sounds" /><code>{"private List<"}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{"> sounds"}</code> | <span className="api-desc">Playing waterfall sounds.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"void Generate("}<Link to="/mod/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{" generation)"}</code> | <span className="api-desc">Clears old effects, then adds an effect and a looping sound (sized by height and volume) for each waterfall.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Releases the effects and stops the sounds.</span> |

</details>
