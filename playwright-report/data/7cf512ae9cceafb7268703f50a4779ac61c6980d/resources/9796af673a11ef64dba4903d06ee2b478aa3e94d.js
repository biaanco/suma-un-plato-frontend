import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/SelectorBuscable.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useState = __vite__cjsImport3_react["useState"]; const useRef = __vite__cjsImport3_react["useRef"]; const useEffect = __vite__cjsImport3_react["useEffect"];
const normalizar = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const OTROS = { id: "otros", nombre: "Otros" };
export default function SelectorBuscable({ opciones, valor, onChange, placeholder = "Elegí del catálogo…", conOtros = false }) {
  _s();
  const [abierto, setAbierto] = useState(false);
  const [texto, setTexto] = useState("");
  const [resaltado, setResaltado] = useState(0);
  const caja = useRef(null);
  const buscador = useRef(null);
  const lista = useRef(null);
  const etiqueta = (a) => a === OTROS ? "Otros (no está en la lista)" : `${a.nombre} (${a.unidad})`;
  const seleccionado = valor === OTROS.id ? OTROS : opciones.find((a) => String(a.id) === String(valor));
  const t = normalizar(texto.trim());
  const filtradas = opciones.filter((a) => normalizar(a.nombre).startsWith(t));
  if (conOtros) filtradas.push(OTROS);
  useEffect(() => {
    function fuera(e) {
      if (caja.current && !caja.current.contains(e.target)) setAbierto(false);
    }
    document.addEventListener("mousedown", fuera);
    return () => document.removeEventListener("mousedown", fuera);
  }, []);
  useEffect(() => {
    if (abierto) {
      setTexto("");
      setResaltado(0);
      buscador.current?.focus();
    }
  }, [abierto]);
  useEffect(() => {
    lista.current?.children[resaltado]?.scrollIntoView({ block: "nearest" });
  }, [resaltado]);
  function elegir(a) {
    onChange(String(a.id));
    setAbierto(false);
  }
  function teclas(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setResaltado((r) => Math.min(r + 1, filtradas.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setResaltado((r) => Math.max(r - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtradas[resaltado]) elegir(filtradas[resaltado]);
    } else if (e.key === "Escape") setAbierto(false);
  }
  return /* @__PURE__ */ jsxDEV("div", { ref: caja, style: { position: "relative" }, children: [
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "button",
        className: "campo",
        onClick: () => setAbierto(!abierto),
        style: { width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", background: "#ffffff" },
        children: [
          /* @__PURE__ */ jsxDEV("span", { children: seleccionado ? etiqueta(seleccionado) : placeholder }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx",
            lineNumber: 82,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsxDEV("path", { d: "M6 9l6 6 6-6" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx",
            lineNumber: 83,
            columnNumber: 109
          }, this) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx",
            lineNumber: 83,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx",
        lineNumber: 76,
        columnNumber: 7
      },
      this
    ),
    abierto && /* @__PURE__ */ jsxDEV("div", { style: {
      position: "absolute",
      zIndex: 20,
      left: 0,
      right: 0,
      marginTop: 4,
      background: "#ffffff",
      border: "1px solid var(--borde)",
      borderRadius: 8,
      boxShadow: "0 6px 20px rgba(0,0,0,0.10)",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { padding: 8, borderBottom: "1px solid var(--borde)" }, children: /* @__PURE__ */ jsxDEV(
        "input",
        {
          ref: buscador,
          className: "campo",
          value: texto,
          onChange: (e) => {
            setTexto(e.target.value);
            setResaltado(0);
          },
          onKeyDown: teclas,
          placeholder: "Escribí para buscar…",
          autoComplete: "off"
        },
        void 0,
        false,
        {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx",
          lineNumber: 94,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("ul", { ref: lista, style: { listStyle: "none", margin: 0, padding: 4, maxHeight: 280, overflowY: "auto" }, children: [
        filtradas.length === 0 && /* @__PURE__ */ jsxDEV("li", { style: { padding: 10, color: "var(--tinta-suave)" }, children: "Sin coincidencias" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx",
          lineNumber: 105,
          columnNumber: 40
        }, this),
        filtradas.map(
          (a, i) => /* @__PURE__ */ jsxDEV(
            "li",
            {
              onMouseDown: () => elegir(a),
              onMouseEnter: () => setResaltado(i),
              style: {
                padding: "8px 12px",
                borderRadius: 6,
                cursor: "pointer",
                background: i === resaltado ? "#1d64d8" : "transparent",
                color: i === resaltado ? "#ffffff" : "inherit"
              },
              children: a === OTROS ? /* @__PURE__ */ jsxDEV("em", { children: etiqueta(a) }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx",
                lineNumber: 117,
                columnNumber: 32
              }, this) : etiqueta(a)
            },
            a.id,
            false,
            {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx",
              lineNumber: 107,
              columnNumber: 11
            },
            this
          )
        )
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx",
        lineNumber: 104,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
_s(SelectorBuscable, "MaR1EYHFCk9OaylXPFviUw6NC2g=");
_c = SelectorBuscable;
var _c;
$RefreshReg$(_c, "SelectorBuscable");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/SelectorBuscable.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBLFlBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVdBO0FBQUEsUUFDRDtBQUFBLFdBZkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWdCQTtBQUFBLFNBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FpQ0E7QUFBQSxPQS9DSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBaURBO0FBRUo7QUFBQ1EsR0FqR3VCTixrQkFBZ0I7QUFBQSxLQUFoQkE7QUFBZ0IsSUFBQTJFO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwibm9ybWFsaXphciIsInMiLCJub3JtYWxpemUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJPVFJPUyIsImlkIiwibm9tYnJlIiwiU2VsZWN0b3JCdXNjYWJsZSIsIm9wY2lvbmVzIiwidmFsb3IiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiY29uT3Ryb3MiLCJfcyIsImFiaWVydG8iLCJzZXRBYmllcnRvIiwidGV4dG8iLCJzZXRUZXh0byIsInJlc2FsdGFkbyIsInNldFJlc2FsdGFkbyIsImNhamEiLCJidXNjYWRvciIsImxpc3RhIiwiZXRpcXVldGEiLCJhIiwidW5pZGFkIiwic2VsZWNjaW9uYWRvIiwiZmluZCIsIlN0cmluZyIsInQiLCJ0cmltIiwiZmlsdHJhZGFzIiwiZmlsdGVyIiwic3RhcnRzV2l0aCIsInB1c2giLCJmdWVyYSIsImUiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZm9jdXMiLCJjaGlsZHJlbiIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJlbGVnaXIiLCJ0ZWNsYXMiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInIiLCJNYXRoIiwibWluIiwibGVuZ3RoIiwibWF4IiwicG9zaXRpb24iLCJ3aWR0aCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kIiwiekluZGV4IiwibGVmdCIsInJpZ2h0IiwibWFyZ2luVG9wIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93Iiwib3ZlcmZsb3ciLCJwYWRkaW5nIiwiYm9yZGVyQm90dG9tIiwidmFsdWUiLCJsaXN0U3R5bGUiLCJtYXJnaW4iLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJjb2xvciIsIm1hcCIsImkiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJTZWxlY3RvckJ1c2NhYmxlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuLy8gUXVpdGEgdGlsZGVzIHkgcGFzYSBhIG1pbsO6c2N1bGFzIHBhcmEgY29tcGFyYXJcbmNvbnN0IG5vcm1hbGl6YXIgPSBzID0+IHMubm9ybWFsaXplKCdORkQnKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJykudG9Mb3dlckNhc2UoKVxuXG4vLyBPcGNpw7NuIGV4dHJhIHBhcmEgcGVkaXIgYWxnbyBxdWUgbm8gZXN0w6EgZW4gZWwgY2F0w6Fsb2dvXG5jb25zdCBPVFJPUyA9IHsgaWQ6ICdvdHJvcycsIG5vbWJyZTogJ090cm9zJyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdG9yQnVzY2FibGUoeyBvcGNpb25lcywgdmFsb3IsIG9uQ2hhbmdlLCBwbGFjZWhvbGRlciA9ICdFbGVnw60gZGVsIGNhdMOhbG9nb+KApicsIGNvbk90cm9zID0gZmFsc2UgfSkge1xuICBjb25zdCBbYWJpZXJ0bywgc2V0QWJpZXJ0b10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3RleHRvLCBzZXRUZXh0b10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Jlc2FsdGFkbywgc2V0UmVzYWx0YWRvXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IGNhamEgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgYnVzY2Fkb3IgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgbGlzdGEgPSB1c2VSZWYobnVsbClcblxuICBjb25zdCBldGlxdWV0YSA9IGEgPT4gYSA9PT0gT1RST1MgPyAnT3Ryb3MgKG5vIGVzdMOhIGVuIGxhIGxpc3RhKScgOiBgJHthLm5vbWJyZX0gKCR7YS51bmlkYWR9KWBcbiAgY29uc3Qgc2VsZWNjaW9uYWRvID0gdmFsb3IgPT09IE9UUk9TLmlkID8gT1RST1MgOiBvcGNpb25lcy5maW5kKGEgPT4gU3RyaW5nKGEuaWQpID09PSBTdHJpbmcodmFsb3IpKVxuXG4gIC8vIFNvbG8gbG9zIHF1ZSBlbXBpZXphbiBjb24gbG8gZXNjcml0b1xuICBjb25zdCB0ID0gbm9ybWFsaXphcih0ZXh0by50cmltKCkpXG4gIGNvbnN0IGZpbHRyYWRhcyA9IG9wY2lvbmVzLmZpbHRlcihhID0+IG5vcm1hbGl6YXIoYS5ub21icmUpLnN0YXJ0c1dpdGgodCkpXG4gIGlmIChjb25PdHJvcykgZmlsdHJhZGFzLnB1c2goT1RST1MpXG5cbiAgLy8gQ2VycmFyIGFsIGhhY2VyIGNsaWMgYWZ1ZXJhXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZnVlcmEoZSkgeyBpZiAoY2FqYS5jdXJyZW50ICYmICFjYWphLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpKSBzZXRBYmllcnRvKGZhbHNlKSB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVlcmEpXG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1ZXJhKVxuICB9LCBbXSlcblxuICAvLyBBbCBhYnJpcjogbGltcGlhciBiw7pzcXVlZGEgeSBwb25lciBlbCBjdXJzb3IgZW4gZWwgYnVzY2Fkb3JcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWJpZXJ0bykgeyBzZXRUZXh0bygnJyk7IHNldFJlc2FsdGFkbygwKTsgYnVzY2Fkb3IuY3VycmVudD8uZm9jdXMoKSB9XG4gIH0sIFthYmllcnRvXSlcblxuICAvLyBNYW50ZW5lciB2aXNpYmxlIGxhIG9wY2nDs24gcmVzYWx0YWRhXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGlzdGEuY3VycmVudD8uY2hpbGRyZW5bcmVzYWx0YWRvXT8uc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ25lYXJlc3QnIH0pXG4gIH0sIFtyZXNhbHRhZG9dKVxuXG4gIGZ1bmN0aW9uIGVsZWdpcihhKSB7XG4gICAgb25DaGFuZ2UoU3RyaW5nKGEuaWQpKVxuICAgIHNldEFiaWVydG8oZmFsc2UpXG4gIH1cblxuICBmdW5jdGlvbiB0ZWNsYXMoZSkge1xuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBzZXRSZXNhbHRhZG8ociA9PiBNYXRoLm1pbihyICsgMSwgZmlsdHJhZGFzLmxlbmd0aCAtIDEpKSB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykgeyBlLnByZXZlbnREZWZhdWx0KCk7IHNldFJlc2FsdGFkbyhyID0+IE1hdGgubWF4KHIgLSAxLCAwKSkgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7IGUucHJldmVudERlZmF1bHQoKTsgaWYgKGZpbHRyYWRhc1tyZXNhbHRhZG9dKSBlbGVnaXIoZmlsdHJhZGFzW3Jlc2FsdGFkb10pIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHNldEFiaWVydG8oZmFsc2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtjYWphfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgIHsvKiBQYXJ0ZSBjZXJyYWRhOiBzZSB2ZSBjb21vIGVsIHNlbGVjdCAqL31cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cImNhbXBvXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWJpZXJ0byghYWJpZXJ0byl9XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2xlZnQnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjdXJzb3I6ICdwb2ludGVyJywgYmFja2dyb3VuZDogJyNmZmZmZmYnIH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuPntzZWxlY2Npb25hZG8gPyBldGlxdWV0YShzZWxlY2Npb25hZG8pIDogcGxhY2Vob2xkZXJ9PC9zcGFuPlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMi41XCI+PHBhdGggZD1cIk02IDlsNiA2IDYtNlwiIC8+PC9zdmc+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgey8qIFBhcnRlIGRlc3BsZWdhZGE6IGJ1c2NhZG9yICsgbGlzdGEgZmlsdHJhZGEgKi99XG4gICAgICB7YWJpZXJ0byAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJywgekluZGV4OiAyMCwgbGVmdDogMCwgcmlnaHQ6IDAsIG1hcmdpblRvcDogNCxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsIGJvcmRlcjogJzFweCBzb2xpZCB2YXIoLS1ib3JkZSknLCBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgICAgYm94U2hhZG93OiAnMCA2cHggMjBweCByZ2JhKDAsMCwwLDAuMTApJywgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCwgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlKScgfX0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXtidXNjYWRvcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FtcG9cIlxuICAgICAgICAgICAgICB2YWx1ZT17dGV4dG99XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgc2V0VGV4dG8oZS50YXJnZXQudmFsdWUpOyBzZXRSZXNhbHRhZG8oMCkgfX1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXt0ZWNsYXN9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXNjcmliw60gcGFyYSBidXNjYXLigKZcIlxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgcmVmPXtsaXN0YX0gc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScsIG1hcmdpbjogMCwgcGFkZGluZzogNCwgbWF4SGVpZ2h0OiAyODAsIG92ZXJmbG93WTogJ2F1dG8nIH19PlxuICAgICAgICAgICAge2ZpbHRyYWRhcy5sZW5ndGggPT09IDAgJiYgPGxpIHN0eWxlPXt7IHBhZGRpbmc6IDEwLCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScgfX0+U2luIGNvaW5jaWRlbmNpYXM8L2xpPn1cbiAgICAgICAgICAgIHtmaWx0cmFkYXMubWFwKChhLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17YS5pZH1cbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gZWxlZ2lyKGEpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0UmVzYWx0YWRvKGkpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4IDEycHgnLCBib3JkZXJSYWRpdXM6IDYsIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogaSA9PT0gcmVzYWx0YWRvID8gJyMxZDY0ZDgnIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBpID09PSByZXNhbHRhZG8gPyAnI2ZmZmZmZicgOiAnaW5oZXJpdCdcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2EgPT09IE9UUk9TID8gPGVtPntldGlxdWV0YShhKX08L2VtPiA6IGV0aXF1ZXRhKGEpfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwiZmlsZSI6Ii9Vc2Vycy9iaWFuY28vRG9jdW1lbnRzL1NVUDIvc3VtYS11bi1wbGF0by1mcm9udGVuZC1tYWluICg1KS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TZWxlY3RvckJ1c2NhYmxlLmpzeCJ9