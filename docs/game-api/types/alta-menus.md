---
title: "Menus, UI and platforms"
description: "Types in Alta.Menu, Alta.Meta, Alta.UI, Alta.UserInterface and the login and platform namespaces of Root.Township."
sidebar_position: 12
---

# Menus, UI and platforms

Types in Alta.Menu, Alta.Meta, Alta.UI, Alta.UserInterface and the login and platform namespaces of Root.Township. 128 types, 0 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.FriendLocation

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ChunkRegion` | enum |  | 23 |  |

## Alta.Menu

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AssistedSpawnCommandAction` | class | `ServerMultiCommandAction`, `IUseVirtualKeyboard` | 8 |  |
| `AssistedSpawnCommandDefinition` | class | `ServerCommandDefinitionBase`, `IHasDynamicArguments`, `IUsesMultipleButtons` | 10 |  |
| `ButtonEnumMenuSetting` | class | `EnumMenuSettingBase` | 0 |  |
| `CustomScroller` | class | `MonoBehaviour` | 5 |  |
| `EnumMenuSettingBase` | class | `MenuGameSetting<EnumSettingAccess>` | 3 |  |
| `IHasDynamicArguments` | interface | `IUsesMultipleButtons` | 3 |  |
| `IProvideEnumerable<T>` | interface |  | 2 |  |
| `IUsesMultipleButtons` | interface |  | 2 |  |
| `MenuGameSetting` | abstract class | `MonoBehaviour` | 1 |  |
| `MenuGameSetting<T>` | abstract class | `MenuGameSetting` | 1 |  |
| `MenuToggleSetting` | class | `MenuGameSetting<ToggleGameSettingAccess>` | 0 |  |
| `QamOptionAsButtonCommand` | class | `ServerCommandDefinitionBase` | 1 |  |
| `ScrollerEnumMenuSetting` | class | `EnumMenuSettingBase` | 0 |  |
| `ScrollerSelector` | class | `MonoBehaviour` | 4 |  |
| `ServerComboCommandDefinition` | class | `ServerCommandDefinitionBase` | 2 |  |
| `ServerCommandAction` | class | `MenuGameSetting` | 2 |  |
| `ServerCommandDefinition` | class | `ServerCommandDefinitionBase` | 2 |  |
| `ServerCommandDefinitionBase` | abstract class | `SettingsFieldAccess` | 1 |  |
| `ServerMultiCommandAction` | class | `MenuGameSetting` | 1 |  |
| `ServerMultiOptionCommandDefinition` | class | `ServerCommandDefinitionBase`, `IUsesMultipleButtons` | 4 |  |
| `StandardFloatAsEnum` | class | `MenuGameSetting<FloatGameSettingsAccess>` | 3 |  |

## Alta.Meta.Friends

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Friend` | struct |  | 2 |  |
| `FriendsManager` | class | `LoggedInTool` | 6 |  |
| `FriendsManager.Tab` | enum |  | 3 |  |
| `IInitializable` | internal interface |  | 1 |  |
| `UserToken` | class | `MonoBehaviour` | 4 |  |

## Alta.Meta.Friends.Platform

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IPlatformFriendService` | interface |  | 3 |  |

