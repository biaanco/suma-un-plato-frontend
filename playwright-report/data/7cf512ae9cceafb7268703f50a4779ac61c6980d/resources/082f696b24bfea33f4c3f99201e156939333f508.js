import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=9f826408";
import Index from "/src/pages/Index.jsx";
import Login from "/src/pages/Login.jsx";
import Registro from "/src/pages/Registro.jsx";
import Perfil from "/src/pages/Perfil.jsx";
import Donar from "/src/pages/Donar.jsx";
import DonacionConfirmada from "/src/pages/DonacionConfirmada.jsx";
import MisDonaciones from "/src/pages/MisDonaciones.jsx";
import Merendero from "/src/pages/Merendero.jsx";
import Panel from "/src/pages/Panel.jsx";
import PanelDonaciones from "/src/pages/PanelDonaciones.jsx";
import PanelStock from "/src/pages/PanelStock.jsx";
import PanelPlanillas from "/src/pages/PanelPlanillas.jsx";
import PanelSugeridos from "/src/pages/PanelSugeridos.jsx";
import PanelPublicar from "/src/pages/PanelPublicar.jsx";
import PanelEntrega from "/src/pages/PanelEntrega.jsx";
import PanelMerenderos from "/src/pages/PanelMerenderos.jsx";
import PanelHistorial from "/src/pages/PanelHistorial.jsx";
export default function App() {
  return /* @__PURE__ */ jsxDEV(Routes, { children: [
    /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Index, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 42,
      columnNumber: 32
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/login", element: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 43,
      columnNumber: 37
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/registro", element: /* @__PURE__ */ jsxDEV(Registro, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 44,
      columnNumber: 40
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/perfil", element: /* @__PURE__ */ jsxDEV(Perfil, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 45,
      columnNumber: 38
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/donar", element: /* @__PURE__ */ jsxDEV(Donar, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 46,
      columnNumber: 37
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/donacion-confirmada/:id", element: /* @__PURE__ */ jsxDEV(DonacionConfirmada, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 47,
      columnNumber: 55
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/mis-donaciones", element: /* @__PURE__ */ jsxDEV(MisDonaciones, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 48,
      columnNumber: 46
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/merendero", element: /* @__PURE__ */ jsxDEV(Merendero, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 49,
      columnNumber: 41
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/panel", element: /* @__PURE__ */ jsxDEV(Panel, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 50,
      columnNumber: 37
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/panel/revisar", element: /* @__PURE__ */ jsxDEV(PanelDonaciones, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 51,
      columnNumber: 45
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/panel/stock", element: /* @__PURE__ */ jsxDEV(PanelStock, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 52,
      columnNumber: 43
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/panel/planillas", element: /* @__PURE__ */ jsxDEV(PanelPlanillas, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 53,
      columnNumber: 47
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/panel/sugeridos", element: /* @__PURE__ */ jsxDEV(PanelSugeridos, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 54,
      columnNumber: 47
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/panel/publicar", element: /* @__PURE__ */ jsxDEV(PanelPublicar, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 55,
      columnNumber: 46
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/panel/entrega", element: /* @__PURE__ */ jsxDEV(PanelEntrega, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 56,
      columnNumber: 45
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/panel/merenderos", element: /* @__PURE__ */ jsxDEV(PanelMerenderos, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 57,
      columnNumber: 48
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/panel/historial", element: /* @__PURE__ */ jsxDEV(PanelHistorial, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 58,
      columnNumber: 47
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
_c = App;
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBLElBQzNELHVCQUFDLFNBQU0sTUFBSyxtQkFBa0IsU0FBUyx1QkFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWMsS0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF5RDtBQUFBLElBQ3pELHVCQUFDLFNBQU0sTUFBSyxrQkFBaUIsU0FBUyx1QkFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWEsS0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF1RDtBQUFBLElBQ3ZELHVCQUFDLFNBQU0sTUFBSyxxQkFBb0IsU0FBUyx1QkFBQyxxQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWdCLEtBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNkQ7QUFBQSxJQUM3RCx1QkFBQyxTQUFNLE1BQUssb0JBQW1CLFNBQVMsdUJBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFlLEtBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBMkQ7QUFBQSxPQWpCN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWtCQTtBQUVKO0FBQUNDLEtBdEJ1QkQ7QUFBRyxJQUFBQztBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJSb3V0ZXMiLCJSb3V0ZSIsIkluZGV4IiwiTG9naW4iLCJSZWdpc3RybyIsIlBlcmZpbCIsIkRvbmFyIiwiRG9uYWNpb25Db25maXJtYWRhIiwiTWlzRG9uYWNpb25lcyIsIk1lcmVuZGVybyIsIlBhbmVsIiwiUGFuZWxEb25hY2lvbmVzIiwiUGFuZWxTdG9jayIsIlBhbmVsUGxhbmlsbGFzIiwiUGFuZWxTdWdlcmlkb3MiLCJQYW5lbFB1YmxpY2FyIiwiUGFuZWxFbnRyZWdhIiwiUGFuZWxNZXJlbmRlcm9zIiwiUGFuZWxIaXN0b3JpYWwiLCJBcHAiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IEluZGV4IGZyb20gJy4vcGFnZXMvSW5kZXgnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9wYWdlcy9Mb2dpbidcbmltcG9ydCBSZWdpc3RybyBmcm9tICcuL3BhZ2VzL1JlZ2lzdHJvJ1xuaW1wb3J0IFBlcmZpbCBmcm9tICcuL3BhZ2VzL1BlcmZpbCdcbmltcG9ydCBEb25hciBmcm9tICcuL3BhZ2VzL0RvbmFyJ1xuaW1wb3J0IERvbmFjaW9uQ29uZmlybWFkYSBmcm9tICcuL3BhZ2VzL0RvbmFjaW9uQ29uZmlybWFkYSdcbmltcG9ydCBNaXNEb25hY2lvbmVzIGZyb20gJy4vcGFnZXMvTWlzRG9uYWNpb25lcydcbmltcG9ydCBNZXJlbmRlcm8gZnJvbSAnLi9wYWdlcy9NZXJlbmRlcm8nXG5pbXBvcnQgUGFuZWwgZnJvbSAnLi9wYWdlcy9QYW5lbCdcbmltcG9ydCBQYW5lbERvbmFjaW9uZXMgZnJvbSAnLi9wYWdlcy9QYW5lbERvbmFjaW9uZXMnXG5pbXBvcnQgUGFuZWxTdG9jayBmcm9tICcuL3BhZ2VzL1BhbmVsU3RvY2snXG5pbXBvcnQgUGFuZWxQbGFuaWxsYXMgZnJvbSAnLi9wYWdlcy9QYW5lbFBsYW5pbGxhcydcbmltcG9ydCBQYW5lbFN1Z2VyaWRvcyBmcm9tICcuL3BhZ2VzL1BhbmVsU3VnZXJpZG9zJ1xuaW1wb3J0IFBhbmVsUHVibGljYXIgZnJvbSAnLi9wYWdlcy9QYW5lbFB1YmxpY2FyJ1xuaW1wb3J0IFBhbmVsRW50cmVnYSBmcm9tICcuL3BhZ2VzL1BhbmVsRW50cmVnYSdcbmltcG9ydCBQYW5lbE1lcmVuZGVyb3MgZnJvbSAnLi9wYWdlcy9QYW5lbE1lcmVuZGVyb3MnXG5pbXBvcnQgUGFuZWxIaXN0b3JpYWwgZnJvbSAnLi9wYWdlcy9QYW5lbEhpc3RvcmlhbCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXM+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SW5kZXggLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlZ2lzdHJvXCIgZWxlbWVudD17PFJlZ2lzdHJvIC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvcGVyZmlsXCIgZWxlbWVudD17PFBlcmZpbCAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2RvbmFyXCIgZWxlbWVudD17PERvbmFyIC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvZG9uYWNpb24tY29uZmlybWFkYS86aWRcIiBlbGVtZW50PXs8RG9uYWNpb25Db25maXJtYWRhIC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvbWlzLWRvbmFjaW9uZXNcIiBlbGVtZW50PXs8TWlzRG9uYWNpb25lcyAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL21lcmVuZGVyb1wiIGVsZW1lbnQ9ezxNZXJlbmRlcm8gLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9wYW5lbFwiIGVsZW1lbnQ9ezxQYW5lbCAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3BhbmVsL3JldmlzYXJcIiBlbGVtZW50PXs8UGFuZWxEb25hY2lvbmVzIC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvcGFuZWwvc3RvY2tcIiBlbGVtZW50PXs8UGFuZWxTdG9jayAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3BhbmVsL3BsYW5pbGxhc1wiIGVsZW1lbnQ9ezxQYW5lbFBsYW5pbGxhcyAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3BhbmVsL3N1Z2VyaWRvc1wiIGVsZW1lbnQ9ezxQYW5lbFN1Z2VyaWRvcyAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3BhbmVsL3B1YmxpY2FyXCIgZWxlbWVudD17PFBhbmVsUHVibGljYXIgLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9wYW5lbC9lbnRyZWdhXCIgZWxlbWVudD17PFBhbmVsRW50cmVnYSAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3BhbmVsL21lcmVuZGVyb3NcIiBlbGVtZW50PXs8UGFuZWxNZXJlbmRlcm9zIC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvcGFuZWwvaGlzdG9yaWFsXCIgZWxlbWVudD17PFBhbmVsSGlzdG9yaWFsIC8+fSAvPlxuICAgIDwvUm91dGVzPlxuICApXG59XG4iXSwiZmlsZSI6Ii9Vc2Vycy9iaWFuY28vRG9jdW1lbnRzL1NVUDIvc3VtYS11bi1wbGF0by1mcm9udGVuZC1tYWluICg1KS9mcm9udGVuZC9zcmMvQXBwLmpzeCJ9