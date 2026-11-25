---
title: "AddressableSession"
description: "Loads Unity Addressable assets and keeps them loaded until every user of the session is removed, then releases them all."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AddressableSession

A **class** in `Root.Township`, no namespace.

Loads Unity Addressable assets and keeps them loaded until every user of the session is removed, then releases them all.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AddressableSession()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private static int count"}</code> |  |
| <Link id="m-handlemap" /><code>{"private readonly Dictionary<string, AsyncOperationHandle> handleMap"}</code> |  |
| <Link id="m-handles" /><code>{"private readonly HashSet<AsyncOperationHandle> handles"}</code> |  |
| <Link id="m-index" /><code>{"private readonly int index"}</code> |  |
| <Link id="m-isdisposed" /><code>{"private bool isDisposed"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-next" /><code>{"private static int next"}</code> |  |
| <Link id="m-users" /><code>{"private readonly HashSet<object> users"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-adduser" /><code>{"void AddUser(object user)"}</code> | Registers something that still needs the loaded assets. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Removes the session itself as a user. |
| <Link id="m-loadasync" /><code>{"async Task<T> LoadAsync<T>(string address)"}</code> | Loads an asset by address, reusing the handle if already loaded. Throws once the session has ended. |
| <Link id="m-removeuser" /><code>{"void RemoveUser(object user)"}</code> | Removes a user. When none are left, releases every asset and ends the session. |

## Used in

Members of other types that take, return or hold a `AddressableSession`:

[`CosmeticCustomizationManager.Session`](/game-api/types/alta-customization/cosmeticcustomizationmanager#m-session), [`CosmeticPacker.FillPartMap`](/game-api/types/alta-customization/cosmeticpacker#m-fillpartmap), [`CosmeticPacker.PackFromScheduler`](/game-api/types/alta-customization/cosmeticpacker#m-packfromscheduler), [`CosmeticPacker.PackTask`](/game-api/types/alta-customization/cosmeticpacker#m-packtask), [`CosmeticPackScheduler.packSession`](/game-api/types/alta-customization/cosmeticpackscheduler#m-packsession), [`CosmeticPresetTrophy.session`](/game-api/types/alta-customization/cosmeticpresettrophy#m-session), [`CustomizationWrapper.Session`](/game-api/types/alta-customization/customizationwrapper#m-session), [`CustomizationWrapper.StartSession`](/game-api/types/alta-customization/customizationwrapper#m-startsession), [`CustomizationWrapper.StopSession`](/game-api/types/alta-customization/customizationwrapper#m-stopsession), [`ICustomizationWrapper.StartSession`](/game-api/types/alta-customization/icustomizationwrapper#m-startsession), [`ICustomizationWrapper.StopSession`](/game-api/types/alta-customization/icustomizationwrapper#m-stopsession), [`MainMenuShopItem.Setup`](/game-api/types/alta-customization/mainmenushopitem#m-setup), [`Purchasable.Get`](/game-api/types/alta-customization/purchasable#m-get), [`EditorOnlyAddressableSession.Session`](/game-api/types/global-e-h/editoronlyaddressablesession#m-session), [`LocalPlayerAdvertisingTrophy.session`](/game-api/types/global-i-l/localplayeradvertisingtrophy#m-session), [`ModellingCharacter.session`](/game-api/types/global-m-o/modellingcharacter#m-session).
