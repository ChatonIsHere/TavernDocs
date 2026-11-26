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
| <Link id="m-ctor" /><code>{"MaterialToggler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/materialtoggler">{"MaterialToggler"}</Link>{" instance"}</code> | The first `MaterialToggler`. |

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-afrom" /><code>{"private List<Material> aFrom"}</code> | Materials that get swapped to `to`. |
| <Link id="m-bfrom" /><code>{"private List<Material> bFrom"}</code> | Materials that stay swapped after the second step. |
| <Link id="m-foundrenderers" /><code>{"private MeshRenderer[] foundRenderers"}</code> | Renderers found under the spawned objects folder by `ChangeA`. |
| <Link id="m-keyboardhandler" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" keyboardHandler"}</code> | Handle of the M key registration. |
| <Link id="m-rendererstotoggle" /><code>{"private List<"}<Link to="/mod/game-api/types/global-m-o/materialtoggler-renderertomaterial">{"MaterialToggler.RendererToMaterial"}</Link>{"> renderersToToggle"}</code> | Swapped renderers and their original materials. |
| <Link id="m-running" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" running"}</code> | The running `ProceedChanges` coroutine. |
| <Link id="m-textures" /><code>{"private Texture[] textures"}</code> | Textures `UpdateMipMapBias` changes. |
| <Link id="m-to" /><code>{"private Material to"}</code> | Material put on during the swap. |
| <Link id="m-waitduration" /><code>{"private float waitDuration"}</code> | Seconds between steps. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changea" /><code>{"void ChangeA()"}</code> | Puts `to` on every spawned renderer whose material is in `aFrom`, remembering the originals. |
| <Link id="m-changeb" /><code>{"void ChangeB()"}</code> | Restores the swapped renderers whose original material is not in `bFrom`. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Restores every remaining swapped renderer. |
| <Link id="m-proceedchanges" /><code>{"IEnumerator ProceedChanges() (iterator)"}</code> | Coroutine running the A swap, the B restore and the final restore, `waitDuration` seconds apart. |
| <Link id="m-updatemipmapbias" /><code>{"void UpdateMipMapBias(float bias)"}</code> | Sets the mip map bias of every texture in `textures`. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Keeps the first instance (destroys duplicates) and registers the M key. |
| <Link id="m-checkkey" /><code>{"private void CheckKey(Key key)"}</code> | On M with left Shift held, starts `ProceedChanges` unless it is already running. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unregisters the M key. |

</details>
