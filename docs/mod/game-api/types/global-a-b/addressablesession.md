---
title: "AddressableSession"
description: "Loads Unity Addressable assets and keeps them loaded until every user of the session is removed, then releases them all."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AddressableSession

A **class** in `Root.Township`, the global namespace.

Loads Unity Addressable assets and keeps them loaded until every user of the session is removed, then releases them all.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AddressableSession()"}</code> | Creates an `AddressableSession` with default values. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private static int count"}</code> | Number of live sessions. Drops when a session's last user is removed. |
| <Link id="m-handlemap" /><code>{"private readonly Dictionary<string, AsyncOperationHandle> handleMap"}</code> | Load handles by address, so loading the same address twice reuses the handle. |
| <Link id="m-handles" /><code>{"private readonly HashSet<AsyncOperationHandle> handles"}</code> | Every load handle this session made, released when its last user goes. |
| <Link id="m-index" /><code>{"private readonly int index"}</code> | This session's number, used in log messages. |
| <Link id="m-isdisposed" /><code>{"private bool isDisposed"}</code> | Set once the last user is removed. Loading after that throws. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger. Logs loads that finish after the session ended. |
| <Link id="m-next" /><code>{"private static int next"}</code> | Next session number to hand out. |
| <Link id="m-users" /><code>{"private readonly HashSet<object> users"}</code> | Objects keeping the session alive. Starts with the session itself, which `Dispose` removes. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-adduser" /><code>{"void AddUser(object user)"}</code> | Registers something that still needs the loaded assets. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Removes the session itself as a user. |
| <Link id="m-loadasync" /><code>{"async Task<T> LoadAsync<T>(string address)"}</code> | Loads an asset by address, reusing the handle if already loaded. Throws once the session has ended. |
| <Link id="m-removeuser" /><code>{"void RemoveUser(object user)"}</code> | Removes a user. When none are left, releases every asset and ends the session. |

## Used in

Members of other types that take, return or hold a `AddressableSession`:

[`CosmeticCustomizationManager.Session`](/mod/game-api/types/alta-customization/cosmeticcustomizationmanager#m-session), [`CosmeticPacker.FillPartMap`](/mod/game-api/types/alta-customization/cosmeticpacker#m-fillpartmap), [`CosmeticPacker.PackFromScheduler`](/mod/game-api/types/alta-customization/cosmeticpacker#m-packfromscheduler), [`CosmeticPacker.PackTask`](/mod/game-api/types/alta-customization/cosmeticpacker#m-packtask), [`CosmeticPackScheduler.packSession`](/mod/game-api/types/alta-customization/cosmeticpackscheduler#m-packsession), [`CosmeticPresetTrophy.session`](/mod/game-api/types/alta-customization/cosmeticpresettrophy#m-session), [`CustomizationWrapper.Session`](/mod/game-api/types/alta-customization/customizationwrapper#m-session), [`CustomizationWrapper.StartSession`](/mod/game-api/types/alta-customization/customizationwrapper#m-startsession), [`CustomizationWrapper.StopSession`](/mod/game-api/types/alta-customization/customizationwrapper#m-stopsession), [`ICustomizationWrapper.StartSession`](/mod/game-api/types/alta-customization/icustomizationwrapper#m-startsession), [`ICustomizationWrapper.StopSession`](/mod/game-api/types/alta-customization/icustomizationwrapper#m-stopsession), [`MainMenuShopItem.Setup`](/mod/game-api/types/alta-customization/mainmenushopitem#m-setup), [`Purchasable.Get`](/mod/game-api/types/alta-customization/purchasable#m-get), [`EditorOnlyAddressableSession.Session`](/mod/game-api/types/global-e-h/editoronlyaddressablesession#m-session), [`LocalPlayerAdvertisingTrophy.session`](/mod/game-api/types/global-i-l/localplayeradvertisingtrophy#m-session), [`ModellingCharacter.session`](/mod/game-api/types/global-m-o/modellingcharacter#m-session).
