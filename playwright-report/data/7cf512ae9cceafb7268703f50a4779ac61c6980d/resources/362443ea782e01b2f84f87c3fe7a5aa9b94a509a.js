import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/MisDonaciones.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=9f826408";
import { get } from "/src/api.js";
import { usuarioActual } from "/src/auth.js";
import { cant, fecha } from "/src/format.js";
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";
const ESTADOS = ["registrada", "ingresada", "asignada", "entregada"];
const LABELS = { registrada: "Registrada", ingresada: "Ingresada", asignada: "Asignada", entregada: "Entregada" };
export default function MisDonaciones() {
  _s();
  const usuario = usuarioActual();
  const navigate = useNavigate();
  const [donaciones, setDonaciones] = useState([]);
  useEffect(() => {
    if (!usuario || usuario.rol !== "donante") {
      navigate("/login");
      return;
    }
    get("/donaciones/usuario/" + usuario.id).then(setDonaciones).catch(() => {
    });
  }, []);
  if (!usuario || usuario.rol !== "donante") {
    return null;
  }
  function color(indice, actual) {
    if (indice < actual) return "#000000";
    if (indice === actual) return "#777777";
    return "#ffffff";
  }
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "contenedor", style: { padding: "48px 16px" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, marginBottom: 32 }, children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "font-display", style: { fontSize: 34, margin: 0 }, children: "Mis donaciones" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--tinta-suave)", marginTop: 4 }, children: "Seguí el recorrido de cada aporte, de registrada a entregada." }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
            lineNumber: 61,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/donar", className: "btn-donar", children: "Nueva donación" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      donaciones.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--tinta-suave)" }, children: "Todavía no hiciste ninguna donación." }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/donar", className: "btn-donar", children: "Armar mi primera donación" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this) : /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 24 }, children: donaciones.map((d) => {
        const actual = ESTADOS.indexOf(d.estado);
        return /* @__PURE__ */ jsxDEV("article", { className: "tarjeta tarjeta-pad", children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, marginBottom: 20 }, children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("span", { style: { fontWeight: 600 }, children: [
                "Donación #",
                d.id
              ] }, void 0, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
                lineNumber: 79,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--tinta-suave)", fontSize: 14, marginLeft: 8 }, children: fecha(d.creadoEn) }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
                lineNumber: 80,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
              lineNumber: 78,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: d.estado === "entregada" ? "chip chip-verde" : "chip chip-suave", children: LABELS[d.estado] }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
              lineNumber: 82,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
            lineNumber: 77,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "timeline", children: ESTADOS.map(
            (estado, i) => /* @__PURE__ */ jsxDEV("div", { style: { display: "contents" }, children: [
              /* @__PURE__ */ jsxDEV("div", { className: "timeline-paso", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "timeline-circulo", style: { background: color(i, actual) }, children: i < actual ? /* @__PURE__ */ jsxDEV("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "2.5", children: /* @__PURE__ */ jsxDEV("path", { d: "M5 13l4 4L19 7" }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
                  lineNumber: 91,
                  columnNumber: 118
                }, this) }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
                  lineNumber: 91,
                  columnNumber: 25
                }, this) : i + 1 }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
                  lineNumber: 89,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "timeline-label", style: { color: i <= actual ? "#000000" : "#777777" }, children: LABELS[estado] }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
                  lineNumber: 94,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
                lineNumber: 88,
                columnNumber: 25
              }, this),
              i < 3 && /* @__PURE__ */ jsxDEV("div", { className: "timeline-linea", style: { background: i < actual ? "#000000" : "#cccccc" } }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
                lineNumber: 96,
                columnNumber: 35
              }, this)
            ] }, estado, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
              lineNumber: 87,
              columnNumber: 19
            }, this)
          ) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
            lineNumber: 85,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: "4px 24px", color: "var(--tinta-suave)", fontSize: 14 }, children: d.items.map(
            (it, i) => /* @__PURE__ */ jsxDEV("li", { className: "tabular", children: [
              it.nombre,
              " · ",
              cant(it.cantidad),
              " ",
              it.unidad
            ] }, i, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
              lineNumber: 103,
              columnNumber: 19
            }, this)
          ) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
            lineNumber: 101,
            columnNumber: 19
          }, this)
        ] }, d.id, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
          lineNumber: 76,
          columnNumber: 15
        }, this);
      }) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
