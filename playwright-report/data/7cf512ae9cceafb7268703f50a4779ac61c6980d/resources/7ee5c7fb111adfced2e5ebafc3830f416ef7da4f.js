import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Perfil.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=9f826408";
import { get } from "/src/api.js";
import { usuarioActual } from "/src/auth.js";
import { cant } from "/src/format.js";
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";
import Icono from "/src/components/Icono.jsx";
export default function Perfil() {
  _s();
  const usuario = usuarioActual();
  const navigate = useNavigate();
  const [necesidades, setNecesidades] = useState([]);
  const [notis, setNotis] = useState([]);
  const [totalDon, setTotalDon] = useState(0);
  useEffect(() => {
    if (!usuario || usuario.rol !== "donante") {
      navigate("/login");
      return;
    }
    get("/publico/necesidades").then(setNecesidades).catch(() => {
    });
    get("/notificaciones/usuario/" + usuario.id).then(setNotis).catch(() => {
    });
    get("/donaciones/usuario/" + usuario.id).then((d) => setTotalDon(d.length)).catch(() => {
    });
  }, []);
  if (!usuario || usuario.rol !== "donante") {
    return null;
  }
  const primerNombre = usuario.nombre.split(" ")[0];
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "contenedor", style: { padding: "48px 16px" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 16, marginBottom: 32 }, children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "font-display", style: { fontSize: 34, margin: 0 }, children: [
            "Hola, ",
            primerNombre
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 58,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--tinta-suave)", marginTop: 4 }, children: "Gracias por sumar. Estas son las necesidades de hoy." }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 59,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 12 }, children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/mis-donaciones", className: "btn-fantasma", children: [
            "Mis donaciones (",
            totalDon,
            ")"
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/donar", className: "btn-donar", children: "Armar donación" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 63,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      notis.length > 0 && /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }, children: notis.map(
        (n) => /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-ok", style: { marginBottom: 0, display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", children: /* @__PURE__ */ jsxDEV("path", { d: "M5 13l4 4L19 7" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 71,
            columnNumber: 117
          }, this) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 71,
            columnNumber: 17
          }, this),
          n.mensaje
        ] }, n.id, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-3", children: necesidades.map(
        (n) => /* @__PURE__ */ jsxDEV("article", { className: "tarjeta tarjeta-hover tarjeta-pad", style: { position: "relative" }, children: [
          n.urgente && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-urgente", style: { position: "absolute", top: 16, right: 16 }, children: "Urgente" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 81,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "icono-circulo", style: { marginBottom: 16 }, children: /* @__PURE__ */ jsxDEV(Icono, { nombre: n.icono }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 82,
            columnNumber: 75
          }, this) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { style: { fontSize: 20, margin: "0 0 4px" }, children: n.nombre }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 83,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 14, color: "var(--tinta-suave)", marginTop: 0 }, children: n.categoria === "perecedero" ? "Perecedero" : "No perecedero" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 84,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "progreso-riel", style: { marginBottom: 8 }, children: /* @__PURE__ */ jsxDEV("div", { className: "progreso-relleno", style: { width: n.pct + "%" } }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 86,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 85,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "tabular", style: { fontSize: 14, color: n.completa ? "var(--verde)" : "var(--tinta-suave)" }, children: n.completa ? "Cubierto · ¡gracias!" : cant(n.cubierto) + " de " + cant(n.objetivo) + " " + n.unidad + " cubiertos" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/donar", className: "btn-verde ancho", style: { marginTop: 16 }, children: "Voy a donar esto" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
            lineNumber: 91,
            columnNumber: 15
          }, this)
        ] }, n.id, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