## Alta.Meta.UI

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AutoComplete` | class |  | 5 |  |
| `Button` | class | `MonoBehaviour` | 13 |  |
| `ButtonCollection` | class | `MonoBehaviour` | 2 |  |
| `ButtonEvents` | class | `MonoBehaviour` | 0 |  |
| `ButtonSettings` | class | `ScriptableObject` | 0 |  |
| `ButtonWithEvents` | class | `Button` | 0 |  |
| `ConfirmPopupPanel` | class | `Panel` | 3 |  |
| `IAutoCompletionSource` | interface |  | 1 |  |
| `InputField` | class | `MonoBehaviour` | 10 |  |
| `InputFieldWithKeyboard` | class | `MonoBehaviour`, `IUseVirtualKeyboard` | 9 |  |
| `ListElement` | class | `MonoBehaviour` | 0 |  |
| `ListElementWithButton` | class | `TextListElement` | 5 |  |
| `ListElementWithButtonAndExtraText` | class | `ListElementWithButton` | 1 |  |
| `ListElementWithData<TData>` | abstract class | `ListElementWithButton` | 2 |  |
| `LoadingUI` | class | `MonoBehaviour` | 1 |  |
| `NavigateTo` | class | `MonoBehaviour` | 0 |  |
| `ObjectNamesInFolder` | class | `ScriptableObject`, `IAutoCompletionSource` | 2 |  |
| `OptionsConfig` | class |  | 4 |  |
| `OptionsPanel` | class | `Panel` | 1 |  |
| `OptionsPanelButtonConfig` | class |  | 2 |  |
| `Panel` | class | `MonoBehaviour` | 6 |  |
| `PanelComponent` | abstract class | `MonoBehaviour` | 3 |  |
| `Popup` | class | `MonoBehaviour` | 0 |  |
| `RecentPlayerPanelListElement` | class | `ListElementWithButtonAndExtraText` | 0 |  |
| `RopeUIList` | class | `UIList` | 5 |  |
| `ScalingFadeAnimator` | class | `MonoBehaviour`, `UIActionLock.ILockUIAction` | 2 |  |
| `SimpleTextPanel` | class | `Panel` | 1 |  |
| `SimpleUIList` | class | `UIList` | 1 |  |
| `Tab` | class | `Panel` | 0 |  |
| `TabbedPanel` | class | `Panel`, `IBuildRendererPostBake`, `IBuildBakeable` | 2 |  |
| `TabletToggle` | class | `MonoBehaviour` | 1 |  |
| `TextButton` | class | `ButtonWithEvents` | 1 |  |
| `TextListElement` | class | `ListElement` | 1 |  |
| `TouchScreenButton` | class | `Button`, `ITouchScreenButton` | 1 |  |
| `TouchScreenButtonVisual` | class | `MonoBehaviour` | 0 |  |
| `TouchScreenButtonVisualSettings` | class | `ButtonSettings` | 5 |  |
| `UIActionLock` | static class |  | 3 |  |
| `UIActionLock.ILockUIAction` | interface |  | 0 |  |
| `UIButtonType` | enum |  | 2 |  |
| `UIList` | abstract class | `MonoBehaviour` | 6 |  |
| `Window` | class | `MonoBehaviour` | 13 |  |

## Alta.Meta.UI.ServerManagement

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `APIStatusManager` | static class |  | 1 |  |
| `APIStatusNotification` | class | `UINotification`, `IEquatable<APIStatusNotification>` | 9 |  |
| `CreateGroupInfoPanel` | class | `MonoBehaviour` | 0 |  |
| `CreateServerPanel` | class | `ServerDetailsPanel` | 1 |  |
| `EditServerPanel` | class | `ServerDetailsPanel` | 1 |  |
| `FriendRequestNotification` | class | `UINotification`, `IEquatable<FriendRequestNotification>` | 9 |  |
| `FriendsInvitesPanel` | class | `PanelComponent` | 2 |  |
| `FriendsListPanel` | class | `PanelComponent` | 2 |  |
| `FriendsRequestsPanel` | class | `PanelComponent` | 2 |  |
| `GroupInfoTab` | class | `GroupPage` | 2 |  |
| `GroupInviteNotification` | class | `UINotification`, `IEquatable<GroupInviteNotification>` | 9 |  |
| `GroupMemberListElement` | class | `ListElementWithData<GroupMember>` | 0 |  |
| `GroupMembersPage` | class | `GroupPage` | 2 |  |
| `GroupPage` | abstract class | `PanelComponent` | 1 |  |
| `GroupPermissionsEnabler` | class | `MonoBehaviour` | 0 |  |
| `InboxPanel` | class | `PanelComponent` | 2 |  |
| `IncomingGroupRequestPage` | class | `GroupPage` | 1 |  |
| `InviteUserToGroupPanel` | class | `PanelComponent` | 3 |  |
| `InviteUserToGroupViaFriendsPanel` | class | `PanelComponent` | 4 |  |
| `JoinedGroupListElement` | class | `ListElementWithData<JoinedGroupManager>` | 1 |  |
| `JoinedGroupsList` | class | `PanelComponent` | 1 |  |
| `ListElementWith2Buttons` | class | `ListElementWithButton` | 1 |  |
| `LoggedInWindow` | class | `MonoBehaviour` | 0 |  |
| `OculusFriendsListPanel` | class | `PanelComponent` | 2 |  |
| `OutgoingGroupInvitesPage` | class | `GroupPage` | 1 |  |
| `PlayerReportBaseNotification` | abstract class | `UINotification` | 5 |  |
| `PlayerReportInboxInfoPanel` | class | `MonoBehaviour` | 1 |  |
| `PlayerReportNotification` | class | `PlayerReportBaseNotification`, `IEquatable<PlayerReportNotification>` | 10 |  |
| `PlayerReportSummaryNotification` | class | `PlayerReportBaseNotification`, `IEquatable<PlayerReportSummaryNotification>` | 10 |  |
| `PlayerReportSummaryPanel` | class | `MonoBehaviour` | 1 |  |
| `RecentPlayersListPanel` | class | `PanelComponent` | 2 |  |
| `ReportsPanel` | class | `PanelComponent` | 2 |  |
| `SelectedGroupPanel` | class | `MonoBehaviour` | 4 |  |
| `ServerDetailsPanel` | abstract class | `PanelComponent` | 0 |  |
| `ServerDetailsPanel.ButtonData` | class |  | 3 |  |
| `ServerRegions` | static class |  | 4 |  |
| `UINotification` | abstract class |  | 11 |  |

## Alta.OculusLogin

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AccountNameTextReplacer` | internal class | `MonoBehaviour` | 2 |  |
| `AltaAccountRegistererAndLinker` | internal class | `LoginAndRegisterHelper` | 3 |  |

