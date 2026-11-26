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
| [`AssistedSpawnCommandAction`](/game-api/types/alta-menus/assistedspawncommandaction) | class | `ServerMultiCommandAction`, `IUseVirtualKeyboard` | 8 | Client dev tools board control for an assisted spawn command: quantity buttons plus the virtual keyboard to type a prefab name, then a submit button that sends the spawn command. |
| [`AssistedSpawnCommandDefinition`](/game-api/types/alta-menus/assistedspawncommanddefinition) | class | `ServerCommandDefinitionBase`, `IHasDynamicArguments`, `IUsesMultipleButtons` | 10 | Menu command asset that builds a `spawn` command for the local player from a chosen prefab and quantity, then routes it to the server. Created from the Township/Assisted Spawn asset menu. |
| [`ButtonEnumMenuSetting`](/game-api/types/alta-menus/buttonenummenusetting) | class | `EnumMenuSettingBase` | 0 | Client menu control for a choice setting with two physical buttons that step to the previous or next value. |
| [`CustomScroller`](/game-api/types/alta-menus/customscroller) | class | `MonoBehaviour` | 5 | A rotating drum menu driven by a `SelectionLever`: holding the lever off-centre spins the drum and steps through a list of string values. Used by the server creator. |
| [`EnumMenuSettingBase`](/game-api/types/alta-menus/enummenusettingbase) | class | `MenuGameSetting<EnumSettingAccess>` | 3 | A menu setting that steps through a list of string values (next and previous) and writes the chosen one to its setting. |
| [`IHasDynamicArguments`](/game-api/types/alta-menus/ihasdynamicarguments) | interface | `IUsesMultipleButtons` | 3 | A multi-button menu command whose arguments are filled in at runtime by name, such as the assisted spawn command's `prefab` and `quantity`. |
| [`IProvideEnumerable<T>`](/game-api/types/alta-menus/iprovideenumerable-t) | interface |  | 2 | Something that supplies a changing list of values to a menu, such as `FriendSelector` feeding a `ScrollerSelector` on the same object. |
| [`IUsesMultipleButtons`](/game-api/types/alta-menus/iusesmultiplebuttons) | interface |  | 2 | A menu command shown as a row of buttons, one per label. |
| [`MenuGameSetting`](/game-api/types/alta-menus/menugamesetting) | abstract class | `MonoBehaviour` | 1 | Base for an in-game menu widget that shows one game setting. The generic `MenuGameSetting<T>` does the work. |
| [`MenuGameSetting<T>`](/game-api/types/alta-menus/menugamesetting-t) | abstract class | `MenuGameSetting` | 1 | Base for one setting row in the in-game settings panel, showing a setting of type `T`. Client only. Hides itself if the setting isn't valid on this platform. |
| [`MenuToggleSetting`](/game-api/types/alta-menus/menutogglesetting) | class | `MenuGameSetting<ToggleGameSettingAccess>` | 0 | Client menu control for an on/off setting, driven by a selection lever. Colours its label and fires events when turned on or off. |
| [`QamOptionAsButtonCommand`](/game-api/types/alta-menus/qamoptionasbuttoncommand) | class | `ServerCommandDefinitionBase` | 1 | Client: a menu command that runs a quick access menu action, as if picked from that menu. |
| [`ScrollerEnumMenuSetting`](/game-api/types/alta-menus/scrollerenummenusetting) | class | `EnumMenuSettingBase` | 0 | Client menu control for a choice setting shown on a rotating drum. Holding a lever off centre spins the drum and steps through the values. |
| [`ScrollerSelector`](/game-api/types/alta-menus/scrollerselector) | class | `MonoBehaviour` | 4 | Menu wheel that scrolls through a list of text values with a lever. Gets its values from an `IProvideEnumerable<string>` on the same object. |
| [`ServerComboCommandDefinition`](/game-api/types/alta-menus/servercombocommanddefinition) | class | `ServerCommandDefinitionBase` | 2 | A menu command that sends a list of console commands to the server one after another, each after the last one's result comes back. Client side. |
| [`ServerCommandAction`](/game-api/types/alta-menus/servercommandaction) | class | `MenuGameSetting` | 2 | Client menu button that runs one server command definition, with a short cooldown shared by all such buttons. |
| [`ServerCommandDefinition`](/game-api/types/alta-menus/servercommanddefinition) | class | `ServerCommandDefinitionBase` | 2 | Asset for a menu entry that sends one fixed console command to the server. Created from the Township, Quick Access Menu, Field Access menu. |
| [`ServerCommandDefinitionBase`](/game-api/types/alta-menus/servercommanddefinitionbase) | abstract class | `SettingsFieldAccess` | 1 | Base for quick access menu settings that run a server command when used, such as `ServerCommandDefinition`, `ServerMultiOptionCommandDefinition` and `AssistedSpawnCommandDefinition`. |
| [`ServerMultiCommandAction`](/game-api/types/alta-menus/servermulticommandaction) | class | `MenuGameSetting` | 1 | Client menu control that builds one button per option of a multi-option server command and sends the chosen option. Base for `AssistedSpawnCommandAction`. |
| [`ServerMultiOptionCommandDefinition`](/game-api/types/alta-menus/servermultioptioncommanddefinition) | class | `ServerCommandDefinitionBase`, `IUsesMultipleButtons` | 4 | Menu command asset with several fixed commands, one per button. The chosen one is routed to the server when run. |
| [`StandardFloatAsEnum`](/game-api/types/alta-menus/standardfloatasenum) | class | `MenuGameSetting<FloatGameSettingsAccess>` | 3 | Client menu control that shows a float setting as a drum of named choices, spun with a lever like `ScrollerEnumMenuSetting`. The choices come from an `EnumFloatGameSettingsAccess` or its own lists. |

