---
title: "ServerCreator"
description: "Client main-menu panel for creating a new server through the Alta API: pick a region, name, description and visibility."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerCreator

A **class** in `Root.Township`, no namespace.

Client main-menu panel for creating a new server through the Alta API: pick a region, name, description and visibility. Shows a fallback panel if the account can't create one.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerCreator()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cantcreateparent" /><code>{"private GameObject cantCreateParent"}</code> | Panel shown when the account can't create a server. |
| <Link id="m-createserverparent" /><code>{"private GameObject createServerParent"}</code> | Panel shown when it can. |
| <Link id="m-descriptioninput" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" descriptionInput"}</code> | Input for the server description. |
| <Link id="m-iscreating" /><code>{"private bool isCreating"}</code> | Inspector button field for creating a server. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-menu" /><code>{"private "}<Link to="/game-api/types/global-s/serverselectionmenu">{"ServerSelectionMenu"}</Link>{" menu"}</code> | The server selection menu to refresh after creating. |
| <Link id="m-nameinput" /><code>{"private "}<Link to="/game-api/types/global-t-x/virtualinputfield">{"VirtualInputField"}</Link>{" nameInput"}</code> | Input for the server name. |
| <Link id="m-onservercreate" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onServerCreate"}</code> | Event fired after a server is created. |
| <Link id="m-regions" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/regioninfo">{"RegionInfo"}</Link>{"[] regions"}</code> | Regions loaded from the API. |
| <Link id="m-scroller" /><code>{"private "}<Link to="/game-api/types/alta-menus/customscroller">{"CustomScroller"}</Link>{" scroller"}</code> | Scroller for picking the region. |
| <Link id="m-visibilitytypescroller" /><code>{"private "}<Link to="/game-api/types/alta-menus/customscroller">{"CustomScroller"}</Link>{" visibilityTypeScroller"}</code> | Scroller for picking the group type (visibility). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createserverasync" /><code>{"async void CreateServerAsync()"}</code> | Calls the API to create a group and server with the chosen options, then shows and selects it in My Servers. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isallowedtocreateserver" /><code>{"private async Task<bool> IsAllowedToCreateServer()"}</code> | Asks the API for the account's group creation allowance; true if any are left. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks from the logged-in event. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Runs `Setup` now if logged in, otherwise hides the panel and waits for login. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: the Create Server button runs `CreateServerAsync`. |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> | Shows the create panel or the cannot-create panel. |
| <Link id="m-setup" /><code>{"private async void Setup()"}</code> | Checks the allowance, shows the right panel and loads the server regions into the region scroller. |

</details>
