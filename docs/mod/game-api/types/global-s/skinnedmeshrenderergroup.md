---
title: "SkinnedMeshRendererGroup"
description: "Group of SkinnedMeshRenderers on one object, with helpers to toggle them, swap material, set shadows or rebind bones together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkinnedMeshRendererGroup

A **class** in `Root.Township`, the global namespace.

Group of `SkinnedMeshRenderer`s on one object, with helpers to toggle them, swap material, set shadows or rebind bones together.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`ComponentGroup<SkinnedMeshRenderer>`](/mod/game-api/types/global-c-d/componentgroup-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkinnedMeshRendererGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isreassing" /><code>{"private bool isReassing"}</code> | <span className="api-desc">Editor button for `ReassignBones`.</span> |
| <Link id="m-issettingshadows" /><code>{"private bool isSettingShadows"}</code> | <span className="api-desc">Editor button for `SetShadows`.</span> |
| <Link id="m-newroot" /><code>{"private Transform newRoot"}</code> | <span className="api-desc">Root transform used by `ReassignBones`.</span> |
| <Link id="m-shadowmode" /><code>{"private ShadowCastingMode shadowMode"}</code> | <span className="api-desc">Shadow mode used by the editor button.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enable" /><code>{"void Enable(bool enable)"}</code> | <span className="api-desc">Turns every renderer in the group on or off.</span> |
| <Link id="m-reassignbones" /><code>{"void ReassignBones()"}</code> | <span className="api-desc">Rebinds every renderer's bones under `newRoot`.</span> |
| <Link id="m-setmaterial" /><code>{"void SetMaterial(Material material)"}</code> | <span className="api-desc">Sets the shared material on every renderer. Does nothing on headless builds.</span> |
| <Link id="m-setshadows" /><code>{"void SetShadows(ShadowCastingMode mode)"}</code> | <span className="api-desc">Sets shadow casting and receiving on every renderer. Shadow-only renderers are disabled when shadows are turned off.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: runs the reassign bones or set shadows buttons.</span> |

## Used in

Members of other types that take, return or hold a `SkinnedMeshRendererGroup`:

<div className="api-used-in">

[`CharacterShellHelper.existingGroup`](/mod/game-api/types/global-c-d/charactershellhelper#m-existinggroup).

</div>
