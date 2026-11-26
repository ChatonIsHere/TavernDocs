---
title: "SAColliderBuilderCommon.Bool3"
description: "Serializable x, y, z set of flags used by SAColliderBuilder (third party, editor) settings, such as which axes to optimise rotation on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAColliderBuilderCommon.Bool3

A **struct** in `Root.Township`, the global namespace.

Serializable x, y, z set of flags used by SAColliderBuilder (third party, editor) settings, such as which axes to optimise rotation on.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SAColliderBuilderCommon`](/mod/game-api/types/global-s/sacolliderbuildercommon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Bool3(bool x, bool y, bool z)"}</code> | Creates a `SAColliderBuilderCommon.Bool3` from `x`, `y` and `z`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-x" /><code>{"bool x"}</code> | Flag for the x axis. |
| <Link id="m-y" /><code>{"bool y"}</code> | Flag for the y axis. |
| <Link id="m-z" /><code>{"bool z"}</code> | Flag for the z axis. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setvalue" /><code>{"void SetValue(bool x, bool y, bool z)"}</code> | Sets all three flags. |

## Used in

Members of other types that take, return or hold a `Bool3`:

[`SAColliderBuilderCommon.ReducerProperty.optimizeRotation`](/mod/game-api/types/global-s/sacolliderbuildercommon-reducerproperty#m-optimizerotation).
