---
title: "ServerCreator"
description: "Client main-menu panel for creating a new server through the Alta API: pick a region, name, description and visibility."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerCreator

A **class** in `Root.Township`, the global namespace.

Client main-menu panel for creating a new server through the Alta API: pick a region, name, description and visibility. Shows a fallback panel if the account can't create one.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerCreator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cantcreateparent" /><code>{"private GameObject cantCreateParent"}</code> | <span className="api-desc">Panel shown when the account can't create a server.</span> |
| <Link id="m-createserverparent" /><code>{"private GameObject createServerParent"}</code> | <span className="api-desc">Panel shown when it can.</span> |
| <Link id="m-descriptioninput" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" descriptionInput"}</code> | <span className="api-desc">Input for the server description.</span> |
| <Link id="m-iscreating" /><code>{"private bool isCreating"}</code> | <span className="api-desc">Inspector button field for creating a server.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-menu" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverselectionmenu">{"ServerSelectionMenu"}</Link>{" menu"}</code> | <span className="api-desc">The server selection menu to refresh after creating.</span> |
| <Link id="m-nameinput" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" nameInput"}</code> | <span className="api-desc">Input for the server name.</span> |
| <Link id="m-onservercreate" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onServerCreate"}</code> | <span className="api-desc">Event fired after a server is created.</span> |
| <Link id="m-regions" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/regioninfo">{"RegionInfo"}</Link>{"[] regions"}</code> | <span className="api-desc">Regions loaded from the API.</span> |
| <Link id="m-scroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/customscroller">{"CustomScroller"}</Link>{" scroller"}</code> | <span className="api-desc">Scroller for picking the region.</span> |
| <Link id="m-visibilitytypescroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/customscroller">{"CustomScroller"}</Link>{" visibilityTypeScroller"}</code> | <span className="api-desc">Scroller for picking the group type (visibility).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createserverasync" /><code>{"async void CreateServerAsync()"}</code> | <span className="api-desc">Calls the API to create a group and server with the chosen options, then shows and selects it in My Servers.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isallowedtocreateserver" /><code>{"private async Task<bool> IsAllowedToCreateServer()"}</code> | <span className="api-desc">Asks the API for the account's group creation allowance; true if any are left.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks from the logged-in event.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Runs `Setup` now if logged in, otherwise hides the panel and waits for login.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: the Create Server button runs `CreateServerAsync`.</span> |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> | <span className="api-desc">Shows the create panel or the cannot-create panel.</span> |
| <Link id="m-setup" /><code>{"private async void Setup()"}</code> | <span className="api-desc">Checks the allowance, shows the right panel and loads the server regions into the region scroller.</span> |

</details>
