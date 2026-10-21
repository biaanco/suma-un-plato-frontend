import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/PanelSugeridos.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { get, post } from "/src/api.js";
import { cant } from "/src/format.js";
import PanelLayout from "/src/components/PanelLayout.jsx";
import SelectorBuscable from "/src/components/SelectorBuscable.jsx";
const UNIDADES = ["u", "kg", "L", "paq"];
const ICONOS = ["bag", "rice", "pasta", "flour", "oil", "sugar", "leaf", "bean", "can", "milk", "carrot", "apple", "bread", "egg", "cheese"];
function TarjetaSugerido({ sugerido, catalogo, onListo }) {
  _s();
  const [datos, setDatos] = useState(sugerido);
  const [unirCon, setUnirCon] = useState("");
  const [error, setError] = useState("");
  function cambiar(campo, valor) {
    setDatos({ ...datos, [campo]: valor });
  }
  async function aprobar() {
    setError("");
    try {
      const r = await post("/alimentos/" + sugerido.id + "/aprobar", datos);
      onListo(r.mensaje);
    } catch (err) {
      setError(err.message);
    }
  }
  async function unir() {
    setError("");
    try {
      const r = await post("/alimentos/" + sugerido.id + "/unir", { alimentoId: Number(unirCon) });
      onListo(r.mensaje);
    } catch (err) {
      setError(err.message);
    }
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", children: [
    /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxDEV("h3", { style: { fontSize: 18, margin: 0 }, children: sugerido.nombre }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 14, color: "var(--tinta-suave)", margin: 0 }, children: [
        "Lo pidió ",
        sugerido.merendero || "un merendero",
        " · ",
        /* @__PURE__ */ jsxDEV("span", { className: "tabular", children: [
          cant(sugerido.cantidad),
          " ",
          sugerido.unidad
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
          lineNumber: 63,
          columnNumber: 61
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-error", children: error }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
      lineNumber: 66,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
      /* @__PURE__ */ jsxDEV("label", { className: "label-campo", style: { margin: 0 }, children: "Nombre en el catálogo" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("input", { className: "campo", value: datos.nombre, onChange: (e) => cambiar("nombre", e.target.value), maxLength: 60 }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: [
        /* @__PURE__ */ jsxDEV("select", { className: "campo", value: datos.unidad, onChange: (e) => cambiar("unidad", e.target.value), "aria-label": "Unidad", style: { width: 90 }, children: UNIDADES.map((u) => /* @__PURE__ */ jsxDEV("option", { value: u, children: u }, u, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
          lineNumber: 73,
          columnNumber: 34
        }, this)) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("select", { className: "campo", value: datos.categoria, onChange: (e) => cambiar("categoria", e.target.value), "aria-label": "Categoría", style: { flex: "1 1 160px", width: "auto" }, children: [
          /* @__PURE__ */ jsxDEV("option", { value: "no_perecedero", children: "No perecedero" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("option", { value: "perecedero", children: "Perecedero" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
            lineNumber: 77,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("select", { className: "campo", value: datos.icono, onChange: (e) => cambiar("icono", e.target.value), "aria-label": "Ícono", style: { width: 110 }, children: ICONOS.map((i) => /* @__PURE__ */ jsxDEV("option", { value: i, children: i }, i, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
          lineNumber: 80,
          columnNumber: 32
        }, this)) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
          lineNumber: 79,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "btn-verde", style: { padding: "6px 12px", minHeight: "auto", fontSize: 14, alignSelf: "flex-start" }, onClick: aprobar, children: "Agregar al catálogo" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 16, borderTop: "1px solid var(--borde)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 8 }, children: [
      /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 14, color: "var(--tinta-suave)" }, children: "¿Ya existe con otro nombre? Pasá el pedido a ese producto:" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(SelectorBuscable, { opciones: catalogo, valor: unirCon, onChange: setUnirCon }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "btn-fantasma", style: { padding: "6px 12px", minHeight: "auto", fontSize: 14, alignSelf: "flex-start" }, onClick: unir, disabled: !unirCon, children: "Usar ese producto" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
_s(TarjetaSugerido, "2MrHaGkeWYVIjskGj0HLnjDDLR0=");
_c = TarjetaSugerido;
export default function PanelSugeridos() {
  _s2();
  const [sugeridos, setSugeridos] = useState(null);
  const [catalogo, setCatalogo] = useState([]);
  const [mensaje, setMensaje] = useState("");
  function cargar() {
    get("/alimentos/sugeridos").then(setSugeridos).catch(() => setSugeridos([]));
    get("/alimentos").then(setCatalogo).catch(() => {
    });
  }
  useEffect(() => {
    cargar();
  }, []);
  function listo(texto) {
    setMensaje(texto);
    cargar();
    window.dispatchEvent(new Event("sugeridos-cambio"));
  }
  return /* @__PURE__ */ jsxDEV(PanelLayout, { titulo: "Productos sugeridos", seccion: "sugeridos", children: [
    /* @__PURE__ */ jsxDEV("p", { className: "medida", style: { color: "var(--tinta-suave)", marginBottom: 24 }, children: 'Productos que pidieron los merenderos con la opción "Otros" porque no estaban en la lista. Corregí el nombre si hace falta y sumalo al catálogo para que aparezca la próxima vez, o pasá el pedido a un producto que ya existe.' }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    mensaje && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-ok", children: mensaje }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
      lineNumber: 118,
      columnNumber: 19
    }, this),
    !sugeridos ? /* @__PURE__ */ jsxDEV("span", { className: "cargando" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
      lineNumber: 120,
      columnNumber: 7
    }, this) : sugeridos.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", style: { textAlign: "center", color: "var(--tinta-suave)" }, children: "No hay productos nuevos para revisar." }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
      lineNumber: 122,
      columnNumber: 7
    }, this) : /* @__PURE__ */ jsxDEV("div", { className: "grid grid-2", children: sugeridos.map((s) => /* @__PURE__ */ jsxDEV(TarjetaSugerido, { sugerido: s, catalogo, onListo: listo }, s.id, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
      lineNumber: 125,
      columnNumber: 33
    }, this)) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
      lineNumber: 124,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
}
_s2(PanelSugeridos, "55vEN8qzGQBPn8WshgcYVxBIGJc=");
_c2 = PanelSugeridos;
var _c, _c2;
$RefreshReg$(_c, "TarjetaSugerido");
$RefreshReg$(_c2, "PanelSugeridos");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelSugeridos.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUE7QUFBQTtBQUFBO0FBQUEsV0FBNEUsQ0FBRyxLQURyRztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUE7QUFBQSxPQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FjQTtBQUVKO0FBQUNvQyxJQW5DdUJELGdCQUFjO0FBQUEsTUFBZEE7QUFBYyxJQUFBaUIsSUFBQUM7QUFBQSxhQUFBRCxJQUFBO0FBQUEsYUFBQUMsS0FBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0IiwicG9zdCIsImNhbnQiLCJQYW5lbExheW91dCIsIlNlbGVjdG9yQnVzY2FibGUiLCJVTklEQURFUyIsIklDT05PUyIsIlRhcmpldGFTdWdlcmlkbyIsInN1Z2VyaWRvIiwiY2F0YWxvZ28iLCJvbkxpc3RvIiwiX3MiLCJkYXRvcyIsInNldERhdG9zIiwidW5pckNvbiIsInNldFVuaXJDb24iLCJlcnJvciIsInNldEVycm9yIiwiY2FtYmlhciIsImNhbXBvIiwidmFsb3IiLCJhcHJvYmFyIiwiciIsImlkIiwibWVuc2FqZSIsImVyciIsIm1lc3NhZ2UiLCJ1bmlyIiwiYWxpbWVudG9JZCIsIk51bWJlciIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwibWFyZ2luIiwibm9tYnJlIiwiY29sb3IiLCJtZXJlbmRlcm8iLCJjYW50aWRhZCIsInVuaWRhZCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmxleFdyYXAiLCJ3aWR0aCIsIm1hcCIsInUiLCJjYXRlZ29yaWEiLCJmbGV4IiwiaWNvbm8iLCJpIiwicGFkZGluZyIsIm1pbkhlaWdodCIsImFsaWduU2VsZiIsIm1hcmdpblRvcCIsImJvcmRlclRvcCIsInBhZGRpbmdUb3AiLCJQYW5lbFN1Z2VyaWRvcyIsIl9zMiIsInN1Z2VyaWRvcyIsInNldFN1Z2VyaWRvcyIsInNldENhdGFsb2dvIiwic2V0TWVuc2FqZSIsImNhcmdhciIsInRoZW4iLCJjYXRjaCIsImxpc3RvIiwidGV4dG8iLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iLCJzIiwiX2MiLCJfYzIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUGFuZWxTdWdlcmlkb3MuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldCwgcG9zdCB9IGZyb20gJy4uL2FwaSdcbmltcG9ydCB7IGNhbnQgfSBmcm9tICcuLi9mb3JtYXQnXG5pbXBvcnQgUGFuZWxMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9QYW5lbExheW91dCdcbmltcG9ydCBTZWxlY3RvckJ1c2NhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0b3JCdXNjYWJsZSdcblxuY29uc3QgVU5JREFERVMgPSBbJ3UnLCAna2cnLCAnTCcsICdwYXEnXVxuY29uc3QgSUNPTk9TID0gWydiYWcnLCAncmljZScsICdwYXN0YScsICdmbG91cicsICdvaWwnLCAnc3VnYXInLCAnbGVhZicsICdiZWFuJywgJ2NhbicsICdtaWxrJywgJ2NhcnJvdCcsICdhcHBsZScsICdicmVhZCcsICdlZ2cnLCAnY2hlZXNlJ11cblxuZnVuY3Rpb24gVGFyamV0YVN1Z2VyaWRvKHsgc3VnZXJpZG8sIGNhdGFsb2dvLCBvbkxpc3RvIH0pIHtcbiAgY29uc3QgW2RhdG9zLCBzZXREYXRvc10gPSB1c2VTdGF0ZShzdWdlcmlkbylcbiAgY29uc3QgW3VuaXJDb24sIHNldFVuaXJDb25dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXG5cbiAgZnVuY3Rpb24gY2FtYmlhcihjYW1wbywgdmFsb3IpIHtcbiAgICBzZXREYXRvcyh7IC4uLmRhdG9zLCBbY2FtcG9dOiB2YWxvciB9KVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gYXByb2JhcigpIHtcbiAgICBzZXRFcnJvcignJylcbiAgICB0cnkge1xuICAgICAgY29uc3QgciA9IGF3YWl0IHBvc3QoJy9hbGltZW50b3MvJyArIHN1Z2VyaWRvLmlkICsgJy9hcHJvYmFyJywgZGF0b3MpXG4gICAgICBvbkxpc3RvKHIubWVuc2FqZSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHVuaXIoKSB7XG4gICAgc2V0RXJyb3IoJycpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHIgPSBhd2FpdCBwb3N0KCcvYWxpbWVudG9zLycgKyBzdWdlcmlkby5pZCArICcvdW5pcicsIHsgYWxpbWVudG9JZDogTnVtYmVyKHVuaXJDb24pIH0pXG4gICAgICBvbkxpc3RvKHIubWVuc2FqZSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YXJqZXRhIHRhcmpldGEtcGFkXCI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogMTgsIG1hcmdpbjogMCB9fT57c3VnZXJpZG8ubm9tYnJlfTwvaDM+XG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBtYXJnaW46IDAgfX0+XG4gICAgICAgICAgTG8gcGlkacOzIHtzdWdlcmlkby5tZXJlbmRlcm8gfHwgJ3VuIG1lcmVuZGVybyd9IMK3IDxzcGFuIGNsYXNzTmFtZT1cInRhYnVsYXJcIj57Y2FudChzdWdlcmlkby5jYW50aWRhZCl9IHtzdWdlcmlkby51bmlkYWR9PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0YSBhbGVydGEtZXJyb3JcIj57ZXJyb3J9PC9kaXY+fVxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogOCB9fT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWNhbXBvXCIgc3R5bGU9e3sgbWFyZ2luOiAwIH19Pk5vbWJyZSBlbiBlbCBjYXTDoWxvZ288L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FtcG9cIiB2YWx1ZT17ZGF0b3Mubm9tYnJlfSBvbkNoYW5nZT17ZSA9PiBjYW1iaWFyKCdub21icmUnLCBlLnRhcmdldC52YWx1ZSl9IG1heExlbmd0aD17NjB9IC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnLCBnYXA6IDggfX0+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjYW1wb1wiIHZhbHVlPXtkYXRvcy51bmlkYWR9IG9uQ2hhbmdlPXtlID0+IGNhbWJpYXIoJ3VuaWRhZCcsIGUudGFyZ2V0LnZhbHVlKX0gYXJpYS1sYWJlbD1cIlVuaWRhZFwiIHN0eWxlPXt7IHdpZHRoOiA5MCB9fT5cbiAgICAgICAgICAgIHtVTklEQURFUy5tYXAodSA9PiA8b3B0aW9uIGtleT17dX0gdmFsdWU9e3V9Pnt1fTwvb3B0aW9uPil9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjYW1wb1wiIHZhbHVlPXtkYXRvcy5jYXRlZ29yaWF9IG9uQ2hhbmdlPXtlID0+IGNhbWJpYXIoJ2NhdGVnb3JpYScsIGUudGFyZ2V0LnZhbHVlKX0gYXJpYS1sYWJlbD1cIkNhdGVnb3LDrWFcIiBzdHlsZT17eyBmbGV4OiAnMSAxIDE2MHB4Jywgd2lkdGg6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub19wZXJlY2VkZXJvXCI+Tm8gcGVyZWNlZGVybzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlcmVjZWRlcm9cIj5QZXJlY2VkZXJvPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjYW1wb1wiIHZhbHVlPXtkYXRvcy5pY29ub30gb25DaGFuZ2U9e2UgPT4gY2FtYmlhcignaWNvbm8nLCBlLnRhcmdldC52YWx1ZSl9IGFyaWEtbGFiZWw9XCLDjWNvbm9cIiBzdHlsZT17eyB3aWR0aDogMTEwIH19PlxuICAgICAgICAgICAge0lDT05PUy5tYXAoaSA9PiA8b3B0aW9uIGtleT17aX0gdmFsdWU9e2l9PntpfTwvb3B0aW9uPil9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi12ZXJkZVwiIHN0eWxlPXt7IHBhZGRpbmc6ICc2cHggMTJweCcsIG1pbkhlaWdodDogJ2F1dG8nLCBmb250U2l6ZTogMTQsIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnIH19IG9uQ2xpY2s9e2Fwcm9iYXJ9PkFncmVnYXIgYWwgY2F0w6Fsb2dvPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDE2LCBib3JkZXJUb3A6ICcxcHggc29saWQgdmFyKC0tYm9yZGUpJywgcGFkZGluZ1RvcDogMTYsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogOCB9fT5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScgfX0+wr9ZYSBleGlzdGUgY29uIG90cm8gbm9tYnJlPyBQYXPDoSBlbCBwZWRpZG8gYSBlc2UgcHJvZHVjdG86PC9zcGFuPlxuICAgICAgICA8U2VsZWN0b3JCdXNjYWJsZSBvcGNpb25lcz17Y2F0YWxvZ299IHZhbG9yPXt1bmlyQ29ufSBvbkNoYW5nZT17c2V0VW5pckNvbn0gLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZmFudGFzbWFcIiBzdHlsZT17eyBwYWRkaW5nOiAnNnB4IDEycHgnLCBtaW5IZWlnaHQ6ICdhdXRvJywgZm9udFNpemU6IDE0LCBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyB9fSBvbkNsaWNrPXt1bmlyfSBkaXNhYmxlZD17IXVuaXJDb259PlVzYXIgZXNlIHByb2R1Y3RvPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYW5lbFN1Z2VyaWRvcygpIHtcbiAgY29uc3QgW3N1Z2VyaWRvcywgc2V0U3VnZXJpZG9zXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtjYXRhbG9nbywgc2V0Q2F0YWxvZ29dID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFttZW5zYWplLCBzZXRNZW5zYWplXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGZ1bmN0aW9uIGNhcmdhcigpIHtcbiAgICBnZXQoJy9hbGltZW50b3Mvc3VnZXJpZG9zJykudGhlbihzZXRTdWdlcmlkb3MpLmNhdGNoKCgpID0+IHNldFN1Z2VyaWRvcyhbXSkpXG4gICAgZ2V0KCcvYWxpbWVudG9zJykudGhlbihzZXRDYXRhbG9nbykuY2F0Y2goKCkgPT4ge30pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4geyBjYXJnYXIoKSB9LCBbXSlcblxuICBmdW5jdGlvbiBsaXN0byh0ZXh0bykge1xuICAgIHNldE1lbnNhamUodGV4dG8pXG4gICAgY2FyZ2FyKClcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3N1Z2VyaWRvcy1jYW1iaW8nKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhbmVsTGF5b3V0IHRpdHVsbz1cIlByb2R1Y3RvcyBzdWdlcmlkb3NcIiBzZWNjaW9uPVwic3VnZXJpZG9zXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtZWRpZGFcIiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIG1hcmdpbkJvdHRvbTogMjQgfX0+XG4gICAgICAgIFByb2R1Y3RvcyBxdWUgcGlkaWVyb24gbG9zIG1lcmVuZGVyb3MgY29uIGxhIG9wY2nDs24gXCJPdHJvc1wiIHBvcnF1ZSBubyBlc3RhYmFuIGVuIGxhIGxpc3RhLiBDb3JyZWfDrSBlbCBub21icmUgc2kgaGFjZSBmYWx0YSB5IHN1bWFsbyBhbCBjYXTDoWxvZ28gcGFyYSBxdWUgYXBhcmV6Y2EgbGEgcHLDs3hpbWEgdmV6LCBvIHBhc8OhIGVsIHBlZGlkbyBhIHVuIHByb2R1Y3RvIHF1ZSB5YSBleGlzdGUuXG4gICAgICA8L3A+XG4gICAgICB7bWVuc2FqZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0YSBhbGVydGEtb2tcIj57bWVuc2FqZX08L2Rpdj59XG4gICAgICB7IXN1Z2VyaWRvcyA/IChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZ2FuZG9cIj48L3NwYW4+XG4gICAgICApIDogc3VnZXJpZG9zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXJqZXRhIHRhcmpldGEtcGFkXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19Pk5vIGhheSBwcm9kdWN0b3MgbnVldm9zIHBhcmEgcmV2aXNhci48L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLTJcIj5cbiAgICAgICAgICB7c3VnZXJpZG9zLm1hcChzID0+IDxUYXJqZXRhU3VnZXJpZG8ga2V5PXtzLmlkfSBzdWdlcmlkbz17c30gY2F0YWxvZ289e2NhdGFsb2dvfSBvbkxpc3RvPXtsaXN0b30gLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9QYW5lbExheW91dD5cbiAgKVxufVxuIl0sImZpbGUiOiIvVXNlcnMvYmlhbmNvL0RvY3VtZW50cy9TVVAyL3N1bWEtdW4tcGxhdG8tZnJvbnRlbmQtbWFpbiAoNSkvZnJvbnRlbmQvc3JjL3BhZ2VzL1BhbmVsU3VnZXJpZG9zLmpzeCJ9