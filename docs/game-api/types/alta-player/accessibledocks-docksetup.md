---
title: "AccessibleDocks.DockSetup"
description: "class AccessibleDocks.DockSetup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccessibleDocks.DockSetup

A **private class** in `Root.Township`, `Alta.Character`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`AccessibleDocks`](/game-api/types/alta-player/accessibledocks)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DockSetup()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-accessiblenumberrotation" /><code>{"Quaternion accessibleNumberRotation"}</code> |
| <Link id="m-accessibleposition" /><code>{"Vector3 accessiblePosition"}</code> |
| <Link id="m-dock" /><code>{"Transform dock"}</code> |
| <Link id="m-number" /><code>{"Transform number"}</code> |
| <Link id="m-originalnumberrotation" /><code>{"Quaternion originalNumberRotation"}</code> |
| <Link id="m-originalposition" /><code>{"Vector3 originalPosition"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-setupnumber" /><code>{"void SetupNumber(Vector3 centerPosition)"}</code> |
| <Link id="m-update" /><code>{"void Update(bool isAccessible, float lerp, float rotationLerp)"}</code> |
| <Link id="m-update-2" /><code>{"void Update(bool isAccessible)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-gettargetposition" /><code>{"private void GetTargetPosition(bool isAccessible, out Vector3 targetPosition, out Quaternion targetNumberRotation)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `DockSetup`:

[`AccessibleDocks.docksSetup`](/game-api/types/alta-player/accessibledocks#m-dockssetup).