_s(MisDonaciones, "X9DvyHkyJk/VbmFKeInoMUyWjjg=", false, function() {
  return [useNavigate];
});
_c = MisDonaciones;
var _c;
$RefreshReg$(_c, "MisDonaciones");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/MisDonaciones.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QSxJQUNBLHVCQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFPO0FBQUEsT0F6RFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTBEQTtBQUVKO0FBQUNOLEdBcEZ1QkQsZUFBYTtBQUFBLFVBRWxCYixXQUFXO0FBQUE7QUFBQSxLQUZOYTtBQUFhLElBQUF5QztBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsImdldCIsInVzdWFyaW9BY3R1YWwiLCJjYW50IiwiZmVjaGEiLCJIZWFkZXIiLCJGb290ZXIiLCJFU1RBRE9TIiwiTEFCRUxTIiwicmVnaXN0cmFkYSIsImluZ3Jlc2FkYSIsImFzaWduYWRhIiwiZW50cmVnYWRhIiwiTWlzRG9uYWNpb25lcyIsIl9zIiwidXN1YXJpbyIsIm5hdmlnYXRlIiwiZG9uYWNpb25lcyIsInNldERvbmFjaW9uZXMiLCJyb2wiLCJpZCIsInRoZW4iLCJjYXRjaCIsImNvbG9yIiwiaW5kaWNlIiwiYWN0dWFsIiwicGFkZGluZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJnYXAiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImxlbmd0aCIsInRleHRBbGlnbiIsImZsZXhEaXJlY3Rpb24iLCJtYXAiLCJkIiwiaW5kZXhPZiIsImVzdGFkbyIsImZsZXhXcmFwIiwiZm9udFdlaWdodCIsIm1hcmdpbkxlZnQiLCJjcmVhZG9FbiIsImkiLCJiYWNrZ3JvdW5kIiwibGlzdFN0eWxlIiwiaXRlbXMiLCJpdCIsIm5vbWJyZSIsImNhbnRpZGFkIiwidW5pZGFkIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTWlzRG9uYWNpb25lcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vYXBpJ1xuaW1wb3J0IHsgdXN1YXJpb0FjdHVhbCB9IGZyb20gJy4uL2F1dGgnXG5pbXBvcnQgeyBjYW50LCBmZWNoYSB9IGZyb20gJy4uL2Zvcm1hdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuXG5jb25zdCBFU1RBRE9TID0gWydyZWdpc3RyYWRhJywgJ2luZ3Jlc2FkYScsICdhc2lnbmFkYScsICdlbnRyZWdhZGEnXVxuY29uc3QgTEFCRUxTID0geyByZWdpc3RyYWRhOiAnUmVnaXN0cmFkYScsIGluZ3Jlc2FkYTogJ0luZ3Jlc2FkYScsIGFzaWduYWRhOiAnQXNpZ25hZGEnLCBlbnRyZWdhZGE6ICdFbnRyZWdhZGEnIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWlzRG9uYWNpb25lcygpIHtcbiAgY29uc3QgdXN1YXJpbyA9IHVzdWFyaW9BY3R1YWwoKVxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgY29uc3QgW2RvbmFjaW9uZXMsIHNldERvbmFjaW9uZXNdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzdWFyaW8gfHwgdXN1YXJpby5yb2wgIT09ICdkb25hbnRlJykge1xuICAgICAgbmF2aWdhdGUoJy9sb2dpbicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZ2V0KCcvZG9uYWNpb25lcy91c3VhcmlvLycgKyB1c3VhcmlvLmlkKS50aGVuKHNldERvbmFjaW9uZXMpLmNhdGNoKCgpID0+IHt9KVxuICB9LCBbXSlcblxuICBpZiAoIXVzdWFyaW8gfHwgdXN1YXJpby5yb2wgIT09ICdkb25hbnRlJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBmdW5jdGlvbiBjb2xvcihpbmRpY2UsIGFjdHVhbCkge1xuICAgIGlmIChpbmRpY2UgPCBhY3R1YWwpIHJldHVybiAnIzAwMDAwMCdcbiAgICBpZiAoaW5kaWNlID09PSBhY3R1YWwpIHJldHVybiAnIzc3Nzc3NydcbiAgICByZXR1cm4gJyNmZmZmZmYnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW5lZG9yXCIgc3R5bGU9e3sgcGFkZGluZzogJzQ4cHggMTZweCcgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLCBnYXA6IDE2LCBtYXJnaW5Cb3R0b206IDMyIH19PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5XCIgc3R5bGU9e3sgZm9udFNpemU6IDM0LCBtYXJnaW46IDAgfX0+TWlzIGRvbmFjaW9uZXM8L2gxPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBtYXJnaW5Ub3A6IDQgfX0+U2VndcOtIGVsIHJlY29ycmlkbyBkZSBjYWRhIGFwb3J0ZSwgZGUgcmVnaXN0cmFkYSBhIGVudHJlZ2FkYS48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmsgdG89XCIvZG9uYXJcIiBjbGFzc05hbWU9XCJidG4tZG9uYXJcIj5OdWV2YSBkb25hY2nDs248L0xpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtkb25hY2lvbmVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhcmpldGEgdGFyamV0YS1wYWRcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19PlRvZGF2w61hIG5vIGhpY2lzdGUgbmluZ3VuYSBkb25hY2nDs24uPC9wPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvZG9uYXJcIiBjbGFzc05hbWU9XCJidG4tZG9uYXJcIj5Bcm1hciBtaSBwcmltZXJhIGRvbmFjacOzbjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogMjQgfX0+XG4gICAgICAgICAgICB7ZG9uYWNpb25lcy5tYXAoZCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFjdHVhbCA9IEVTVEFET1MuaW5kZXhPZihkLmVzdGFkbylcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBrZXk9e2QuaWR9IGNsYXNzTmFtZT1cInRhcmpldGEgdGFyamV0YS1wYWRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBnYXA6IDEyLCBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT5Eb25hY2nDs24gI3tkLmlkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIGZvbnRTaXplOiAxNCwgbWFyZ2luTGVmdDogOCB9fT57ZmVjaGEoZC5jcmVhZG9Fbil9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtkLmVzdGFkbyA9PT0gJ2VudHJlZ2FkYScgPyAnY2hpcCBjaGlwLXZlcmRlJyA6ICdjaGlwIGNoaXAtc3VhdmUnfT57TEFCRUxTW2QuZXN0YWRvXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICB7RVNUQURPUy5tYXAoKGVzdGFkbywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtlc3RhZG99IHN0eWxlPXt7IGRpc3BsYXk6ICdjb250ZW50cycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLXBhc29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1jaXJjdWxvXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IoaSwgYWN0dWFsKSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aSA8IGFjdHVhbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjIuNVwiPjxwYXRoIGQ9XCJNNSAxM2w0IDRMMTkgN1wiIC8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChpICsgMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lbGluZS1sYWJlbFwiIHN0eWxlPXt7IGNvbG9yOiBpIDw9IGFjdHVhbCA/ICcjMDAwMDAwJyA6ICcjNzc3Nzc3JyB9fT57TEFCRUxTW2VzdGFkb119PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aSA8IDMgJiYgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1saW5lYVwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IGkgPCBhY3R1YWwgPyAnIzAwMDAwMCcgOiAnI2NjY2NjYycgfX0+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScsIHBhZGRpbmc6IDAsIG1hcmdpbjogMCwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnLCBnYXA6ICc0cHggMjRweCcsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgZm9udFNpemU6IDE0IH19PlxuICAgICAgICAgICAgICAgICAgICB7ZC5pdGVtcy5tYXAoKGl0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwidGFidWxhclwiPntpdC5ub21icmV9IMK3IHtjYW50KGl0LmNhbnRpZGFkKX0ge2l0LnVuaWRhZH08L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuIl0sImZpbGUiOiIvVXNlcnMvYmlhbmNvL0RvY3VtZW50cy9TVVAyL3N1bWEtdW4tcGxhdG8tZnJvbnRlbmQtbWFpbiAoNSkvZnJvbnRlbmQvc3JjL3BhZ2VzL01pc0RvbmFjaW9uZXMuanN4In0=