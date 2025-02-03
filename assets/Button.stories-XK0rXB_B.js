import{j as e}from"./jsx-runtime-CLpGMVip.js";const G=({children:H,variant:J="primary",size:K="medium",isLoading:m=!1,icon:u,className:M,...p})=>{const Q="btn",U={primary:"btn-primary",secondary:"btn-secondary",danger:"btn-danger",warning:"btn-warning",success:"btn-success",info:"btn-info"},X={small:"btn-sm",medium:"btn-md",large:"btn-lg"},Y=`${Q} ${U[J]} ${X[K]} ${M||""}`.trim();return e.jsx("button",{className:Y,...p,disabled:p.disabled||m,children:m?e.jsx("span",{className:"spinner","aria-label":"loading",children:"Loading..."}):e.jsxs(e.Fragment,{children:[u&&e.jsx("span",{className:"btn-icon",children:u}),H]})})};G.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'danger'
| 'warning'
| 'success'
| 'info'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ee={title:"Components/AdvancedButton",component:G,argTypes:{variant:{control:"select",options:["primary","secondary","danger","warning","success","info"]},size:{control:"select",options:["small","medium","large"]},isLoading:{control:"boolean"}}},a={args:{children:"Primary Button",variant:"primary"}},r={args:{children:"Secondary Button",variant:"secondary"}},n={args:{children:"Danger Button",variant:"danger"}},s={args:{children:"Warning Button",variant:"warning"}},t={args:{children:"Success Button",variant:"success"}},o={args:{children:"Info Button",variant:"info"}},c={args:{children:"Large Button",size:"large"}},i={args:{children:"Small Button",size:"small"}},l={args:{children:"Button with Icon",icon:e.jsx("span",{style:{marginRight:"8px"},children:"⭐"})}},d={args:{children:"Loading Button",isLoading:!0}};var g,h,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,f,B;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
}`,...(B=(f=r.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var S,b,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Danger Button',
    variant: 'danger'
  }
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var L,x,I;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Warning Button',
    variant: 'warning'
  }
}`,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var j,z,N;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Success Button',
    variant: 'success'
  }
}`,...(N=(z=t.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var R,W,C;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Info Button',
    variant: 'info'
  }
}`,...(C=(W=o.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var T,q,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'large'
  }
}`,...(D=(q=c.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var P,_,$;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'small'
  }
}`,...($=(_=i.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var V,E,A;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Button with Icon',
    icon: <span style={{
      marginRight: '8px'
    }}>⭐</span>
  }
}`,...(A=(E=l.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var F,O,k;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Loading Button',
    isLoading: true
  }
}`,...(k=(O=d.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const ae=["Primary","Secondary","Danger","Warning","Success","Info","Large","Small","WithIcon","Loading"];export{n as Danger,o as Info,c as Large,d as Loading,a as Primary,r as Secondary,i as Small,t as Success,s as Warning,l as WithIcon,ae as __namedExportsOrder,ee as default};
