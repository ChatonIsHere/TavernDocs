---
title: "LoggedInTool"
description: "Base for menu tools that only work while logged in to Alta's account services, such as the shop and cosmetics interfaces."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoggedInTool

An **abstract class** in `Root.Township`, the global namespace.

Base for menu tools that only work while logged in to Alta's account services, such as the shop and cosmetics interfaces. It follows `LoginManager`'s login and logout events.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`AdminTool`](/mod/game-api/types/global-a-b/admintool), [`CosmeticPresetsManager`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager), [`MainMenuCustomizationInterface`](/mod/game-api/types/alta-customization/mainmenucustomizationinterface), [`MainMenuShopInterface`](/mod/game-api/types/alta-customization/mainmenushopinterface), [`ShopInterface`](/mod/game-api/types/alta-customization/shopinterface), [`FriendsManager`](/mod/game-api/types/alta-menus/friendsmanager), [`ServersManager`](/mod/game-api/types/alta-networking/serversmanager), [`EmailVerificationController`](/mod/game-api/types/global-e-h/emailverificationcontroller), [`IAPViewModel`](/mod/game-api/types/game-other-namespaces/iapviewmodel), [`LogoutAction`](/mod/game-api/types/global-i-l/logoutaction), [`PlayTutorialChecker`](/mod/game-api/types/global-p/playtutorialchecker), [`StoreRotationPopup`](/mod/game-api/types/global-s/storerotationpopup), [`SubscriptionManager`](/mod/game-api/types/global-s/subscriptionmanager), [`UserGreeter`](/mod/game-api/types/global-t-x/usergreeter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LoggedInTool()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected abstract void LoggedIn()"}</code> | Called on login, and on `Start` if already logged in. |
| <Link id="m-loggedout" /><code>{"protected abstract void LoggedOut()"}</code> | Called on logout. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Unsubscribes from the login events. |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | Subscribes to the login events. |
