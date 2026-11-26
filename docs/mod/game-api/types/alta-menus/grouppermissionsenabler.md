---
title: "GroupPermissionsEnabler"
description: "Main menu UI helper that shows or hides objects depending on whether you hold the given permissions in the group a SelectedGroupPanel is showing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupPermissionsEnabler

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Main menu UI helper that shows or hides objects depending on whether you hold the given permissions in the group a `SelectedGroupPanel` is showing. Client only.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupPermissionsEnabler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-grouppanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/selectedgrouppanel">{"SelectedGroupPanel"}</Link>{" groupPanel"}</code> | <span className="api-desc">The selected group panel whose group is checked.</span> |
| <Link id="m-haspermissionsevent" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/toggleunityevent">{"ToggleUnityEvent"}</Link>{" hasPermissionsEvent"}</code> | <span className="api-desc">Event invoked with true or false after each check.</span> |
| <Link id="m-permissions" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions"}</code> | <span className="api-desc">The group permissions you must hold for the objects to be shown.</span> |
| <Link id="m-toenablewithpermissions" /><code>{"private GameObject[] toEnableWithPermissions"}</code> | <span className="api-desc">Objects made active only when you hold the permissions.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlegroupchange" /><code>{"private void HandleGroupChange("}<Link to="/mod/game-api/types/alta-menus/selectedgrouppanel">{"SelectedGroupPanel"}</Link>{" obj)"}</code> | <span className="api-desc">Checks your roles in the panel's group against `permissions`, toggles the objects and fires `hasPermissionsEvent`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Subscribes to the panel's `GroupUpdated` event and runs the check at once if a group is already set.</span> |

</details>
