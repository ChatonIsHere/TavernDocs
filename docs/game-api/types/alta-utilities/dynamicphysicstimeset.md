---
title: "DynamicPhysicsTimeSet"
description: "Server: scales the physics fixed timestep with server FPS, between the minimum and maximum physics rates in the server settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DynamicPhysicsTimeSet

A **class** in `Root.Township`, `Alta.Utilities`.

Server: scales the physics fixed timestep with server FPS, between the minimum and maximum physics rates in the server settings. `ServerHandler` starts it.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private DynamicPhysicsTimeSet()"}</code> | Creates a `DynamicPhysicsTimeSet` with default values. |

</details>

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nextupdate" /><code>{"private float nextUpdate"}</code> | Real time of the next adjustment. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings"}</code> | The current server settings. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered update method. |
| <Link id="m-updateinterval" /><code>{"private const float UpdateInterval"}</code> | Seconds between adjustments (5). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"static void Start()"}</code> | Creates the instance, which hooks server settings changes and server end. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"private void Disable()"}</code> | Sets the fixed timestep to the maximum physics frames per second and unregisters the update. |
| <Link id="m-settingschanged" /><code>{"private void SettingsChanged(Settings settings)"}</code> | Re-reads the server settings and turns the update on or off by `IsUpdatingPhysicsFixedFrameCount`. |
| <Link id="m-stop" /><code>{"private void Stop()"}</code> | Runs when the server ends: unhooks the events and calls `Disable`. |
| <Link id="m-update-2" /><code>{"private void Update()"}</code> | Every 5 seconds, maps current FPS between the two FPS settings onto a physics rate and sets `Time.fixedDeltaTime`. |

</details>