## Alta.Meta.Friends

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Friend`](/game-api/types/alta-menus/friend) | struct |  | 2 | A friend entry: the user's ID and display name. |
| [`FriendsManager`](/game-api/types/alta-menus/friendsmanager) | class | `LoggedInTool` | 6 | Main menu friends board: lists friends or friend requests from the Alta API as user tokens on a rope board. Client side. |
| [`FriendsManager.Tab`](/game-api/types/alta-menus/friendsmanager-tab) | enum |  | 3 | The tabs of the friends menu: friends, friend requests and Oculus friends. |
| [`IInitializable`](/game-api/types/alta-menus/iinitializable) | internal interface |  | 1 | Internal interface for something with an `Initialize` step. |
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
| [`ButtonEvents`](/game-api/types/alta-menus/buttonevents) | class | `MonoBehaviour` | 0 | Exposes a game `Button`'s press, release and enabled changes as Unity events for wiring in the inspector. |
| [`ButtonSettings`](/game-api/types/alta-menus/buttonsettings) | class | `ScriptableObject` | 0 | An empty ScriptableObject asset for UI button settings (menu Township/UI/Button Settings). It holds nothing in this build. |
| [`ButtonWithEvents`](/game-api/types/alta-menus/buttonwithevents) | class | `Button` | 0 | A menu `Button` that also fires Unity events set in the inspector when pressed, released, enabled or disabled. |
| [`ConfirmPopupPanel`](/game-api/types/alta-menus/confirmpopuppanel) | class | `Panel` | 3 | Client: menu popup with a message and confirm and cancel buttons. Call `Setup` with the text and callbacks, then show it; it hides itself after either button. |
| [`IAutoCompletionSource`](/game-api/types/alta-menus/iautocompletionsource) | interface |  | 1 | Something that supplies a list of strings for an autocomplete text field, such as object names in a folder. |
| [`InputField`](/game-api/types/alta-menus/inputfield) | class | `MonoBehaviour` | 10 | A text input field in the game's world-space menus, showing its text through a `TextRenderer` with an optional caret and secret (password) mode. |
| [`InputFieldWithKeyboard`](/game-api/types/alta-menus/inputfieldwithkeyboard) | class | `MonoBehaviour`, `IUseVirtualKeyboard` | 9 | Client: connects a UI `InputField` to the in-world VR `TouchScreenKeyboard`, showing it at a marker and passing typed text back. |
| [`ListElement`](/game-api/types/alta-menus/listelement) | class | `MonoBehaviour` | 0 | Empty component, probably a marker for items in a UI list. |
| [`ListElementWithButton`](/game-api/types/alta-menus/listelementwithbutton) | class | `TextListElement` | 5 | A text list entry with a button. Pressing the button selects it. |
| [`ListElementWithButtonAndExtraText`](/game-api/types/alta-menus/listelementwithbuttonandextratext) | class | `ListElementWithButton` | 1 | A list row with a button and a second text field. |
| [`ListElementWithData<TData>`](/game-api/types/alta-menus/listelementwithdata-tdata) | abstract class | `ListElementWithButton` | 2 | Base for a list row with a button that holds a data object and shows text made from it. Subclasses say how to turn the data into text. |
| [`LoadingUI`](/game-api/types/alta-menus/loadingui) | class | `MonoBehaviour` | 1 | A loading indicator in the menu UI that can be shown or hidden. |
| [`NavigateTo`](/game-api/types/alta-menus/navigateto) | class | `MonoBehaviour` | 0 | Switches the UI to a given panel when a button is released. |
| [`ObjectNamesInFolder`](/game-api/types/alta-menus/objectnamesinfolder) | class | `ScriptableObject`, `IAutoCompletionSource` | 2 | Asset that supplies a list of object names as console auto-completions. Created from the Township, Object Names In Folder menu. |
| [`OptionsConfig`](/game-api/types/alta-menus/optionsconfig) | class |  | 4 | One option button for a menu window's options popup: label, action to run and button style. Used by friend panels for things like Revoke. |
| [`OptionsPanel`](/game-api/types/alta-menus/optionspanel) | class | `Panel` | 1 | Menu popup that shows a message and a column of option buttons; pressing one runs its action and closes the panel. |
| [`OptionsPanelButtonConfig`](/game-api/types/alta-menus/optionspanelbuttonconfig) | class |  | 2 | Pairs a UI button type with the button prefab an `OptionsPanel` uses for it. |
| [`Panel`](/game-api/types/alta-menus/panel) | class | `MonoBehaviour` | 6 | One page of a meta UI `Window`. Shows or hides itself, playing an optional scale animation, and raises `StateChanged`. |
| [`PanelComponent`](/game-api/types/alta-menus/panelcomponent) | abstract class | `MonoBehaviour` | 3 | Base for components that fill a meta UI `Panel` with data. Refreshes when the panel opens if marked stale, and marks itself stale on a timer (30 seconds by default). |
| [`Popup`](/game-api/types/alta-menus/popup) | class | `MonoBehaviour` | 0 | Empty MonoBehaviour with no code; probably a marker on popup objects. |
| [`RecentPlayerPanelListElement`](/game-api/types/alta-menus/recentplayerpanellistelement) | class | `ListElementWithButtonAndExtraText` | 0 | Row in the recent players list: username, server name and a rough time since you played together. |
| [`RopeUIList`](/game-api/types/alta-menus/ropeuilist) | class | `UIList` | 5 | A UI list whose rows are laid out on a `RopePoweredElementBoard`, so the player scrolls by pulling a rope. |
| [`ScalingFadeAnimator`](/game-api/types/alta-menus/scalingfadeanimator) | class | `MonoBehaviour`, `UIActionLock.ILockUIAction` | 2 | Client UI: scales its targets up along a curve when enabled, and can scale them down then switch to another object. Locks UI actions while animating. |
| [`SimpleTextPanel`](/game-api/types/alta-menus/simpletextpanel) | class | `Panel` | 1 | Client UI panel that just shows a block of text. |
| [`SimpleUIList`](/game-api/types/alta-menus/simpleuilist) | class | `UIList` | 1 | A `UIList` that stacks its elements in a column with a fixed vertical gap. Client UI. |
| [`Tab`](/game-api/types/alta-menus/tab) | class | `Panel` | 0 | Client: a menu panel that shows and hides by turning its game object on and off, with no animation. |
| [`TabbedPanel`](/game-api/types/alta-menus/tabbedpanel) | class | `Panel`, `IBuildRendererPostBake`, `IBuildBakeable` | 2 | A UI `Panel` with a set of `Tab`s, one active at a time. Client UI. |
| [`TabletToggle`](/game-api/types/alta-menus/tablettoggle) | class | `MonoBehaviour` | 1 | Toggles a tablet menu between its normal home panel and an extended home panel, swapping which home button and player list back button are shown. Client UI. |
| [`TextButton`](/game-api/types/alta-menus/textbutton) | class | `ButtonWithEvents` | 1 | A menu button whose label is drawn by a `TextRenderer`, kept in step with the button's `Label`. |
| [`TextListElement`](/game-api/types/alta-menus/textlistelement) | class | `ListElement` | 1 | A `ListElement` that just holds a text renderer, for plain text rows in a UI list. |
| [`TouchScreenButton`](/game-api/types/alta-menus/touchscreenbutton) | class | `Button`, `ITouchScreenButton` | 1 | A UI `Button` with a touch area size, for the in-world touch screen menus. |
| [`TouchScreenButtonVisual`](/game-api/types/alta-menus/touchscreenbuttonvisual) | class | `MonoBehaviour` | 0 | Visual feedback for a touch screen button: sets its material and label from the button's `TouchScreenButtonVisualSettings`, changes alpha when pressed and plays a grow animation. Client UI. |
| [`TouchScreenButtonVisualSettings`](/game-api/types/alta-menus/touchscreenbuttonvisualsettings) | class | `ButtonSettings` | 5 | Asset with the look of a touch screen button: alpha when idle and pressed, a grow animation and a material. Client. |
| [`UIActionLock`](/game-api/types/alta-menus/uiactionlock) | static class |  | 3 | A simple global lock so only one UI action runs at a time. An object implementing `ILockUIAction` takes the lock and must release it with `Unlock`. |
| [`UIActionLock.ILockUIAction`](/game-api/types/alta-menus/uiactionlock-ilockuiaction) | interface |  | 0 | Marker for an object that can take the global UI action lock in `UIActionLock`, so only one menu action runs at a time. Has no members. |
| [`UIButtonType`](/game-api/types/alta-menus/uibuttontype) | enum |  | 2 | Style of a meta UI button: normal, or bad (probably for destructive or negative actions). |
| [`UIList`](/game-api/types/alta-menus/uilist) | abstract class | `MonoBehaviour` | 6 | Base for a list of elements in the game's world-space menus. Subclasses decide how elements are laid out. |
| [`Window`](/game-api/types/alta-menus/window) | class | `MonoBehaviour` | 13 | Client: a menu screen made of panels. Shows one panel at a time plus popups (confirm, options, loading). |

## Alta.Meta.UI.ServerManagement

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`APIStatusManager`](/game-api/types/alta-menus/apistatusmanager) | static class |  | 1 | Client: fetches status messages from the Alta status API and shows each new one that matches the player's platform and region as a popup, once per session. |
| [`APIStatusNotification`](/game-api/types/alta-menus/apistatusnotification) | class | `UINotification`, `IEquatable<APIStatusNotification>` | 9 | A notification list entry for a status message from the Alta API. Has no accept or decline buttons. |
| [`CreateGroupInfoPanel`](/game-api/types/alta-menus/creategroupinfopanel) | class | `MonoBehaviour` | 0 | Keeps an info object visible only while at least one of a set of panels is active. |
| [`CreateServerPanel`](/game-api/types/alta-menus/createserverpanel) | class | `ServerDetailsPanel` | 1 | Client main menu panel for creating a new server (group) through the Alta API, with name, description, join type and region. |
| [`EditServerPanel`](/game-api/types/alta-menus/editserverpanel) | class | `ServerDetailsPanel` | 1 | Main menu panel for editing a joined server's name, description and join type through the web API. |
| [`FriendRequestNotification`](/game-api/types/alta-menus/friendrequestnotification) | class | `UINotification`, `IEquatable<FriendRequestNotification>` | 9 | A notification list entry for an incoming friend request, with accept and decline that call the social service. |
| [`FriendsInvitesPanel`](/game-api/types/alta-menus/friendsinvitespanel) | class | `PanelComponent` | 2 | Main menu list of friend requests you have sent, with an option to revoke each one. |
| [`FriendsListPanel`](/game-api/types/alta-menus/friendslistpanel) | class | `PanelComponent` | 2 | Main menu friends list: add friends by username, unfriend them or invite them to a server. |
| [`FriendsRequestsPanel`](/game-api/types/alta-menus/friendsrequestspanel) | class | `PanelComponent` | 2 | Main menu list of friend requests sent to you, with accept and reject options. |
| [`GroupInfoTab`](/game-api/types/alta-menus/groupinfotab) | class | `GroupPage` | 2 | Server management tab showing a group's name, description, type and member count, with leave and invite buttons. |
| [`GroupInviteNotification`](/game-api/types/alta-menus/groupinvitenotification) | class | `UINotification`, `IEquatable<GroupInviteNotification>` | 9 | A notification list entry for an invite to join a group (server), with accept and reject. |
| [`GroupMemberListElement`](/game-api/types/alta-menus/groupmemberlistelement) | class | `ListElementWithData<GroupMember>` | 0 | Row in a group's member list, showing the member's username. |
| [`GroupMembersPage`](/game-api/types/alta-menus/groupmemberspage) | class | `GroupPage` | 2 | Client menu page listing a group's members, with kick and ban options and an invite-by-username field. A `GroupPage` in the server management UI. |
| [`GroupPage`](/game-api/types/alta-menus/grouppage) | abstract class | `PanelComponent` | 1 | Base for a page in the server management UI that shows one joined group. Client only. |
| [`GroupPermissionsEnabler`](/game-api/types/alta-menus/grouppermissionsenabler) | class | `MonoBehaviour` | 0 | Main menu UI helper that shows or hides objects depending on whether you hold the given permissions in the group a `SelectedGroupPanel` is showing. Client only. |
| [`InboxPanel`](/game-api/types/alta-menus/inboxpanel) | class | `PanelComponent` | 2 | Client menu panel showing the player's inbox: group invites, friend requests, API status messages and player reports, with accept and decline buttons. |
| [`IncomingGroupRequestPage`](/game-api/types/alta-menus/incominggrouprequestpage) | class | `GroupPage` | 1 | Client group page listing requests to join the group, each with accept and reject buttons. |
| [`InviteUserToGroupPanel`](/game-api/types/alta-menus/inviteusertogrouppanel) | class | `PanelComponent` | 3 | Client panel that lets the player pick one of their groups to invite a given user to. Only groups where they have invite permission are listed. |
| [`InviteUserToGroupViaFriendsPanel`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel) | class | `PanelComponent` | 4 | Client: server management panel listing the player's friends so they can be invited to a group. On Quest it also lists Oculus friends without a linked account. |
| [`JoinedGroupListElement`](/game-api/types/alta-menus/joinedgrouplistelement) | class | `ListElementWithData<JoinedGroupManager>` | 1 | Client list row for a group the player has joined, showing its name and an invite button. |
| [`JoinedGroupsList`](/game-api/types/alta-menus/joinedgroupslist) | class | `PanelComponent` | 1 | Main menu panel component that lists the groups (servers) you have joined, fetched from the web API. Client only. |
| [`ListElementWith2Buttons`](/game-api/types/alta-menus/listelementwith2buttons) | class | `ListElementWithButton` | 1 | Client list row with a second button, used for things like accept and reject on group join requests. |
| [`LoggedInWindow`](/game-api/types/alta-menus/loggedinwindow) | class | `MonoBehaviour` | 0 | Switches a main menu window to its logged-in panel once the player is logged in. Client only. |
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
| [`ServerRegions`](/game-api/types/alta-menus/serverregions) | static class |  | 4 | String constants for the region names used when picking where a server runs. |
| [`UINotification`](/game-api/types/alta-menus/uinotification) | abstract class |  | 11 | Base for a notification shown in the menu's server management panel, such as a friend request, group invite or API status. Client only. |

## Alta.OculusLogin

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AccountNameTextReplacer`](/game-api/types/alta-menus/accountnametextreplacer) | internal class | `MonoBehaviour` | 2 | Client UI component on the login screen that fills in the device account name and the Alta account name text. |
| [`AltaAccountRegistererAndLinker`](/game-api/types/alta-menus/altaaccountregistererandlinker) | internal class | `LoginAndRegisterHelper` | 3 | Client: the in-VR account registration screen. Checks username, email and password fields live against the API, registers the account, then logs in (with platform credentials if supported). |

