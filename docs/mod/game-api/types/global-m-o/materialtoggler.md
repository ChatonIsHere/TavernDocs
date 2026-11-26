---
title: "MaterialToggler"
description: "Debug tool: Shift+M swaps materials on spawned objects (those using an aFrom material) to to, then puts them back in two timed steps."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialToggler

A **class** in `Root.Township`, the global namespace.

Debug tool: Shift+M swaps materials on spawned objects (those using an `aFrom` material) to `to`, then puts them back in two timed steps. Probably for checking which objects use which materials.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`RendererToMaterial`](/mod/game-api/types/global-m-o/materialtoggler-renderertomaterial)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialToggler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/materialtoggler">{"MaterialToggler"}</Link>{" instance"}</code> | <span className="api-desc">The first `MaterialToggler`.</span> |

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-afrom" /><code>{"private List<Material> aFrom"}</code> | <span className="api-desc">Materials that get swapped to `to`.</span> |
| <Link id="m-bfrom" /><code>{"private List<Material> bFrom"}</code> | <span className="api-desc">Materials that stay swapped after the second step.</span> |
| <Link id="m-foundrenderers" /><code>{"private MeshRenderer[] foundRenderers"}</code> | <span className="api-desc">Renderers found under the spawned objects folder by `ChangeA`.</span> |
| <Link id="m-keyboardhandler" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" keyboardHandler"}</code> | <span className="api-desc">Handle of the M key registration.</span> |
| <Link id="m-rendererstotoggle" /><code>{"private List<"}<Link to="/mod/game-api/types/global-m-o/materialtoggler-renderertomaterial">{"MaterialToggler.RendererToMaterial"}</Link>{"> renderersToToggle"}</code> | <span className="api-desc">Swapped renderers and their original materials.</span> |
| <Link id="m-running" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" running"}</code> | <span className="api-desc">The running `ProceedChanges` coroutine.</span> |
| <Link id="m-textures" /><code>{"private Texture[] textures"}</code> | <span className="api-desc">Textures `UpdateMipMapBias` changes.</span> |
| <Link id="m-to" /><code>{"private Material to"}</code> | <span className="api-desc">Material put on during the swap.</span> |
| <Link id="m-waitduration" /><code>{"private float waitDuration"}</code> | <span className="api-desc">Seconds between steps.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changea" /><code>{"void ChangeA()"}</code> | <span className="api-desc">Puts `to` on every spawned renderer whose material is in `aFrom`, remembering the originals.</span> |
| <Link id="m-changeb" /><code>{"void ChangeB()"}</code> | <span className="api-desc">Restores the swapped renderers whose original material is not in `bFrom`.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Restores every remaining swapped renderer.</span> |
| <Link id="m-proceedchanges" /><code>{"IEnumerator ProceedChanges() (iterator)"}</code> | <span className="api-desc">Coroutine running the A swap, the B restore and the final restore, `waitDuration` seconds apart.</span> |
| <Link id="m-updatemipmapbias" /><code>{"void UpdateMipMapBias(float bias)"}</code> | <span className="api-desc">Sets the mip map bias of every texture in `textures`.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Keeps the first instance (destroys duplicates) and registers the M key.</span> |
| <Link id="m-checkkey" /><code>{"private void CheckKey(Key key)"}</code> | <span className="api-desc">On M with left Shift held, starts `ProceedChanges` unless it is already running.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unregisters the M key.</span> |

</details>
