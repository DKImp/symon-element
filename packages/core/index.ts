/*
 * @Author: dusy
 * @Date: 2024-10-12 10:03:42
 */
import { makeInstaller } from "@symon-element/utils";
import components from "./components";
import '@symon-element/theme/index.css'

const installer = makeInstaller(components);

export * from '@symon-element/components'
export default installer;