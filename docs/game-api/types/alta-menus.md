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
| [`ChunkRegion`](/game-api/types/alta-menus/chunkregion) | enum |  | 23 |  |

## Alta.Menu

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AssistedSpawnCommandAction`](/game-api/types/alta-menus/assistedspawncommandaction) | class | `ServerMultiCommandAction`, `IUseVirtualKeyboard` | 8 |  |
| [`AssistedSpawnCommandDefinition`](/game-api/types/alta-menus/assistedspawncommanddefinition) | class | `ServerCommandDefinitionBase`, `IHasDynamicArguments`, `IUsesMultipleButtons` | 10 |  |
| [`ButtonEnumMenuSetting`](/game-api/types/alta-menus/buttonenummenusetting) | class | `EnumMenuSettingBase` | 0 |  |
| [`CustomScroller`](/game-api/types/alta-menus/customscroller) | class | `MonoBehaviour` | 5 |  |
| [`EnumMenuSettingBase`](/game-api/types/alta-menus/enummenusettingbase) | class | `MenuGameSetting<EnumSettingAccess>` | 3 |  |
| [`IHasDynamicArguments`](/game-api/types/alta-menus/ihasdynamicarguments) | interface | `IUsesMultipleButtons` | 3 |  |
| [`IProvideEnumerable<T>`](/game-api/types/alta-menus/iprovideenumerable-t) | interface |  | 2 |  |
| [`IUsesMultipleButtons`](/game-api/types/alta-menus/iusesmultiplebuttons) | interface |  | 2 |  |
| [`MenuGameSetting`](/game-api/types/alta-menus/menugamesetting) | abstract class | `MonoBehaviour` | 1 |  |
| [`MenuGameSetting<T>`](/game-api/types/alta-menus/menugamesetting-t) | abstract class | `MenuGameSetting` | 1 |  |
| [`MenuToggleSetting`](/game-api/types/alta-menus/menutogglesetting) | class | `MenuGameSetting<ToggleGameSettingAccess>` | 0 |  |
| [`QamOptionAsButtonCommand`](/game-api/types/alta-menus/qamoptionasbuttoncommand) | class | `ServerCommandDefinitionBase` | 1 |  |
| [`ScrollerEnumMenuSetting`](/game-api/types/alta-menus/scrollerenummenusetting) | class | `EnumMenuSettingBase` | 0 |  |
| [`ScrollerSelector`](/game-api/types/alta-menus/scrollerselector) | class | `MonoBehaviour` | 4 |  |
| [`ServerComboCommandDefinition`](/game-api/types/alta-menus/servercombocommanddefinition) | class | `ServerCommandDefinitionBase` | 2 |  |
| [`ServerCommandAction`](/game-api/types/alta-menus/servercommandaction) | class | `MenuGameSetting` | 2 |  |
| [`ServerCommandDefinition`](/game-api/types/alta-menus/servercommanddefinition) | class | `ServerCommandDefinitionBase` | 2 |  |
| [`ServerCommandDefinitionBase`](/game-api/types/alta-menus/servercommanddefinitionbase) | abstract class | `SettingsFieldAccess` | 1 |  |
| [`ServerMultiCommandAction`](/game-api/types/alta-menus/servermulticommandaction) | class | `MenuGameSetting` | 1 |  |
| [`ServerMultiOptionCommandDefinition`](/game-api/types/alta-menus/servermultioptioncommanddefinition) | class | `ServerCommandDefinitionBase`, `IUsesMultipleButtons` | 4 |  |
| [`StandardFloatAsEnum`](/game-api/types/alta-menus/standardfloatasenum) | class | `MenuGameSetting<FloatGameSettingsAccess>` | 3 |  |

## Alta.Meta.Friends

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`Friend`](/game-api/types/alta-menus/friend) | struct |  | 2 |  |
| [`FriendsManager`](/game-api/types/alta-menus/friendsmanager) | class | `LoggedInTool` | 6 |  |
| [`FriendsManager.Tab`](/game-api/types/alta-menus/friendsmanager-tab) | enum |  | 3 |  |
| [`IInitializable`](/game-api/types/alta-menus/iinitializable) | internal interface |  | 1 |  |
| [`UserToken`](/game-api/types/alta-menus/usertoken) | class | `MonoBehaviour` | 4 |  |

## Alta.Meta.Friends.Platform

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`IPlatformFriendService`](/game-api/types/alta-menus/iplatformfriendservice) | interface |  | 3 |  |

## Alta.Meta.UI

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AutoComplete`](/game-api/types/alta-menus/autocomplete) | class |  | 5 |  |
| [`Button`](/game-api/types/alta-menus/button) | class | `MonoBehaviour` | 13 |  |
| [`ButtonCollection`](/game-api/types/alta-menus/buttoncollection) | class | `MonoBehaviour` | 2 |  |
| [`ButtonEvents`](/game-api/types/alta-menus/buttonevents) | class | `MonoBehaviour` | 0 |  |
| [`ButtonSettings`](/game-api/types/alta-menus/buttonsettings) | class | `ScriptableObject` | 0 |  |
| [`ButtonWithEvents`](/game-api/types/alta-menus/buttonwithevents) | class | `Button` | 0 |  |
| [`ConfirmPopupPanel`](/game-api/types/alta-menus/confirmpopuppanel) | class | `Panel` | 3 |  |
| [`IAutoCompletionSource`](/game-api/types/alta-menus/iautocompletionsource) | interface |  | 1 |  |
| [`InputField`](/game-api/types/alta-menus/inputfield) | class | `MonoBehaviour` | 10 |  |
| [`InputFieldWithKeyboard`](/game-api/types/alta-menus/inputfieldwithkeyboard) | class | `MonoBehaviour`, `IUseVirtualKeyboard` | 9 |  |
| [`ListElement`](/game-api/types/alta-menus/listelement) | class | `MonoBehaviour` | 0 |  |
| [`ListElementWithButton`](/game-api/types/alta-menus/listelementwithbutton) | class | `TextListElement` | 5 |  |
| [`ListElementWithButtonAndExtraText`](/game-api/types/alta-menus/listelementwithbuttonandextratext) | class | `ListElementWithButton` | 1 |  |
| [`ListElementWithData<TData>`](/game-api/types/alta-menus/listelementwithdata-tdata) | abstract class | `ListElementWithButton` | 2 |  |
| [`LoadingUI`](/game-api/types/alta-menus/loadingui) | class | `MonoBehaviour` | 1 |  |
| [`NavigateTo`](/game-api/types/alta-menus/navigateto) | class | `MonoBehaviour` | 0 |  |
| [`ObjectNamesInFolder`](/game-api/types/alta-menus/objectnamesinfolder) | class | `ScriptableObject`, `IAutoCompletionSource` | 2 |  |
| [`OptionsConfig`](/game-api/types/alta-menus/optionsconfig) | class |  | 4 |  |
| [`OptionsPanel`](/game-api/types/alta-menus/optionspanel) | class | `Panel` | 1 |  |
| [`OptionsPanelButtonConfig`](/game-api/types/alta-menus/optionspanelbuttonconfig) | class |  | 2 |  |
| [`Panel`](/game-api/types/alta-menus/panel) | class | `MonoBehaviour` | 6 |  |
| [`PanelComponent`](/game-api/types/alta-menus/panelcomponent) | abstract class | `MonoBehaviour` | 3 |  |
| [`Popup`](/game-api/types/alta-menus/popup) | class | `MonoBehaviour` | 0 |  |
| [`RecentPlayerPanelListElement`](/game-api/types/alta-menus/recentplayerpanellistelement) | class | `ListElementWithButtonAndExtraText` | 0 |  |
| [`RopeUIList`](/game-api/types/alta-menus/ropeuilist) | class | `UIList` | 5 |  |
| [`ScalingFadeAnimator`](/game-api/types/alta-menus/scalingfadeanimator) | class | `MonoBehaviour`, `UIActionLock.ILockUIAction` | 2 |  |
| [`SimpleTextPanel`](/game-api/types/alta-menus/simpletextpanel) | class | `Panel` | 1 |  |
| [`SimpleUIList`](/game-api/types/alta-menus/simpleuilist) | class | `UIList` | 1 |  |
| [`Tab`](/game-api/types/alta-menus/tab) | class | `Panel` | 0 |  |
| [`TabbedPanel`](/game-api/types/alta-menus/tabbedpanel) | class | `Panel`, `IBuildRendererPostBake`, `IBuildBakeable` | 2 |  |
| [`TabletToggle`](/game-api/types/alta-menus/tablettoggle) | class | `MonoBehaviour` | 1 |  |
| [`TextButton`](/game-api/types/alta-menus/textbutton) | class | `ButtonWithEvents` | 1 |  |
| [`TextListElement`](/game-api/types/alta-menus/textlistelement) | class | `ListElement` | 1 |  |
| [`TouchScreenButton`](/game-api/types/alta-menus/touchscreenbutton) | class | `Button`, `ITouchScreenButton` | 1 |  |
| [`TouchScreenButtonVisual`](/game-api/types/alta-menus/touchscreenbuttonvisual) | class | `MonoBehaviour` | 0 |  |
| [`TouchScreenButtonVisualSettings`](/game-api/types/alta-menus/touchscreenbuttonvisualsettings) | class | `ButtonSettings` | 5 |  |
| [`UIActionLock`](/game-api/types/alta-menus/uiactionlock) | static class |  | 3 |  |
| [`UIActionLock.ILockUIAction`](/game-api/types/alta-menus/uiactionlock-ilockuiaction) | interface |  | 0 |  |
| [`UIButtonType`](/game-api/types/alta-menus/uibuttontype) | enum |  | 2 |  |
| [`UIList`](/game-api/types/alta-menus/uilist) | abstract class | `MonoBehaviour` | 6 |  |
| [`Window`](/game-api/types/alta-menus/window) | class | `MonoBehaviour` | 13 |  |

