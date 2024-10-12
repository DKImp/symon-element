/*
 * @Author: dusy
 * @Date: 2024-10-11 20:22:13
 */
// 用于 vue plugin 安装的一系列操作

import type { App, Plugin} from "vue";
import {each} from 'lodash-es';

type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]){
    const installer = (app:App) =>each(components,(c) =>app.use(c));

    return installer
}

export const withInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = (app:App) =>{
        const name = (component as any)?.name || "UnnamedComponent";
        app.component(name, component as SFCWithInstall<T>);
    }

    return component as SFCWithInstall<T>;
}