---
title: "SkinnedMeshRendererGroup"
description: "Group of SkinnedMeshRenderers on one object, with helpers to toggle them, swap material, set shadows or rebind bones together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkinnedMeshRendererGroup

A **class** in `Root.Township`, no namespace.

Group of `SkinnedMeshRenderer`s on one object, with helpers to toggle them, swap material, set shadows or rebind bones together.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`ComponentGroup<SkinnedMeshRenderer>`](/game-api/types/global-c-d/componentgroup-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SkinnedMeshRendererGroup()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isreassing" /><code>{"private bool isReassing"}</code> | Editor button for `ReassignBones`. |
| <Link id="m-issettingshadows" /><code>{"private bool isSettingShadows"}</code> | Editor button for `SetShadows`. |
| <Link id="m-newroot" /><code>{"private Transform newRoot"}</code> | Root transform used by `ReassignBones`. |
| <Link id="m-shadowmode" /><code>{"private ShadowCastingMode shadowMode"}</code> | Shadow mode used by the editor button. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enable" /><code>{"void Enable(bool enable)"}</code> | Turns every renderer in the group on or off. |
| <Link id="m-reassignbones" /><code>{"void ReassignBones()"}</code> | Rebinds every renderer's bones under `newRoot`. |
| <Link id="m-setmaterial" /><code>{"void SetMaterial(Material material)"}</code> | Sets the shared material on every renderer. Does nothing on headless builds. |
| <Link id="m-setshadows" /><code>{"void SetShadows(ShadowCastingMode mode)"}</code> | Sets shadow casting and receiving on every renderer. Shadow-only renderers are disabled when shadows are turned off. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: runs the reassign bones or set shadows buttons. |

## Used in

Members of other types that take, return or hold a `SkinnedMeshRendererGroup`:

[`CharacterShellHelper.existingGroup`](/game-api/types/global-c-d/charactershellhelper#m-existinggroup).