## Alta.Meta.UI.ServerManagement

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`APIStatusManager`](/game-api/types/alta-menus/apistatusmanager) | static class |  | 1 |  |
| [`APIStatusNotification`](/game-api/types/alta-menus/apistatusnotification) | class | `UINotification`, `IEquatable<APIStatusNotification>` | 9 |  |
| [`CreateGroupInfoPanel`](/game-api/types/alta-menus/creategroupinfopanel) | class | `MonoBehaviour` | 0 |  |
| [`CreateServerPanel`](/game-api/types/alta-menus/createserverpanel) | class | `ServerDetailsPanel` | 1 |  |
| [`EditServerPanel`](/game-api/types/alta-menus/editserverpanel) | class | `ServerDetailsPanel` | 1 |  |
| [`FriendRequestNotification`](/game-api/types/alta-menus/friendrequestnotification) | class | `UINotification`, `IEquatable<FriendRequestNotification>` | 9 |  |
| [`FriendsInvitesPanel`](/game-api/types/alta-menus/friendsinvitespanel) | class | `PanelComponent` | 2 |  |
| [`FriendsListPanel`](/game-api/types/alta-menus/friendslistpanel) | class | `PanelComponent` | 2 |  |
| [`FriendsRequestsPanel`](/game-api/types/alta-menus/friendsrequestspanel) | class | `PanelComponent` | 2 |  |
| [`GroupInfoTab`](/game-api/types/alta-menus/groupinfotab) | class | `GroupPage` | 2 |  |
| [`GroupInviteNotification`](/game-api/types/alta-menus/groupinvitenotification) | class | `UINotification`, `IEquatable<GroupInviteNotification>` | 9 |  |
| [`GroupMemberListElement`](/game-api/types/alta-menus/groupmemberlistelement) | class | `ListElementWithData<GroupMember>` | 0 |  |
| [`GroupMembersPage`](/game-api/types/alta-menus/groupmemberspage) | class | `GroupPage` | 2 |  |
| [`GroupPage`](/game-api/types/alta-menus/grouppage) | abstract class | `PanelComponent` | 1 |  |
| [`GroupPermissionsEnabler`](/game-api/types/alta-menus/grouppermissionsenabler) | class | `MonoBehaviour` | 0 |  |
| [`InboxPanel`](/game-api/types/alta-menus/inboxpanel) | class | `PanelComponent` | 2 |  |
| [`IncomingGroupRequestPage`](/game-api/types/alta-menus/incominggrouprequestpage) | class | `GroupPage` | 1 |  |
| [`InviteUserToGroupPanel`](/game-api/types/alta-menus/inviteusertogrouppanel) | class | `PanelComponent` | 3 |  |
| [`InviteUserToGroupViaFriendsPanel`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel) | class | `PanelComponent` | 4 |  |
| [`JoinedGroupListElement`](/game-api/types/alta-menus/joinedgrouplistelement) | class | `ListElementWithData<JoinedGroupManager>` | 1 |  |
| [`JoinedGroupsList`](/game-api/types/alta-menus/joinedgroupslist) | class | `PanelComponent` | 1 |  |
| [`ListElementWith2Buttons`](/game-api/types/alta-menus/listelementwith2buttons) | class | `ListElementWithButton` | 1 |  |
| [`LoggedInWindow`](/game-api/types/alta-menus/loggedinwindow) | class | `MonoBehaviour` | 0 |  |
| [`OculusFriendsListPanel`](/game-api/types/alta-menus/oculusfriendslistpanel) | class | `PanelComponent` | 2 |  |
| [`OutgoingGroupInvitesPage`](/game-api/types/alta-menus/outgoinggroupinvitespage) | class | `GroupPage` | 1 |  |
| [`PlayerReportBaseNotification`](/game-api/types/alta-menus/playerreportbasenotification) | abstract class | `UINotification` | 5 |  |
| [`PlayerReportInboxInfoPanel`](/game-api/types/alta-menus/playerreportinboxinfopanel) | class | `MonoBehaviour` | 1 |  |
| [`PlayerReportNotification`](/game-api/types/alta-menus/playerreportnotification) | class | `PlayerReportBaseNotification`, `IEquatable<PlayerReportNotification>` | 10 |  |
| [`PlayerReportSummaryNotification`](/game-api/types/alta-menus/playerreportsummarynotification) | class | `PlayerReportBaseNotification`, `IEquatable<PlayerReportSummaryNotification>` | 10 |  |
| [`PlayerReportSummaryPanel`](/game-api/types/alta-menus/playerreportsummarypanel) | class | `MonoBehaviour` | 1 |  |
| [`RecentPlayersListPanel`](/game-api/types/alta-menus/recentplayerslistpanel) | class | `PanelComponent` | 2 |  |
| [`ReportsPanel`](/game-api/types/alta-menus/reportspanel) | class | `PanelComponent` | 2 |  |
| [`SelectedGroupPanel`](/game-api/types/alta-menus/selectedgrouppanel) | class | `MonoBehaviour` | 4 |  |
| [`ServerDetailsPanel`](/game-api/types/alta-menus/serverdetailspanel) | abstract class | `PanelComponent` | 0 |  |
| [`ServerDetailsPanel.ButtonData`](/game-api/types/alta-menus/serverdetailspanel-buttondata) | class |  | 3 |  |
| [`ServerRegions`](/game-api/types/alta-menus/serverregions) | static class |  | 4 |  |
| [`UINotification`](/game-api/types/alta-menus/uinotification) | abstract class |  | 11 |  |

