---
title: "StoreRotationPopup"
description: "Client tool that, after login, shows a popup with the current shop banner once per shop rotation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StoreRotationPopup

A **class** in `Root.Township`, the global namespace.

Client tool that, after login, shows a popup with the current shop banner once per shop rotation. Remembers the last rotation it showed in player preferences.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`LoggedInTool`](/mod/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StoreRotationPopup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maintex" /><code>{"private static readonly int _MainTex"}</code> | <span className="api-desc">Shader property id for `_MainTex`.</span> |
| <Link id="m-laststorerotationprefskey" /><code>{"private const string LastStoreRotationPrefsKey"}</code> | <span className="api-desc">Player preference key holding the hash of the last rotation shown.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for popup errors.</span> |
| <Link id="m-popupboard" /><code>{"private "}<Link to="/mod/game-api/types/global-p/popupboard">{"PopupBoard"}</Link>{" popupBoard"}</code> | <span className="api-desc">Popup board prefab to show.</span> |
| <Link id="m-storebanner" /><code>{"private Texture storeBanner"}</code> | <span className="api-desc">The downloaded banner texture.</span> |
| <Link id="m-targetmaterial" /><code>{"private Material targetMaterial"}</code> | <span className="api-desc">Material the banner texture is put on.</span> |
| <Link id="m-www" /><code>{"private UnityWebRequest www"}</code> | <span className="api-desc">The running banner download request.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | <span className="api-desc">Fetches the shop configuration and, if the rotation is new, downloads the banner and shows the popup.</span> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Clears the banner and download.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Removes the banner texture from the material, destroys it and aborts any running download.</span> |
| <Link id="m-closeboard" /><code>{"private void CloseBoard("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" board)"}</code> | <span className="api-desc">Clears the banner when the popup closes.</span> |
| <Link id="m-gethashforconfiguration" /><code>{"private int GetHashForConfiguration("}<Link to="/mod/game-api/types/assembly-api-models/shoppageconfiguration">{"ShopPageConfiguration"}</Link>{" configuration)"}</code> | <span className="api-desc">Hashes the shop item identifiers so a new rotation can be told apart from the last one shown.</span> |
| <Link id="m-getstoretexture" /><code>{"private async Task<Texture> GetStoreTexture(string path)"}</code> | <span className="api-desc">Downloads the banner image from a URL; returns null on error.</span> |

</details>