## Alta.PlatformSpecific.Oculus

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ErrorTestType`](/game-api/types/alta-menus/errortesttype) | enum |  | 5 | Test cases for `PlatformLaunchDetails`, which builds fake Oculus launch details for a banned, private, wrong version or debug launch. |
| [`OculusDestinationController`](/game-api/types/alta-menus/oculusdestinationcontroller) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 0 | Client component that keeps Quest rich presence up to date: the region the player is in, the server deep link and whether there is a free slot. Removes itself on other platforms. |
| [`PlatformLaunchDetails`](/game-api/types/alta-menus/platformlaunchdetails) | class |  | 10 | Fake Oculus launch details for testing deep link joins. The constructor fills in a canned case (banned, private, wrong version, debug) with a fixed server ID. |
| [`PlatformLaunchResult`](/game-api/types/alta-menus/platformlaunchresult) | enum |  | 7 | Oculus launch result codes (success, room full, game started, room not found, user declined, other), with the Oculus string in each `Description`. |

## Alta.SocialTablet

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`RecentPlayersPage`](/game-api/types/alta-menus/recentplayerspage) | class | `PanelComponent` | 1 | Social tablet page that lists players you recently met on the current server, a page at a time. Client only. |

## Alta.UI

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`DynamicMask`](/game-api/types/alta-menus/dynamicmask) | class | `MonoBehaviour` | 11 | Paints a UI mask texture from code: stamps RGBA32 textures into a CPU colour buffer, then uploads it with a compute shader. Needs a `Mask` and `RawImage` on the same object. |
| [`RepairBoxDevCommand`](/game-api/types/alta-menus/repairboxdevcommand) | enum |  | 2 | Dev tool command sent from `RepairBoxDevControlPanel` to the server: instantly build (repair) or destroy (unrepair) a repair box. |
| [`RepairBoxDevControlPanel`](/game-api/types/alta-menus/repairboxdevcontrolpanel) | class | `MonoBehaviour` | 0 | Developer-only panel on a repair box with build and destroy buttons. It deletes itself unless the local player is a developer. |
| [`TextureMode`](/game-api/types/alta-menus/texturemode) | enum |  | 4 | How `DynamicMask.AddTexture` combines a texture with the mask: add, subtract, multiply or replace. |
| [`VersionDisplay`](/game-api/types/alta-menus/versiondisplay) | class | `MonoBehaviour` | 0 | Shows the game's build version on a 3D text label. Also runs in the editor. |

## Alta.UserAuthentication

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`GeneralLoadingObjectManager`](/game-api/types/alta-menus/generalloadingobjectmanager) | class | `TempSceneObject` | 1 | Runs the loading scene: tracks the headset, sets flat lighting, spins a frame and cycles loading tips. Client only. `DisplayMessage` shows a message to the player there. |

## Alta.UserInterface

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FeedbackInteractionPoint`](/game-api/types/alta-menus/feedbackinteractionpoint) | class | `LabelledInteractPoint` | 0 | A labelled interact point whose box changes colour when pressed and when disabled. |
| [`LabelledInteractPoint`](/game-api/types/alta-menus/labelledinteractpoint) | class | `SimpleInteractPoint` | 1 | A `SimpleInteractPoint` with a text label. |
| [`SimpleInteractPoint`](/game-api/types/alta-menus/simpleinteractpoint) | class | `Interactable` | 3 | A basic button-style `Interactable` that raises `Interacted` on grab and `Released` on let go, and can be disabled. |

