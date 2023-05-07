import{j as e}from"./jsx-runtime-94f6e698.js";import{M as t}from"./index-f3dbb0ec.js";import{u as a}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-f643324f.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-9900c05c.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function f(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(o,{})})):o();function o(){const r=Object.assign({h1:"h1",p:"p"},a(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Info/README"}),`
`,e.jsx("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 700;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span,
    .link-item p {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e.jsx(r.h1,{id:"bienvenidos-a-nuestro-repositorio-de-storybook",children:"¡Bienvenidos a nuestro repositorio de Storybook!"}),`
`,e.jsxs("div",{class:"markdown prose w-full break-words dark:prose-invert light",children:[e.jsx("p",{children:e.jsx(r.p,{children:`En este repositorio, desarrollamos y mantenemos nuestra librería de
componentes, la cual utilizamos en todos nuestros proyectos. Recientemente,
hemos decidido migrar nuestra librería de componentes de JavaScript a
TypeScript, para mejorar la calidad y la estabilidad de nuestros
componentes.`})}),e.jsx("p",{children:e.jsx(r.p,{children:`A continuación, detallamos los beneficios que obtendremos al migrar a
TypeScript:`})}),e.jsxs("ol",{children:[e.jsx("li",{children:e.jsx("p",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Tipado estático:"}),` TypeScript nos permite añadir tipado
estático a nuestros componentes, lo que nos ayudará a evitar errores y
mejorar la calidad de nuestro código. Los errores de tipo se detectarán
antes de tiempo, lo que facilitará el proceso de depuración y mejorará
la eficiencia en el desarrollo.`]})})}),e.jsx("li",{children:e.jsx("p",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Autocompletado y documentación mejorada:"}),` Al utilizar
TypeScript, los editores de código pueden ofrecer autocompletado para
nuestros componentes, lo que nos ahorrará tiempo y mejorará nuestra
productividad. Además, TypeScript nos permite generar documentación
detallada de nuestros componentes de forma automática, lo que mejorará
la comprensión y la mantenibilidad de nuestro código.`]})})}),e.jsx("li",{children:e.jsx("p",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Más seguridad y estabilidad:"}),` Al añadir tipado estático
a nuestros componentes, aumentaremos la seguridad y la estabilidad de
nuestros proyectos. Los errores de tipo se detectarán antes de tiempo y
no afectarán a nuestro proyecto en producción.`]})})}),e.jsx("li",{children:e.jsx("p",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Fácil integración con otras herramientas:"}),` TypeScript es
compatible con una gran cantidad de herramientas y librerías, lo que nos
permitirá integrar nuestras soluciones con otras tecnologías de forma
sencilla.`]})})}),e.jsx("li",{children:e.jsx("p",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Comunidad activa y soporte constante:"}),` TypeScript cuenta
con una comunidad activa y una amplia documentación, lo que nos
permitirá acceder a recursos de calidad y solucionar problemas de forma
rápida y efectiva.`]})})})]}),e.jsx("p",{children:e.jsx(r.p,{children:`En resumen, migrar nuestra librería de componentes a TypeScript nos
permitirá mejorar la calidad y la estabilidad de nuestros proyectos,
aumentar la productividad de nuestro equipo y facilitar la integración con
otras herramientas. Esperamos que esta decisión sea beneficiosa para todos
nosotros y para nuestros clientes. ¡Gracias por formar parte de este cambio!`})})]})]})}}export{f as default};
//# sourceMappingURL=Introduction-42a552af.js.map
