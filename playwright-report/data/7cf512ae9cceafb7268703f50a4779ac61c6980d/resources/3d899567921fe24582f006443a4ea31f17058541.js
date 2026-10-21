import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/DonacionConfirmada.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { Link, useParams, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=9f826408";
import { get } from "/src/api.js";
import { usuarioActual } from "/src/auth.js";
import { cant } from "/src/format.js";
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";
import Icono from "/src/components/Icono.jsx";
export default function DonacionConfirmada() {
  _s();
  const { id } = useParams();
  const usuario = usuarioActual();
  const navigate = useNavigate();
  const [donacion, setDonacion] = useState(null);
  useEffect(() => {
    if (!usuario || usuario.rol !== "donante") {
      navigate("/login");
      return;
    }
    get("/donaciones/" + id).then(setDonacion).catch(() => navigate("/perfil"));
  }, [id]);
  if (!donacion) {
    return /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
        lineNumber: 44,
        columnNumber: 14
      }, this),
      /* @__PURE__ */ jsxDEV("main", { className: "contenedor", style: { padding: "80px 16px", textAlign: "center" }, children: /* @__PURE__ */ jsxDEV("span", { className: "cargando" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
        lineNumber: 44,
        columnNumber: 107
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
        lineNumber: 44,
        columnNumber: 24
      }, this),
      /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
        lineNumber: 44,
        columnNumber: 148
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
      lineNumber: 44,
      columnNumber: 12
    }, this);
  }
  const primerNombre = usuario.nombre.split(" ")[0];
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "contenedor", style: { padding: "56px 16px" }, children: /* @__PURE__ */ jsxDEV("div", { style: { maxWidth: 620, margin: "0 auto", textAlign: "center" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "center", marginBottom: 24 }, children: /* @__PURE__ */ jsxDEV("svg", { className: "check-svg", viewBox: "0 0 100 100", children: [
        /* @__PURE__ */ jsxDEV("circle", { cx: "50", cy: "50", r: "46" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
          lineNumber: 55,
          columnNumber: 62
        }, this),
        /* @__PURE__ */ jsxDEV("path", { d: "M30 52l14 14 27-30" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
          lineNumber: 55,
          columnNumber: 95
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
        lineNumber: 55,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("h1", { className: "font-display", style: { fontSize: 34, margin: "0 0 12px" }, children: [
        "¡Gracias, ",
        primerNombre,
        "! Te esperamos en el depósito"
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "medida", style: { color: "var(--tinta-suave)", margin: "0 auto 32px" }, children: "Tu donación quedó registrada. El coordinador ya la ve en el sistema. Cuando la lleves, la revisamos y pasa a formar parte del stock que llega a los comedores." }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", style: { textAlign: "left", marginBottom: 24 }, children: [
        /* @__PURE__ */ jsxDEV("h2", { style: { fontSize: 18, marginTop: 0 }, children: "Lo que te comprometiste a llevar" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: donacion.items.map(
          (it, i) => /* @__PURE__ */ jsxDEV("li", { style: { display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderTop: i === 0 ? "none" : "1px solid var(--borde)" }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--naranja-hover)" }, children: /* @__PURE__ */ jsxDEV(Icono, { nombre: it.icono, size: 20 }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
              lineNumber: 67,
              columnNumber: 67
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
              lineNumber: 67,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { flex: 1 }, children: it.nombre }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
              lineNumber: 68,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "tabular", style: { color: "var(--tinta-suave)" }, children: [
              cant(it.cantidad),
              " ",
              it.unidad
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
              lineNumber: 69,
              columnNumber: 19
            }, this)
          ] }, i, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-2", style: { textAlign: "left", marginBottom: 32 }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "tarjeta", style: { padding: 16 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, fontWeight: 600, marginBottom: 4 }, children: "Dirección" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { color: "var(--tinta-suave)", fontSize: 14 }, children: "Av. Independencia 450, Laboulaye" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
            lineNumber: 78,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "tarjeta", style: { padding: 16 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, fontWeight: 600, marginBottom: 4 }, children: "Horarios" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { color: "var(--tinta-suave)", fontSize: 14 }, children: "Lunes a viernes de 9 a 13 y de 16 a 19 h" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
            lineNumber: 82,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }, children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/mis-donaciones", className: "btn-donar", children: "Seguir mi donación" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/perfil", className: "btn-fantasma", children: "Volver a mi espacio" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
          lineNumber: 88,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
        lineNumber: 86,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
_s(DonacionConfirmada, "FMwUqJzQgQ0xAoXoSQWBOmnRkR8=", false, function() {
  return [useParams, useNavigate];
});
_c = DonacionConfirmada;
var _c;
$RefreshReg$(_c, "DonacionConfirmada");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/DonacionConfirmada.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTtBQUFBO0FBQUEsU0EyQ0E7QUFFSjtBQUFDNUIsR0FsRXVCRCxvQkFBa0I7QUFBQSxVQUN6QlIsV0FFRUMsV0FBVztBQUFBO0FBQUEsS0FITk87QUFBa0IsSUFBQXFDO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZVBhcmFtcyIsInVzZU5hdmlnYXRlIiwiZ2V0IiwidXN1YXJpb0FjdHVhbCIsImNhbnQiLCJIZWFkZXIiLCJGb290ZXIiLCJJY29ubyIsIkRvbmFjaW9uQ29uZmlybWFkYSIsIl9zIiwiaWQiLCJ1c3VhcmlvIiwibmF2aWdhdGUiLCJkb25hY2lvbiIsInNldERvbmFjaW9uIiwicm9sIiwidGhlbiIsImNhdGNoIiwicGFkZGluZyIsInRleHRBbGlnbiIsInByaW1lck5vbWJyZSIsIm5vbWJyZSIsInNwbGl0IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImNvbG9yIiwibWFyZ2luVG9wIiwibGlzdFN0eWxlIiwiaXRlbXMiLCJtYXAiLCJpdCIsImkiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwiYm9yZGVyVG9wIiwiaWNvbm8iLCJmbGV4IiwiY2FudGlkYWQiLCJ1bmlkYWQiLCJmb250V2VpZ2h0IiwiZmxleFdyYXAiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJEb25hY2lvbkNvbmZpcm1hZGEuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vYXBpJ1xuaW1wb3J0IHsgdXN1YXJpb0FjdHVhbCB9IGZyb20gJy4uL2F1dGgnXG5pbXBvcnQgeyBjYW50IH0gZnJvbSAnLi4vZm9ybWF0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgSWNvbm8gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ubydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9uYWNpb25Db25maXJtYWRhKCkge1xuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKVxuICBjb25zdCB1c3VhcmlvID0gdXN1YXJpb0FjdHVhbCgpXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCBbZG9uYWNpb24sIHNldERvbmFjaW9uXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzdWFyaW8gfHwgdXN1YXJpby5yb2wgIT09ICdkb25hbnRlJykge1xuICAgICAgbmF2aWdhdGUoJy9sb2dpbicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZ2V0KCcvZG9uYWNpb25lcy8nICsgaWQpLnRoZW4oc2V0RG9uYWNpb24pLmNhdGNoKCgpID0+IG5hdmlnYXRlKCcvcGVyZmlsJykpXG4gIH0sIFtpZF0pXG5cbiAgaWYgKCFkb25hY2lvbikge1xuICAgIHJldHVybiAoPD48SGVhZGVyIC8+PG1haW4gY2xhc3NOYW1lPVwiY29udGVuZWRvclwiIHN0eWxlPXt7IHBhZGRpbmc6ICc4MHB4IDE2cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PjxzcGFuIGNsYXNzTmFtZT1cImNhcmdhbmRvXCI+PC9zcGFuPjwvbWFpbj48Rm9vdGVyIC8+PC8+KVxuICB9XG5cbiAgY29uc3QgcHJpbWVyTm9tYnJlID0gdXN1YXJpby5ub21icmUuc3BsaXQoJyAnKVswXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbmVkb3JcIiBzdHlsZT17eyBwYWRkaW5nOiAnNTZweCAxNnB4JyB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogNjIwLCBtYXJnaW46ICcwIGF1dG8nLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogMjQgfX0+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImNoZWNrLXN2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPjxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiNDZcIiAvPjxwYXRoIGQ9XCJNMzAgNTJsMTQgMTQgMjctMzBcIiAvPjwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWRpc3BsYXlcIiBzdHlsZT17eyBmb250U2l6ZTogMzQsIG1hcmdpbjogJzAgMCAxMnB4JyB9fT7CoUdyYWNpYXMsIHtwcmltZXJOb21icmV9ISBUZSBlc3BlcmFtb3MgZW4gZWwgZGVww7NzaXRvPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZWRpZGFcIiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIG1hcmdpbjogJzAgYXV0byAzMnB4JyB9fT5cbiAgICAgICAgICAgIFR1IGRvbmFjacOzbiBxdWVkw7MgcmVnaXN0cmFkYS4gRWwgY29vcmRpbmFkb3IgeWEgbGEgdmUgZW4gZWwgc2lzdGVtYS4gQ3VhbmRvIGxhIGxsZXZlcywgbGEgcmV2aXNhbW9zIHkgcGFzYSBhIGZvcm1hciBwYXJ0ZSBkZWwgc3RvY2sgcXVlIGxsZWdhIGEgbG9zIGNvbWVkb3Jlcy5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhcmpldGEgdGFyamV0YS1wYWRcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgbWFyZ2luQm90dG9tOiAyNCB9fT5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogMTgsIG1hcmdpblRvcDogMCB9fT5MbyBxdWUgdGUgY29tcHJvbWV0aXN0ZSBhIGxsZXZhcjwvaDI+XG4gICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScsIHBhZGRpbmc6IDAsIG1hcmdpbjogMCB9fT5cbiAgICAgICAgICAgICAge2RvbmFjaW9uLml0ZW1zLm1hcCgoaXQsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEyLCBwYWRkaW5nOiAnMTBweCAwJywgYm9yZGVyVG9wOiBpID09PSAwID8gJ25vbmUnIDogJzFweCBzb2xpZCB2YXIoLS1ib3JkZSknIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1uYXJhbmphLWhvdmVyKScgfX0+PEljb25vIG5vbWJyZT17aXQuaWNvbm99IHNpemU9ezIwfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZsZXg6IDEgfX0+e2l0Lm5vbWJyZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWJ1bGFyXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19PntjYW50KGl0LmNhbnRpZGFkKX0ge2l0LnVuaWRhZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtMlwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBtYXJnaW5Cb3R0b206IDMyIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXJqZXRhXCIgc3R5bGU9e3sgcGFkZGluZzogMTYgfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogNCB9fT5EaXJlY2Npw7NuPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBmb250U2l6ZTogMTQgfX0+QXYuIEluZGVwZW5kZW5jaWEgNDUwLCBMYWJvdWxheWU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXJqZXRhXCIgc3R5bGU9e3sgcGFkZGluZzogMTYgfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogNCB9fT5Ib3JhcmlvczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgZm9udFNpemU6IDE0IH19Pkx1bmVzIGEgdmllcm5lcyBkZSA5IGEgMTMgeSBkZSAxNiBhIDE5IGg8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZ2FwOiAxMiB9fT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL21pcy1kb25hY2lvbmVzXCIgY2xhc3NOYW1lPVwiYnRuLWRvbmFyXCI+U2VndWlyIG1pIGRvbmFjacOzbjwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3BlcmZpbFwiIGNsYXNzTmFtZT1cImJ0bi1mYW50YXNtYVwiPlZvbHZlciBhIG1pIGVzcGFjaW88L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG4iXSwiZmlsZSI6Ii9Vc2Vycy9iaWFuY28vRG9jdW1lbnRzL1NVUDIvc3VtYS11bi1wbGF0by1mcm9udGVuZC1tYWluICg1KS9mcm9udGVuZC9zcmMvcGFnZXMvRG9uYWNpb25Db25maXJtYWRhLmpzeCJ9