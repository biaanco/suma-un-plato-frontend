import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/PanelLayout.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=9f826408";
import { usuarioActual, cerrarSesion } from "/src/auth.js";
import { get } from "/src/api.js";
const MENU = [
  { clave: "dashboard", ruta: "/panel", texto: "Dashboard", icono: "grid" },
  { clave: "revisar", ruta: "/panel/revisar", texto: "Donaciones por revisar", icono: "inbox" },
  { clave: "stock", ruta: "/panel/stock", texto: "Stock del depósito", icono: "box" },
  { clave: "planillas", ruta: "/panel/planillas", texto: "Planillas de necesidades", icono: "clipboard" },
  { clave: "sugeridos", ruta: "/panel/sugeridos", texto: "Productos sugeridos", icono: "plus" },
  { clave: "publicar", ruta: "/panel/publicar", texto: "Publicar necesidades", icono: "megaphone" },
  { clave: "entrega", ruta: "/panel/entrega", texto: "Preparar entrega", icono: "truck" },
  { clave: "merenderos", ruta: "/panel/merenderos", texto: "Merenderos", icono: "users" },
  { clave: "historial", ruta: "/panel/historial", texto: "Historial y reportes", icono: "history" }
];
const ICONOS = {
  grid: /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("rect", { x: "4", y: "4", width: "7", height: "7", rx: "1" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 38,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("rect", { x: "13", y: "4", width: "7", height: "7", rx: "1" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 38,
      columnNumber: 59
    }, this),
    /* @__PURE__ */ jsxDEV("rect", { x: "4", y: "13", width: "7", height: "7", rx: "1" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 38,
      columnNumber: 108
    }, this),
    /* @__PURE__ */ jsxDEV("rect", { x: "13", y: "13", width: "7", height: "7", rx: "1" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 38,
      columnNumber: 157
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
    lineNumber: 38,
    columnNumber: 9
  }, this),
  inbox: /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M4 13l2-8h12l2 8v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5z" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 39,
      columnNumber: 12
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M4 13h4l1 2h6l1-2h4" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 39,
      columnNumber: 77
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
    lineNumber: 39,
    columnNumber: 10
  }, this),
  box: /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M4 8l8-4 8 4v8l-8 4-8-4V8z" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 40,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M4 8l8 4 8-4M12 12v8" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 40,
      columnNumber: 49
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
    lineNumber: 40,
    columnNumber: 8
  }, this),
  clipboard: /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("rect", { x: "6", y: "4", width: "12", height: "17", rx: "2" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 41,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M9 4V3h6v1" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 41,
      columnNumber: 66
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M9 10h6M9 14h4" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 41,
      columnNumber: 89
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
    lineNumber: 41,
    columnNumber: 14
  }, this),
  megaphone: /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M4 10v4l10 4V6L4 10z" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 42,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M14 8a4 4 0 0 1 0 8" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 42,
      columnNumber: 49
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
    lineNumber: 42,
    columnNumber: 14
  }, this),
  truck: /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("rect", { x: "2", y: "7", width: "12", height: "9", rx: "1" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 43,
      columnNumber: 12
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M14 10h4l3 3v3h-7" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 43,
      columnNumber: 61
    }, this),
    /* @__PURE__ */ jsxDEV("circle", { cx: "7", cy: "18", r: "1.6" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 43,
      columnNumber: 91
    }, this),
    /* @__PURE__ */ jsxDEV("circle", { cx: "17", cy: "18", r: "1.6" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 43,
      columnNumber: 124
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, this),
  users: /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("circle", { cx: "9", cy: "8", r: "3" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 44,
      columnNumber: 12
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M3 20a6 6 0 0 1 12 0" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 44,
      columnNumber: 42
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M16 6a3 3 0 0 1 0 6M21 20a5 5 0 0 0-4-5" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 44,
      columnNumber: 75
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
    lineNumber: 44,
    columnNumber: 10
  }, this),
  plus: /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("circle", { cx: "12", cy: "12", r: "8" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 45,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M12 8v8M8 12h8" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 45,
      columnNumber: 43
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
    lineNumber: 45,
    columnNumber: 9
  }, this),
  history: /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("path", { d: "M3 12a9 9 0 1 0 3-6.7L3 8" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 46,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ jsxDEV("path", { d: "M3 4v4h4M12 8v4l3 2" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 46,
      columnNumber: 52
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
    lineNumber: 46,
    columnNumber: 12
  }, this)
};
export default function PanelLayout({ titulo, seccion, children }) {
  _s();
  const usuario = usuarioActual();
  const navigate = useNavigate();
  const [abierto, setAbierto] = useState(false);
  const [pendientes, setPendientes] = useState(0);
  const [sugeridos, setSugeridos] = useState(0);
  useEffect(() => {
    if (!usuario || usuario.rol !== "admin") {
      navigate("/login");
      return;
    }
    get("/panel/revisar").then((lista) => setPendientes(lista.length)).catch(() => {
    });
    const contarSugeridos = () => get("/alimentos/sugeridos").then((lista) => setSugeridos(lista.length)).catch(() => {
    });
    contarSugeridos();
    window.addEventListener("sugeridos-cambio", contarSugeridos);
    return () => window.removeEventListener("sugeridos-cambio", contarSugeridos);
  }, []);
  if (!usuario || usuario.rol !== "admin") {
    return null;
  }
  function salir() {
    cerrarSesion();
    navigate("/");
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "panel", children: [
    abierto && /* @__PURE__ */ jsxDEV("div", { className: "sidebar-backdrop", onClick: () => setAbierto(false) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 79,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ jsxDEV("aside", { className: abierto ? "sidebar abierto" : "sidebar", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "sidebar-top", children: /* @__PURE__ */ jsxDEV(Link, { to: "/panel", className: "sidebar-logo", children: /* @__PURE__ */ jsxDEV("img", { src: "/LogoSumaunplato.jpeg", alt: "Suma un plato" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
        lineNumber: 83,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { className: "sidebar-nav", children: MENU.map(
        (item) => /* @__PURE__ */ jsxDEV(Link, { to: item.ruta, className: item.clave === seccion ? "sidebar-link activo" : "sidebar-link", onClick: () => setAbierto(false), children: [
          /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", children: ICONOS[item.icono] }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: item.texto }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
            lineNumber: 90,
            columnNumber: 15
          }, this),
          item.clave === "revisar" && pendientes > 0 && /* @__PURE__ */ jsxDEV("span", { className: "sidebar-badge", children: pendientes }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
            lineNumber: 91,
            columnNumber: 62
          }, this),
          item.clave === "sugeridos" && sugeridos > 0 && /* @__PURE__ */ jsxDEV("span", { className: "sidebar-badge", children: sugeridos }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
            lineNumber: 92,
            columnNumber: 63
          }, this)
        ] }, item.clave, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
          lineNumber: 88,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "sidebar-bottom", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "sidebar-link", children: "Ver sitio público" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "sidebar-link", style: { width: "100%", textAlign: "left", background: "none", border: "none" }, onClick: salir, children: "Cerrar sesión" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "panel-main", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "panel-top", children: [
        /* @__PURE__ */ jsxDEV("h1", { children: titulo }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { style: { marginLeft: "auto", color: "var(--tinta-suave)", fontSize: 14 }, children: [
          "Hola, ",
          usuario.nombre
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
          lineNumber: 106,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("main", { className: "panel-contenido", children }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
        lineNumber: 108,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
_s(PanelLayout, "N9wrbCb8Z69rMyTeYrO9jcdRDwY=", false, function() {
  return [useNavigate];
});
_c = PanelLayout;
var _c;
$RefreshReg$(_c, "PanelLayout");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/PanelLayout.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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YUFBNEM7QUFBQSxTQU45QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBT0E7QUFBQSxPQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBZ0NBO0FBRUo7QUFBQ0MsR0EvRHVCSixhQUFXO0FBQUEsVUFFaEJuQixXQUFXO0FBQUE7QUFBQSxLQUZObUI7QUFBVyxJQUFBaUM7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlTmF2aWdhdGUiLCJ1c3VhcmlvQWN0dWFsIiwiY2VycmFyU2VzaW9uIiwiZ2V0IiwiTUVOVSIsImNsYXZlIiwicnV0YSIsInRleHRvIiwiaWNvbm8iLCJJQ09OT1MiLCJncmlkIiwiaW5ib3giLCJib3giLCJjbGlwYm9hcmQiLCJtZWdhcGhvbmUiLCJ0cnVjayIsInVzZXJzIiwicGx1cyIsImhpc3RvcnkiLCJQYW5lbExheW91dCIsInRpdHVsbyIsInNlY2Npb24iLCJjaGlsZHJlbiIsIl9zIiwidXN1YXJpbyIsIm5hdmlnYXRlIiwiYWJpZXJ0byIsInNldEFiaWVydG8iLCJwZW5kaWVudGVzIiwic2V0UGVuZGllbnRlcyIsInN1Z2VyaWRvcyIsInNldFN1Z2VyaWRvcyIsInJvbCIsInRoZW4iLCJsaXN0YSIsImxlbmd0aCIsImNhdGNoIiwiY29udGFyU3VnZXJpZG9zIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzYWxpciIsIm1hcCIsIml0ZW0iLCJ3aWR0aCIsInRleHRBbGlnbiIsImJhY2tncm91bmQiLCJib3JkZXIiLCJtYXJnaW5MZWZ0IiwiY29sb3IiLCJmb250U2l6ZSIsIm5vbWJyZSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlBhbmVsTGF5b3V0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c3VhcmlvQWN0dWFsLCBjZXJyYXJTZXNpb24gfSBmcm9tICcuLi9hdXRoJ1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vYXBpJ1xuXG5jb25zdCBNRU5VID0gW1xuICB7IGNsYXZlOiAnZGFzaGJvYXJkJywgcnV0YTogJy9wYW5lbCcsIHRleHRvOiAnRGFzaGJvYXJkJywgaWNvbm86ICdncmlkJyB9LFxuICB7IGNsYXZlOiAncmV2aXNhcicsIHJ1dGE6ICcvcGFuZWwvcmV2aXNhcicsIHRleHRvOiAnRG9uYWNpb25lcyBwb3IgcmV2aXNhcicsIGljb25vOiAnaW5ib3gnIH0sXG4gIHsgY2xhdmU6ICdzdG9jaycsIHJ1dGE6ICcvcGFuZWwvc3RvY2snLCB0ZXh0bzogJ1N0b2NrIGRlbCBkZXDDs3NpdG8nLCBpY29ubzogJ2JveCcgfSxcbiAgeyBjbGF2ZTogJ3BsYW5pbGxhcycsIHJ1dGE6ICcvcGFuZWwvcGxhbmlsbGFzJywgdGV4dG86ICdQbGFuaWxsYXMgZGUgbmVjZXNpZGFkZXMnLCBpY29ubzogJ2NsaXBib2FyZCcgfSxcbiAgeyBjbGF2ZTogJ3N1Z2VyaWRvcycsIHJ1dGE6ICcvcGFuZWwvc3VnZXJpZG9zJywgdGV4dG86ICdQcm9kdWN0b3Mgc3VnZXJpZG9zJywgaWNvbm86ICdwbHVzJyB9LFxuICB7IGNsYXZlOiAncHVibGljYXInLCBydXRhOiAnL3BhbmVsL3B1YmxpY2FyJywgdGV4dG86ICdQdWJsaWNhciBuZWNlc2lkYWRlcycsIGljb25vOiAnbWVnYXBob25lJyB9LFxuICB7IGNsYXZlOiAnZW50cmVnYScsIHJ1dGE6ICcvcGFuZWwvZW50cmVnYScsIHRleHRvOiAnUHJlcGFyYXIgZW50cmVnYScsIGljb25vOiAndHJ1Y2snIH0sXG4gIHsgY2xhdmU6ICdtZXJlbmRlcm9zJywgcnV0YTogJy9wYW5lbC9tZXJlbmRlcm9zJywgdGV4dG86ICdNZXJlbmRlcm9zJywgaWNvbm86ICd1c2VycycgfSxcbiAgeyBjbGF2ZTogJ2hpc3RvcmlhbCcsIHJ1dGE6ICcvcGFuZWwvaGlzdG9yaWFsJywgdGV4dG86ICdIaXN0b3JpYWwgeSByZXBvcnRlcycsIGljb25vOiAnaGlzdG9yeScgfVxuXVxuXG5jb25zdCBJQ09OT1MgPSB7XG4gIGdyaWQ6IDw+PHJlY3QgeD1cIjRcIiB5PVwiNFwiIHdpZHRoPVwiN1wiIGhlaWdodD1cIjdcIiByeD1cIjFcIiAvPjxyZWN0IHg9XCIxM1wiIHk9XCI0XCIgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiN1wiIHJ4PVwiMVwiIC8+PHJlY3QgeD1cIjRcIiB5PVwiMTNcIiB3aWR0aD1cIjdcIiBoZWlnaHQ9XCI3XCIgcng9XCIxXCIgLz48cmVjdCB4PVwiMTNcIiB5PVwiMTNcIiB3aWR0aD1cIjdcIiBoZWlnaHQ9XCI3XCIgcng9XCIxXCIgLz48Lz4sXG4gIGluYm94OiA8PjxwYXRoIGQ9XCJNNCAxM2wyLThoMTJsMiA4djVhMSAxIDAgMCAxLTEgMUg1YTEgMSAwIDAgMS0xLTF2LTV6XCIgLz48cGF0aCBkPVwiTTQgMTNoNGwxIDJoNmwxLTJoNFwiIC8+PC8+LFxuICBib3g6IDw+PHBhdGggZD1cIk00IDhsOC00IDggNHY4bC04IDQtOC00Vjh6XCIgLz48cGF0aCBkPVwiTTQgOGw4IDQgOC00TTEyIDEydjhcIiAvPjwvPixcbiAgY2xpcGJvYXJkOiA8PjxyZWN0IHg9XCI2XCIgeT1cIjRcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTdcIiByeD1cIjJcIiAvPjxwYXRoIGQ9XCJNOSA0VjNoNnYxXCIgLz48cGF0aCBkPVwiTTkgMTBoNk05IDE0aDRcIiAvPjwvPixcbiAgbWVnYXBob25lOiA8PjxwYXRoIGQ9XCJNNCAxMHY0bDEwIDRWNkw0IDEwelwiIC8+PHBhdGggZD1cIk0xNCA4YTQgNCAwIDAgMSAwIDhcIiAvPjwvPixcbiAgdHJ1Y2s6IDw+PHJlY3QgeD1cIjJcIiB5PVwiN1wiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCI5XCIgcng9XCIxXCIgLz48cGF0aCBkPVwiTTE0IDEwaDRsMyAzdjNoLTdcIiAvPjxjaXJjbGUgY3g9XCI3XCIgY3k9XCIxOFwiIHI9XCIxLjZcIiAvPjxjaXJjbGUgY3g9XCIxN1wiIGN5PVwiMThcIiByPVwiMS42XCIgLz48Lz4sXG4gIHVzZXJzOiA8PjxjaXJjbGUgY3g9XCI5XCIgY3k9XCI4XCIgcj1cIjNcIiAvPjxwYXRoIGQ9XCJNMyAyMGE2IDYgMCAwIDEgMTIgMFwiIC8+PHBhdGggZD1cIk0xNiA2YTMgMyAwIDAgMSAwIDZNMjEgMjBhNSA1IDAgMCAwLTQtNVwiIC8+PC8+LFxuICBwbHVzOiA8PjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiOFwiIC8+PHBhdGggZD1cIk0xMiA4djhNOCAxMmg4XCIgLz48Lz4sXG4gIGhpc3Rvcnk6IDw+PHBhdGggZD1cIk0zIDEyYTkgOSAwIDEgMCAzLTYuN0wzIDhcIiAvPjxwYXRoIGQ9XCJNMyA0djRoNE0xMiA4djRsMyAyXCIgLz48Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFuZWxMYXlvdXQoeyB0aXR1bG8sIHNlY2Npb24sIGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgdXN1YXJpbyA9IHVzdWFyaW9BY3R1YWwoKVxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgY29uc3QgW2FiaWVydG8sIHNldEFiaWVydG9dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwZW5kaWVudGVzLCBzZXRQZW5kaWVudGVzXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtzdWdlcmlkb3MsIHNldFN1Z2VyaWRvc10gPSB1c2VTdGF0ZSgwKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF1c3VhcmlvIHx8IHVzdWFyaW8ucm9sICE9PSAnYWRtaW4nKSB7XG4gICAgICBuYXZpZ2F0ZSgnL2xvZ2luJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBnZXQoJy9wYW5lbC9yZXZpc2FyJykudGhlbihsaXN0YSA9PiBzZXRQZW5kaWVudGVzKGxpc3RhLmxlbmd0aCkpLmNhdGNoKCgpID0+IHt9KVxuICAgIGNvbnN0IGNvbnRhclN1Z2VyaWRvcyA9ICgpID0+IGdldCgnL2FsaW1lbnRvcy9zdWdlcmlkb3MnKS50aGVuKGxpc3RhID0+IHNldFN1Z2VyaWRvcyhsaXN0YS5sZW5ndGgpKS5jYXRjaCgoKSA9PiB7fSlcbiAgICBjb250YXJTdWdlcmlkb3MoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdWdlcmlkb3MtY2FtYmlvJywgY29udGFyU3VnZXJpZG9zKVxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VnZXJpZG9zLWNhbWJpbycsIGNvbnRhclN1Z2VyaWRvcylcbiAgfSwgW10pXG5cbiAgaWYgKCF1c3VhcmlvIHx8IHVzdWFyaW8ucm9sICE9PSAnYWRtaW4nKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhbGlyKCkge1xuICAgIGNlcnJhclNlc2lvbigpXG4gICAgbmF2aWdhdGUoJy8nKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsXCI+XG4gICAgICB7YWJpZXJ0byAmJiA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYmFja2Ryb3BcIiBvbkNsaWNrPXsoKSA9PiBzZXRBYmllcnRvKGZhbHNlKX0+PC9kaXY+fVxuICAgICAgPGFzaWRlIGNsYXNzTmFtZT17YWJpZXJ0byA/ICdzaWRlYmFyIGFiaWVydG8nIDogJ3NpZGViYXInfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXRvcFwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3BhbmVsXCIgY2xhc3NOYW1lPVwic2lkZWJhci1sb2dvXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9Mb2dvU3VtYXVucGxhdG8uanBlZ1wiIGFsdD1cIlN1bWEgdW4gcGxhdG9cIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2lkZWJhci1uYXZcIj5cbiAgICAgICAgICB7TUVOVS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uY2xhdmV9IHRvPXtpdGVtLnJ1dGF9IGNsYXNzTmFtZT17aXRlbS5jbGF2ZSA9PT0gc2VjY2lvbiA/ICdzaWRlYmFyLWxpbmsgYWN0aXZvJyA6ICdzaWRlYmFyLWxpbmsnfSBvbkNsaWNrPXsoKSA9PiBzZXRBYmllcnRvKGZhbHNlKX0+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIxLjZcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+e0lDT05PU1tpdGVtLmljb25vXX08L3N2Zz5cbiAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0udGV4dG99PC9zcGFuPlxuICAgICAgICAgICAgICB7aXRlbS5jbGF2ZSA9PT0gJ3JldmlzYXInICYmIHBlbmRpZW50ZXMgPiAwICYmIDxzcGFuIGNsYXNzTmFtZT1cInNpZGViYXItYmFkZ2VcIj57cGVuZGllbnRlc308L3NwYW4+fVxuICAgICAgICAgICAgICB7aXRlbS5jbGF2ZSA9PT0gJ3N1Z2VyaWRvcycgJiYgc3VnZXJpZG9zID4gMCAmJiA8c3BhbiBjbGFzc05hbWU9XCJzaWRlYmFyLWJhZGdlXCI+e3N1Z2VyaWRvc308L3NwYW4+fVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWJvdHRvbVwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cInNpZGViYXItbGlua1wiPlZlciBzaXRpbyBww7pibGljbzwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNpZGViYXItbGlua1wiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2xlZnQnLCBiYWNrZ3JvdW5kOiAnbm9uZScsIGJvcmRlcjogJ25vbmUnIH19IG9uQ2xpY2s9e3NhbGlyfT5DZXJyYXIgc2VzacOzbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXNpZGU+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtbWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLXRvcFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxoMT57dGl0dWxvfTwvaDE+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIGZvbnRTaXplOiAxNCB9fT5Ib2xhLCB7dXN1YXJpby5ub21icmV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwicGFuZWwtY29udGVuaWRvXCI+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwiZmlsZSI6Ii9Vc2Vycy9iaWFuY28vRG9jdW1lbnRzL1NVUDIvc3VtYS11bi1wbGF0by1mcm9udGVuZC1tYWluICg1KS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9QYW5lbExheW91dC5qc3gifQ==