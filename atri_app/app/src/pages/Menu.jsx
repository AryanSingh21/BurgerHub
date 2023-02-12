import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex166Cb, useFlex164Cb, useFlex165Cb, useFlex167Cb, useFlex168Cb, useFlex169Cb, useFlex180Cb, useFlex178Cb, useFlex170Cb, useFlex171Cb, useFlex172Cb, useFlex173Cb, useFlex179Cb, useFlex174Cb, useFlex175Cb, useFlex176Cb, useFlex177Cb, useFlex181Cb, useFlex182Cb, useFlex183Cb, useFlex192Cb, useFlex189Cb, useFlex185Cb, useFlex184Cb, useFlex190Cb, useFlex186Cb, useFlex187Cb, useFlex191Cb, useFlex188Cb, useImage85Cb, useTextBox178Cb, useTextBox179Cb, useTextBox180Cb, useTextBox181Cb, useTextBox182Cb, useTextBox183Cb, useTextBox184Cb, useTextBox185Cb, useTextBox186Cb, useButton15Cb, useButton16Cb, useButton17Cb, useButton18Cb, useButton20Cb, useImage86Cb, useTextBox187Cb, useTextBox188Cb, useImage87Cb, useTextBox189Cb, useTextBox190Cb, useImage88Cb, useTextBox191Cb, useTextBox192Cb, useImage89Cb, useTextBox193Cb, useTextBox194Cb, useImage90Cb, useTextBox195Cb, useTextBox196Cb, useImage91Cb, useTextBox197Cb, useTextBox198Cb, useImage92Cb, useTextBox199Cb, useTextBox200Cb, useTextBox201Cb, useTextBox202Cb, useImage93Cb, useTextBox203Cb, useTextBox204Cb, useImage94Cb, useImage95Cb, useImage96Cb, useImage97Cb, useTextBox219Cb, useImage98Cb, useImage99Cb, useTextBox205Cb, useTextBox206Cb, useTextBox207Cb, useTextBox208Cb, useTextBox209Cb, useTextBox210Cb, useTextBox211Cb, useTextBox212Cb, useTextBox213Cb, useTextBox214Cb, useTextBox215Cb, useTextBox216Cb, useTextBox217Cb, useTextBox218Cb, useTextBox220Cb, useImage105Cb, useImage100Cb, useImage101Cb, useImage102Cb, useImage103Cb, useImage104Cb } from "../page-cbs/menu";
import "../page-css/menu.css";
import "../custom/menu";

