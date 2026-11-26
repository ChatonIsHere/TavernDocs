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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupPermissionsEnabler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-grouppanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/selectedgrouppanel">{"SelectedGroupPanel"}</Link>{" groupPanel"}</code> | The selected group panel whose group is checked. |
| <Link id="m-haspermissionsevent" /><code>{"private "}<Link to="/game-api/types/global-t-x/toggleunityevent">{"ToggleUnityEvent"}</Link>{" hasPermissionsEvent"}</code> | Event invoked with true or false after each check. |
| <Link id="m-permissions" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] permissions"}</code> | The group permissions you must hold for the objects to be shown. |
| <Link id="m-toenablewithpermissions" /><code>{"private GameObject[] toEnableWithPermissions"}</code> | Objects made active only when you hold the permissions. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlegroupchange" /><code>{"private void HandleGroupChange("}<Link to="/game-api/types/alta-menus/selectedgrouppanel">{"SelectedGroupPanel"}</Link>{" obj)"}</code> | Checks your roles in the panel's group against `permissions`, toggles the objects and fires `hasPermissionsEvent`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Subscribes to the panel's `GroupUpdated` event and runs the check at once if a group is already set. |

</details>
