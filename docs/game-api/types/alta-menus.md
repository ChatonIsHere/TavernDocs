---
title: "Menus, UI and platforms"
description: "Types in Alta.Menu, Alta.Meta, Alta.UI, Alta.UserInterface and the login and platform namespaces of Root.Township."
sidebar_position: 12
---

# Menus, UI and platforms

Types in Alta.Menu, Alta.Meta, Alta.UI, Alta.UserInterface and the login and platform namespaces of Root.Township. 128 types, 0 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.FriendLocation

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ChunkRegion`](/game-api/types/alta-menus/chunkregion) | enum |  | 23 | Named regions of the world (town buildings, overworld areas, caves, combat trials) used to tell friends where a player is, such as Oculus destinations. |

## Alta.Menu

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AssistedSpawnCommandAction`](/game-api/types/alta-menus/assistedspawncommandaction) | class | `ServerMultiCommandAction`, `IUseVirtualKeyboard` | 8 |  |
| [`AssistedSpawnCommandDefinition`](/game-api/types/alta-menus/assistedspawncommanddefinition) | class | `ServerCommandDefinitionBase`, `IHasDynamicArguments`, `IUsesMultipleButtons` | 10 | Menu command asset that builds a `spawn` command for the local player from a chosen prefab and quantity, then routes it to the server. Created from the Township/Assisted Spawn asset menu. |
| [`ButtonEnumMenuSetting`](/game-api/types/alta-menus/buttonenummenusetting) | class | `EnumMenuSettingBase` | 0 |  |
| [`CustomScroller`](/game-api/types/alta-menus/customscroller) | class | `MonoBehaviour` | 5 | A rotating drum menu driven by a `SelectionLever`: holding the lever off-centre spins the drum and steps through a list of string values. Used by the server creator. |
| [`EnumMenuSettingBase`](/game-api/types/alta-menus/enummenusettingbase) | class | `MenuGameSetting<EnumSettingAccess>` | 3 | A menu setting that steps through a list of string values (next and previous) and writes the chosen one to its setting. |
| [`IHasDynamicArguments`](/game-api/types/alta-menus/ihasdynamicarguments) | interface | `IUsesMultipleButtons` | 3 |  |
| [`IProvideEnumerable<T>`](/game-api/types/alta-menus/iprovideenumerable-t) | interface |  | 2 | Something that supplies a changing list of values to a menu, such as `FriendSelector` feeding a `ScrollerSelector` on the same object. |
| [`IUsesMultipleButtons`](/game-api/types/alta-menus/iusesmultiplebuttons) | interface |  | 2 | A menu command shown as a row of buttons, one per label. |
| [`MenuGameSetting`](/game-api/types/alta-menus/menugamesetting) | abstract class | `MonoBehaviour` | 1 | Base for an in-game menu widget that shows one game setting. The generic `MenuGameSetting<T>` does the work. |
| [`MenuGameSetting<T>`](/game-api/types/alta-menus/menugamesetting-t) | abstract class | `MenuGameSetting` | 1 | Base for one setting row in the in-game settings panel, showing a setting of type `T`. Client only. Hides itself if the setting isn't valid on this platform. |
| [`MenuToggleSetting`](/game-api/types/alta-menus/menutogglesetting) | class | `MenuGameSetting<ToggleGameSettingAccess>` | 0 |  |
| [`QamOptionAsButtonCommand`](/game-api/types/alta-menus/qamoptionasbuttoncommand) | class | `ServerCommandDefinitionBase` | 1 |  |
| [`ScrollerEnumMenuSetting`](/game-api/types/alta-menus/scrollerenummenusetting) | class | `EnumMenuSettingBase` | 0 |  |
| [`ScrollerSelector`](/game-api/types/alta-menus/scrollerselector) | class | `MonoBehaviour` | 4 | Menu wheel that scrolls through a list of text values with a lever. Gets its values from an `IProvideEnumerable<string>` on the same object. |
| [`ServerComboCommandDefinition`](/game-api/types/alta-menus/servercombocommanddefinition) | class | `ServerCommandDefinitionBase` | 2 |  |
| [`ServerCommandAction`](/game-api/types/alta-menus/servercommandaction) | class | `MenuGameSetting` | 2 |  |
| [`ServerCommandDefinition`](/game-api/types/alta-menus/servercommanddefinition) | class | `ServerCommandDefinitionBase` | 2 |  |
| [`ServerCommandDefinitionBase`](/game-api/types/alta-menus/servercommanddefinitionbase) | abstract class | `SettingsFieldAccess` | 1 | Base for quick access menu settings that run a server command when used, such as `ServerCommandDefinition`, `ServerMultiOptionCommandDefinition` and `AssistedSpawnCommandDefinition`. |
| [`ServerMultiCommandAction`](/game-api/types/alta-menus/servermulticommandaction) | class | `MenuGameSetting` | 1 |  |
| [`ServerMultiOptionCommandDefinition`](/game-api/types/alta-menus/servermultioptioncommanddefinition) | class | `ServerCommandDefinitionBase`, `IUsesMultipleButtons` | 4 | Menu command asset with several fixed commands, one per button. The chosen one is routed to the server when run. |
| [`StandardFloatAsEnum`](/game-api/types/alta-menus/standardfloatasenum) | class | `MenuGameSetting<FloatGameSettingsAccess>` | 3 |  |