## Alta.PlatformSpecific.Oculus

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ErrorTestType` | enum |  | 5 |  |
| `OculusDestinationController` | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 0 |  |
| `PlatformLaunchDetails` | class |  | 10 |  |
| `PlatformLaunchResult` | enum |  | 7 |  |

## Alta.SocialTablet

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `RecentPlayersPage` | class | `PanelComponent` | 1 |  |

## Alta.UI

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `DynamicMask` | class | `MonoBehaviour` | 11 |  |
| `RepairBoxDevCommand` | enum |  | 2 |  |
| `RepairBoxDevControlPanel` | class | `MonoBehaviour` | 0 |  |
| `TextureMode` | enum |  | 4 |  |
| `VersionDisplay` | class | `MonoBehaviour` | 0 |  |

## Alta.UserAuthentication

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `GeneralLoadingObjectManager` | class | `TempSceneObject` | 1 |  |

## Alta.UserInterface

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `FeedbackInteractionPoint` | class | `LabelledInteractPoint` | 0 |  |
| `LabelledInteractPoint` | class | `SimpleInteractPoint` | 1 |  |
| `SimpleInteractPoint` | class | `Interactable` | 3 |  |

## Alta.UserInterface.SocialTablet

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `SocialTabletActionSyncStruct` | internal struct |  | 4 |  |
| `SocialTabletActionType` | enum |  | 3 |  |

## Alta.XR

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `TrackedDevice` | enum |  | 3 |  |
| `VRSetup` | static class |  | 2 |  |
| `VRTrackedDevice` | class | `IDisposable` | 3 |  |
| `VRTrackedDevice.PositionPostProcessor` | delegate |  | 0 |  |