## Alta.UserInterface.SocialTablet

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`SocialTabletActionSyncStruct`](/game-api/types/alta-menus/socialtabletactionsyncstruct) | internal struct |  | 4 | Message a client sends from the social tablet's recent player page after reporting, banning or unbanning someone. The server looks up the target and raises the matching console event. |
| [`SocialTabletActionType`](/game-api/types/alta-menus/socialtabletactiontype) | enum |  | 3 | Moderation action sent from the social tablet's recent players page: report, ban or unban. |

## Alta.XR

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`TrackedDevice`](/game-api/types/alta-menus/trackeddevice) | enum |  | 3 | Tracked XR devices: the headset and the left and right controllers. |
| [`VRSetup`](/game-api/types/alta-menus/vrsetup) | static class |  | 2 | Static VR helpers: sets every XR input subsystem to floor tracking and copies tracked pose data onto transforms. Client side. |
| [`VRTrackedDevice`](/game-api/types/alta-menus/vrtrackeddevice) | class | `IDisposable` | 3 | Client: drives a transform from a tracked VR pose (head or hand) after each input update and before rendering. Make one with `AddTracking`, dispose it to stop. |
| [`VRTrackedDevice.PositionPostProcessor`](/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor) | delegate |  | 0 | Callback that can change a tracked position, passed by ref, before `VRTrackedDevice` applies it. |