## Alta.OculusLogin

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AccountNameTextReplacer`](/game-api/types/alta-menus/accountnametextreplacer) | internal class | `MonoBehaviour` | 2 |  |
| [`AltaAccountRegistererAndLinker`](/game-api/types/alta-menus/altaaccountregistererandlinker) | internal class | `LoginAndRegisterHelper` | 3 |  |

## Alta.PlatformSpecific.Oculus

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ErrorTestType`](/game-api/types/alta-menus/errortesttype) | enum |  | 5 |  |
| [`OculusDestinationController`](/game-api/types/alta-menus/oculusdestinationcontroller) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 0 |  |
| [`PlatformLaunchDetails`](/game-api/types/alta-menus/platformlaunchdetails) | class |  | 10 |  |
| [`PlatformLaunchResult`](/game-api/types/alta-menus/platformlaunchresult) | enum |  | 7 |  |

## Alta.SocialTablet

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`RecentPlayersPage`](/game-api/types/alta-menus/recentplayerspage) | class | `PanelComponent` | 1 |  |

## Alta.UI

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`DynamicMask`](/game-api/types/alta-menus/dynamicmask) | class | `MonoBehaviour` | 11 |  |
| [`RepairBoxDevCommand`](/game-api/types/alta-menus/repairboxdevcommand) | enum |  | 2 |  |
| [`RepairBoxDevControlPanel`](/game-api/types/alta-menus/repairboxdevcontrolpanel) | class | `MonoBehaviour` | 0 |  |
| [`TextureMode`](/game-api/types/alta-menus/texturemode) | enum |  | 4 |  |
| [`VersionDisplay`](/game-api/types/alta-menus/versiondisplay) | class | `MonoBehaviour` | 0 |  |

