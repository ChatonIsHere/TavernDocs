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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private DynamicPhysicsTimeSet()"}</code> | <span className="api-desc">Creates a `DynamicPhysicsTimeSet` with default values.</span> |

</details>

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nextupdate" /><code>{"private float nextUpdate"}</code> | <span className="api-desc">Real time of the next adjustment.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings"}</code> | <span className="api-desc">The current server settings.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered update method.</span> |
| <Link id="m-updateinterval" /><code>{"private const float UpdateInterval"}</code> | <span className="api-desc">Seconds between adjustments (5).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"static void Start()"}</code> | <span className="api-desc">Creates the instance, which hooks server settings changes and server end.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"private void Disable()"}</code> | <span className="api-desc">Sets the fixed timestep to the maximum physics frames per second and unregisters the update.</span> |
| <Link id="m-settingschanged" /><code>{"private void SettingsChanged(Settings settings)"}</code> | <span className="api-desc">Re-reads the server settings and turns the update on or off by `IsUpdatingPhysicsFixedFrameCount`.</span> |
| <Link id="m-stop" /><code>{"private void Stop()"}</code> | <span className="api-desc">Runs when the server ends: unhooks the events and calls `Disable`.</span> |
| <Link id="m-update-2" /><code>{"private void Update()"}</code> | <span className="api-desc">Every 5 seconds, maps current FPS between the two FPS settings onto a physics rate and sets `Time.fixedDeltaTime`.</span> |

</details>
