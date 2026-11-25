---
title: "TextRenderer"
description: "class TextRenderer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextRenderer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`IBakeable`](/game-api/types/global-i-l/ibakeable), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`AndroidTextRendererQueue`](/game-api/types/global-t-x/textrenderer-androidtextrendererqueue), [`TextRendererDistanceChecker`](/game-api/types/global-t-x/textrenderer-textrendererdistancechecker), [`TextVerticalAlignment`](/game-api/types/global-t-x/textrenderer-textverticalalignment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextRenderer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> |  |
| <Link id="m-actualtext" /><code>{"private string actualText"}</code> |  |
| <Link id="m-alignment" /><code>{"private TextAlignment alignment"}</code> |  |
| <Link id="m-androidmaterial" /><code>{"private Material androidMaterial"}</code> |  |
| <Link id="m-androidtintcolor" /><code>{"private Color androidTintColor"}</code> |  |
| <Link id="m-bestfittowidth" /><code>{"private bool bestFitToWidth"}</code> |  |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |  |
| <Link id="m-coloredmaterials" /><code>{"private static readonly Dictionary<int, Material> coloredMaterials"}</code> |  |
| <Link id="m-coloredmeshes" /><code>{"private static readonly Dictionary<int, Mesh> coloredMeshes"}</code> |  |
| <Link id="m-currentcenter" /><code>{"private Vector2 currentCenter"}</code> |  |
| <Link id="m-font" /><code>{"private "}<Link to="/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{" font"}</code> |  |
| <Link id="m-generated" /><code>{"private List<Mesh> generated"}</code> |  |
| <Link id="m-haslinelimit" /><code>{"private bool hasLineLimit"}</code> |  |
| <Link id="m-htmltagregex" /><code>{"private static readonly Regex htmlTagRegex"}</code> |  |
| <Link id="m-ignoredchars" /><code>{"private static readonly char[] ignoredChars"}</code> |  |
| <Link id="m-isdelayingineditor" /><code>{"private bool isDelayingInEditor"}</code> |  |
| <Link id="m-ismerging" /><code>{"private bool isMerging"}</code> |  |
| <Link id="m-ismono" /><code>{"private bool isMono"}</code> |  |
| <Link id="m-ismultiline" /><code>{"private bool isMultiLine"}</code> |  |
| <Link id="m-isrefreshing" /><code>{"private bool isRefreshing"}</code> |  |
| <Link id="m-isstatic" /><code>{"private bool isStatic"}</code> |  |
| <Link id="m-isstatictext" /><code>{"private bool isStaticText"}</code> |  |
| <Link id="m-linespacing" /><code>{"private float lineSpacing"}</code> |  |
| <Link id="m-linewidth" /><code>{"private float lineWidth"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-material" /><code>{"private Material material"}</code> |  |
| <Link id="m-maxlines" /><code>{"private int maxLines"}</code> |  |
| <Link id="m-maxlodlevel" /><code>{"private int maxLODLevel"}</code> |  |
| <Link id="m-maxrenderdistancesquared" /><code>{"private float maxRenderDistanceSquared"}</code> |  |
| <Link id="m-maxscale" /><code>{"private float maxScale"}</code> |  |
| <Link id="m-maxwidth" /><code>{"private float maxWidth"}</code> |  |
| <Link id="m-meshcoloring" /><code>{"private static readonly List<Color> meshColoring"}</code> |  |
| <Link id="m-minscale" /><code>{"private float minScale"}</code> |  |
| <Link id="m-renderers" /><code>{"private readonly HashSet<Renderer> renderers"}</code> |  |
| <Link id="m-scale" /><code>{"private float scale"}</code> |  |
| <Link id="m-shadowcastingmode" /><code>{"private ShadowCastingMode shadowCastingMode"}</code> |  |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> |  |
| <Link id="m-staticbatchedlodgroup" /><code>{"private LODGroup staticBatchedLODGroup"}</code> |  |
| <Link id="m-supportshtmltags" /><code>{"private bool supportsHTMLTags"}</code> |  |
| <Link id="m-text" /><code>{"private string text"}</code> |  |
| <Link id="m-tintcolor" /><code>{"private Color tintColor"}</code> |  |
| <Link id="m-useparentlayer" /><code>{"private bool useParentLayer"}</code> |  |
| <Link id="m-verticalalignment" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer-textverticalalignment">{"TextRenderer.TextVerticalAlignment"}</Link>{" verticalAlignment"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alignment-2" /><code>{"TextAlignment Alignment { get; set; }"}</code> |  |
| <Link id="m-color" /><code>{"Color Color { get; set; }"}</code> |  |
| <Link id="m-currentcenter-2" /><code>{"Vector2 CurrentCenter { get; }"}</code> |  |
| <Link id="m-currentheight" /><code>{"float CurrentHeight { get; private set; }"}</code> |  |
| <Link id="m-currentlinewidth" /><code>{"float CurrentLineWidth { get; private set; }"}</code> |  |
| <Link id="m-currentlinewidthscaled" /><code>{"float CurrentLineWidthScaled { get; }"}</code> |  |
| <Link id="m-editormaterial" /><code>{"Material EditorMaterial { set; }"}</code> |  |
| <Link id="m-editortintcolor" /><code>{"Color EditorTintColor { set; }"}</code> |  |
| <Link id="m-font-2" /><code><Link to="/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{" Font { get; set; }"}</code> |  |
| <Link id="m-isduringeditorbake" /><code>{"bool IsDuringEditorBake { get; set; }"}</code> |  |
| <Link id="m-isqueued" /><code>{"bool IsQueued { get; private set; }"}</code> |  |
| <Link id="m-isvisible" /><code>{"bool IsVisible { get; private set; }"}</code> |  |
| <Link id="m-material-2" /><code>{"Material Material { get; }"}</code> |  |
| <Link id="m-maxlines-2" /><code>{"int MaxLines { get; set; }"}</code> |  |
| <Link id="m-maxscale-2" /><code>{"float MaxScale { get; set; }"}</code> |  |
| <Link id="m-maxwidth-2" /><code>{"float MaxWidth { get; set; }"}</code> |  |
| <Link id="m-minscale-2" /><code>{"float MinScale { get; set; }"}</code> |  |
| <Link id="m-renderers-2" /><code>{"IEnumerable<Renderer> Renderers { get; }"}</code> |  |
| <Link id="m-scale-2" /><code>{"float Scale { get; set; }"}</code> |  |
| <Link id="m-supportshtmltags-2" /><code>{"bool SupportsHtmlTags { get; set; }"}</code> |  |
| <Link id="m-text-2" /><code>{"string Text { get; set; }"}</code> |  |
| <Link id="m-ibakeable-isbaked" /><code>{"private bool IBakeable.IsBaked { get; set; }"}</code> |  |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onfinishedrendering" /><code>{"event Action OnFinishedRendering"}</code> |  |
| <Link id="m-onupdatedtext" /><code>{"event Action OnUpdatedText"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-onvalidatesettext" /><code>{"void OnValidateSetText(string text)"}</code> |  |
| <Link id="m-refresh" /><code>{"void Refresh(bool isForced = false)"}</code> |  |
| <Link id="m-setcolor" /><code>{"void SetColor(Color color)"}</code> |  |
| <Link id="m-setuptextandcolor" /><code>{"void SetupTextAndColor(string text, Color color)"}</code> |  |
| <Link id="m-setvisibility" /><code>{"void SetVisibility(bool isVisible)"}</code> |  |
| <Link id="m-aligntextline" /><code>{"private void AlignTextLine(float lineWidth, int lineNumber, int lineCount, Transform lineParent)"}</code> |  |
| <Link id="m-aligntextline-2" /><code>{"private void AlignTextLine(float lineWidth, int lineNumber, int lineCount, List<Vector3> vertices, int startIndex)"}</code> |  |
| <Link id="m-bake" /><code>{"private void IBakeable.Bake()"}</code> |  |
| <Link id="m-bake-2" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |  |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |  |
| <Link id="m-convertlinearscale" /><code>{"private Vector3 ConvertLinearScale()"}</code> |  |
| <Link id="m-createlettermesh" /><code>{"private float CreateLetterMesh(string text, float currentLineWidth, int i, GameObject letter, Mesh mesh, Material material, Transform letterTransform, float characterWidth)"}</code> |  |
| <Link id="m-createlettermesh-2" /><code>{"private float CreateLetterMesh(string text, float currentLineWidth, int i, "}<Link to="/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{" letterMesh, List<Vector3> vertices, List<Vector3> normals, List<int> indices, float characterWidth)"}</code> |  |
| <Link id="m-createmultiline" /><code>{"private void CreateMultiline(Material instancedMaterial)"}</code> |  |
| <Link id="m-createtextline" /><code>{"private float CreateTextLine(string text, int lineNumber, int lineCount, List<Vector3> vertices, List<Vector3> normals, List<int> indices, List<Color> colors)"}</code> |  |
| <Link id="m-debugrefresh" /><code>{"private void DebugRefresh()"}</code> |  |
| <Link id="m-drawgizmoline" /><code>{"private void DrawGizmoLine(float maxWidth)"}</code> |  |
| <Link id="m-drawtextline" /><code>{"private float DrawTextLine(string text, int lineNumber, int lineCount, Material material, out float height, out float maxHeight)"}</code> |  |
| <Link id="m-getcolorobjecthash" /><code>{"private int GetColorObjectHash(Object targetObject, Color color)"}</code> |  |
| <Link id="m-getmaterialforcolor" /><code>{"private Material GetMaterialForColor(Material material, Color color)"}</code> |  |
| <Link id="m-getmeshforcolor" /><code>{"private Mesh GetMeshForColor(Mesh mesh, Color color)"}</code> |  |
| <Link id="m-getwidth" /><code>{"private float GetWidth(char character)"}</code> |  |
| <Link id="m-internalclear" /><code>{"private void InternalClear()"}</code> |  |
| <Link id="m-internalrefresh" /><code>{"private void InternalRefresh()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> |  |

## Used in

Members of other types that take, return or hold a `TextRenderer`:

[`AchievementBoard.title`](/game-api/types/global-a-b/achievementboard#m-title), [`AchievementItem.textRenderer`](/game-api/types/global-a-b/achievementitem#m-textrenderer), [`CaveTeleporter.costRenderer`](/game-api/types/alta-world-generation/caveteleporter#m-costrenderer), [`CosmeticRotatingSlot.indexText`](/game-api/types/alta-customization/cosmeticrotatingslot#m-indextext), [`MainMenuShopInterface.accountBalanceText`](/game-api/types/alta-customization/mainmenushopinterface#m-accountbalancetext), [`MainMenuShopItem.costText`](/game-api/types/alta-customization/mainmenushopitem#m-costtext), [`MainMenuShopItem.itemName`](/game-api/types/alta-customization/mainmenushopitem#m-itemname), [`ShopInterface.balanceText`](/game-api/types/alta-customization/shopinterface#m-balancetext), [`ShopInterface.totalCost`](/game-api/types/alta-customization/shopinterface#m-totalcost), [`ShopInterfaceItem.costText`](/game-api/types/alta-customization/shopinterfaceitem#m-costtext), [`ShopInterfaceItem.nameText`](/game-api/types/alta-customization/shopinterfaceitem#m-nametext), [`CommunalStorage.localAllowance`](/game-api/types/alta-items/communalstorage#m-localallowance), [`DockVisual.countLabel3D`](/game-api/types/alta-items/dockvisual#m-countlabel3d), [`PooledDockVisual.countLabel3D`](/game-api/types/alta-items/pooleddockvisual#m-countlabel3d), [`PooledDockVisual.CountLabel3D`](/game-api/types/alta-items/pooleddockvisual#m-countlabel3d-2), [`InfoBoard.renderer`](/game-api/types/alta-world/infoboard#m-renderer), [`AssistedSpawnCommandAction.progressText`](/game-api/types/alta-menus/assistedspawncommandaction#m-progresstext), [`CustomScroller.textSides`](/game-api/types/alta-menus/customscroller#m-textsides), [`CustomScroller.valueText`](/game-api/types/alta-menus/customscroller#m-valuetext), [`EnumMenuSettingBase.valueText`](/game-api/types/alta-menus/enummenusettingbase#m-valuetext), [`MenuGameSetting<T>.displayNameText`](/game-api/types/alta-menus/menugamesetting-t#m-displaynametext), [`ScrollerEnumMenuSetting.textSides`](/game-api/types/alta-menus/scrollerenummenusetting#m-textsides), [`ScrollerSelector.textSides`](/game-api/types/alta-menus/scrollerselector#m-textsides), [`ServerCommandAction.buttonText`](/game-api/types/alta-menus/servercommandaction#m-buttontext), [`ServerMultiCommandAction.buttonText`](/game-api/types/alta-menus/servermulticommandaction#m-buttontext), [`StandardFloatAsEnum.textSides`](/game-api/types/alta-menus/standardfloatasenum#m-textsides), [`StandardFloatAsEnum.valueText`](/game-api/types/alta-menus/standardfloatasenum#m-valuetext), [`UserToken.username`](/game-api/types/alta-menus/usertoken#m-username), [`ConfirmPopupPanel.messageText`](/game-api/types/alta-menus/confirmpopuppanel#m-messagetext), [`InputField.textVisuals`](/game-api/types/alta-menus/inputfield#m-textvisuals), [`ListElementWithButtonAndExtraText.extraText`](/game-api/types/alta-menus/listelementwithbuttonandextratext#m-extratext), [`ListElementWithButtonAndExtraText.ExtraText`](/game-api/types/alta-menus/listelementwithbuttonandextratext#m-extratext-2), [`OptionsPanel.text`](/game-api/types/alta-menus/optionspanel#m-text), [`RecentPlayerPanelListElement.thirdLine`](/game-api/types/alta-menus/recentplayerpanellistelement#m-thirdline), [`CreateServerPanel.canCreateText`](/game-api/types/alta-menus/createserverpanel#m-cancreatetext), [`FriendsInvitesPanel.emptyListText`](/game-api/types/alta-menus/friendsinvitespanel#m-emptylisttext), [`FriendsListPanel.emptyListText`](/game-api/types/alta-menus/friendslistpanel#m-emptylisttext), [`FriendsRequestsPanel.emptyListText`](/game-api/types/alta-menus/friendsrequestspanel#m-emptylisttext), [`GroupInfoTab.infoText`](/game-api/types/alta-menus/groupinfotab#m-infotext), [`GroupMembersPage.emptyListText`](/game-api/types/alta-menus/groupmemberspage#m-emptylisttext), [`GroupMembersPage.tooManyMembersText`](/game-api/types/alta-menus/groupmemberspage#m-toomanymemberstext), [`InboxPanel.infoText`](/game-api/types/alta-menus/inboxpanel#m-infotext), [`IncomingGroupRequestPage.emptyListText`](/game-api/types/alta-menus/incominggrouprequestpage#m-emptylisttext), [`OculusFriendsListPanel.emptyListText`](/game-api/types/alta-menus/oculusfriendslistpanel#m-emptylisttext), [`OutgoingGroupInvitesPage.emptyListText`](/game-api/types/alta-menus/outgoinggroupinvitespage#m-emptylisttext), [`PlayerReportInboxInfoPanel.actionTakenAtText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-actiontakenattext), [`PlayerReportInboxInfoPanel.actionTakenByText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-actiontakenbytext), [`PlayerReportInboxInfoPanel.actionTakenText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-actiontakentext), [`PlayerReportInboxInfoPanel.reasonText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-reasontext), [`PlayerReportInboxInfoPanel.reportedUserText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-reportedusertext), [`PlayerReportInboxInfoPanel.reporterText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-reportertext), [`PlayerReportInboxInfoPanel.serverText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-servertext), [`PlayerReportInboxInfoPanel.timeText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-timetext), [`PlayerReportSummaryPanel.actionTakenAtText`](/game-api/types/alta-menus/playerreportsummarypanel#m-actiontakenattext), [`PlayerReportSummaryPanel.actionTakenByText`](/game-api/types/alta-menus/playerreportsummarypanel#m-actiontakenbytext), [`PlayerReportSummaryPanel.actionTakenText`](/game-api/types/alta-menus/playerreportsummarypanel#m-actiontakentext), [`PlayerReportSummaryPanel.reasonText`](/game-api/types/alta-menus/playerreportsummarypanel#m-reasontext), [`PlayerReportSummaryPanel.reportedUserText`](/game-api/types/alta-menus/playerreportsummarypanel#m-reportedusertext), [`PlayerReportSummaryPanel.reporterText`](/game-api/types/alta-menus/playerreportsummarypanel#m-reportertext), [`PlayerReportSummaryPanel.serverText`](/game-api/types/alta-menus/playerreportsummarypanel#m-servertext) and 88 more.