## Alta.Meta.Friends

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Friend`](/game-api/types/alta-menus/friend) | struct |  | 2 | A friend entry: the user's ID and display name. |
| [`FriendsManager`](/game-api/types/alta-menus/friendsmanager) | class | `LoggedInTool` | 6 | Main menu friends board: lists friends or friend requests from the Alta API as user tokens on a rope board. Client side. |
| [`FriendsManager.Tab`](/game-api/types/alta-menus/friendsmanager-tab) | enum |  | 3 | The tabs of the friends menu: friends, friend requests and Oculus friends. |
| [`IInitializable`](/game-api/types/alta-menus/iinitializable) | internal interface |  | 1 |  |
| [`UserToken`](/game-api/types/alta-menus/usertoken) | class | `MonoBehaviour` | 4 | One user entry on the friends board, with optional accept and reject buttons. |

## Alta.Meta.Friends.Platform

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IPlatformFriendService`](/game-api/types/alta-menus/iplatformfriendservice) | interface |  | 3 | Platform (Oculus) friend list service, got from `InterfaceResolver.IPlatformFriendService`. In this build the resolver returns null, so there is no implementation. |

## Alta.Meta.UI

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AutoComplete`](/game-api/types/alta-menus/autocomplete) | class |  | 5 | Case-insensitive autocomplete over an `IAutoCompletionSource`: prefix matches first, then other matches containing the input. |
| [`Button`](/game-api/types/alta-menus/button) | class | `MonoBehaviour` | 13 | A simple button component for the in-game (meta) UI. Holds a label, enabled flag and pressed state, raises events, and plays press and release sounds if set. |
| [`ButtonCollection`](/game-api/types/alta-menus/buttoncollection) | class | `MonoBehaviour` | 2 | A group of menu buttons where one is selected at a time, like tabs. The selected button is disabled until another is pressed. |
| [`ButtonEvents`](/game-api/types/alta-menus/buttonevents) | class | `MonoBehaviour` | 0 |  |
| [`ButtonSettings`](/game-api/types/alta-menus/buttonsettings) | class | `ScriptableObject` | 0 | An empty ScriptableObject asset for UI button settings (menu Township/UI/Button Settings). It holds nothing in this build. |
| [`ButtonWithEvents`](/game-api/types/alta-menus/buttonwithevents) | class | `Button` | 0 | A menu `Button` that also fires Unity events set in the inspector when pressed, released, enabled or disabled. |
| [`ConfirmPopupPanel`](/game-api/types/alta-menus/confirmpopuppanel) | class | `Panel` | 3 | Client: menu popup with a message and confirm and cancel buttons. Call `Setup` with the text and callbacks, then show it; it hides itself after either button. |
| [`IAutoCompletionSource`](/game-api/types/alta-menus/iautocompletionsource) | interface |  | 1 | Something that supplies a list of strings for an autocomplete text field, such as object names in a folder. |
| [`InputField`](/game-api/types/alta-menus/inputfield) | class | `MonoBehaviour` | 10 | A text input field in the game's world-space menus, showing its text through a `TextRenderer` with an optional caret and secret (password) mode. |
| [`InputFieldWithKeyboard`](/game-api/types/alta-menus/inputfieldwithkeyboard) | class | `MonoBehaviour`, `IUseVirtualKeyboard` | 9 | Client: connects a UI `InputField` to the in-world VR `TouchScreenKeyboard`, showing it at a marker and passing typed text back. |
| [`ListElement`](/game-api/types/alta-menus/listelement) | class | `MonoBehaviour` | 0 | Empty component, probably a marker for items in a UI list. |
| [`ListElementWithButton`](/game-api/types/alta-menus/listelementwithbutton) | class | `TextListElement` | 5 | A text list entry with a button. Pressing the button selects it. |
| [`ListElementWithButtonAndExtraText`](/game-api/types/alta-menus/listelementwithbuttonandextratext) | class | `ListElementWithButton` | 1 |  |
| [`ListElementWithData<TData>`](/game-api/types/alta-menus/listelementwithdata-tdata) | abstract class | `ListElementWithButton` | 2 |  |
| [`LoadingUI`](/game-api/types/alta-menus/loadingui) | class | `MonoBehaviour` | 1 | A loading indicator in the menu UI that can be shown or hidden. |
| [`NavigateTo`](/game-api/types/alta-menus/navigateto) | class | `MonoBehaviour` | 0 |  |
| [`ObjectNamesInFolder`](/game-api/types/alta-menus/objectnamesinfolder) | class | `ScriptableObject`, `IAutoCompletionSource` | 2 |  |
| [`OptionsConfig`](/game-api/types/alta-menus/optionsconfig) | class |  | 4 | One option button for a menu window's options popup: label, action to run and button style. Used by friend panels for things like Revoke. |
| [`OptionsPanel`](/game-api/types/alta-menus/optionspanel) | class | `Panel` | 1 | Menu popup that shows a message and a column of option buttons; pressing one runs its action and closes the panel. |
| [`OptionsPanelButtonConfig`](/game-api/types/alta-menus/optionspanelbuttonconfig) | class |  | 2 | Pairs a UI button type with the button prefab an `OptionsPanel` uses for it. |
| [`Panel`](/game-api/types/alta-menus/panel) | class | `MonoBehaviour` | 6 | One page of a meta UI `Window`. Shows or hides itself, playing an optional scale animation, and raises `StateChanged`. |
| [`PanelComponent`](/game-api/types/alta-menus/panelcomponent) | abstract class | `MonoBehaviour` | 3 | Base for components that fill a meta UI `Panel` with data. Refreshes when the panel opens if marked stale, and marks itself stale on a timer (30 seconds by default). |
| [`Popup`](/game-api/types/alta-menus/popup) | class | `MonoBehaviour` | 0 |  |
| [`RecentPlayerPanelListElement`](/game-api/types/alta-menus/recentplayerpanellistelement) | class | `ListElementWithButtonAndExtraText` | 0 | Row in the recent players list: username, server name and a rough time since you played together. |
| [`RopeUIList`](/game-api/types/alta-menus/ropeuilist) | class | `UIList` | 5 |  |
| [`ScalingFadeAnimator`](/game-api/types/alta-menus/scalingfadeanimator) | class | `MonoBehaviour`, `UIActionLock.ILockUIAction` | 2 | Client UI: scales its targets up along a curve when enabled, and can scale them down then switch to another object. Locks UI actions while animating. |
| [`SimpleTextPanel`](/game-api/types/alta-menus/simpletextpanel) | class | `Panel` | 1 | Client UI panel that just shows a block of text. |
| [`SimpleUIList`](/game-api/types/alta-menus/simpleuilist) | class | `UIList` | 1 |  |
| [`Tab`](/game-api/types/alta-menus/tab) | class | `Panel` | 0 | Client: a menu panel that shows and hides by turning its game object on and off, with no animation. |
| [`TabbedPanel`](/game-api/types/alta-menus/tabbedpanel) | class | `Panel`, `IBuildRendererPostBake`, `IBuildBakeable` | 2 |  |
| [`TabletToggle`](/game-api/types/alta-menus/tablettoggle) | class | `MonoBehaviour` | 1 |  |
| [`TextButton`](/game-api/types/alta-menus/textbutton) | class | `ButtonWithEvents` | 1 | A menu button whose label is drawn by a `TextRenderer`, kept in step with the button's `Label`. |
| [`TextListElement`](/game-api/types/alta-menus/textlistelement) | class | `ListElement` | 1 |  |
| [`TouchScreenButton`](/game-api/types/alta-menus/touchscreenbutton) | class | `Button`, `ITouchScreenButton` | 1 |  |
| [`TouchScreenButtonVisual`](/game-api/types/alta-menus/touchscreenbuttonvisual) | class | `MonoBehaviour` | 0 |  |
| [`TouchScreenButtonVisualSettings`](/game-api/types/alta-menus/touchscreenbuttonvisualsettings) | class | `ButtonSettings` | 5 | Asset with the look of a touch screen button: alpha when idle and pressed, a grow animation and a material. Client. |
| [`UIActionLock`](/game-api/types/alta-menus/uiactionlock) | static class |  | 3 |  |
| [`UIActionLock.ILockUIAction`](/game-api/types/alta-menus/uiactionlock-ilockuiaction) | interface |  | 0 | Marker for an object that can take the global UI action lock in `UIActionLock`, so only one menu action runs at a time. Has no members. |
| [`UIButtonType`](/game-api/types/alta-menus/uibuttontype) | enum |  | 2 | Style of a meta UI button: normal, or bad (probably for destructive or negative actions). |
| [`UIList`](/game-api/types/alta-menus/uilist) | abstract class | `MonoBehaviour` | 6 | Base for a list of elements in the game's world-space menus. Subclasses decide how elements are laid out. |
| [`Window`](/game-api/types/alta-menus/window) | class | `MonoBehaviour` | 13 | Client: a menu screen made of panels. Shows one panel at a time plus popups (confirm, options, loading). |

## Alta.Meta.UI.ServerManagement

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`APIStatusManager`](/game-api/types/alta-menus/apistatusmanager) | static class |  | 1 |  |
| [`APIStatusNotification`](/game-api/types/alta-menus/apistatusnotification) | class | `UINotification`, `IEquatable<APIStatusNotification>` | 9 |  |
| [`CreateGroupInfoPanel`](/game-api/types/alta-menus/creategroupinfopanel) | class | `MonoBehaviour` | 0 |  |
| [`CreateServerPanel`](/game-api/types/alta-menus/createserverpanel) | class | `ServerDetailsPanel` | 1 |  |
| [`EditServerPanel`](/game-api/types/alta-menus/editserverpanel) | class | `ServerDetailsPanel` | 1 | Main menu panel for editing a joined server's name, description and join type through the web API. |
| [`FriendRequestNotification`](/game-api/types/alta-menus/friendrequestnotification) | class | `UINotification`, `IEquatable<FriendRequestNotification>` | 9 |  |
| [`FriendsInvitesPanel`](/game-api/types/alta-menus/friendsinvitespanel) | class | `PanelComponent` | 2 | Main menu list of friend requests you have sent, with an option to revoke each one. |
| [`FriendsListPanel`](/game-api/types/alta-menus/friendslistpanel) | class | `PanelComponent` | 2 | Main menu friends list: add friends by username, unfriend them or invite them to a server. |
| [`FriendsRequestsPanel`](/game-api/types/alta-menus/friendsrequestspanel) | class | `PanelComponent` | 2 | Main menu list of friend requests sent to you, with accept and reject options. |
| [`GroupInfoTab`](/game-api/types/alta-menus/groupinfotab) | class | `GroupPage` | 2 | Server management tab showing a group's name, description, type and member count, with leave and invite buttons. |
| [`GroupInviteNotification`](/game-api/types/alta-menus/groupinvitenotification) | class | `UINotification`, `IEquatable<GroupInviteNotification>` | 9 |  |
| [`GroupMemberListElement`](/game-api/types/alta-menus/groupmemberlistelement) | class | `ListElementWithData<GroupMember>` | 0 | Row in a group's member list, showing the member's username. |
| [`GroupMembersPage`](/game-api/types/alta-menus/groupmemberspage) | class | `GroupPage` | 2 | Client menu page listing a group's members, with kick and ban options and an invite-by-username field. A `GroupPage` in the server management UI. |
| [`GroupPage`](/game-api/types/alta-menus/grouppage) | abstract class | `PanelComponent` | 1 | Base for a page in the server management UI that shows one joined group. Client only. |
| [`GroupPermissionsEnabler`](/game-api/types/alta-menus/grouppermissionsenabler) | class | `MonoBehaviour` | 0 |  |
| [`InboxPanel`](/game-api/types/alta-menus/inboxpanel) | class | `PanelComponent` | 2 | Client menu panel showing the player's inbox: group invites, friend requests, API status messages and player reports, with accept and decline buttons. |
| [`IncomingGroupRequestPage`](/game-api/types/alta-menus/incominggrouprequestpage) | class | `GroupPage` | 1 | Client group page listing requests to join the group, each with accept and reject buttons. |
| [`InviteUserToGroupPanel`](/game-api/types/alta-menus/inviteusertogrouppanel) | class | `PanelComponent` | 3 | Client panel that lets the player pick one of their groups to invite a given user to. Only groups where they have invite permission are listed. |
| [`InviteUserToGroupViaFriendsPanel`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel) | class | `PanelComponent` | 4 | Client: server management panel listing the player's friends so they can be invited to a group. On Quest it also lists Oculus friends without a linked account. |
| [`JoinedGroupListElement`](/game-api/types/alta-menus/joinedgrouplistelement) | class | `ListElementWithData<JoinedGroupManager>` | 1 | Client list row for a group the player has joined, showing its name and an invite button. |
| [`JoinedGroupsList`](/game-api/types/alta-menus/joinedgroupslist) | class | `PanelComponent` | 1 |  |
| [`ListElementWith2Buttons`](/game-api/types/alta-menus/listelementwith2buttons) | class | `ListElementWithButton` | 1 | Client list row with a second button, used for things like accept and reject on group join requests. |
| [`LoggedInWindow`](/game-api/types/alta-menus/loggedinwindow) | class | `MonoBehaviour` | 0 |  |
| [`OculusFriendsListPanel`](/game-api/types/alta-menus/oculusfriendslistpanel) | class | `PanelComponent` | 2 | Client panel meant to list Oculus friends and send them friend requests. In this build `SetupFriendsList` is empty, so the list never fills. |
| [`OutgoingGroupInvitesPage`](/game-api/types/alta-menus/outgoinggroupinvitespage) | class | `GroupPage` | 1 | Client group page listing invites the group has sent, each with a button to revoke it. |
| [`PlayerReportBaseNotification`](/game-api/types/alta-menus/playerreportbasenotification) | abstract class | `UINotification` | 5 | Base for main menu inbox notifications about player reports, where accepting bans the reported user from that server through the Alta API. |
| [`PlayerReportInboxInfoPanel`](/game-api/types/alta-menus/playerreportinboxinfopanel) | class | `MonoBehaviour` | 1 | Client: server management panel that shows one player report from the API: who was reported, why, by whom, when, and any action taken. |
| [`PlayerReportNotification`](/game-api/types/alta-menus/playerreportnotification) | class | `PlayerReportBaseNotification`, `IEquatable<PlayerReportNotification>` | 10 | Inbox notification for one player report. Accept bans the reported user; decline ignores the report. |
| [`PlayerReportSummaryNotification`](/game-api/types/alta-menus/playerreportsummarynotification) | class | `PlayerReportBaseNotification`, `IEquatable<PlayerReportSummaryNotification>` | 10 | Notification summarising the reports against one user, shown by the latest report. Accept bans the user; there is no decline. |
| [`PlayerReportSummaryPanel`](/game-api/types/alta-menus/playerreportsummarypanel) | class | `MonoBehaviour` | 1 | Client: server management panel that sums up all reports against one player: total count, counts per reason, reporters, latest date and any ban. |
| [`RecentPlayersListPanel`](/game-api/types/alta-menus/recentplayerslistpanel) | class | `PanelComponent` | 2 | Client panel listing players the user recently played with, with options to add them as a friend or report them. |
| [`ReportsPanel`](/game-api/types/alta-menus/reportspanel) | class | `PanelComponent` | 2 | Client panel listing player report summaries from the API, with accept and decline buttons. Works like `InboxPanel` but only for reports, probably for moderators. |
| [`SelectedGroupPanel`](/game-api/types/alta-menus/selectedgrouppanel) | class | `MonoBehaviour` | 4 | Main menu panel for one group (server) the player has joined, with members, info, request and invite pages. Uses Alta's web API, which is gone. |
| [`ServerDetailsPanel`](/game-api/types/alta-menus/serverdetailspanel) | abstract class | `PanelComponent` | 0 | Client: base for the create server and edit server menu panels. Holds the name, description and join type inputs and shows a summary that updates as you type. |
| [`ServerDetailsPanel.ButtonData`](/game-api/types/alta-menus/serverdetailspanel-buttondata) | class |  | 3 | A join type choice on the create and edit server panels: its button, the group type it stands for and a label. |
| [`ServerRegions`](/game-api/types/alta-menus/serverregions) | static class |  | 4 |  |
| [`UINotification`](/game-api/types/alta-menus/uinotification) | abstract class |  | 11 | Base for a notification shown in the menu's server management panel, such as a friend request, group invite or API status. Client only. |

## Alta.OculusLogin

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AccountNameTextReplacer`](/game-api/types/alta-menus/accountnametextreplacer) | internal class | `MonoBehaviour` | 2 |  |
| [`AltaAccountRegistererAndLinker`](/game-api/types/alta-menus/altaaccountregistererandlinker) | internal class | `LoginAndRegisterHelper` | 3 | Client: the in-VR account registration screen. Checks username, email and password fields live against the API, registers the account, then logs in (with platform credentials if supported). |

