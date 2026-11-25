---
title: "AutomaticDockArea"
description: "class AutomaticDockArea in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutomaticDockArea

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`RejectDockArea`](/game-api/types/alta-items/rejectdockarea)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AutomaticDockArea()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-colliders" /><code>{"private Collider[] colliders"}</code> |
| <Link id="m-docks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] docks"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-recheckcount" /><code>{"private int recheckCount"}</code> |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-docks-2" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] Docks { get; set; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-handlereject" /><code>{"protected virtual void HandleReject("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-ontriggerstay" /><code>{"private void OnTriggerStay(Collider other)"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-updatecount" /><code>{"private void UpdateCount()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `AutomaticDockArea`:

[`Chest.autoDocks`](/game-api/types/alta-items/chest#m-autodocks).