export default function Menu() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex166Props = useStore((state)=>state["menu"]["Flex166"]);
const Flex166IoProps = useIoStore((state)=>state["menu"]["Flex166"]);
const Flex166Cb = useFlex166Cb()
const Flex164Props = useStore((state)=>state["menu"]["Flex164"]);
const Flex164IoProps = useIoStore((state)=>state["menu"]["Flex164"]);
const Flex164Cb = useFlex164Cb()
const Flex165Props = useStore((state)=>state["menu"]["Flex165"]);
const Flex165IoProps = useIoStore((state)=>state["menu"]["Flex165"]);
const Flex165Cb = useFlex165Cb()
const Flex167Props = useStore((state)=>state["menu"]["Flex167"]);
const Flex167IoProps = useIoStore((state)=>state["menu"]["Flex167"]);
const Flex167Cb = useFlex167Cb()
const Flex168Props = useStore((state)=>state["menu"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["menu"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Flex169Props = useStore((state)=>state["menu"]["Flex169"]);
const Flex169IoProps = useIoStore((state)=>state["menu"]["Flex169"]);
const Flex169Cb = useFlex169Cb()
const Flex180Props = useStore((state)=>state["menu"]["Flex180"]);
const Flex180IoProps = useIoStore((state)=>state["menu"]["Flex180"]);
const Flex180Cb = useFlex180Cb()
const Flex178Props = useStore((state)=>state["menu"]["Flex178"]);
const Flex178IoProps = useIoStore((state)=>state["menu"]["Flex178"]);
const Flex178Cb = useFlex178Cb()
const Flex170Props = useStore((state)=>state["menu"]["Flex170"]);
const Flex170IoProps = useIoStore((state)=>state["menu"]["Flex170"]);
const Flex170Cb = useFlex170Cb()
const Flex171Props = useStore((state)=>state["menu"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["menu"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex172Props = useStore((state)=>state["menu"]["Flex172"]);
const Flex172IoProps = useIoStore((state)=>state["menu"]["Flex172"]);
const Flex172Cb = useFlex172Cb()
const Flex173Props = useStore((state)=>state["menu"]["Flex173"]);
const Flex173IoProps = useIoStore((state)=>state["menu"]["Flex173"]);
const Flex173Cb = useFlex173Cb()
const Flex179Props = useStore((state)=>state["menu"]["Flex179"]);
const Flex179IoProps = useIoStore((state)=>state["menu"]["Flex179"]);
const Flex179Cb = useFlex179Cb()
const Flex174Props = useStore((state)=>state["menu"]["Flex174"]);
const Flex174IoProps = useIoStore((state)=>state["menu"]["Flex174"]);
const Flex174Cb = useFlex174Cb()
const Flex175Props = useStore((state)=>state["menu"]["Flex175"]);
const Flex175IoProps = useIoStore((state)=>state["menu"]["Flex175"]);
const Flex175Cb = useFlex175Cb()
const Flex176Props = useStore((state)=>state["menu"]["Flex176"]);
const Flex176IoProps = useIoStore((state)=>state["menu"]["Flex176"]);
const Flex176Cb = useFlex176Cb()
const Flex177Props = useStore((state)=>state["menu"]["Flex177"]);
const Flex177IoProps = useIoStore((state)=>state["menu"]["Flex177"]);
const Flex177Cb = useFlex177Cb()
const Flex181Props = useStore((state)=>state["menu"]["Flex181"]);
const Flex181IoProps = useIoStore((state)=>state["menu"]["Flex181"]);
const Flex181Cb = useFlex181Cb()
const Flex182Props = useStore((state)=>state["menu"]["Flex182"]);
const Flex182IoProps = useIoStore((state)=>state["menu"]["Flex182"]);
const Flex182Cb = useFlex182Cb()
const Flex183Props = useStore((state)=>state["menu"]["Flex183"]);
const Flex183IoProps = useIoStore((state)=>state["menu"]["Flex183"]);
const Flex183Cb = useFlex183Cb()
const Flex192Props = useStore((state)=>state["menu"]["Flex192"]);
const Flex192IoProps = useIoStore((state)=>state["menu"]["Flex192"]);
const Flex192Cb = useFlex192Cb()
const Flex189Props = useStore((state)=>state["menu"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["menu"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const Flex185Props = useStore((state)=>state["menu"]["Flex185"]);
const Flex185IoProps = useIoStore((state)=>state["menu"]["Flex185"]);
const Flex185Cb = useFlex185Cb()
const Flex184Props = useStore((state)=>state["menu"]["Flex184"]);
const Flex184IoProps = useIoStore((state)=>state["menu"]["Flex184"]);
const Flex184Cb = useFlex184Cb()
const Flex190Props = useStore((state)=>state["menu"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["menu"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const Flex186Props = useStore((state)=>state["menu"]["Flex186"]);
const Flex186IoProps = useIoStore((state)=>state["menu"]["Flex186"]);
const Flex186Cb = useFlex186Cb()
const Flex187Props = useStore((state)=>state["menu"]["Flex187"]);
const Flex187IoProps = useIoStore((state)=>state["menu"]["Flex187"]);
const Flex187Cb = useFlex187Cb()
const Flex191Props = useStore((state)=>state["menu"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["menu"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const Flex188Props = useStore((state)=>state["menu"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["menu"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Image85Props = useStore((state)=>state["menu"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["menu"]["Image85"]);
const Image85Cb = useImage85Cb()
const TextBox178Props = useStore((state)=>state["menu"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["menu"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["menu"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["menu"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox180Props = useStore((state)=>state["menu"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["menu"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox181Props = useStore((state)=>state["menu"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["menu"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox182Props = useStore((state)=>state["menu"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["menu"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const TextBox183Props = useStore((state)=>state["menu"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["menu"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const TextBox184Props = useStore((state)=>state["menu"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["menu"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const TextBox185Props = useStore((state)=>state["menu"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["menu"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const TextBox186Props = useStore((state)=>state["menu"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["menu"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const Button15Props = useStore((state)=>state["menu"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["menu"]["Button15"]);
const Button15Cb = useButton15Cb()
const Button16Props = useStore((state)=>state["menu"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["menu"]["Button16"]);
const Button16Cb = useButton16Cb()
const Button17Props = useStore((state)=>state["menu"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["menu"]["Button17"]);
const Button17Cb = useButton17Cb()
const Button18Props = useStore((state)=>state["menu"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["menu"]["Button18"]);
const Button18Cb = useButton18Cb()
const Button20Props = useStore((state)=>state["menu"]["Button20"]);
const Button20IoProps = useIoStore((state)=>state["menu"]["Button20"]);
const Button20Cb = useButton20Cb()
const Image86Props = useStore((state)=>state["menu"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["menu"]["Image86"]);
const Image86Cb = useImage86Cb()
const TextBox187Props = useStore((state)=>state["menu"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["menu"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const TextBox188Props = useStore((state)=>state["menu"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["menu"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const Image87Props = useStore((state)=>state["menu"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["menu"]["Image87"]);
const Image87Cb = useImage87Cb()
const TextBox189Props = useStore((state)=>state["menu"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["menu"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const TextBox190Props = useStore((state)=>state["menu"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["menu"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const Image88Props = useStore((state)=>state["menu"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["menu"]["Image88"]);
const Image88Cb = useImage88Cb()
const TextBox191Props = useStore((state)=>state["menu"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["menu"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox192Props = useStore((state)=>state["menu"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["menu"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const Image89Props = useStore((state)=>state["menu"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["menu"]["Image89"]);
const Image89Cb = useImage89Cb()
const TextBox193Props = useStore((state)=>state["menu"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["menu"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const TextBox194Props = useStore((state)=>state["menu"]["TextBox194"]);
const TextBox194IoProps = useIoStore((state)=>state["menu"]["TextBox194"]);
const TextBox194Cb = useTextBox194Cb()
const Image90Props = useStore((state)=>state["menu"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["menu"]["Image90"]);
const Image90Cb = useImage90Cb()
const TextBox195Props = useStore((state)=>state["menu"]["TextBox195"]);
const TextBox195IoProps = useIoStore((state)=>state["menu"]["TextBox195"]);
const TextBox195Cb = useTextBox195Cb()
const TextBox196Props = useStore((state)=>state["menu"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["menu"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()
const Image91Props = useStore((state)=>state["menu"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["menu"]["Image91"]);
const Image91Cb = useImage91Cb()
const TextBox197Props = useStore((state)=>state["menu"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["menu"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const TextBox198Props = useStore((state)=>state["menu"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["menu"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const Image92Props = useStore((state)=>state["menu"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["menu"]["Image92"]);
const Image92Cb = useImage92Cb()
const TextBox199Props = useStore((state)=>state["menu"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["menu"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const TextBox200Props = useStore((state)=>state["menu"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["menu"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox201Props = useStore((state)=>state["menu"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["menu"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox202Props = useStore((state)=>state["menu"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["menu"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const Image93Props = useStore((state)=>state["menu"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["menu"]["Image93"]);
const Image93Cb = useImage93Cb()
const TextBox203Props = useStore((state)=>state["menu"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["menu"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const TextBox204Props = useStore((state)=>state["menu"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["menu"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const Image94Props = useStore((state)=>state["menu"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["menu"]["Image94"]);
const Image94Cb = useImage94Cb()
const Image95Props = useStore((state)=>state["menu"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["menu"]["Image95"]);
const Image95Cb = useImage95Cb()
const Image96Props = useStore((state)=>state["menu"]["Image96"]);
const Image96IoProps = useIoStore((state)=>state["menu"]["Image96"]);
const Image96Cb = useImage96Cb()
const Image97Props = useStore((state)=>state["menu"]["Image97"]);
const Image97IoProps = useIoStore((state)=>state["menu"]["Image97"]);
const Image97Cb = useImage97Cb()
const TextBox219Props = useStore((state)=>state["menu"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["menu"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const Image98Props = useStore((state)=>state["menu"]["Image98"]);
const Image98IoProps = useIoStore((state)=>state["menu"]["Image98"]);
const Image98Cb = useImage98Cb()
const Image99Props = useStore((state)=>state["menu"]["Image99"]);
const Image99IoProps = useIoStore((state)=>state["menu"]["Image99"]);
const Image99Cb = useImage99Cb()
const TextBox205Props = useStore((state)=>state["menu"]["TextBox205"]);
const TextBox205IoProps = useIoStore((state)=>state["menu"]["TextBox205"]);
const TextBox205Cb = useTextBox205Cb()
const TextBox206Props = useStore((state)=>state["menu"]["TextBox206"]);
const TextBox206IoProps = useIoStore((state)=>state["menu"]["TextBox206"]);
const TextBox206Cb = useTextBox206Cb()
const TextBox207Props = useStore((state)=>state["menu"]["TextBox207"]);
const TextBox207IoProps = useIoStore((state)=>state["menu"]["TextBox207"]);
const TextBox207Cb = useTextBox207Cb()
const TextBox208Props = useStore((state)=>state["menu"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["menu"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const TextBox209Props = useStore((state)=>state["menu"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["menu"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const TextBox210Props = useStore((state)=>state["menu"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["menu"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const TextBox211Props = useStore((state)=>state["menu"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["menu"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const TextBox212Props = useStore((state)=>state["menu"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["menu"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const TextBox213Props = useStore((state)=>state["menu"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["menu"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const TextBox214Props = useStore((state)=>state["menu"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["menu"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const TextBox215Props = useStore((state)=>state["menu"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["menu"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const TextBox216Props = useStore((state)=>state["menu"]["TextBox216"]);
const TextBox216IoProps = useIoStore((state)=>state["menu"]["TextBox216"]);
const TextBox216Cb = useTextBox216Cb()
const TextBox217Props = useStore((state)=>state["menu"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["menu"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const TextBox218Props = useStore((state)=>state["menu"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["menu"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const TextBox220Props = useStore((state)=>state["menu"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["menu"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const Image105Props = useStore((state)=>state["menu"]["Image105"]);
const Image105IoProps = useIoStore((state)=>state["menu"]["Image105"]);
const Image105Cb = useImage105Cb()
const Image100Props = useStore((state)=>state["menu"]["Image100"]);
const Image100IoProps = useIoStore((state)=>state["menu"]["Image100"]);
const Image100Cb = useImage100Cb()
const Image101Props = useStore((state)=>state["menu"]["Image101"]);
const Image101IoProps = useIoStore((state)=>state["menu"]["Image101"]);
const Image101Cb = useImage101Cb()
const Image102Props = useStore((state)=>state["menu"]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["menu"]["Image102"]);
const Image102Cb = useImage102Cb()
const Image103Props = useStore((state)=>state["menu"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["menu"]["Image103"]);
const Image103Cb = useImage103Cb()
const Image104Props = useStore((state)=>state["menu"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["menu"]["Image104"]);
const Image104Cb = useImage104Cb()

  return (<>
  <Flex2 className="p-menu Flex166 bpt" {...Flex166Props} {...Flex166Cb} {...Flex166IoProps}>
<Flex2 className="p-menu Flex164 bpt" {...Flex164Props} {...Flex164Cb} {...Flex164IoProps}>
<Image2 className="p-menu Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
<TextBox2 className="p-menu TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<TextBox2 className="p-menu TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
<TextBox2 className="p-menu TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
<TextBox2 className="p-menu TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<TextBox2 className="p-menu TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
</Flex2>
<Flex2 className="p-menu Flex165 bpt" {...Flex165Props} {...Flex165Cb} {...Flex165IoProps}>
<TextBox2 className="p-menu TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
<TextBox2 className="p-menu TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-menu Flex167 bpt" {...Flex167Props} {...Flex167Cb} {...Flex167IoProps}>
<TextBox2 className="p-menu TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
<TextBox2 className="p-menu TextBox186 bpt" {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
<Flex2 className="p-menu Flex168 bpt" {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<Button2 className="p-menu Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
<Button2 className="p-menu Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
<Button2 className="p-menu Button15 bpt" {...Button15Props} {...Button15Cb} {...Button15IoProps}/>
<Button2 className="p-menu Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
<Button2 className="p-menu Button20 bpt" {...Button20Props} {...Button20Cb} {...Button20IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-menu Flex169 bpt" {...Flex169Props} {...Flex169Cb} {...Flex169IoProps}>
<Flex2 className="p-menu Flex180 bpt" {...Flex180Props} {...Flex180Cb} {...Flex180IoProps}>
<Flex2 className="p-menu Flex179 bpt" {...Flex179Props} {...Flex179Cb} {...Flex179IoProps}>
<Flex2 className="p-menu Flex177 bpt" {...Flex177Props} {...Flex177Cb} {...Flex177IoProps}>
<Image2 className="p-menu Image93 bpt" {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
<TextBox2 className="p-menu TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
<TextBox2 className="p-menu TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
</Flex2>
<Flex2 className="p-menu Flex176 bpt" {...Flex176Props} {...Flex176Cb} {...Flex176IoProps}>
<Image2 className="p-menu Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
<TextBox2 className="p-menu TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
<TextBox2 className="p-menu TextBox199 bpt" {...TextBox199Props} {...TextBox199Cb} {...TextBox199IoProps}/>
</Flex2>
<Flex2 className="p-menu Flex175 bpt" {...Flex175Props} {...Flex175Cb} {...Flex175IoProps}>
<Image2 className="p-menu Image91 bpt" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
<TextBox2 className="p-menu TextBox198 bpt" {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
<TextBox2 className="p-menu TextBox197 bpt" {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
</Flex2>
<Flex2 className="p-menu Flex174 bpt" {...Flex174Props} {...Flex174Cb} {...Flex174IoProps}>
<Image2 className="p-menu Image90 bpt" {...Image90Props} {...Image90Cb} {...Image90IoProps}/>
<TextBox2 className="p-menu TextBox196 bpt" {...TextBox196Props} {...TextBox196Cb} {...TextBox196IoProps}/>
<TextBox2 className="p-menu TextBox195 bpt" {...TextBox195Props} {...TextBox195Cb} {...TextBox195IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-menu Flex178 bpt" {...Flex178Props} {...Flex178Cb} {...Flex178IoProps}>
<Flex2 className="p-menu Flex173 bpt" {...Flex173Props} {...Flex173Cb} {...Flex173IoProps}>
<Image2 className="p-menu Image89 bpt" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
<TextBox2 className="p-menu TextBox194 bpt" {...TextBox194Props} {...TextBox194Cb} {...TextBox194IoProps}/>
<TextBox2 className="p-menu TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
</Flex2>
<Flex2 className="p-menu Flex172 bpt" {...Flex172Props} {...Flex172Cb} {...Flex172IoProps}>
<Image2 className="p-menu Image88 bpt" {...Image88Props} {...Image88Cb} {...Image88IoProps}/>
<TextBox2 className="p-menu TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
<TextBox2 className="p-menu TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
</Flex2>
<Flex2 className="p-menu Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Image2 className="p-menu Image87 bpt" {...Image87Props} {...Image87Cb} {...Image87IoProps}/>
<TextBox2 className="p-menu TextBox190 bpt" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
<TextBox2 className="p-menu TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
</Flex2>
<Flex2 className="p-menu Flex170 bpt" {...Flex170Props} {...Flex170Cb} {...Flex170IoProps}>
<Image2 className="p-menu Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
<TextBox2 className="p-menu TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
<TextBox2 className="p-menu TextBox187 bpt" {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-menu Flex181 bpt" {...Flex181Props} {...Flex181Cb} {...Flex181IoProps}>
<TextBox2 className="p-menu TextBox204 bpt" {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
<TextBox2 className="p-menu TextBox203 bpt" {...TextBox203Props} {...TextBox203Cb} {...TextBox203IoProps}/>
<Flex2 className="p-menu Flex182 bpt" {...Flex182Props} {...Flex182Cb} {...Flex182IoProps}>
<Flex2 className="p-menu Flex183 bpt" {...Flex183Props} {...Flex183Cb} {...Flex183IoProps}>
<Image2 className="p-menu Image97 bpt" {...Image97Props} {...Image97Cb} {...Image97IoProps}/>
<Image2 className="p-menu Image95 bpt" {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
<Image2 className="p-menu Image96 bpt" {...Image96Props} {...Image96Cb} {...Image96IoProps}/>
<Image2 className="p-menu Image94 bpt" {...Image94Props} {...Image94Cb} {...Image94IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-menu Flex192 bpt" {...Flex192Props} {...Flex192Cb} {...Flex192IoProps}>
<Flex2 className="p-menu Flex191 bpt" {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<Image2 className="p-menu Image105 bpt" {...Image105Props} {...Image105Cb} {...Image105IoProps}/>
<TextBox2 className="p-menu TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<Flex2 className="p-menu Flex188 bpt" {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<Image2 className="p-menu Image100 bpt" {...Image100Props} {...Image100Cb} {...Image100IoProps}/>
<Image2 className="p-menu Image102 bpt" {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
<Image2 className="p-menu Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
<Image2 className="p-menu Image103 bpt" {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
<Image2 className="p-menu Image101 bpt" {...Image101Props} {...Image101Cb} {...Image101IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-menu Flex190 bpt" {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<Flex2 className="p-menu Flex187 bpt" {...Flex187Props} {...Flex187Cb} {...Flex187IoProps}>
<TextBox2 className="p-menu TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<TextBox2 className="p-menu TextBox217 bpt" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
<TextBox2 className="p-menu TextBox216 bpt" {...TextBox216Props} {...TextBox216Cb} {...TextBox216IoProps}/>
<TextBox2 className="p-menu TextBox215 bpt" {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
<TextBox2 className="p-menu TextBox212 bpt" {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
<TextBox2 className="p-menu TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
<TextBox2 className="p-menu TextBox214 bpt" {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
</Flex2>
<Flex2 className="p-menu Flex186 bpt" {...Flex186Props} {...Flex186Cb} {...Flex186IoProps}>
<TextBox2 className="p-menu TextBox211 bpt" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
<TextBox2 className="p-menu TextBox210 bpt" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
<TextBox2 className="p-menu TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
<TextBox2 className="p-menu TextBox208 bpt" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
<TextBox2 className="p-menu TextBox207 bpt" {...TextBox207Props} {...TextBox207Cb} {...TextBox207IoProps}/>
<TextBox2 className="p-menu TextBox206 bpt" {...TextBox206Props} {...TextBox206Cb} {...TextBox206IoProps}/>
<TextBox2 className="p-menu TextBox205 bpt" {...TextBox205Props} {...TextBox205Cb} {...TextBox205IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-menu Flex189 bpt" {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<TextBox2 className="p-menu TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<Flex2 className="p-menu Flex185 bpt" {...Flex185Props} {...Flex185Cb} {...Flex185IoProps}>
<Flex2 className="p-menu Flex184 bpt" {...Flex184Props} {...Flex184Cb} {...Flex184IoProps}>
<Image2 className="p-menu Image98 bpt" {...Image98Props} {...Image98Cb} {...Image98IoProps}/>
<Image2 className="p-menu Image99 bpt" {...Image99Props} {...Image99Cb} {...Image99IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