## Alta.PlatformSpecific.Oculus

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ErrorTestType`](/game-api/types/alta-menus/errortesttype) | enum |  | 5 | Test cases for `PlatformLaunchDetails`, which builds fake Oculus launch details for a banned, private, wrong version or debug launch. |
| [`OculusDestinationController`](/game-api/types/alta-menus/oculusdestinationcontroller) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 0 |  |
| [`PlatformLaunchDetails`](/game-api/types/alta-menus/platformlaunchdetails) | class |  | 10 | Fake Oculus launch details for testing deep link joins. The constructor fills in a canned case (banned, private, wrong version, debug) with a fixed server ID. |
| [`PlatformLaunchResult`](/game-api/types/alta-menus/platformlaunchresult) | enum |  | 7 | Oculus launch result codes (success, room full, game started, room not found, user declined, other), with the Oculus string in each `Description`. |

## Alta.SocialTablet

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`RecentPlayersPage`](/game-api/types/alta-menus/recentplayerspage) | class | `PanelComponent` | 1 |  |

## Alta.UI

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`DynamicMask`](/game-api/types/alta-menus/dynamicmask) | class | `MonoBehaviour` | 11 |  |
| [`RepairBoxDevCommand`](/game-api/types/alta-menus/repairboxdevcommand) | enum |  | 2 | Dev tool command sent from `RepairBoxDevControlPanel` to the server: instantly build (repair) or destroy (unrepair) a repair box. |
| [`RepairBoxDevControlPanel`](/game-api/types/alta-menus/repairboxdevcontrolpanel) | class | `MonoBehaviour` | 0 |  |
| [`TextureMode`](/game-api/types/alta-menus/texturemode) | enum |  | 4 | How `DynamicMask.AddTexture` combines a texture with the mask: add, subtract, multiply or replace. |
| [`VersionDisplay`](/game-api/types/alta-menus/versiondisplay) | class | `MonoBehaviour` | 0 |  |

## Alta.UserAuthentication

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`GeneralLoadingObjectManager`](/game-api/types/alta-menus/generalloadingobjectmanager) | class | `TempSceneObject` | 1 |  |

## Alta.UserInterface

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FeedbackInteractionPoint`](/game-api/types/alta-menus/feedbackinteractionpoint) | class | `LabelledInteractPoint` | 0 |  |
| [`LabelledInteractPoint`](/game-api/types/alta-menus/labelledinteractpoint) | class | `SimpleInteractPoint` | 1 |  |
| [`SimpleInteractPoint`](/game-api/types/alta-menus/simpleinteractpoint) | class | `Interactable` | 3 |  |

## Alta.UserInterface.SocialTablet

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`SocialTabletActionSyncStruct`](/game-api/types/alta-menus/socialtabletactionsyncstruct) | internal struct |  | 4 | Message a client sends from the social tablet's recent player page after reporting, banning or unbanning someone. The server looks up the target and raises the matching console event. |
| [`SocialTabletActionType`](/game-api/types/alta-menus/socialtabletactiontype) | enum |  | 3 | Moderation action sent from the social tablet's recent players page: report, ban or unban. |

## Alta.XR

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`TrackedDevice`](/game-api/types/alta-menus/trackeddevice) | enum |  | 3 | Tracked XR devices: the headset and the left and right controllers. |
| [`VRSetup`](/game-api/types/alta-menus/vrsetup) | static class |  | 2 |  |
| [`VRTrackedDevice`](/game-api/types/alta-menus/vrtrackeddevice) | class | `IDisposable` | 3 | Client: drives a transform from a tracked VR pose (head or hand) after each input update and before rendering. Make one with `AddTracking`, dispose it to stop. |
| [`VRTrackedDevice.PositionPostProcessor`](/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor) | delegate |  | 0 | Callback that can change a tracked position, passed by ref, before `VRTrackedDevice` applies it. |
