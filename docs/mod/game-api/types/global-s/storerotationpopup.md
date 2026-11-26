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
| <Link id="m-ctor" /><code>{"StoreRotationPopup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maintex" /><code>{"private static readonly int _MainTex"}</code> | Shader property id for `_MainTex`. |
| <Link id="m-laststorerotationprefskey" /><code>{"private const string LastStoreRotationPrefsKey"}</code> | Player preference key holding the hash of the last rotation shown. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for popup errors. |
| <Link id="m-popupboard" /><code>{"private "}<Link to="/mod/game-api/types/global-p/popupboard">{"PopupBoard"}</Link>{" popupBoard"}</code> | Popup board prefab to show. |
| <Link id="m-storebanner" /><code>{"private Texture storeBanner"}</code> | The downloaded banner texture. |
| <Link id="m-targetmaterial" /><code>{"private Material targetMaterial"}</code> | Material the banner texture is put on. |
| <Link id="m-www" /><code>{"private UnityWebRequest www"}</code> | The running banner download request. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | Fetches the shop configuration and, if the rotation is new, downloads the banner and shows the popup. |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | Does nothing. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Clears the banner and download. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | Removes the banner texture from the material, destroys it and aborts any running download. |
| <Link id="m-closeboard" /><code>{"private void CloseBoard("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" board)"}</code> | Clears the banner when the popup closes. |
| <Link id="m-gethashforconfiguration" /><code>{"private int GetHashForConfiguration("}<Link to="/mod/game-api/types/assembly-api-models/shoppageconfiguration">{"ShopPageConfiguration"}</Link>{" configuration)"}</code> | Hashes the shop item identifiers so a new rotation can be told apart from the last one shown. |
| <Link id="m-getstoretexture" /><code>{"private async Task<Texture> GetStoreTexture(string path)"}</code> | Downloads the banner image from a URL; returns null on error. |

</details>