## Alta.UserAuthentication

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`GeneralLoadingObjectManager`](/game-api/types/alta-menus/generalloadingobjectmanager) | class | `TempSceneObject` | 1 |  |

## Alta.UserInterface

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`FeedbackInteractionPoint`](/game-api/types/alta-menus/feedbackinteractionpoint) | class | `LabelledInteractPoint` | 0 |  |
| [`LabelledInteractPoint`](/game-api/types/alta-menus/labelledinteractpoint) | class | `SimpleInteractPoint` | 1 |  |
| [`SimpleInteractPoint`](/game-api/types/alta-menus/simpleinteractpoint) | class | `Interactable` | 3 |  |

## Alta.UserInterface.SocialTablet

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`SocialTabletActionSyncStruct`](/game-api/types/alta-menus/socialtabletactionsyncstruct) | internal struct |  | 4 |  |
| [`SocialTabletActionType`](/game-api/types/alta-menus/socialtabletactiontype) | enum |  | 3 |  |

## Alta.XR

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`TrackedDevice`](/game-api/types/alta-menus/trackeddevice) | enum |  | 3 |  |
| [`VRSetup`](/game-api/types/alta-menus/vrsetup) | static class |  | 2 |  |
| [`VRTrackedDevice`](/game-api/types/alta-menus/vrtrackeddevice) | class | `IDisposable` | 3 |  |
| [`VRTrackedDevice.PositionPostProcessor`](/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor) | delegate |  | 0 |  |
