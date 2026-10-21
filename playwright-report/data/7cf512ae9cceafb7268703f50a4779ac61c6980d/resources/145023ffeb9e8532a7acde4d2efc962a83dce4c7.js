import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Header.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useState = __vite__cjsImport3_react["useState"];
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=9f826408";
import { usuarioActual, cerrarSesion, destinoPorRol } from "/src/auth.js";
export default function Header() {
  _s();
  const usuario = usuarioActual();
  const navigate = useNavigate();
  const [abierto, setAbierto] = useState(false);
  function salir() {
    cerrarSesion();
    navigate("/");
  }
  const destinoDonar = usuario ? "/donar" : "/registro";
  return /* @__PURE__ */ jsxDEV("header", { className: "header", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "contenedor header-inner", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "logo", children: /* @__PURE__ */ jsxDEV("img", { src: "/logo.jpg", alt: "Suma un plato Fundación" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
        lineNumber: 40,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { className: "nav", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/#como", children: "Cómo funciona" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/#necesidades", children: "Necesidades de hoy" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        usuario ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV(Link, { to: destinoPorRol(usuario.rol), children: "Mi espacio" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "btn-fantasma", style: { padding: "8px 16px", minHeight: "auto" }, onClick: salir, children: "Salir" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
          lineNumber: 47,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV(Link, { to: "/login", children: "Ingresar" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: destinoDonar, className: "btn-donar", style: { padding: "10px 20px" }, children: "Quiero donar" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "nav-mobile", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: destinoDonar, className: "btn-donar", style: { padding: "8px 16px" }, children: "Donar" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "icon-boton", "aria-label": "Abrir menú", onClick: () => setAbierto(!abierto), children: /* @__PURE__ */ jsxDEV("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", children: /* @__PURE__ */ jsxDEV("path", { d: "M4 7h16M4 12h16M4 17h16" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
          lineNumber: 60,
          columnNumber: 135
        }, this) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
          lineNumber: 60,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    abierto && /* @__PURE__ */ jsxDEV("div", { className: "contenedor", style: { paddingBottom: 12 }, children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/#como", onClick: () => setAbierto(false), children: "Cómo funciona" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/#necesidades", onClick: () => setAbierto(false), children: "Necesidades de hoy" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
        lineNumber: 69,
        columnNumber: 13
      }, this),
      usuario ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV(Link, { to: destinoPorRol(usuario.rol), onClick: () => setAbierto(false), children: "Mi espacio" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "btn-fantasma", onClick: salir, children: "Salir" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
          lineNumber: 73,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
        lineNumber: 71,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV(Link, { to: "/login", onClick: () => setAbierto(false), children: "Ingresar" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
_s(Header, "94uGvVPPUYJslr68BtxLdkn8TLY=", false, function() {
  return [useNavigate];
});
_c = Header;
var _c;
$RefreshReg$(_c, "Header");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/components/Header.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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aUU7QUFBQSxNQUNqRSx1QkFBQyxRQUFLLElBQUcsaUJBQWdCLFNBQVMsTUFBTUEsV0FBVyxLQUFLLEdBQUcsa0NBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBNkU7QUFBQSxNQUM1RUgsVUFDQyxtQ0FDRTtBQUFBLCtCQUFDLFFBQUssSUFBSUgsY0FBY0csUUFBUU0sR0FBRyxHQUFHLFNBQVMsTUFBTUgsV0FBVyxLQUFLLEdBQUcsMEJBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBa0Y7QUFBQSxRQUNsRix1QkFBQyxZQUFPLFdBQVUsZ0JBQWUsU0FBU0MsT0FBTyxxQkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFzRDtBQUFBLFdBRnhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFHQSxJQUVBLHVCQUFDLFFBQUssSUFBRyxVQUFTLFNBQVMsTUFBTUQsV0FBVyxLQUFLLEdBQUcsd0JBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBNEQ7QUFBQSxTQVRoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBV0EsS0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBYUE7QUFBQSxPQTFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBNENBO0FBRUo7QUFBQ0osR0EzRHVCRCxRQUFNO0FBQUEsVUFFWEosV0FBVztBQUFBO0FBQUEsS0FGTkk7QUFBTSxJQUFBZTtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsInVzdWFyaW9BY3R1YWwiLCJjZXJyYXJTZXNpb24iLCJkZXN0aW5vUG9yUm9sIiwiSGVhZGVyIiwiX3MiLCJ1c3VhcmlvIiwibmF2aWdhdGUiLCJhYmllcnRvIiwic2V0QWJpZXJ0byIsInNhbGlyIiwiZGVzdGlub0RvbmFyIiwicm9sIiwicGFkZGluZyIsIm1pbkhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkhlYWRlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzdWFyaW9BY3R1YWwsIGNlcnJhclNlc2lvbiwgZGVzdGlub1BvclJvbCB9IGZyb20gJy4uL2F1dGgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgdXN1YXJpbyA9IHVzdWFyaW9BY3R1YWwoKVxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgY29uc3QgW2FiaWVydG8sIHNldEFiaWVydG9dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgZnVuY3Rpb24gc2FsaXIoKSB7XG4gICAgY2VycmFyU2VzaW9uKClcbiAgICBuYXZpZ2F0ZSgnLycpXG4gIH1cblxuICBjb25zdCBkZXN0aW5vRG9uYXIgPSB1c3VhcmlvID8gJy9kb25hcicgOiAnL3JlZ2lzdHJvJ1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvciBoZWFkZXItaW5uZXJcIj5cbiAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28uanBnXCIgYWx0PVwiU3VtYSB1biBwbGF0byBGdW5kYWNpw7NuXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvI2NvbW9cIj5Dw7NtbyBmdW5jaW9uYTwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz1cIi8jbmVjZXNpZGFkZXNcIj5OZWNlc2lkYWRlcyBkZSBob3k8L0xpbms+XG4gICAgICAgICAge3VzdWFyaW8gPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TGluayB0bz17ZGVzdGlub1BvclJvbCh1c3VhcmlvLnJvbCl9Pk1pIGVzcGFjaW88L0xpbms+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWZhbnRhc21hXCIgc3R5bGU9e3sgcGFkZGluZzogJzhweCAxNnB4JywgbWluSGVpZ2h0OiAnYXV0bycgfX0gb25DbGljaz17c2FsaXJ9PlNhbGlyPC9idXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5JbmdyZXNhcjwvTGluaz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxMaW5rIHRvPXtkZXN0aW5vRG9uYXJ9IGNsYXNzTmFtZT1cImJ0bi1kb25hclwiIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4IDIwcHgnIH19PlF1aWVybyBkb25hcjwvTGluaz5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbW9iaWxlXCI+XG4gICAgICAgICAgPExpbmsgdG89e2Rlc3Rpbm9Eb25hcn0gY2xhc3NOYW1lPVwiYnRuLWRvbmFyXCIgc3R5bGU9e3sgcGFkZGluZzogJzhweCAxNnB4JyB9fT5Eb25hcjwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYm90b25cIiBhcmlhLWxhYmVsPVwiQWJyaXIgbWVuw7pcIiBvbkNsaWNrPXsoKSA9PiBzZXRBYmllcnRvKCFhYmllcnRvKX0+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMS44XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCI+PHBhdGggZD1cIk00IDdoMTZNNCAxMmgxNk00IDE3aDE2XCIgLz48L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2FiaWVydG8gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3JcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAxMiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogOCB9fT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiLyNjb21vXCIgb25DbGljaz17KCkgPT4gc2V0QWJpZXJ0byhmYWxzZSl9PkPDs21vIGZ1bmNpb25hPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvI25lY2VzaWRhZGVzXCIgb25DbGljaz17KCkgPT4gc2V0QWJpZXJ0byhmYWxzZSl9Pk5lY2VzaWRhZGVzIGRlIGhveTwvTGluaz5cbiAgICAgICAgICAgIHt1c3VhcmlvID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtkZXN0aW5vUG9yUm9sKHVzdWFyaW8ucm9sKX0gb25DbGljaz17KCkgPT4gc2V0QWJpZXJ0byhmYWxzZSl9Pk1pIGVzcGFjaW88L0xpbms+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZmFudGFzbWFcIiBvbkNsaWNrPXtzYWxpcn0+U2FsaXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIG9uQ2xpY2s9eygpID0+IHNldEFiaWVydG8oZmFsc2UpfT5JbmdyZXNhcjwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuIl0sImZpbGUiOiIvVXNlcnMvYmlhbmNvL0RvY3VtZW50cy9TVVAyL3N1bWEtdW4tcGxhdG8tZnJvbnRlbmQtbWFpbiAoNSkvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzeCJ9