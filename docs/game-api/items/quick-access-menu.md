---
title: Quick access menu
description: The radial hand menu (QuickAccessMenuController and its menu actions) and summoned action items, which the server spawns per player.
sidebar_position: 15
---

# Quick access menu

The quick access menu is the ring of bubbles a player opens from their hand: settings, mic mute, height, summoned items and so on. It's in `Alta.QuickAccessActions` in `Root.Township`. The menu is client only; the summoned items are spawned by the server.

## QuickAccessMenuController

`Alta.QuickAccessActions.QuickAccessMenuController`, a `ControllerExtension` on each hand. Only the local player's hands set it up (`InitializeControllerExtension` returns early for other players), so it does nothing on a server.

It holds two private arrays of menu actions, `quickAccessMenus` and `devQuickAccessMenus`, set in the prefab. Developer actions show in the editor, or when the player's Alta identity token said they were a developer. The button that opens it is the `QuickAccessMenu` controller action (hold) or `ToggleQuickAccessMenu`.

| Member | What it does |
| --- | --- |
| `QuickAccessMenuSettings Settings { get; }` | Global look and feel (`GlobalSettings<QuickAccessMenuSettings>`). |
| `Transform MenusParent { get; }` | Where the bubbles are spawned. |
| `void SetCenteredTitle(string)` | The title shown in the middle. |
| `void AddNested(IEnumerable<QuickAccessMenuBubble>)` / `RemoveNested(...)` | Sub-menus. |
| `event Action<QuickAccessMenuBubble> newBubbleMarked` | A bubble was selected. |

## QuickAccessMenuAction

`Alta.QuickAccessActions.QuickAccessMenuAction`, an abstract `ScriptableObject`. Each bubble is one of these assets.

| Member | What it does |
| --- | --- |
| `abstract bool IsValid { get; }` | Whether it can be used now (shown greyed out otherwise). |
| `abstract bool IsActive { get; }` | Whether it's on (for toggles). |
| `virtual bool IsIgnored { get; }` | Hidden on this platform. |
| `virtual void Run(Controller controller)` | What happens when it's chosen. |
| `virtual void Open()` / `Close()` | The menu opened or closed. |
| `virtual void InitializeForPlayer(Player, bool isDev)` | Called once per local hand at start. |
| `string DisplayName { get; }` | Its label. |
| `GameObject GetPrefab(Transform parent)` | Makes its icon. |
| `event Action<bool> UpdatedValid` / `UpdatedActive` | Raised by `UpdateValid()` / `UpdateActive()` (protected) so the bubble refreshes. |

Built-in actions include `MicMuteQuickAccessAction`, `MuteNonFriendsQuickAccessAction`, `ToggleAccessibleDockMenuAction`, `UpdateHeightMenuAction`, `ToggleEnemyHealthBars`, `ShowNames`, `ReturnToMainMenuAction`, `SettingsQuickAccessMenu`, `NestingMenuAction` and the summon actions below, plus developer tools (`ToggleRuntimeConsole`, `PhysicsFPSMenuAction`, `MemoryDumpMenuAction` and others).

To add your own, you'd make a subclass with `ScriptableObject.CreateInstance`, give it an icon prefab and a name (private fields `prefab` and `displayName`), and add it to the private `quickAccessMenus` array of both hands' controllers before they initialise. That's untested; the array is read when the menu opens and in `InitializeControllerExtension`.

`QuickAccessMenuAction.Run` is virtual, and the subclasses override it. To see every choice, patch `QuickAccessMenuBubble.Run(Controller)`, which the controller calls on the chosen bubble, or patch the `Run` override you care about.

## Summoned action items

Some bubbles summon an object in front of the player (`SummonActionItemQuickAccess`). Choosing it again sends it away.

- `SummonActionItemQuickAccess.Run` calls `ActionItemsManager.Instance.UpdateActionItemStatusForPlayer`. It isn't valid while the player is downed.
- `ActionItemsManager` (a `NetworkEntityBehaviour` singleton, `ActionItemsManager.Instance`) sends the request to the server (`SyncA`). The server spawns the item (`ActionItemData.ActionItemPrefab`) at `DistanceFromPlayer` in front of the player's head, unsaved, owned by that player (`ActionItem.SetupOwner`), or destroys the one they have. It tells clients with `EffectRequest`.
- `ActionItemData` (a `ScriptableObject`) has the prefab, the distance, how far the player may walk away (`MaxDistanceFromPlayerSquared`), `TimeToDespawn` and the effects.
- `ActionItem` is the component on the summoned object: `Owner`, `IsLocalPlayer`, `event Action<IPlayer> OwnerUpdated`, `Fade(bool)`.

The three `ActionItemData` assets (build main-1.7.2.1.42203) are `Friend Token Data`, `Social Tablet Data` and `Teleport Tablet Data`. Each spawns its item 1 m in front of the head; once the player is more than 3 m away (`maxDistanceFromPlayerSquared` 9), both hands buzz and the item goes after 4 s (`timeToDespawn`), unless the player comes back in range first.

The server keeps one per player per action and drops a player's items when they disconnect.

:::note
`ActionItemsManager.PlayItemEffects` plays the spawn and disappear effects only when the game is headless. That looks inverted, so on a normal client those effects may never play.
:::

## See also

- [Interactor and hands](interactor-and-hands.md)
