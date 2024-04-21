"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/map.tsx":
/*!********************************!*\
  !*** ./src/components/map.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"(app-pages-browser)/./node_modules/react-spring/dist/react-spring.modern.mjs\");\n/* harmony import */ var _svg_parser_regions_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../svg-parser/regions.json */ \"(app-pages-browser)/./svg-parser/regions.json\");\n/* harmony import */ var _components_RegionData_RegionData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/RegionData/RegionData */ \"(app-pages-browser)/./src/components/RegionData/RegionData.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst typedRegions = _svg_parser_regions_json__WEBPACK_IMPORTED_MODULE_3__;\nconst getRandomColor = ()=>{\n    const colors = [\n        \"red\",\n        \"green\",\n        \"blue\",\n        \"yellow\"\n    ];\n    return colors[Math.floor(Math.random() * colors.length)];\n};\nconst Marker = (param)=>{\n    let { x, y, color } = param;\n    _s();\n    const style = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        from: {\n            opacity: 0\n        },\n        to: async (next, cancel)=>{\n            await next({\n                opacity: 1\n            });\n            await next({\n                opacity: 0\n            });\n        },\n        config: {\n            duration: 2000\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.circle, {\n        cx: x,\n        cy: y,\n        r: \"5\",\n        fill: color,\n        style: style\n    }, void 0, false, {\n        fileName: \"/Users/vyacheslavpshennik/Desktop/Web_development/hackaton/src/components/map.tsx\",\n        lineNumber: 40,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Marker, \"0RIVm/KF68BFaH02eyzhytvjKbY=\", false, function() {\n    return [\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c = Marker;\nconst SvgMap = ()=>{\n    _s1();\n    const [hoveredRegion, setHoveredRegion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [selectedRegion, setSelectedRegion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [tooltipContent, setTooltipContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tooltipPosition, setTooltipPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [viewBox, setViewBox] = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)(()=>({\n            viewBox: \"0 0 1500 900\"\n        }));\n    const [markers, setMarkers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const pathRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Map());\n    const [showRegionData, setShowRegionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const randomRegionIndex = Math.floor(Math.random() * _svg_parser_regions_json__WEBPACK_IMPORTED_MODULE_3__.length);\n            const region = _svg_parser_regions_json__WEBPACK_IMPORTED_MODULE_3__[randomRegionIndex];\n            const path = pathRefs.current.get(region.id);\n            if (path) {\n                const bbox = path.getBBox();\n                const x = bbox.x + Math.random() * bbox.width;\n                const y = bbox.y + Math.random() * bbox.height;\n                const newMarker = {\n                    x,\n                    y,\n                    color: getRandomColor()\n                };\n                setMarkers((currentMarkers)=>[\n                        ...currentMarkers,\n                        newMarker\n                    ]);\n                if (markers.length > 3) {\n                    markers.shift(); // Keep the number of markers manageable\n                }\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        markers\n    ]);\n    const handleRegionClick = (regionId)=>{\n        const regionData = _svg_parser_regions_json__WEBPACK_IMPORTED_MODULE_3__.find((region)=>region.id === regionId);\n        if (regionData) {\n            setSelectedRegion(regionData); // Store the selected region\n            setShowRegionData(true); // Show the RegionData component\n            const path = pathRefs.current.get(regionId);\n            if (path) {\n                const bbox = path.getBBox();\n                const centerX = bbox.x + bbox.width / 2;\n                const centerY = bbox.y + bbox.height / 2;\n                const newWidth = Math.max(bbox.width * 1.1, 300);\n                const newHeight = Math.max(bbox.height * 1.1, 300);\n                const newX = centerX - newWidth / 2;\n                const newY = centerY - newHeight / 2;\n                setViewBox.start({\n                    viewBox: \"\".concat(newX, \" \").concat(newY, \" \").concat(newWidth, \" \").concat(newHeight)\n                });\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container p-0 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.svg, {\n                width: \"1500\",\n                height: \"900\",\n                viewBox: viewBox.viewBox,\n                fill: \"none\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                    filter: \"url(#filter0_d_202_6687)\",\n                    children: _svg_parser_regions_json__WEBPACK_IMPORTED_MODULE_3__.map((region)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: region.pathD,\n                            fill: getFillColor(region.id, region.hasInfo),\n                            stroke: \"#D4DFF5\",\n                            strokeWidth: \"1\",\n                            onClick: ()=>handleRegionClick(region.id),\n                            ref: (el)=>pathRefs.current.set(region.id, el),\n                            onMouseEnter: (event)=>handleMouseEnter(event, region.id, region.fullName),\n                            onMouseLeave: handleMouseLeave,\n                            className: \"transition duration-150 ease-in-out cursor-pointer\"\n                        }, region.id, false, {\n                            fileName: \"/Users/vyacheslavpshennik/Desktop/Web_development/hackaton/src/components/map.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/vyacheslavpshennik/Desktop/Web_development/hackaton/src/components/map.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vyacheslavpshennik/Desktop/Web_development/hackaton/src/components/map.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            selectedRegion && showRegionData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RegionData_RegionData__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                region: selectedRegion,\n                onClose: ()=>setShowRegionData(false)\n            }, void 0, false, {\n                fileName: \"/Users/vyacheslavpshennik/Desktop/Web_development/hackaton/src/components/map.tsx\",\n                lineNumber: 133,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vyacheslavpshennik/Desktop/Web_development/hackaton/src/components/map.tsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(SvgMap, \"t17Fq4/mYSQFIGJu9ze4uCH5toI=\", false, function() {\n    return [\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c1 = SvgMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgMap);\nvar _c, _c1;\n$RefreshReg$(_c, \"Marker\");\n$RefreshReg$(_c1, \"SvgMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzJEO0FBQ1I7QUFDQztBQUVRO0FBaUI1RCxNQUFNUSxlQUF5QkYscURBQU9BO0FBRXRDLE1BQU1HLGlCQUFpQjtJQUNyQixNQUFNQyxTQUFTO1FBQUM7UUFBTztRQUFTO1FBQVE7S0FBUztJQUNqRCxPQUFPQSxNQUFNLENBQUNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLSCxPQUFPSSxNQUFNLEVBQUU7QUFDMUQ7QUFFQSxNQUFNQyxTQUFnQztRQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxLQUFLLEVBQUU7O0lBQ3BELE1BQU1DLFFBQVFmLHVEQUFTQSxDQUFDO1FBQ3RCZ0IsTUFBTTtZQUFFQyxTQUFTO1FBQUU7UUFDbkJDLElBQUksT0FBT0MsTUFBTUM7WUFDZixNQUFNRCxLQUFLO2dCQUFFRixTQUFTO1lBQUU7WUFDeEIsTUFBTUUsS0FBSztnQkFBRUYsU0FBUztZQUFFO1FBQzFCO1FBQ0FJLFFBQVE7WUFBRUMsVUFBVTtRQUFLO0lBQzNCO0lBRUEscUJBQU8sOERBQUNyQixrREFBUUEsQ0FBQ3NCLE1BQU07UUFBQ0MsSUFBSVo7UUFBR2EsSUFBSVo7UUFBR2EsR0FBRTtRQUFJQyxNQUFNYjtRQUFPQyxPQUFPQTs7Ozs7O0FBQ2xFO0dBWE1KOztRQUNVWCxtREFBU0E7OztLQURuQlc7QUFhTixNQUFNaUIsU0FBbUI7O0lBQ3ZCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUcvQiwrQ0FBUUEsQ0FBZ0I7SUFDbEUsTUFBTSxDQUFDZ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR2pDLCtDQUFRQSxDQUFnQjtJQUNwRSxNQUFNLENBQUNrQyxnQkFBZ0JDLGtCQUFrQixHQUFHbkMsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDb0MsaUJBQWlCQyxtQkFBbUIsR0FBR3JDLCtDQUFRQSxDQUFDO1FBQUVhLEdBQUc7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T0ksRUFBRSxFQUFFSixPQUFPbUMsT0FBTzs0QkFDNUNDLFFBQU87NEJBQ1BDLGFBQVk7NEJBQ1pDLFNBQVMsSUFBTXpCLGtCQUFrQmIsT0FBT0ksRUFBRTs0QkFDMUNtQyxLQUFLLENBQUNDLEtBQU8vQyxTQUFTUyxPQUFPLENBQUN1QyxHQUFHLENBQUN6QyxPQUFPSSxFQUFFLEVBQUVvQzs0QkFDN0NFLGNBQWMsQ0FBQ0MsUUFDYkMsaUJBQWlCRCxPQUFPM0MsT0FBT0ksRUFBRSxFQUFFSixPQUFPNkMsUUFBUTs0QkFFcERDLGNBQWNDOzRCQUNkckIsV0FBVTsyQkFYTDFCLE9BQU9JLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztZQWdCckJyQixrQkFBa0JZLGdDQUNqQiw4REFBQ3hDLHlFQUFVQTtnQkFDVDZDLFFBQVFqQjtnQkFDUmlFLFNBQVMsSUFBTXBELGtCQUFrQjs7Ozs7Ozs7Ozs7O0FBSzNDO0lBakdNaEI7O1FBSzBCNUIsbURBQVNBOzs7TUFMbkM0QjtBQW1HTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tYXAudHN4P2FkYjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHJlZ2lvbnMgZnJvbSBcIi4uLy4uL3N2Zy1wYXJzZXIvcmVnaW9ucy5qc29uXCI7XG5pbXBvcnQgeyBCQm94IH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcbmltcG9ydCBSZWdpb25EYXRhIGZyb20gXCJAL2NvbXBvbmVudHMvUmVnaW9uRGF0YS9SZWdpb25EYXRhXCI7XG5cbnR5cGUgUmVnaW9uID0ge1xuICBpZDogc3RyaW5nO1xuICBwYXRoRDogc3RyaW5nO1xuICBoYXNJbmZvOiBib29sZWFuO1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICBpbWc/OiBzdHJpbmc7XG4gIGJib3g/OiBCQm94O1xufTtcblxudHlwZSBNYXJrZXJQcm9wcyA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG59O1xuXG5jb25zdCB0eXBlZFJlZ2lvbnM6IFJlZ2lvbltdID0gcmVnaW9ucyBhcyBSZWdpb25bXTtcblxuY29uc3QgZ2V0UmFuZG9tQ29sb3IgPSAoKTogc3RyaW5nID0+IHtcbiAgY29uc3QgY29sb3JzID0gW1wicmVkXCIsIFwiZ3JlZW5cIiwgXCJibHVlXCIsIFwieWVsbG93XCJdO1xuICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbn07XG5cbmNvbnN0IE1hcmtlcjogUmVhY3QuRkM8TWFya2VyUHJvcHM+ID0gKHsgeCwgeSwgY29sb3IgfSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHVzZVNwcmluZyh7XG4gICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgdG86IGFzeW5jIChuZXh0LCBjYW5jZWwpID0+IHtcbiAgICAgIGF3YWl0IG5leHQoeyBvcGFjaXR5OiAxIH0pO1xuICAgICAgYXdhaXQgbmV4dCh7IG9wYWNpdHk6IDAgfSk7XG4gICAgfSxcbiAgICBjb25maWc6IHsgZHVyYXRpb246IDIwMDAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIDxhbmltYXRlZC5jaXJjbGUgY3g9e3h9IGN5PXt5fSByPVwiNVwiIGZpbGw9e2NvbG9yfSBzdHlsZT17c3R5bGV9IC8+O1xufTtcblxuY29uc3QgU3ZnTWFwOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2hvdmVyZWRSZWdpb24sIHNldEhvdmVyZWRSZWdpb25dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzZWxlY3RlZFJlZ2lvbiwgc2V0U2VsZWN0ZWRSZWdpb25dID0gdXNlU3RhdGU8UmVnaW9uIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt0b29sdGlwQ29udGVudCwgc2V0VG9vbHRpcENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0b29sdGlwUG9zaXRpb24sIHNldFRvb2x0aXBQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG4gIGNvbnN0IFt2aWV3Qm94LCBzZXRWaWV3Qm94XSA9IHVzZVNwcmluZygoKSA9PiAoeyB2aWV3Qm94OiBcIjAgMCAxNTAwIDkwMFwiIH0pKTtcbiAgY29uc3QgW21hcmtlcnMsIHNldE1hcmtlcnNdID0gdXNlU3RhdGU8TWFya2VyUHJvcHNbXT4oW10pO1xuICBjb25zdCBwYXRoUmVmcyA9IHVzZVJlZjxNYXA8c3RyaW5nLCBTVkdQYXRoRWxlbWVudCB8IG51bGw+PihuZXcgTWFwKCkpO1xuICBjb25zdCBbc2hvd1JlZ2lvbkRhdGEsIHNldFNob3dSZWdpb25EYXRhXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgcmFuZG9tUmVnaW9uSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZWdpb25zLmxlbmd0aCk7XG4gICAgICBjb25zdCByZWdpb24gPSByZWdpb25zW3JhbmRvbVJlZ2lvbkluZGV4XTtcbiAgICAgIGNvbnN0IHBhdGggPSBwYXRoUmVmcy5jdXJyZW50LmdldChyZWdpb24uaWQpO1xuICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgY29uc3QgYmJveCA9IHBhdGguZ2V0QkJveCgpO1xuICAgICAgICBjb25zdCB4ID0gYmJveC54ICsgTWF0aC5yYW5kb20oKSAqIGJib3gud2lkdGg7XG4gICAgICAgIGNvbnN0IHkgPSBiYm94LnkgKyBNYXRoLnJhbmRvbSgpICogYmJveC5oZWlnaHQ7XG5cbiAgICAgICAgY29uc3QgbmV3TWFya2VyID0ge1xuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBjb2xvcjogZ2V0UmFuZG9tQ29sb3IoKSxcbiAgICAgICAgfTtcblxuICAgICAgICBzZXRNYXJrZXJzKChjdXJyZW50TWFya2VycykgPT4gWy4uLmN1cnJlbnRNYXJrZXJzLCBuZXdNYXJrZXJdKTtcblxuICAgICAgICBpZiAobWFya2Vycy5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgbWFya2Vycy5zaGlmdCgpOyAvLyBLZWVwIHRoZSBudW1iZXIgb2YgbWFya2VycyBtYW5hZ2VhYmxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW21hcmtlcnNdKTtcblxuICBjb25zdCBoYW5kbGVSZWdpb25DbGljayA9IChyZWdpb25JZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVnaW9uRGF0YSA9IHJlZ2lvbnMuZmluZCgocmVnaW9uKSA9PiByZWdpb24uaWQgPT09IHJlZ2lvbklkKTtcbiAgICBpZiAocmVnaW9uRGF0YSkge1xuICAgICAgc2V0U2VsZWN0ZWRSZWdpb24ocmVnaW9uRGF0YSk7IC8vIFN0b3JlIHRoZSBzZWxlY3RlZCByZWdpb25cbiAgICAgIHNldFNob3dSZWdpb25EYXRhKHRydWUpOyAvLyBTaG93IHRoZSBSZWdpb25EYXRhIGNvbXBvbmVudFxuXG4gICAgICBjb25zdCBwYXRoID0gcGF0aFJlZnMuY3VycmVudC5nZXQocmVnaW9uSWQpO1xuICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgY29uc3QgYmJveCA9IHBhdGguZ2V0QkJveCgpO1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gYmJveC54ICsgYmJveC53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBiYm94LnkgKyBiYm94LmhlaWdodCAvIDI7XG4gICAgICAgIGNvbnN0IG5ld1dpZHRoID0gTWF0aC5tYXgoYmJveC53aWR0aCAqIDEuMSwgMzAwKTtcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gTWF0aC5tYXgoYmJveC5oZWlnaHQgKiAxLjEsIDMwMCk7XG5cbiAgICAgICAgY29uc3QgbmV3WCA9IGNlbnRlclggLSBuZXdXaWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IG5ld1kgPSBjZW50ZXJZIC0gbmV3SGVpZ2h0IC8gMjtcblxuICAgICAgICBzZXRWaWV3Qm94LnN0YXJ0KHtcbiAgICAgICAgICB2aWV3Qm94OiBgJHtuZXdYfSAke25ld1l9ICR7bmV3V2lkdGh9ICR7bmV3SGVpZ2h0fWAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtMCBcIj5cbiAgICAgIDxhbmltYXRlZC5zdmdcbiAgICAgICAgd2lkdGg9XCIxNTAwXCJcbiAgICAgICAgaGVpZ2h0PVwiOTAwXCJcbiAgICAgICAgdmlld0JveD17dmlld0JveC52aWV3Qm94fVxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgPlxuICAgICAgICA8ZyBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjBfZF8yMDJfNjY4NylcIj5cbiAgICAgICAgICB7cmVnaW9ucy5tYXAoKHJlZ2lvbikgPT4gKFxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAga2V5PXtyZWdpb24uaWR9XG4gICAgICAgICAgICAgIGQ9e3JlZ2lvbi5wYXRoRH1cbiAgICAgICAgICAgICAgZmlsbD17Z2V0RmlsbENvbG9yKHJlZ2lvbi5pZCwgcmVnaW9uLmhhc0luZm8pfVxuICAgICAgICAgICAgICBzdHJva2U9XCIjRDRERkY1XCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVnaW9uQ2xpY2socmVnaW9uLmlkKX1cbiAgICAgICAgICAgICAgcmVmPXsoZWwpID0+IHBhdGhSZWZzLmN1cnJlbnQuc2V0KHJlZ2lvbi5pZCwgZWwpfVxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZUVudGVyKGV2ZW50LCByZWdpb24uaWQsIHJlZ2lvbi5mdWxsTmFtZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZz5cbiAgICAgIDwvYW5pbWF0ZWQuc3ZnPlxuICAgICAge3NlbGVjdGVkUmVnaW9uICYmIHNob3dSZWdpb25EYXRhICYmIChcbiAgICAgICAgPFJlZ2lvbkRhdGFcbiAgICAgICAgICByZWdpb249e3NlbGVjdGVkUmVnaW9ufVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dSZWdpb25EYXRhKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdmdNYXA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVNwcmluZyIsImFuaW1hdGVkIiwicmVnaW9ucyIsIlJlZ2lvbkRhdGEiLCJ0eXBlZFJlZ2lvbnMiLCJnZXRSYW5kb21Db2xvciIsImNvbG9ycyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIk1hcmtlciIsIngiLCJ5IiwiY29sb3IiLCJzdHlsZSIsImZyb20iLCJvcGFjaXR5IiwidG8iLCJuZXh0IiwiY2FuY2VsIiwiY29uZmlnIiwiZHVyYXRpb24iLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsImZpbGwiLCJTdmdNYXAiLCJob3ZlcmVkUmVnaW9uIiwic2V0SG92ZXJlZFJlZ2lvbiIsInNlbGVjdGVkUmVnaW9uIiwic2V0U2VsZWN0ZWRSZWdpb24iLCJ0b29sdGlwQ29udGVudCIsInNldFRvb2x0aXBDb250ZW50IiwidG9vbHRpcFBvc2l0aW9uIiwic2V0VG9vbHRpcFBvc2l0aW9uIiwidmlld0JveCIsInNldFZpZXdCb3giLCJtYXJrZXJzIiwic2V0TWFya2VycyIsInBhdGhSZWZzIiwiTWFwIiwic2hvd1JlZ2lvbkRhdGEiLCJzZXRTaG93UmVnaW9uRGF0YSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJyYW5kb21SZWdpb25JbmRleCIsInJlZ2lvbiIsInBhdGgiLCJjdXJyZW50IiwiZ2V0IiwiaWQiLCJiYm94IiwiZ2V0QkJveCIsIndpZHRoIiwiaGVpZ2h0IiwibmV3TWFya2VyIiwiY3VycmVudE1hcmtlcnMiLCJzaGlmdCIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVSZWdpb25DbGljayIsInJlZ2lvbklkIiwicmVnaW9uRGF0YSIsImZpbmQiLCJjZW50ZXJYIiwiY2VudGVyWSIsIm5ld1dpZHRoIiwibWF4IiwibmV3SGVpZ2h0IiwibmV3WCIsIm5ld1kiLCJzdGFydCIsImRpdiIsImNsYXNzTmFtZSIsInN2ZyIsInhtbG5zIiwiZyIsImZpbHRlciIsIm1hcCIsImQiLCJwYXRoRCIsImdldEZpbGxDb2xvciIsImhhc0luZm8iLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsIm9uQ2xpY2siLCJyZWYiLCJlbCIsInNldCIsIm9uTW91c2VFbnRlciIsImV2ZW50IiwiaGFuZGxlTW91c2VFbnRlciIsImZ1bGxOYW1lIiwib25Nb3VzZUxlYXZlIiwiaGFuZGxlTW91c2VMZWF2ZSIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/map.tsx\n"));

/***/ })

});