import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex118Cb, useFlex116Cb, useFlex117Cb, useFlex119Cb, useFlex120Cb, useFlex121Cb, useFlex122Cb, useFlex124Cb, useFlex125Cb, useFlex126Cb, useFlex127Cb, useFlex128Cb, useFlex129Cb, useFlex130Cb, useFlex131Cb, useFlex133Cb, useFlex132Cb, useFlex134Cb, useFlex135Cb, useFlex138Cb, useFlex136Cb, useFlex137Cb, useFlex139Cb, useFlex140Cb, useFlex141Cb, useFlex142Cb, useFlex143Cb, useFlex145Cb, useFlex146Cb, useFlex148Cb, useFlex149Cb, useFlex150Cb, useFlex151Cb, useFlex152Cb, useFlex154Cb, useFlex153Cb, useFlex163Cb, useFlex160Cb, useFlex156Cb, useFlex155Cb, useFlex161Cb, useFlex157Cb, useFlex158Cb, useFlex162Cb, useFlex159Cb, useImage54Cb, useTextBox116Cb, useTextBox117Cb, useTextBox118Cb, useTextBox119Cb, useTextBox120Cb, useTextBox121Cb, useTextBox122Cb, useTextBox123Cb, useTextBox124Cb, useImage55Cb, useImage56Cb, useImage57Cb, useImage58Cb, useImage59Cb, useImage60Cb, useImage61Cb, useTextBox125Cb, useTextBox126Cb, useTextBox127Cb, useButton12Cb, useButton13Cb, useTextBox128Cb, useTextBox129Cb, useTextBox130Cb, useImage62Cb, useTextBox131Cb, useTextBox132Cb, useImage63Cb, useTextBox133Cb, useTextBox134Cb, useImage64Cb, useTextBox135Cb, useTextBox136Cb, useTextBox137Cb, useTextBox138Cb, useImage65Cb, useTextBox139Cb, useImage66Cb, useTextBox140Cb, useTextBox141Cb, useImage68Cb, useTextBox146Cb, useTextBox147Cb, useImage69Cb, useTextBox149Cb, useTextBox150Cb, useImage70Cb, useTextBox152Cb, useTextBox153Cb, useImage71Cb, useTextBox155Cb, useTextBox156Cb, useImage72Cb, useTextBox158Cb, useTextBox159Cb, useButton14Cb, useTextBox161Cb, useImage75Cb, useImage76Cb, useImage73Cb, useImage74Cb, useTextBox176Cb, useImage77Cb, useImage78Cb, useTextBox162Cb, useTextBox163Cb, useTextBox164Cb, useTextBox165Cb, useTextBox166Cb, useTextBox167Cb, useTextBox168Cb, useTextBox169Cb, useTextBox170Cb, useTextBox171Cb, useTextBox172Cb, useTextBox173Cb, useTextBox174Cb, useTextBox175Cb, useTextBox177Cb, useImage84Cb, useImage79Cb, useImage80Cb, useImage81Cb, useImage82Cb, useImage83Cb } from "../page-cbs/about";
import "../page-css/about.css";
import "../custom/about";

export default function About() {
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

  const Flex118Props = useStore((state)=>state["about"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["about"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex116Props = useStore((state)=>state["about"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["about"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex117Props = useStore((state)=>state["about"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["about"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex119Props = useStore((state)=>state["about"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["about"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex120Props = useStore((state)=>state["about"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["about"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex121Props = useStore((state)=>state["about"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["about"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex122Props = useStore((state)=>state["about"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["about"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Flex124Props = useStore((state)=>state["about"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["about"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex125Props = useStore((state)=>state["about"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["about"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Flex126Props = useStore((state)=>state["about"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["about"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Flex127Props = useStore((state)=>state["about"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["about"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Flex128Props = useStore((state)=>state["about"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["about"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex129Props = useStore((state)=>state["about"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["about"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex130Props = useStore((state)=>state["about"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["about"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Flex131Props = useStore((state)=>state["about"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["about"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex133Props = useStore((state)=>state["about"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["about"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex132Props = useStore((state)=>state["about"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["about"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Flex134Props = useStore((state)=>state["about"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["about"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex135Props = useStore((state)=>state["about"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["about"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Flex138Props = useStore((state)=>state["about"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["about"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex136Props = useStore((state)=>state["about"]["Flex136"]);
const Flex136IoProps = useIoStore((state)=>state["about"]["Flex136"]);
const Flex136Cb = useFlex136Cb()
const Flex137Props = useStore((state)=>state["about"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["about"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Flex139Props = useStore((state)=>state["about"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["about"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Flex140Props = useStore((state)=>state["about"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["about"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex141Props = useStore((state)=>state["about"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["about"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Flex142Props = useStore((state)=>state["about"]["Flex142"]);
const Flex142IoProps = useIoStore((state)=>state["about"]["Flex142"]);
const Flex142Cb = useFlex142Cb()
const Flex143Props = useStore((state)=>state["about"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["about"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Flex145Props = useStore((state)=>state["about"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["about"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Flex146Props = useStore((state)=>state["about"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["about"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Flex148Props = useStore((state)=>state["about"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["about"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Flex149Props = useStore((state)=>state["about"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["about"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Flex150Props = useStore((state)=>state["about"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["about"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Flex151Props = useStore((state)=>state["about"]["Flex151"]);
const Flex151IoProps = useIoStore((state)=>state["about"]["Flex151"]);
const Flex151Cb = useFlex151Cb()
const Flex152Props = useStore((state)=>state["about"]["Flex152"]);
const Flex152IoProps = useIoStore((state)=>state["about"]["Flex152"]);
const Flex152Cb = useFlex152Cb()
const Flex154Props = useStore((state)=>state["about"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["about"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const Flex153Props = useStore((state)=>state["about"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["about"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const Flex163Props = useStore((state)=>state["about"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["about"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Flex160Props = useStore((state)=>state["about"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["about"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Flex156Props = useStore((state)=>state["about"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["about"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Flex155Props = useStore((state)=>state["about"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["about"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Flex161Props = useStore((state)=>state["about"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["about"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Flex157Props = useStore((state)=>state["about"]["Flex157"]);
const Flex157IoProps = useIoStore((state)=>state["about"]["Flex157"]);
const Flex157Cb = useFlex157Cb()
const Flex158Props = useStore((state)=>state["about"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["about"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Flex162Props = useStore((state)=>state["about"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["about"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Flex159Props = useStore((state)=>state["about"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["about"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const Image54Props = useStore((state)=>state["about"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["about"]["Image54"]);
const Image54Cb = useImage54Cb()
const TextBox116Props = useStore((state)=>state["about"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["about"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox117Props = useStore((state)=>state["about"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["about"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox118Props = useStore((state)=>state["about"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["about"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox119Props = useStore((state)=>state["about"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["about"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["about"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["about"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["about"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["about"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["about"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["about"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox123Props = useStore((state)=>state["about"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["about"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const TextBox124Props = useStore((state)=>state["about"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["about"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const Image55Props = useStore((state)=>state["about"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["about"]["Image55"]);
const Image55Cb = useImage55Cb()
const Image56Props = useStore((state)=>state["about"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["about"]["Image56"]);
const Image56Cb = useImage56Cb()
const Image57Props = useStore((state)=>state["about"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["about"]["Image57"]);
const Image57Cb = useImage57Cb()
const Image58Props = useStore((state)=>state["about"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["about"]["Image58"]);
const Image58Cb = useImage58Cb()
const Image59Props = useStore((state)=>state["about"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["about"]["Image59"]);
const Image59Cb = useImage59Cb()
const Image60Props = useStore((state)=>state["about"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["about"]["Image60"]);
const Image60Cb = useImage60Cb()
const Image61Props = useStore((state)=>state["about"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["about"]["Image61"]);
const Image61Cb = useImage61Cb()
const TextBox125Props = useStore((state)=>state["about"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["about"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox126Props = useStore((state)=>state["about"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["about"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox127Props = useStore((state)=>state["about"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["about"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const Button12Props = useStore((state)=>state["about"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["about"]["Button12"]);
const Button12Cb = useButton12Cb()
const Button13Props = useStore((state)=>state["about"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["about"]["Button13"]);
const Button13Cb = useButton13Cb()
const TextBox128Props = useStore((state)=>state["about"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["about"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox129Props = useStore((state)=>state["about"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["about"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["about"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["about"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const Image62Props = useStore((state)=>state["about"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["about"]["Image62"]);
const Image62Cb = useImage62Cb()
const TextBox131Props = useStore((state)=>state["about"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["about"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["about"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["about"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const Image63Props = useStore((state)=>state["about"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["about"]["Image63"]);
const Image63Cb = useImage63Cb()
const TextBox133Props = useStore((state)=>state["about"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["about"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox134Props = useStore((state)=>state["about"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["about"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const Image64Props = useStore((state)=>state["about"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["about"]["Image64"]);
const Image64Cb = useImage64Cb()
const TextBox135Props = useStore((state)=>state["about"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["about"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox136Props = useStore((state)=>state["about"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["about"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox137Props = useStore((state)=>state["about"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["about"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox138Props = useStore((state)=>state["about"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["about"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const Image65Props = useStore((state)=>state["about"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["about"]["Image65"]);
const Image65Cb = useImage65Cb()
const TextBox139Props = useStore((state)=>state["about"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["about"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const Image66Props = useStore((state)=>state["about"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["about"]["Image66"]);
const Image66Cb = useImage66Cb()
const TextBox140Props = useStore((state)=>state["about"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["about"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const TextBox141Props = useStore((state)=>state["about"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["about"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const Image68Props = useStore((state)=>state["about"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["about"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox146Props = useStore((state)=>state["about"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["about"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const TextBox147Props = useStore((state)=>state["about"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["about"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const Image69Props = useStore((state)=>state["about"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["about"]["Image69"]);
const Image69Cb = useImage69Cb()
const TextBox149Props = useStore((state)=>state["about"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["about"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["about"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["about"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const Image70Props = useStore((state)=>state["about"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["about"]["Image70"]);
const Image70Cb = useImage70Cb()
const TextBox152Props = useStore((state)=>state["about"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["about"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const TextBox153Props = useStore((state)=>state["about"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["about"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const Image71Props = useStore((state)=>state["about"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["about"]["Image71"]);
const Image71Cb = useImage71Cb()
const TextBox155Props = useStore((state)=>state["about"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["about"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox156Props = useStore((state)=>state["about"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["about"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const Image72Props = useStore((state)=>state["about"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["about"]["Image72"]);
const Image72Cb = useImage72Cb()
const TextBox158Props = useStore((state)=>state["about"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["about"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox159Props = useStore((state)=>state["about"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["about"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const Button14Props = useStore((state)=>state["about"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["about"]["Button14"]);
const Button14Cb = useButton14Cb()
const TextBox161Props = useStore((state)=>state["about"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["about"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const Image75Props = useStore((state)=>state["about"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["about"]["Image75"]);
const Image75Cb = useImage75Cb()
const Image76Props = useStore((state)=>state["about"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["about"]["Image76"]);
const Image76Cb = useImage76Cb()
const Image73Props = useStore((state)=>state["about"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["about"]["Image73"]);
const Image73Cb = useImage73Cb()
const Image74Props = useStore((state)=>state["about"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["about"]["Image74"]);
const Image74Cb = useImage74Cb()
const TextBox176Props = useStore((state)=>state["about"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["about"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const Image77Props = useStore((state)=>state["about"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["about"]["Image77"]);
const Image77Cb = useImage77Cb()
const Image78Props = useStore((state)=>state["about"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["about"]["Image78"]);
const Image78Cb = useImage78Cb()
const TextBox162Props = useStore((state)=>state["about"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["about"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["about"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["about"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const TextBox164Props = useStore((state)=>state["about"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["about"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const TextBox165Props = useStore((state)=>state["about"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["about"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox166Props = useStore((state)=>state["about"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["about"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox167Props = useStore((state)=>state["about"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["about"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox168Props = useStore((state)=>state["about"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["about"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["about"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["about"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox170Props = useStore((state)=>state["about"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["about"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["about"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["about"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox172Props = useStore((state)=>state["about"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["about"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["about"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["about"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox174Props = useStore((state)=>state["about"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["about"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox175Props = useStore((state)=>state["about"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["about"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox177Props = useStore((state)=>state["about"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["about"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const Image84Props = useStore((state)=>state["about"]["Image84"]);
const Image84IoProps = useIoStore((state)=>state["about"]["Image84"]);
const Image84Cb = useImage84Cb()
const Image79Props = useStore((state)=>state["about"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["about"]["Image79"]);
const Image79Cb = useImage79Cb()
const Image80Props = useStore((state)=>state["about"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["about"]["Image80"]);
const Image80Cb = useImage80Cb()
const Image81Props = useStore((state)=>state["about"]["Image81"]);
const Image81IoProps = useIoStore((state)=>state["about"]["Image81"]);
const Image81Cb = useImage81Cb()
const Image82Props = useStore((state)=>state["about"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["about"]["Image82"]);
const Image82Cb = useImage82Cb()
const Image83Props = useStore((state)=>state["about"]["Image83"]);
const Image83IoProps = useIoStore((state)=>state["about"]["Image83"]);
const Image83Cb = useImage83Cb()

  return (<>
  <Flex1 className="p-about Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<Flex1 className="p-about Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<Image1 className="p-about Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
<TextBox1 className="p-about TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<TextBox1 className="p-about TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
<TextBox1 className="p-about TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<TextBox1 className="p-about TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<TextBox1 className="p-about TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
</Flex1>
<Flex1 className="p-about Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<TextBox1 className="p-about TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
<TextBox1 className="p-about TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Flex1 className="p-about Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<TextBox1 className="p-about TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
<TextBox1 className="p-about TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
</Flex1>
<Flex1 className="p-about Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Image1 className="p-about Image55 bpt" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<Flex1 className="p-about Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<Image1 className="p-about Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<Flex1 className="p-about Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Image1 className="p-about Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
<Image1 className="p-about Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
<Image1 className="p-about Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
<Image1 className="p-about Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<Flex1 className="p-about Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<Image1 className="p-about Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
</Flex1>
<Flex1 className="p-about Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<TextBox1 className="p-about TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<TextBox1 className="p-about TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<TextBox1 className="p-about TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
<Button1 className="p-about Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<Flex1 className="p-about Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<Flex1 className="p-about Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<TextBox1 className="p-about TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
<TextBox1 className="p-about TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<TextBox1 className="p-about TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<Button1 className="p-about Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<Image1 className="p-about Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<TextBox1 className="p-about TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<TextBox1 className="p-about TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<Flex1 className="p-about Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<Flex1 className="p-about Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<Flex1 className="p-about Flex136 bpt" {...Flex136Props} {...Flex136Cb} {...Flex136IoProps}>
<Image1 className="p-about Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
<TextBox1 className="p-about TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
<TextBox1 className="p-about TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
</Flex1>
<Flex1 className="p-about Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<Image1 className="p-about Image65 bpt" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
<TextBox1 className="p-about TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
<TextBox1 className="p-about TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
</Flex1>
<Flex1 className="p-about Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<Image1 className="p-about Image64 bpt" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
<TextBox1 className="p-about TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox1 className="p-about TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<TextBox1 className="p-about TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<Flex1 className="p-about Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<Flex1 className="p-about Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<Flex1 className="p-about Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<Image1 className="p-about Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
<TextBox1 className="p-about TextBox152 bpt" {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
<TextBox1 className="p-about TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
</Flex1>
<Flex1 className="p-about Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<Image1 className="p-about Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
<TextBox1 className="p-about TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
<TextBox1 className="p-about TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
</Flex1>
<Flex1 className="p-about Flex151 bpt" {...Flex151Props} {...Flex151Cb} {...Flex151IoProps}>
<Image1 className="p-about Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
<TextBox1 className="p-about TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
<TextBox1 className="p-about TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex142 bpt" {...Flex142Props} {...Flex142Cb} {...Flex142IoProps}>
<Flex1 className="p-about Flex143 bpt" {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<Image1 className="p-about Image66 bpt" {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
<TextBox1 className="p-about TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
<TextBox1 className="p-about TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
</Flex1>
<Flex1 className="p-about Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<Image1 className="p-about Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
<TextBox1 className="p-about TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
<TextBox1 className="p-about TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
</Flex1>
<Flex1 className="p-about Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<Image1 className="p-about Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
<TextBox1 className="p-about TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<TextBox1 className="p-about TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex152 bpt" {...Flex152Props} {...Flex152Cb} {...Flex152IoProps}>
<TextBox1 className="p-about TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
<Button1 className="p-about Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
</Flex1>
<Flex1 className="p-about Flex154 bpt" {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}>
<Image1 className="p-about Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
<Image1 className="p-about Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
<Flex1 className="p-about Flex153 bpt" {...Flex153Props} {...Flex153Cb} {...Flex153IoProps}>
<Image1 className="p-about Image74 bpt" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
<Image1 className="p-about Image73 bpt" {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex163 bpt" {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<Flex1 className="p-about Flex162 bpt" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<Image1 className="p-about Image84 bpt" {...Image84Props} {...Image84Cb} {...Image84IoProps}/>
<TextBox1 className="p-about TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
<Flex1 className="p-about Flex159 bpt" {...Flex159Props} {...Flex159Cb} {...Flex159IoProps}>
<Image1 className="p-about Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
<Image1 className="p-about Image81 bpt" {...Image81Props} {...Image81Cb} {...Image81IoProps}/>
<Image1 className="p-about Image83 bpt" {...Image83Props} {...Image83Cb} {...Image83IoProps}/>
<Image1 className="p-about Image82 bpt" {...Image82Props} {...Image82Cb} {...Image82IoProps}/>
<Image1 className="p-about Image80 bpt" {...Image80Props} {...Image80Cb} {...Image80IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex161 bpt" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<Flex1 className="p-about Flex158 bpt" {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<TextBox1 className="p-about TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<TextBox1 className="p-about TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
<TextBox1 className="p-about TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<TextBox1 className="p-about TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<TextBox1 className="p-about TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<TextBox1 className="p-about TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<TextBox1 className="p-about TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
</Flex1>
<Flex1 className="p-about Flex157 bpt" {...Flex157Props} {...Flex157Cb} {...Flex157IoProps}>
<TextBox1 className="p-about TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<TextBox1 className="p-about TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<TextBox1 className="p-about TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
<TextBox1 className="p-about TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
<TextBox1 className="p-about TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
<TextBox1 className="p-about TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
<TextBox1 className="p-about TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex160 bpt" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<TextBox1 className="p-about TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
<Flex1 className="p-about Flex156 bpt" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<Flex1 className="p-about Flex155 bpt" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<Image1 className="p-about Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
<Image1 className="p-about Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