_s(Perfil, "p9hDUAnevjfjCKS5/fJTeflbkOM=", false, function() {
  return [useNavigate];
});
_c = Perfil;
var _c;
$RefreshReg$(_c, "Perfil");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Perfil.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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dXNlU3RhdGUiLCJMaW5rIiwidXNlTmF2aWdhdGUiLCJnZXQiLCJ1c3VhcmlvQWN0dWFsIiwiY2FudCIsIkhlYWRlciIsIkZvb3RlciIsIkljb25vIiwiUGVyZmlsIiwiX3MiLCJ1c3VhcmlvIiwibmF2aWdhdGUiLCJuZWNlc2lkYWRlcyIsInNldE5lY2VzaWRhZGVzIiwibm90aXMiLCJzZXROb3RpcyIsInRvdGFsRG9uIiwic2V0VG90YWxEb24iLCJyb2wiLCJ0aGVuIiwiY2F0Y2giLCJpZCIsImQiLCJsZW5ndGgiLCJwcmltZXJOb21icmUiLCJub21icmUiLCJzcGxpdCIsInBhZGRpbmciLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJnYXAiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsIm1hcmdpbiIsImNvbG9yIiwibWFyZ2luVG9wIiwiZmxleERpcmVjdGlvbiIsIm1hcCIsIm4iLCJtZW5zYWplIiwicG9zaXRpb24iLCJ1cmdlbnRlIiwidG9wIiwicmlnaHQiLCJpY29ubyIsImNhdGVnb3JpYSIsIndpZHRoIiwicGN0IiwiY29tcGxldGEiLCJjdWJpZXJ0byIsIm9iamV0aXZvIiwidW5pZGFkIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUGVyZmlsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi9hcGknXG5pbXBvcnQgeyB1c3VhcmlvQWN0dWFsIH0gZnJvbSAnLi4vYXV0aCdcbmltcG9ydCB7IGNhbnQgfSBmcm9tICcuLi9mb3JtYXQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCBJY29ubyBmcm9tICcuLi9jb21wb25lbnRzL0ljb25vJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJmaWwoKSB7XG4gIGNvbnN0IHVzdWFyaW8gPSB1c3VhcmlvQWN0dWFsKClcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IFtuZWNlc2lkYWRlcywgc2V0TmVjZXNpZGFkZXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtub3Rpcywgc2V0Tm90aXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFt0b3RhbERvbiwgc2V0VG90YWxEb25dID0gdXNlU3RhdGUoMClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdXN1YXJpbyB8fCB1c3VhcmlvLnJvbCAhPT0gJ2RvbmFudGUnKSB7XG4gICAgICBuYXZpZ2F0ZSgnL2xvZ2luJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBnZXQoJy9wdWJsaWNvL25lY2VzaWRhZGVzJykudGhlbihzZXROZWNlc2lkYWRlcykuY2F0Y2goKCkgPT4ge30pXG4gICAgZ2V0KCcvbm90aWZpY2FjaW9uZXMvdXN1YXJpby8nICsgdXN1YXJpby5pZCkudGhlbihzZXROb3RpcykuY2F0Y2goKCkgPT4ge30pXG4gICAgZ2V0KCcvZG9uYWNpb25lcy91c3VhcmlvLycgKyB1c3VhcmlvLmlkKS50aGVuKGQgPT4gc2V0VG90YWxEb24oZC5sZW5ndGgpKS5jYXRjaCgoKSA9PiB7fSlcbiAgfSwgW10pXG5cbiAgaWYgKCF1c3VhcmlvIHx8IHVzdWFyaW8ucm9sICE9PSAnZG9uYW50ZScpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgcHJpbWVyTm9tYnJlID0gdXN1YXJpby5ub21icmUuc3BsaXQoJyAnKVswXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbmVkb3JcIiBzdHlsZT17eyBwYWRkaW5nOiAnNDhweCAxNnB4JyB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsIGdhcDogMTYsIG1hcmdpbkJvdHRvbTogMzIgfX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWRpc3BsYXlcIiBzdHlsZT17eyBmb250U2l6ZTogMzQsIG1hcmdpbjogMCB9fT5Ib2xhLCB7cHJpbWVyTm9tYnJlfTwvaDE+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIG1hcmdpblRvcDogNCB9fT5HcmFjaWFzIHBvciBzdW1hci4gRXN0YXMgc29uIGxhcyBuZWNlc2lkYWRlcyBkZSBob3kuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDEyIH19PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvbWlzLWRvbmFjaW9uZXNcIiBjbGFzc05hbWU9XCJidG4tZmFudGFzbWFcIj5NaXMgZG9uYWNpb25lcyAoe3RvdGFsRG9ufSk8L0xpbms+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9kb25hclwiIGNsYXNzTmFtZT1cImJ0bi1kb25hclwiPkFybWFyIGRvbmFjacOzbjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge25vdGlzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiA4LCBtYXJnaW5Cb3R0b206IDMyIH19PlxuICAgICAgICAgICAge25vdGlzLm1hcChuID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e24uaWR9IGNsYXNzTmFtZT1cImFsZXJ0YSBhbGVydGEtb2tcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCB9fT5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMS44XCI+PHBhdGggZD1cIk01IDEzbDQgNEwxOSA3XCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICB7bi5tZW5zYWplfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLTNcIj5cbiAgICAgICAgICB7bmVjZXNpZGFkZXMubWFwKG4gPT4gKFxuICAgICAgICAgICAgPGFydGljbGUga2V5PXtuLmlkfSBjbGFzc05hbWU9XCJ0YXJqZXRhIHRhcmpldGEtaG92ZXIgdGFyamV0YS1wYWRcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAge24udXJnZW50ZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJjaGlwIGNoaXAtdXJnZW50ZVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDE2LCByaWdodDogMTYgfX0+VXJnZW50ZTwvc3Bhbj59XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbm8tY2lyY3Vsb1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTYgfX0+PEljb25vIG5vbWJyZT17bi5pY29ub30gLz48L2Rpdj5cbiAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgbWFyZ2luOiAnMCAwIDRweCcgfX0+e24ubm9tYnJlfTwvaDM+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBtYXJnaW5Ub3A6IDAgfX0+e24uY2F0ZWdvcmlhID09PSAncGVyZWNlZGVybycgPyAnUGVyZWNlZGVybycgOiAnTm8gcGVyZWNlZGVybyd9PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNvLXJpZWxcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzby1yZWxsZW5vXCIgc3R5bGU9e3sgd2lkdGg6IG4ucGN0ICsgJyUnIH19PjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFidWxhclwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6IG4uY29tcGxldGEgPyAndmFyKC0tdmVyZGUpJyA6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19PlxuICAgICAgICAgICAgICAgIHtuLmNvbXBsZXRhID8gJ0N1YmllcnRvIMK3IMKhZ3JhY2lhcyEnIDogY2FudChuLmN1YmllcnRvKSArICcgZGUgJyArIGNhbnQobi5vYmpldGl2bykgKyAnICcgKyBuLnVuaWRhZCArICcgY3ViaWVydG9zJ31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9kb25hclwiIGNsYXNzTmFtZT1cImJ0bi12ZXJkZSBhbmNob1wiIHN0eWxlPXt7IG1hcmdpblRvcDogMTYgfX0+Vm95IGEgZG9uYXIgZXN0bzwvTGluaz5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJmaWxlIjoiL1VzZXJzL2JpYW5jby9Eb2N1bWVudHMvU1VQMi9zdW1hLXVuLXBsYXRvLWZyb250ZW5kLW1haW4gKDUpL2Zyb250ZW5kL3NyYy9wYWdlcy9QZXJmaWwuanN4In0=